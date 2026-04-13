export function TestimonialSpotlightSection({ content }) {
  const { headingLine1, headingLine2, body, layout, productImage, testimonial, theme } = content
  const sectionStyle = theme
    ? {
        '--spotlight-heading-color': theme.headingColor,
        '--spotlight-body-color': theme.bodyColor,
        '--spotlight-role-color': theme.roleColor,
        '--spotlight-card-background': theme.cardBackground,
        '--spotlight-portrait-background': theme.portraitBackground,
      }
    : undefined
  const inlineCard = layout === 'inline-card'
  const card = (
    <article className={`testimonial-spotlight__card${inlineCard ? ' testimonial-spotlight__card--inline' : ''}`}>
      <div className="testimonial-spotlight__profile">
        <div className="testimonial-spotlight__portrait-wrap">
          <img
            className="testimonial-spotlight__portrait"
            src={testimonial.photo}
            alt={testimonial.name}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="testimonial-spotlight__identity">
          <h3 className="testimonial-spotlight__name">{testimonial.name}</h3>
          <p className="testimonial-spotlight__role">{testimonial.role}</p>
          <p className="testimonial-spotlight__affiliation">{testimonial.affiliation}</p>
        </div>
      </div>

      <blockquote className="testimonial-spotlight__quote">
        <p>{testimonial.quote}</p>
      </blockquote>
    </article>
  )

  return (
    <section className="testimonial-spotlight" style={sectionStyle}>
      <div className="testimonial-spotlight__intro-layout">
        <div className="testimonial-spotlight__intro-column">
          <div className="testimonial-spotlight__intro">
            <h2 className="testimonial-spotlight__heading">
              <span className="testimonial-spotlight__heading-line">{headingLine1}</span>
              <span className="testimonial-spotlight__heading-line">{headingLine2}</span>
            </h2>
            <p className="testimonial-spotlight__body">{body}</p>
          </div>

          {inlineCard ? card : null}
        </div>

        <div className="testimonial-spotlight__media-column">
          <div className="testimonial-spotlight__product-frame">
            <img
              className="testimonial-spotlight__product-image"
              src={productImage.src}
              alt={productImage.alt}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {inlineCard ? null : card}
    </section>
  )
}
