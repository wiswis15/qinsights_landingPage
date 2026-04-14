import { PageHero } from '../components/PageHero'
import { LogoTicker } from '../components/LogoTicker'
import { FreeTrialSection } from '../components/FreeTrialSection'
import { PricingSection } from '../components/PricingSection'
import { LargerScalePlansSection } from '../components/LargerScalePlansSection'
import { GettingStartedSection } from '../components/GettingStartedSection'
import { pricingHero, trustLogos, freeTrialSection, pricingSection, largerScalePlansSection, gettingStartedSection } from '../content/landingPage'

export function PricingPage() {
  return (
    <>
      <PageHero content={pricingHero} />
      <LogoTicker title="Analysis you can trust." logos={trustLogos} />
      <FreeTrialSection content={freeTrialSection} />
      <PricingSection content={pricingSection} />
      <LargerScalePlansSection content={largerScalePlansSection} gettingStarted={gettingStartedSection} />
    </>
  )
}
