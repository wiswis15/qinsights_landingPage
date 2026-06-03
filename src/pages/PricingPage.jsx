import { FreeTrialSection } from '../components/FreeTrialSection'
import { PricingSection } from '../components/PricingSection'
import { LargerScalePlansSection } from '../components/LargerScalePlansSection'
import { PageHero } from '../components/PageHero'
import { PricingContactCtaSection } from '../components/PricingContactCtaSection'
import { WhyChooseQInsightsSection } from '../components/WhyChooseQInsightsSection'
import {
  freeTrialSection,
  pricingHero,
  pricingSection,
  largerScalePlansSection,
  gettingStartedSection,
  whyChooseQInsightsSection,
  pricingContactCtaSection,
  trustLogos,
} from '../content/landingPage'

function PricingLogoStrip({ logos }) {
  const featuredLogos = logos.slice(0, 6)

  function renderLogoGroup(duplicate = false) {
    return (
      <div className="pricing-logo-strip__group" aria-hidden={duplicate}>
        {featuredLogos.map((logo) => (
          <div
            className="pricing-logo-strip__item"
            key={`${duplicate ? 'copy' : 'base'}-${logo.name}`}
            style={{ '--logo-width': `${logo.width}px` }}
          >
            <img
              className="pricing-logo-strip__image"
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

  return (
    <section className="pricing-logo-strip" aria-label="Organizations using QInsights">
      <div className="pricing-logo-strip__viewport">
        <div className="pricing-logo-strip__track">
          {renderLogoGroup()}
          {renderLogoGroup(true)}
        </div>
      </div>
    </section>
  )
}

export function PricingPage() {
  return (
    <>
      <PageHero content={pricingHero} />
      <PricingLogoStrip logos={trustLogos} />
      <PricingSection content={pricingSection} />
      <FreeTrialSection content={freeTrialSection} />
      <LargerScalePlansSection content={largerScalePlansSection} gettingStarted={gettingStartedSection} />
      <WhyChooseQInsightsSection content={whyChooseQInsightsSection} />
      <PricingContactCtaSection content={pricingContactCtaSection} />
    </>
  )
}
