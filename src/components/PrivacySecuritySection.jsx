export function PrivacySecuritySection({ content }) {
  return (
    <section className="privacy-security" aria-labelledby="privacy-security-heading">
      <div className="privacy-security__intro">
        <h2 id="privacy-security-heading" className="privacy-security__heading">
          {content.heading}
        </h2>
        <p className="privacy-security__subtitle">{content.subtitle}</p>
      </div>

      <div className="privacy-security__grid">
        {content.cards.map((card, index) => (
          <article
            key={card.title}
            className="privacy-security__card"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="privacy-security__media">
              <img
                className="privacy-security__image"
                src={card.image.src}
                alt={card.image.alt}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="privacy-security__copy">
              <h3 className="privacy-security__card-title">{card.title}</h3>
              <p className="privacy-security__card-body">{card.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
