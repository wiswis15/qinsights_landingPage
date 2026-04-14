import { PageHero } from '../components/PageHero'
import { LogoTicker } from '../components/LogoTicker'
import { ComparisonSection } from '../components/ComparisonSection'
import { FreeTrialSection } from '../components/FreeTrialSection'
import { PricingSection } from '../components/PricingSection'
import { LargerScalePlansSection } from '../components/LargerScalePlansSection'
import { pricingHero, trustLogos, freeTrialSection, pricingSection, largerScalePlansSection, gettingStartedSection, pricingComparisonSection } from '../content/landingPage'

export function PricingPage() {
  return (
    <>
      <PageHero content={pricingHero} />
      <LogoTicker title="Analysis you can trust." logos={trustLogos} />
      <FreeTrialSection content={freeTrialSection} />
      <PricingSection content={pricingSection} />
      <LargerScalePlansSection content={largerScalePlansSection} gettingStarted={gettingStartedSection} />
      <ComparisonSection content={pricingComparisonSection} />
    </>
  )
}
