from app.services.dataforseo import (
    get_keyword_metrics
)

results = get_keyword_metrics([
    "nike shoes"
])

print(results)