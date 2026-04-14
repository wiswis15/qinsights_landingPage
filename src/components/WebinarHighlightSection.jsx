export function WebinarHighlightSection({ content }) {
  return (
    <section className="webinar-highlight" aria-labelledby="webinar-highlight-title">
      <div className="webinar-highlight__copy">
        <div className="webinar-highlight__heading">
          <p className="webinar-highlight__eyebrow">{content.eyebrow}</p>
          <h2 id="webinar-highlight-title" className="webinar-highlight__title">
            {content.title}
          </h2>
        </div>

        <p className="webinar-highlight__body">{content.body}</p>

        <div className="webinar-highlight__actions">
          <a
            className="button button--primary button--large"
            href={content.cta.href}
            target="_blank"
            rel="noreferrer"
          >
            {content.cta.label}
            <span className="button__arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>

      <div className="webinar-highlight__media">
        <div className="webinar-highlight__image-wrap">
          <img
            className="webinar-highlight__image"
            src={content.image.src}
            alt={content.image.alt}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
