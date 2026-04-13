import './App.css'
import { Hero } from './components/Hero'
import { LogoTicker } from './components/LogoTicker'
import { Navbar } from './components/Navbar'
import { PainPointsSection } from './components/PainPointsSection'
import { ProductProofSection } from './components/ProductProofSection'
import { actions, heroCopy, navLinks, painPointsSection, productProof, trustLogos } from './content/landingPage'

export default function App() {
  return (
    <div className="page-shell">
      <div className="page-frame">
        <Navbar links={navLinks} actions={actions} />
        <Hero copy={heroCopy} cta={actions.cta} />
        <LogoTicker title="Analysis you can trust." logos={trustLogos} />
        <ProductProofSection image={productProof.image} statement={productProof.statement} />
        <PainPointsSection image={painPointsSection.image} intro={painPointsSection.intro} items={painPointsSection.items} />
      </div>
    </div>
  )
}
