export function TeamHero({ content }) {
  return (
    <section className="team-hero" aria-labelledby="team-hero-title">
      <div className="team-hero__inner">
        <div className="team-hero__backdrop" aria-hidden="true">
          <img className="team-hero__backdrop-image" src={content.backdrop.src} alt={content.backdrop.alt} />
        </div>

        <div className="team-hero__content">
          <h1 className="team-hero__title" id="team-hero-title">
            {content.title}
          </h1>
          <p className="team-hero__subtitle">{content.subtitle}</p>
        </div>
      </div>
    </section>
  )
}
