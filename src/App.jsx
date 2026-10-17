import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router'
import { TopBar, Header, Footer, FloatingActions } from './components/Chrome'
import Landing from './pages/Landing'
import ServicePage from './pages/ServicePage'
import { ContactPage, GalleryPage, ThankYouPage } from './pages/StaticPages'

// Scroll to the #hash target after a route change, otherwise to the top.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    // /services is the landing page scrolled to its Services section
    const target = hash || (pathname === '/services' ? '#services' : '')
    if (target) {
      const t = setTimeout(() => document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' }), 60)
      return () => clearTimeout(t)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  // Selected treatment is shared by the service cards and the booking forms.
  const [treatment, setTreatment] = useState('')
  const shared = { treatment, setTreatment }

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <ScrollManager />
      <TopBar />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing {...shared} />} />
          <Route path="/services" element={<Landing {...shared} />} />
          <Route path="/contact-us" element={<ContactPage {...shared} />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
          <Route path="/:slug" element={<ServicePage {...shared} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
    </BrowserRouter>
  )
}
