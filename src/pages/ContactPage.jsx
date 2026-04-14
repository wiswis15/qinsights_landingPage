import { PageHero } from '../components/PageHero'
import { ContactPricingFormSection } from '../components/ContactPricingFormSection'
import { contactHero, contactPricingFormSection } from '../content/landingPage'

export function ContactPage() {
  return (
    <>
      <PageHero content={contactHero} />
      <ContactPricingFormSection content={contactPricingFormSection} />
    </>
  )
}
