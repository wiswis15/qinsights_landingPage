import { PageHero } from '../components/PageHero'
import { pricingHero } from '../content/landingPage'

export function PricingPage() {
  return (
    <>
      <PageHero content={pricingHero} />
      {/* We will add the actual pricing cards/tables down here next! */}
    </>
  )
}
