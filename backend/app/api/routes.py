from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.models import Keyword
from app.utils.db import get_db
from app.services.scraper import extract_keywords
from app.services.autocomplete import google_autocomplete
from app.services.aggregator import merge_keywords
from app.services.dataforseo import get_keyword_metrics

router = APIRouter()

COMPETITION_MAP = {
    "LOW":    0.0,
    "MEDIUM": 0.5,
    "HIGH":   1.0,
}


def parse_competition(value):
    if value is None:
        return None
    if isinstance(value, str):
        return COMPETITION_MAP.get(value.upper())
    return float(value)


@router.post("/keywords")
def generate_keywords(data: dict, db: Session = Depends(get_db)):
    keyword = data.get("keyword")
    url = data.get("url")

    scraper_keywords = []
    autocomplete_keywords = []

    if url:
        scraper_keywords = extract_keywords(url)

    if keyword:
        autocomplete_keywords = google_autocomplete(keyword)

    final_keywords = merge_keywords(scraper_keywords, autocomplete_keywords)

    # DataForSEO search_volume supports up to 700 keywords per request.
    # Batch into chunks of 700 in case final_keywords exceeds that.
    BATCH_SIZE = 700
    metrics_map = {}

    for i in range(0, len(final_keywords), BATCH_SIZE):
        batch = final_keywords[i : i + BATCH_SIZE]
        try:
            metrics_response = get_keyword_metrics(batch)
            results = metrics_response["tasks"][0]["result"]

            for item in results:
                keyword_text = item.get("keyword")
                if not keyword_text:
                    continue
                metrics_map[keyword_text] = {
                    "volume":      item.get("search_volume"),
                    "cpc":         item.get("cpc"),
                    "competition": parse_competition(item.get("competition")),
                    "difficulty":  item.get("keyword_difficulty"),
                }

        except Exception as e:
            print(f"Metrics Parse Error (batch {i}–{i + BATCH_SIZE}):", e)
@router.get("/keywords")
def get_keywords(
    db: Session = Depends(get_db)
):

    keywords = db.query(Keyword).all()

    results = []

    for item in keywords:

        results.append({

            "keyword": item.keyword,

            "volume": item.volume,

            "difficulty": item.difficulty,

            "cpc": item.cpc,

            "competition": item.competition,

            "source": item.source
        })

    return results

    # Save all keywords with whatever metrics are available
    saved_keywords = []

    for kw in final_keywords:
        existing = db.query(Keyword).filter(Keyword.keyword == kw).first()
        m = metrics_map.get(kw, {})

        if existing:
            if m and existing.volume is None:
                existing.volume      = m.get("volume")
                existing.cpc         = m.get("cpc")
                existing.competition = m.get("competition")
                existing.difficulty  = m.get("difficulty")
            continue

        source = "dataforseo" if m.get("volume") is not None else "autocomplete"

        new_keyword = Keyword(
            keyword     = kw,
            volume      = m.get("volume"),
            cpc         = m.get("cpc"),
            competition = m.get("competition"),
            difficulty  = m.get("difficulty"),
            source      = source,
        )
        db.add(new_keyword)
        saved_keywords.append(kw)

    db.commit()

    return {
        "total_keywords": len(final_keywords),
        "saved_keywords": len(saved_keywords),
        "metrics_found":  len(metrics_map),
        "keywords":       final_keywords,
    }