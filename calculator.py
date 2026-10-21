def calculate_engagement_rate(followers: int, posts: list) -> float:
    if not followers or not posts:
        return 0.0
    total = sum(p.get("likes", 0) + p.get("comments", 0) for p in posts)
    return round((total / len(posts) / followers) * 100, 2)
