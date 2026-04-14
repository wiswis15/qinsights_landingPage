export function FeatureSplitSection({ anchor, items }) {
  return (
    <section className="feature-split" aria-labelledby="feature-split-title">
      <div className="feature-split__panel feature-split__panel--anchor">
        <div className="feature-split__anchor-media" aria-hidden="true">
          <img className="feature-split__anchor-image" src={anchor.image.src} alt="" loading="lazy" decoding="async" />
        </div>
        <div className="feature-split__anchor-overlay" aria-hidden="true" />
        <div className="feature-split__anchor-copy">
          <h2 id="feature-split-title" className="feature-split__anchor-title">{anchor.title}</h2>
          <p className="feature-split__anchor-body">{anchor.body}</p>
        </div>
      </div>

      <div className="feature-split__panel feature-split__panel--details">
        <div className="feature-split__items">
          {items.map((item) => (
            <article key={item.title} className="feature-split__item">
              <img
                className="feature-split__item-icon"
                src={item.icon.src}
                alt={item.icon.alt}
                loading="lazy"
                decoding="async"
              />
              <div className="feature-split__item-copy">
                <h3 className="feature-split__item-title">{item.title}</h3>
                <p className="feature-split__item-body">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
