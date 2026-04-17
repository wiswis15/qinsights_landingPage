import { FreeTrialSection } from '../components/FreeTrialSection'
import { PricingSection } from '../components/PricingSection'
import { LargerScalePlansSection } from '../components/LargerScalePlansSection'
import { PricingContactCtaSection } from '../components/PricingContactCtaSection'
import { WhyChooseQInsightsSection } from '../components/WhyChooseQInsightsSection'
import { freeTrialSection, pricingSection, largerScalePlansSection, gettingStartedSection, whyChooseQInsightsSection, pricingContactCtaSection } from '../content/landingPage'

export function PricingPage() {
  return (
    <>
      <PricingSection content={pricingSection} />
      <FreeTrialSection content={freeTrialSection} />
      <LargerScalePlansSection content={largerScalePlansSection} gettingStarted={gettingStartedSection} />
      <WhyChooseQInsightsSection content={whyChooseQInsightsSection} />
      <PricingContactCtaSection content={pricingContactCtaSection} />
    </>
  )
}
