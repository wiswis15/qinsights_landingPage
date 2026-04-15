export function PageHero({ content }) {
  return (
    <section className="page-hero" aria-labelledby="page-hero-title">
      <div className="page-hero__inner">
        <div className="page-hero__backdrop" aria-hidden="true">
          <img className="page-hero__backdrop-image" src={content.backdrop.src} alt={content.backdrop.alt} />
        </div>

        <div className="page-hero__content">
          <h1 className="page-hero__title" id="page-hero-title">
            {content.title}
          </h1>
          <p className="page-hero__subtitle">{content.subtitle}</p>
        </div>
      </div>
    </section>
  )
}
