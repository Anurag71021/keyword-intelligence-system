import os
import requests
from dotenv import load_dotenv
from requests.auth import HTTPBasicAuth

load_dotenv()

LOGIN = os.getenv("DATAFORSEO_LOGIN")
PASSWORD = os.getenv("DATAFORSEO_PASSWORD")


def get_keyword_metrics(keywords):
    url = (
        "https://api.dataforseo.com/v3/"
        "keywords_data/google_ads/"
        "search_volume/live"
    )

    payload = [{
        "keywords": keywords,
        "location_name": "United States",
        "language_name": "English"
    }]

    response = requests.post(
        url,
        json=payload,
        auth=HTTPBasicAuth(LOGIN, PASSWORD)
    )

    return response.json()