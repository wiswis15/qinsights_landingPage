import { Link } from 'react-router-dom'

export function DocsPrevNext({ prev, next }) {
  if (!prev && !next) return null

  return (
    <nav className="docs-prev-next" aria-label="Documentation pages">
      {prev ? (
        <Link className="docs-prev-next__link docs-prev-next__link--prev" to={`/docs/${prev.slug}`}>
          <span className="docs-prev-next__direction">Previous</span>
          <span className="docs-prev-next__title">{prev.navTitle || prev.title}</span>
        </Link>
      ) : (
        <span />
      )}

      {next ? (
        <Link className="docs-prev-next__link docs-prev-next__link--next" to={`/docs/${next.slug}`}>
          <span className="docs-prev-next__direction">Next</span>
          <span className="docs-prev-next__title">{next.navTitle || next.title}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  )
}
