import { useEffect, useRef, useState } from 'react';

export function PricingSection({ content }) {
  const [activeCycle, setActiveCycle] = useState(content.cycles[0].id); // Default to 6mo
  const [isTokenHelpOpen, setIsTokenHelpOpen] = useState(false);
  const closeButtonRef = useRef(null);
  const currencySymbol = content.currencySymbol ?? '$';
  const periodSuffix = content.periodSuffix ?? '/ mo';
  const visiblePlans = content.plans.filter((plan) => plan.prices?.[activeCycle] != null);
  const tokenHelp = content.tokenHelp;

  useEffect(() => {
    if (!isTokenHelpOpen) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsTokenHelpOpen(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isTokenHelpOpen]);

  function handleTokenModalBackdropClick(event) {
    if (event.target === event.currentTarget) {
      setIsTokenHelpOpen(false);
    }
  }

  return (
    <section className="pricing-section" aria-labelledby="pricing-heading">
      <div className="page-frame">

        <div className="pricing-section__header">
          {/* Cycle Toggle (6 Months / 12 Months) - Framer Pill Style */}
          <div className="pricing-section__tabs" role="tablist">
            {content.cycles.map(cycle => (
              <button
                key={cycle.id}
                role="tab"
                aria-selected={activeCycle === cycle.id}
                className={`pricing-section__tab ${activeCycle === cycle.id ? 'pricing-section__tab--active' : ''}`}
                onClick={() => setActiveCycle(cycle.id)}
              >
                {cycle.label}
              </button>
            ))}
          </div>
        </div>

        <div
          className={`pricing-section__grid ${visiblePlans.length === 1 ? 'pricing-section__grid--single' : ''}`}
        >
          {visiblePlans.map((plan) => {
            const currentPrice = plan.prices[activeCycle];
            const currentFeatures = plan.features[activeCycle];
            const currentDescription =
              typeof plan.descriptions === 'object' ? plan.descriptions?.[activeCycle] ?? plan.description : plan.description;
            const currentBody =
              typeof plan.bodies === 'object' ? plan.bodies?.[activeCycle] ?? plan.body : plan.body;
            const currentButtonHref =
              typeof plan.buttonHrefs === 'object' ? plan.buttonHrefs?.[activeCycle] ?? plan.buttonHref : plan.buttonHref;
            const currentButtonLabel =
              typeof plan.buttonLabels === 'object' ? plan.buttonLabels?.[activeCycle] ?? plan.buttonLabel : plan.buttonLabel;
            const currentProductId =
              typeof plan.productIds === 'object' ? plan.productIds?.[activeCycle] ?? plan.productId : plan.productId;
            
            return (
              <div 
                key={plan.id} 
                className="pricing-card"
              >
                <div className="pricing-card__header">
                  <h3 className="pricing-card__title">{plan.name}</h3>
                  {plan.requirement && (
                    <p className="pricing-card__requirement">{plan.requirement}</p>
                  )}
                  
                  <div className="pricing-card__price-layout">
                    <span className="pricing-card__currency">{currencySymbol}</span>
                    <span key={currentPrice} className="pricing-card__amount">{currentPrice}</span>
                    {periodSuffix ? <span className="pricing-card__period">{periodSuffix}</span> : null}
                  </div>

                  {/* Save 12% Badge only on 12 months */}
                  <div className="pricing-card__badge-wrapper">
                    {activeCycle === '12mo' ? (
                      <span className="pricing-card__save-badge">{content.saveLabel ?? 'Save 12%'}</span>
                    ) : (
                      <span className="pricing-card__save-spacer" aria-hidden="true"></span>
                    )}
                  </div>

                  {currentDescription ? <p className="pricing-card__desc">{currentDescription}</p> : null}
                  {currentBody ? <p className="pricing-card__body">{currentBody}</p> : null}
                </div>

                <ul className="pricing-card__features">
                  {currentFeatures.map((feature, idx) => (
                    <li key={idx} className="pricing-card__feature">
                      <svg className="pricing-card__check" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="currentColor"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pricing-card__action">
                  <a
                    href={currentButtonHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button--primary button--large pricing-card__button"
                    data-product-id={currentProductId}
                  >
                    <span>{currentButtonLabel}</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {content.allowanceNote?.length ? (
          <div className="pricing-section__allowance-note">
            {content.allowanceNote.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            {tokenHelp ? (
              <button
                className="pricing-section__token-trigger"
                type="button"
                onClick={() => setIsTokenHelpOpen(true)}
              >
                {tokenHelp.triggerLabel}
              </button>
            ) : null}
          </div>
        ) : null}
      </div>

      {isTokenHelpOpen && tokenHelp ? (
        <div className="token-help-modal" onMouseDown={handleTokenModalBackdropClick}>
          <div
            className="token-help-modal__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="token-help-heading"
            aria-describedby="token-help-description"
          >
            <button
              className="token-help-modal__close"
              type="button"
              onClick={() => setIsTokenHelpOpen(false)}
              aria-label={tokenHelp.closeLabel}
              ref={closeButtonRef}
            >
              <span aria-hidden="true">&times;</span>
            </button>

            <p className="token-help-modal__eyebrow">{tokenHelp.eyebrow}</p>
            <h2 className="token-help-modal__heading" id="token-help-heading">
              {tokenHelp.heading}
            </h2>
            <p className="token-help-modal__body" id="token-help-description">
              {tokenHelp.body}
            </p>

            <div className="token-help-modal__packages" aria-labelledby="token-packages-heading">
              <h3 className="token-help-modal__packages-heading" id="token-packages-heading">
                {tokenHelp.packagesHeading}
              </h3>

              <div className="token-help-modal__package-grid">
                {tokenHelp.packages.map((tokenPackage) => (
                  <div className="token-help-modal__package" key={tokenPackage.amount}>
                    <span className="token-help-modal__amount">{tokenPackage.amount}</span>
                    <span className="token-help-modal__price">{tokenPackage.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="token-help-modal__footer">{tokenHelp.footer}</p>
          </div>
        </div>
      ) : null}
    </section>
  )
}
