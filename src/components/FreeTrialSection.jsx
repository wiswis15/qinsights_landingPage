export function FreeTrialSection({ content }) {
  return (
    <section className="free-trial" aria-labelledby="free-trial-heading">
      <div className="page-frame">
        <div className="free-trial__card">
          <div className="free-trial__layout">
            <div className="free-trial__info">
              <h2 id="free-trial-heading" className="free-trial__title">{content.title}</h2>
              <h3 className="free-trial__subtitle">{content.subtitle}</h3>
              <ul className="free-trial__features" role="list">
                {content.features.map((feature, idx) => (
                  <li key={idx} className="free-trial__feature">
                    <svg className="free-trial__check" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="currentColor"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="free-trial__action">
              <a href={content.cta.href} className="button button--primary button--large">
                <span>{content.cta.label}</span>
                <span className="button__arrow" aria-hidden="true">{'\u2192'}</span>
              </a>
              <p className="free-trial__subtext">{content.cta.subtext}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
