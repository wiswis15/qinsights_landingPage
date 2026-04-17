import { ComparisonSection } from '../components/ComparisonSection'
import { FreeTrialSection } from '../components/FreeTrialSection'
import { PricingSection } from '../components/PricingSection'
import { LargerScalePlansSection } from '../components/LargerScalePlansSection'
import { PricingContactCtaSection } from '../components/PricingContactCtaSection'
import { WhyChooseQInsightsSection } from '../components/WhyChooseQInsightsSection'
import { freeTrialSection, pricingSection, largerScalePlansSection, gettingStartedSection, pricingComparisonSection, whyChooseQInsightsSection, pricingContactCtaSection } from '../content/landingPage'

export function PricingPage() {
  return (
    <>
      <PricingSection content={pricingSection} />
      <FreeTrialSection content={freeTrialSection} />
      <LargerScalePlansSection content={largerScalePlansSection} gettingStarted={gettingStartedSection} />
      <ComparisonSection content={pricingComparisonSection} />
      <WhyChooseQInsightsSection content={whyChooseQInsightsSection} />
      <PricingContactCtaSection content={pricingContactCtaSection} />
    </>
  )
}
