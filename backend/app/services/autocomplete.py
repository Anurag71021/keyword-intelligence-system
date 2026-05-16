import requests
import string


def google_autocomplete(keyword):

    suggestions = []

    for letter in string.ascii_lowercase:

        query = f"{keyword} {letter}"

        url = (
            "https://suggestqueries.google.com/"
            "complete/search"
        )

        params = {
            "client": "firefox",
            "q": query
        }

        try:

            response = requests.get(
                url,
                params=params
            )

            data = response.json()[1]

            suggestions.extend(data)

        except:
            pass

    return list(set(suggestions))