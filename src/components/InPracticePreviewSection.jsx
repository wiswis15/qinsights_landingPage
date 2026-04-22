import { Link } from 'react-router-dom'

export function InPracticePreviewSection({ content }) {
  return (
    <section className="in-practice-preview" aria-labelledby="in-practice-preview-heading">
      <div className="in-practice-preview__copy">
        <p className="in-practice-preview__eyebrow">{content.eyebrow}</p>
        <h2 className="in-practice-preview__title" id="in-practice-preview-heading">
          {content.title}
        </h2>
        <p className="in-practice-preview__body">{content.body}</p>
      </div>

      <div className="in-practice-preview__items" aria-label="Use cases preview">
        {content.items.map((item) => (
          <article
            key={item.sector}
            className="in-practice-preview__item"
            style={{
              '--preview-accent': item.accent,
              '--preview-surface': item.surface,
            }}
          >
            <p className="in-practice-preview__tag">{item.sector}</p>
            <h3 className="in-practice-preview__item-title">{item.title}</h3>
            <p className="in-practice-preview__item-body">{item.body}</p>
          </article>
        ))}
      </div>

      <div className="in-practice-preview__action">
        <Link className="button button--ghost" to={content.action.href}>
          <span>{content.action.label}</span>
          <span className="button__arrow" aria-hidden="true">{'\u2192'}</span>
        </Link>
      </div>
    </section>
  )
}
