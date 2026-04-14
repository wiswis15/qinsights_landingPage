import './App.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Outlet, Route, Routes } from 'react-router-dom'
import { actions, footerContent, navLinks } from './content/landingPage'
import { HomePage } from './pages/HomePage'
import { MockPage } from './pages/MockPage'

function SiteLayout() {
  return (
    <div className="page-shell">
      <div className="page-frame">
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
        <Route path="/pricing" element={<MockPage name="Pricing" />} />
        <Route path="/team" element={<MockPage name="Team" />} />
        <Route path="/contact" element={<MockPage name="Contact" />} />
        <Route path="/blog" element={<MockPage name="Blog" />} />
        <Route path="/privacy" element={<MockPage name="Privacy" />} />
        <Route path="/terms" element={<MockPage name="Terms" />} />
        <Route path="/customer-information" element={<MockPage name="Customer Information" />} />
      </Route>
    </Routes>
  )
}
