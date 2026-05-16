from app.services.aggregator import merge_keywords

a = ["Nike Shoes", "Running Shoes"]
b = ["nike shoes", "Best Sneakers"]

results = merge_keywords(a, b)

print(results)