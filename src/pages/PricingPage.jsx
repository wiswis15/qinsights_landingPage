import { LogoTicker } from '../components/LogoTicker'
import { ComparisonSection } from '../components/ComparisonSection'
import { FreeTrialSection } from '../components/FreeTrialSection'
import { PricingSection } from '../components/PricingSection'
import { LargerScalePlansSection } from '../components/LargerScalePlansSection'
import { PricingContactCtaSection } from '../components/PricingContactCtaSection'
import { WhyChooseQInsightsSection } from '../components/WhyChooseQInsightsSection'
import { trustLogos, freeTrialSection, pricingSection, largerScalePlansSection, gettingStartedSection, pricingComparisonSection, whyChooseQInsightsSection, pricingContactCtaSection } from '../content/landingPage'

export function PricingPage() {
  return (
    <>
      <LogoTicker title="Analysis you can trust." logos={trustLogos} />
      <FreeTrialSection content={freeTrialSection} />
      <PricingSection content={pricingSection} />
      <LargerScalePlansSection content={largerScalePlansSection} gettingStarted={gettingStartedSection} />
      <ComparisonSection content={pricingComparisonSection} />
      <WhyChooseQInsightsSection content={whyChooseQInsightsSection} />
      <PricingContactCtaSection content={pricingContactCtaSection} />
    </>
  )
}
