import { useParams, Navigate } from 'react-router-dom'
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
