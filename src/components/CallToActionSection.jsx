export function CallToActionSection({ content }) {
  return (
    <section className="cta-section" aria-labelledby="cta-section-heading">
      <div className="cta-section__intro">
        <h2 id="cta-section-heading" className="cta-section__heading">
          {content.heading}
        </h2>
        <p className="cta-section__body">{content.body}</p>
      </div>

      <div className="cta-section__actions">
        {content.actions.map((action) => (
          <a
            key={action.label}
            className={`button button--large ${action.variant === 'secondary' ? 'button--ghost' : 'button--primary'}`}
            href={action.href}
            target="_blank"
            rel="noreferrer"
          >
            <span>{action.label}</span>
            <span className="button__arrow" aria-hidden="true">{'\u2192'}</span>
          </a>
        ))}
      </div>

      <p className="cta-section__footnote">{content.footnote}</p>
    </section>
  )
}
