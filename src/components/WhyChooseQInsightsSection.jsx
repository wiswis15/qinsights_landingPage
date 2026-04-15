import { useEffect, useRef, useState } from 'react'

export function WhyChooseQInsightsSection({ content }) {
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
      className={`why-choose ${isVisible ? 'why-choose--visible' : ''}`}
      aria-labelledby="why-choose-heading"
    >
      <div className="why-choose__inner">
        <div className="why-choose__intro">
          <p id="why-choose-heading" className="why-choose__eyebrow">
            {content.eyebrow}
          </p>
          <p className="why-choose__subtitle">{content.subtitle}</p>
        </div>

        <ul className="why-choose__points" aria-label="Why choose QInsights">
          {content.points.map((point, index) => (
            <li
              key={point}
              className="why-choose__point"
              style={{ transitionDelay: `${120 + (index * 70)}ms` }}
            >
              <span className="why-choose__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2.5L14.65 8.76L21.5 12L14.65 15.24L12 21.5L9.35 15.24L2.5 12L9.35 8.76L12 2.5Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="why-choose__point-text">{point}</span>
            </li>
          ))}
        </ul>

        <p className="why-choose__closing">{content.closing}</p>
      </div>
    </section>
  )
}
