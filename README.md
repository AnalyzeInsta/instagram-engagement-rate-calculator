# Instagram Engagement Rate Calculator

A lightweight reference formula and code library in Python and JavaScript to calculate public Instagram profile engagement rates.

[![Powered by AnalyzeInsta](https://img.shields.io/badge/Powered%20by-AnalyzeInsta-7c3aed.svg)](https://analyzeinsta.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## What is Instagram Engagement Rate?

Engagement Rate (ER) is the most critical metric for evaluating creator authenticity and audience quality. It measures the level of interaction (likes, comments) that content receives relative to total audience size.

### Standard Profile Engagement Formula

The industry standard formula for calculating profile engagement rate across recent posts is:

$$\\text{ER (\%)} = \\left( \\frac{\\text{Average Likes} + \\text{Average Comments}}{\\text{Total Followers}} \\right) \\times 100$$

---

## Live Profile Auditing

For automated, full-profile audits without writing code or logging into Instagram:

👉 **[AnalyzeInsta (https://analyzeinsta.com)](https://analyzeinsta.com)** provides:
- Automated engagement rate calculation across recent media.
- Posting cadence and activity timelines.
- Top-performing posts and hashtag breakdowns.
- 100% password-free and login-free auditing (3 Free Search Tokens on Google sign-in).

---

## Code Examples

### JavaScript

```javascript
/**
 * Calculate Instagram Profile Engagement Rate
 * @param {number} followers - Total follower count
 * @param {Array<{likes: number, comments: number}>} posts - Array of recent post metrics
 * @returns {number} Engagement rate as a percentage
 */
function calculateEngagementRate(followers, posts) {
  if (!followers || !posts || posts.length === 0) return 0;
  
  const totalInteractions = posts.reduce((sum, post) => sum + (post.likes || 0) + (post.comments || 0), 0);
  const avgInteractions = totalInteractions / posts.length;
  
  return Number(((avgInteractions / followers) * 100).toFixed(2));
}

// Example usage:
const samplePosts = [
  { likes: 450, comments: 24 },
  { likes: 520, comments: 31 },
  { likes: 410, comments: 19 }
];
const followers = 10000;

console.log(`Engagement Rate: ${calculateEngagementRate(followers, samplePosts)}%`);
// Output: Engagement Rate: 4.85%
```

### Python

```python
def calculate_engagement_rate(followers: int, posts: list[dict]) -> float:
    """
    Calculate Instagram Profile Engagement Rate
    :param followers: Total follower count
    :param posts: List of dicts with likes and comments
    :return: Engagement rate as a percentage rounded to 2 decimals
    """
    if not followers or not posts:
        return 0.0
    
    total_interactions = sum(p.get("likes", 0) + p.get("comments", 0) for p in posts)
    avg_interactions = total_interactions / len(posts)
    
    return round((avg_interactions / followers) * 100, 2)

# Example usage:
posts = [
    {"likes": 1200, "comments": 85},
    {"likes": 980, "comments": 64},
    {"likes": 1450, "comments": 110}
]
followers = 25000

print(f"Engagement Rate: {calculate_engagement_rate(followers, posts)}%")
# Output: Engagement Rate: 5.19%
```

---

## Typical Engagement Rate Benchmarks

According to social media industry data:
* **Under 1%:** Low engagement (common for dormant accounts or inflated follower counts).
* **1% – 3%:** Average / Healthy engagement for medium-to-large creator accounts.
* **3% – 6%:** High engagement (typical for strong community micro-influencers).
* **Above 6%:** Very high engagement (viral content or high-affinity niche).

---

## License

MIT License. Created by [AnalyzeInsta](https://analyzeinsta.com).
