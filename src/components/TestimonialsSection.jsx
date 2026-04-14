export function TestimonialsSection({ content }) {
  const { heading, subheading, subheadingLine2, body, appScreenshot, testimonials } = content

  return (
    <section className="testimonials">
      {/* Section eyebrow heading */}
      <p className="testimonials__eyebrow">{heading}</p>

      {/* Two-column layout */}
      <div className="testimonials__layout">

        {/* Left column – copy + card */}
        <div className="testimonials__copy-col">
          <div className="testimonials__intro">
            <h2 className="testimonials__subheading">
              <span className="testimonials__subheading-line">{subheading}</span>
              <span className="testimonials__subheading-line">{subheadingLine2}</span>
            </h2>
            <p className="testimonials__body">{body}</p>
          </div>

          <div className="testimonials__cards">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonials__card">
                {/* Portrait + identity */}
                <div className="testimonials__profile">
                  <div className="testimonials__avatar-wrap">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="testimonials__avatar"
                      width={111}
                      height={111}
                    />
                  </div>
                  <div className="testimonials__identity">
                    <p className="testimonials__name">{t.name}</p>
                    <div className="testimonials__meta">
                      <p className="testimonials__role">{t.role}</p>
                      <p className="testimonials__affiliation">{t.affiliation}</p>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="testimonials__quote">
                  <p>{t.quote}</p>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Right column – app screenshot */}
        <div className="testimonials__media-col">
          <div className="testimonials__screenshot-wrap">
            <img
              src={appScreenshot.src}
              alt={appScreenshot.alt}
              className="testimonials__screenshot"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
