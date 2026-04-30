import './App.css'
import { useEffect } from 'react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { actions, footerContent, navLinks } from './content/landingPage'
import { HomePage } from './pages/HomePage'
import { ContactPage } from './pages/ContactPage'
import { TeamPage } from './pages/TeamPage'
import { PricingPage } from './pages/PricingPage'
import { BlogPage } from './pages/BlogPage'
import { BlogArticlePage } from './pages/BlogArticlePage'
import { PrivacyPage } from './pages/PrivacyPage'
import { TermsPage } from './pages/TermsPage'
import { CustomerInformationPage } from './pages/CustomerInformationPage'
import { InPracticePage } from './pages/InPracticePage'
import { UseCaseStoryPage } from './pages/UseCaseStoryPage'
import { DesktopAppPage } from './pages/DesktopAppPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function SiteLayout() {
  return (
    <div className="page-shell">
      <div className="page-frame">
        <ScrollToTop />
        <Navbar links={navLinks} actions={actions} />
        <Outlet />
        <Footer content={footerContent} />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/in-practice" element={<InPracticePage />} />
        <Route path="/in-practice/:slug" element={<UseCaseStoryPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/customer-information" element={<CustomerInformationPage />} />
        <Route path="/desktop-app" element={<DesktopAppPage />} />
        <Route path="/:slug" element={<BlogArticlePage />} />
      </Route>
    </Routes>
  )
}
