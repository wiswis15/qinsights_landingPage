export function TestimonialSpotlightSection({ content }) {
  const { headingLine1, headingLine2, body, productImage, testimonial } = content

  return (
    <section className="testimonial-spotlight">
      <div className="testimonial-spotlight__intro-layout">
        <div className="testimonial-spotlight__intro-column">
          <div className="testimonial-spotlight__intro">
            <h2 className="testimonial-spotlight__heading">
              <span className="testimonial-spotlight__heading-line">{headingLine1}</span>
              <span className="testimonial-spotlight__heading-line">{headingLine2}</span>
            </h2>
            <p className="testimonial-spotlight__body">{body}</p>
          </div>
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

      <article className="testimonial-spotlight__card">
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
    </section>
  )
}
