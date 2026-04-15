import { useEffect, useRef, useState } from 'react'

export function PricingContactCtaSection({ content }) {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = sectionRef.current

    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`pricing-contact-cta ${isVisible ? 'pricing-contact-cta--visible' : ''}`}
      aria-labelledby="pricing-contact-cta-heading"
    >
      <div
        className="pricing-contact-cta__inner"
        style={{ '--pricing-contact-cta-image': `url("${content.image.src}")` }}
      >
        <div className="pricing-contact-cta__copy">
          <p className="pricing-contact-cta__eyebrow">{content.eyebrow}</p>
          <h2 id="pricing-contact-cta-heading" className="pricing-contact-cta__headline">
            {content.headline}
          </h2>
          <p className="pricing-contact-cta__body">{content.body}</p>
          <a
            className="button button--primary button--large pricing-contact-cta__button"
            href={content.action.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>{content.action.label}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
