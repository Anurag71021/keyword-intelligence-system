import requests
from bs4 import BeautifulSoup


def extract_keywords(url):

    try:

        response = requests.get(url, timeout=10)

        soup = BeautifulSoup(
            response.text,
            "html.parser"
        )

        keywords = []

        tags = soup.find_all([
            "title",
            "h1",
            "h2",
            "h3"
        ])

        for tag in tags:

            text = tag.get_text(strip=True)

            if text:
                keywords.append(text)

        return list(set(keywords))

    except Exception as e:

        print("Scraper Error:", e)

        return []