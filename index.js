function calculateEngagementRate(followers, posts) {
  if (!followers || !posts || posts.length === 0) return 0;
  const total = posts.reduce((sum, p) => sum + (p.likes || 0) + (p.comments || 0), 0);
  return Number(((total / posts.length / followers) * 100).toFixed(2));
}

module.exports = { calculateEngagementRate };
