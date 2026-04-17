export function ProductProofSection({ image, statement, cta }) {
  return (
    <section className="product-proof" aria-labelledby="product-proof-statement">
      <div className="product-proof__card">
        <div className="product-proof__image-wrap">
          <img
            className="product-proof__image"
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="product-proof__body">
          <p id="product-proof-statement" className="product-proof__statement">
            {statement}
          </p>
          {cta && (
            <a href={cta.href} className="product-proof__cta">
              {cta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
