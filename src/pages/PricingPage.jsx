import { PageHero } from '../components/PageHero'
import { LogoTicker } from '../components/LogoTicker'
import { FreeTrialSection } from '../components/FreeTrialSection'
import { pricingHero, trustLogos, freeTrialSection } from '../content/landingPage'

export function PricingPage() {
  return (
    <>
      <PageHero content={pricingHero} />
      <LogoTicker title="Analysis you can trust." logos={trustLogos} />
      <FreeTrialSection content={freeTrialSection} />
      {/* We will add the actual pricing cards/tables down here next! */}
    </>
  )
}
