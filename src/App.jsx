import './App.css'
import { CallToActionSection } from './components/CallToActionSection'
import { ComparisonSection } from './components/ComparisonSection'
import { DesignedForResearchersSection } from './components/DesignedForResearchersSection'
import { FeatureSplitSection } from './components/FeatureSplitSection'
import { HowItWorksSection } from './components/HowItWorksSection'
import { Hero } from './components/Hero'
import { LogoTicker } from './components/LogoTicker'
import { Navbar } from './components/Navbar'
import { NewsletterSection } from './components/NewsletterSection'
import { PainPointsSection } from './components/PainPointsSection'
import { PrivacySecuritySection } from './components/PrivacySecuritySection'
import { ProductProofSection } from './components/ProductProofSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { WebinarHighlightSection } from './components/WebinarHighlightSection'
import {
  actions,
  callToActionSection,
  comparisonSection,
  designedForResearchersSection,
  featureSplitSection,
  heroCopy,
  howItWorksSection,
  navLinks,
  newsletterSection,
  painPointsSection,
  privacySecuritySection,
  productProof,
  testimonialsSection,
  trustLogos,
  webinarHighlightSection,
} from './content/landingPage'

export default function App() {
  return (
    <div className="page-shell">
      <div className="page-frame">
        <Navbar links={navLinks} actions={actions} />
        <Hero copy={heroCopy} cta={actions.cta} />
        <LogoTicker title="Analysis you can trust." logos={trustLogos} />
        <ProductProofSection image={productProof.image} statement={productProof.statement} />
        <PainPointsSection image={painPointsSection.image} intro={painPointsSection.intro} items={painPointsSection.items} />
        <FeatureSplitSection anchor={featureSplitSection.anchor} items={featureSplitSection.items} />
        <WebinarHighlightSection content={webinarHighlightSection} />
        <HowItWorksSection content={howItWorksSection} />
        <ComparisonSection content={comparisonSection} />
        <DesignedForResearchersSection content={designedForResearchersSection} />
        <TestimonialsSection content={testimonialsSection} />
        <PrivacySecuritySection content={privacySecuritySection} />
        <CallToActionSection content={callToActionSection} />
        <NewsletterSection content={newsletterSection} />
      </div>
    </div>
  )
}
