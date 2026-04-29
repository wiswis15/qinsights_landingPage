import { CallToActionSection } from '../components/CallToActionSection'
import { ComparisonSection } from '../components/ComparisonSection'
import { DesignedForResearchersSection } from '../components/DesignedForResearchersSection'
import { FaqSection } from '../components/FaqSection'
import { FeatureSplitSection } from '../components/FeatureSplitSection'
import { HowItWorksSection } from '../components/HowItWorksSection'
import { Hero } from '../components/Hero'
import { LeadMagnetPopup } from '../components/LeadMagnetPopup'
import { LogoTicker } from '../components/LogoTicker'
import { NewsletterSection } from '../components/NewsletterSection'
import { PainPointsSection } from '../components/PainPointsSection'
import { PrivacySecuritySection } from '../components/PrivacySecuritySection'
import { ProductProofSection } from '../components/ProductProofSection'
import { TestimonialsSection } from '../components/TestimonialsSection'
import { TestimonialSpotlightSection } from '../components/TestimonialSpotlightSection'
import { WebinarHighlightSection } from '../components/WebinarHighlightSection'
import {
  actions,
  callToActionSection,
  comparisonSection,
  designedForResearchersSection,
  faqSection,
  featureSplitSection,
  heroCopy,
  howItWorksSection,
  leadMagnetPopup,
  newsletterSection,
  onboardingSpotlightSection,
  painPointsSection,
  privacySecuritySection,
  productProof,
  samanthaSpotlightSection,
  testimonialsSection,
  testimonialSpotlightSection,
  trustLogos,
  webinarHighlightSection,
} from '../content/landingPage'

export function HomePage() {
  return (
    <>
      <Hero copy={heroCopy} cta={actions.cta} />
      <LogoTicker title="Analysis you can trust." logos={trustLogos} />
      <ProductProofSection image={productProof.image} statement={productProof.statement} cta={productProof.cta} />
      <PainPointsSection image={painPointsSection.image} intro={painPointsSection.intro} items={painPointsSection.items} cta={painPointsSection.cta} />
      <FeatureSplitSection anchor={featureSplitSection.anchor} items={featureSplitSection.items} />
      <WebinarHighlightSection content={webinarHighlightSection} />
      <HowItWorksSection content={howItWorksSection} />
      <ComparisonSection content={comparisonSection} />
      <DesignedForResearchersSection content={designedForResearchersSection} />
      <TestimonialsSection content={testimonialsSection} />
      <TestimonialSpotlightSection content={testimonialSpotlightSection} />
      <TestimonialSpotlightSection content={samanthaSpotlightSection} />
      <TestimonialSpotlightSection content={onboardingSpotlightSection} />
      <PrivacySecuritySection content={privacySecuritySection} />
      <CallToActionSection content={callToActionSection} />
      <NewsletterSection content={newsletterSection} />
      <FaqSection content={faqSection} />
      <LeadMagnetPopup content={leadMagnetPopup} />
    </>
  )
}
