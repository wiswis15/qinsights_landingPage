function LogoTickerGroup({ logos, duplicate = false }) {
  return (
    <div className="logo-ticker__group" aria-hidden={duplicate}>
      {logos.map((logo) => (
        <div key={`${duplicate ? 'copy' : 'base'}-${logo.name}`} className="logo-ticker__item" style={{ '--logo-width': `${logo.width}px` }}>
          <img
            className="logo-ticker__image"
            src={logo.src}
            alt={duplicate ? '' : logo.alt}
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  )
}

export function LogoTicker({ title, logos, className = '' }) {
  const sectionClassName = ['trust-strip', className].filter(Boolean).join(' ')

  return (
    <section className={sectionClassName} aria-labelledby="trust-strip-title">
      <div className="trust-strip__content">
        <h2 id="trust-strip-title" className="trust-strip__title">{title}</h2>

        <div className="logo-ticker" aria-label={title}>
          <div className="logo-ticker__viewport">
            <div className="logo-ticker__track">
              <LogoTickerGroup logos={logos} />
              <LogoTickerGroup logos={logos} duplicate />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
