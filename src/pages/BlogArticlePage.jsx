import { useParams, Navigate, Link } from 'react-router-dom'
import { mdxComponents } from '../components/blog/mdxComponents'
import { Figure } from '../components/blog/Figure'
import { getBlogArticleBySlug, formatBlogDate } from '../content/blog'

export function BlogArticlePage() {
  const { slug = '' } = useParams()
  const article = getBlogArticleBySlug(slug)

  if (!article) {
    return <Navigate to="/blog" replace />
  }

  const Content = article.Content
  const author = article.author || 'Dr Susanne Friese'
  const publishedLabel = formatBlogDate(article.publishedAt)
  const updatedAt = article.updatedAt || article.modifiedAt
  const updatedLabel = updatedAt ? formatBlogDate(updatedAt) : null

  return (
    <article className="blog-article-page">
      <div className="blog-article-page__inner">
        <header className="blog-article-page__header blog-reveal blog-reveal--visible">
          <div className="blog-article-page__intro">
            <nav className="blog-article-page__breadcrumbs" aria-label="Breadcrumb">
              <ol>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li aria-current="page">{article.title}</li>
              </ol>
            </nav>

            <h1 className="blog-article-page__title">{article.title}</h1>

            <div className="blog-article-page__meta" aria-label="Article information">
              <span>By {author}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={article.publishedAt}>Published {publishedLabel}</time>
              {updatedLabel ? (
                <>
                  <span aria-hidden="true">·</span>
                  <time dateTime={updatedAt}>Updated {updatedLabel}</time>
                </>
              ) : null}
            </div>
          </div>

          <Figure
            className="blog-article-page__hero"
            imageClassName="blog-article-page__hero-image"
            src={article.coverImage}
            alt={article.coverAlt}
          />
        </header>

        <div className="blog-article-page__body blog-reveal blog-reveal--visible" style={{ animationDelay: '100ms' }}>
          <Content components={mdxComponents} />
        </div>
      </div>
    </article>
  )
}
