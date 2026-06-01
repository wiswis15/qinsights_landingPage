import './App.css'
import { useEffect } from 'react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
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
import { WebinarsPage } from './pages/WebinarsPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function SiteLayout() {
  const { pathname } = useLocation()
  const isWebinarsPage = pathname === '/webinars'

  return (
    <div className={`page-shell${isWebinarsPage ? ' page-shell--webinars' : ''}`}>
      <div className={`page-frame${isWebinarsPage ? ' page-frame--webinars' : ''}`}>
        <ScrollToTop />
        {isWebinarsPage ? null : <Navbar links={navLinks} actions={actions} />}
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
        <Route path="/in-practice/permata-me-user-review-analysis" element={<Navigate to="/permata-me-user-review-analysis" replace />} />
        <Route path="/in-practice/:slug" element={<UseCaseStoryPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/webinars" element={<WebinarsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/company-information" element={<CustomerInformationPage />} />
        <Route path="/customer-information" element={<Navigate to="/company-information" replace />} />
        <Route path="/anonymizer" element={<DesktopAppPage />} />
        <Route path="/desktop-app" element={<Navigate to="/anonymizer" replace />} />
        <Route path="/:slug" element={<BlogArticlePage />} />
      </Route>
    </Routes>
  )
}
