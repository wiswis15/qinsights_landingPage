import { PageHero } from '../components/PageHero'
import { LogoTicker } from '../components/LogoTicker'
import { pricingHero, trustLogos } from '../content/landingPage'

export function PricingPage() {
  return (
    <>
      <PageHero content={pricingHero} />
      <LogoTicker title="Analysis you can trust." logos={trustLogos} />
      {/* We will add the actual pricing cards/tables down here next! */}
    </>
  )
}
