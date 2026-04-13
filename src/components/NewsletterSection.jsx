export function NewsletterSection({ content }) {
  return (
    <section className="newsletter-section" aria-labelledby="newsletter-section-heading">
      <div className="newsletter-section__layout">
        <div className="newsletter-section__media">
          <img
            className="newsletter-section__image"
            src={content.image.src}
            alt={content.image.alt}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="newsletter-section__content">
          <h2 id="newsletter-section-heading" className="newsletter-section__heading">
            {content.heading}
          </h2>

          <a className="button button--primary newsletter-section__cta" href={content.cta.href}>
            <span>{content.cta.label}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
