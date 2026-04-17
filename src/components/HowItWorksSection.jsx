export function HowItWorksSection({ content }) {
  return (
    <section className="how-it-works" aria-labelledby="how-it-works-title">
      <div className="how-it-works__backdrop" aria-hidden="true">
        <img
          className="how-it-works__backdrop-image"
          src={content.intro.backdrop.src}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="how-it-works__intro">
        <div className="how-it-works__mark" aria-hidden="true">
          <div className="how-it-works__mark-spin">
            <img
              className="how-it-works__mark-outer"
              src={content.intro.qMarkOuter.src}
              alt=""
              loading="lazy"
              decoding="async"
            />
            <img
              className="how-it-works__mark-inner"
              src={content.intro.qMarkInner.src}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="how-it-works__heading">
          <p className="how-it-works__eyebrow">{content.intro.eyebrow}</p>
          <h2 id="how-it-works-title" className="how-it-works__title">
            <span className="how-it-works__title-line how-it-works__title-line--desktop">
              <span>Smarter Qualitative Research in </span>
              <span className="how-it-works__title-highlight">3 Steps</span>
            </span>
            <span className="how-it-works__title-line how-it-works__title-line--mobile">
              <span>{content.intro.titleMobile}</span>
              <span>
                in <span className="how-it-works__title-highlight">{content.intro.mobileHighlight}</span>
              </span>
            </span>
          </h2>
        </div>
      </div>

      <div className="how-it-works__steps">
        {content.steps.map((step, index) => (
          <article
            className={`how-it-works__step ${step.number === '2' ? 'how-it-works__step--reverse' : ''}`}
            key={step.number}
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="how-it-works__step-image-wrap" style={{ animationDelay: `${index * 120 + 120}ms` }}>
              <img
                className="how-it-works__step-image"
                src={step.image.src}
                alt={step.image.alt}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="how-it-works__step-copy" style={{ animationDelay: `${index * 120 + 180}ms` }}>
              <h3 className="how-it-works__step-title">
                <span className="how-it-works__step-title--desktop">
                  {step.number}. {step.title}
                </span>
                <span className="how-it-works__step-title--mobile">{step.mobileTitle ?? step.title}</span>
              </h3>
              <p className="how-it-works__step-body">{step.body}</p>
            </div>
          </article>
        ))}
      </div>

      {content.cta && (
        <div className="how-it-works__cta-wrap">
          <a href={content.cta.href} className="how-it-works__cta">
            {content.cta.label}
          </a>
        </div>
      )}
    </section>
  )
}
