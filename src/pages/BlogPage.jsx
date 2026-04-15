import { Link } from 'react-router-dom'
import { blogArticles, formatBlogDate } from '../content/blog'

export function BlogPage() {
  return (
    <section className="blog-index" aria-labelledby="blog-index-title">
      <div className="blog-index__inner">
        <header className="blog-index__header blog-reveal blog-reveal--visible">
          <h1 id="blog-index-title" className="blog-index__title">
            Articles
          </h1>
        </header>

        <div className="blog-index__list">
          {blogArticles.map((article, index) => (
            <Link
              key={article.slug}
              className="blog-preview-card blog-reveal blog-reveal--visible"
              to={`/${article.slug}`}
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="blog-preview-card__media">
                <img className="blog-preview-card__image" src={article.coverImage} alt={article.coverAlt} />
              </div>

              <div className="blog-preview-card__content">
                <h2 className="blog-preview-card__title">{article.title}</h2>
                <p className="blog-preview-card__date">{formatBlogDate(article.publishedAt)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
