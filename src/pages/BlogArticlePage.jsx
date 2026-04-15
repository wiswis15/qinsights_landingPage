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

  return (
    <article className="blog-article-page">
      <div className="blog-article-page__inner">
        <header className="blog-article-page__header blog-reveal blog-reveal--visible">
          <div className="blog-article-page__intro">
            <Link className="blog-article-page__back-link" to="/blog" aria-label="Back to blog list">
              <span className="blog-article-page__back-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path
                    d="M15.75 5.25 9 12l6.75 6.75"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  />
                </svg>
              </span>
              <span className="blog-article-page__back-text">Blog</span>
            </Link>
            <h1 className="blog-article-page__title">{article.title}</h1>
            <p className="blog-article-page__date">{formatBlogDate(article.publishedAt)}</p>
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
