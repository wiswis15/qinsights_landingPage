export function PainPointsSection({ image, intro, items }) {
  return (
    <section className="pain-points" aria-labelledby="pain-points-title">
      <div className="pain-points__intro">
        <div className="pain-points__heading">
          <div className="pain-points__image-wrap">
            <img
              className="pain-points__image"
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
            />
          </div>

          <h2 id="pain-points-title" className="pain-points__title">
            {intro.title}
          </h2>
        </div>

        <div className="pain-points__copy">
          <p className="pain-points__body">{intro.body}</p>
        </div>
      </div>

      <div className="pain-points__grid">
        {items.map((item, index) => (
          <article key={item.title} className={`pain-points__item${index === 0 ? ' pain-points__item--accent' : ''}`}>
            {index === 0 ? <div className="pain-points__accent" aria-hidden="true" /> : null}
            <div className="pain-points__item-content">
            <h3 className="pain-points__item-title">{item.title}</h3>
            <p className="pain-points__item-body">{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
