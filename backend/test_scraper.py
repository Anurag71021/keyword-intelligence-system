from app.services.scraper import extract_keywords

keywords = extract_keywords(
    "https://www.nike.com"
)

print(keywords)