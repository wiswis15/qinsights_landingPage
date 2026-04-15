const articleModules = import.meta.glob('./*.mdx', { eager: true })

function normalizeArticle(module) {
  const metadata = module.metadata || {}

  return {
    ...metadata,
    Content: module.default,
  }
}

export const blogArticles = Object.values(articleModules)
  .map(normalizeArticle)
  .sort((left, right) => new Date(right.publishedAt) - new Date(left.publishedAt))

export const blogArticleSlugs = new Set(blogArticles.map((article) => article.slug))

export function getBlogArticleBySlug(slug) {
  return blogArticles.find((article) => article.slug === slug) || null
}

export function formatBlogDate(value) {
  return new Date(value).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
