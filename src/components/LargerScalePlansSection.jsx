export function LargerScalePlansSection({ content, gettingStarted }) {
  return (
    <section className="larger-scale-plans" aria-labelledby="larger-scale-plans-title">
      <div className="larger-scale-plans__inner">
        <div className="larger-scale-plans__header-group">
          <h2 id="larger-scale-plans-title" className="larger-scale-plans__title">
            {content.title}
          </h2>
          {content.subtitle && (
            <p className="larger-scale-plans__subtitle">{content.subtitle}</p>
          )}
        </div>
        
        <div className="larger-scale-plans__layout">
          <div className="larger-scale-plans__grid">
            {content.plans.map((plan, index) => (
              <div 
                key={index} 
                className={`larger-scale-plans__card larger-scale-plans__card--${plan.style}`}
              >
                <div className="larger-scale-plans__card-header">
                  <img src={plan.icon} alt="" className="larger-scale-plans__icon" aria-hidden="true" />
                  <h3 className="larger-scale-plans__card-title">{plan.title}</h3>
                </div>
                <p className="larger-scale-plans__card-audience">{plan.targetAudience}</p>
                
                <ul className="larger-scale-plans__features">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="larger-scale-plans__feature">
                      <svg className="larger-scale-plans__check" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M16.6666 5.83331L7.49992 15L3.33325 10.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a href={plan.ctaUrl} className="larger-scale-plans__cta">
                  {plan.ctaLabel}
                </a>
              </div>
            ))}
          </div>

          {gettingStarted && (
            <div className="larger-scale-plans__getting-started">
              <h3 className="larger-scale-plans__gs-title">{gettingStarted.title}</h3>
              <div className="larger-scale-plans__gs-body">
                {gettingStarted.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {gettingStarted.note && (
                <div className="larger-scale-plans__gs-note">
                  <p>{gettingStarted.note}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

