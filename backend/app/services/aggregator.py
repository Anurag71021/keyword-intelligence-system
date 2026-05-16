def merge_keywords(*lists):

    merged = set()

    for keyword_list in lists:

        for keyword in keyword_list:

            cleaned = keyword.lower().strip()

            if len(cleaned) > 2:
                merged.add(cleaned)

    return list(merged)