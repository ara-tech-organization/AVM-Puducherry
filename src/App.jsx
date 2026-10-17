import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation, useParams } from 'react-router'
import { TopBar, Header, Footer, FloatingActions } from './components/Chrome'
import Landing from './pages/Landing'
import ServicePage from './pages/ServicePage'
import { ContactPage, GalleryPage, ThankYouPage } from './pages/StaticPages'
import { ActiveSection, spy } from './lib/spy'

// Scroll to the #hash target after a route change, otherwise to the top.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (spy.skipScroll) { spy.skipScroll = false; return }
    // /about and /services are the landing page scrolled to that section
    const target = hash || { '/about': '#about', '/services': '#services' }[pathname] || ''
    if (target) {
      spy.lockUntil = Date.now() + 1500
      const t = setTimeout(() => document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' }), 60)
      return () => clearTimeout(t)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

// One route for the landing page (/, /about, /services) and the service pages, so scrolling
// between landing sections updates the URL without remounting the page.
function Page(props) {
  const { slug } = useParams()
  return !slug || slug === 'about' || slug === 'services' ? <Landing {...props} /> : <ServicePage {...props} />
}

export default function App() {
  const [section, setSection] = useState('home')
  // Selected treatment is shared by the service cards and the booking forms.
  const [treatment, setTreatment] = useState('')
  const shared = { treatment, setTreatment }

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <ScrollManager />
      <ActiveSection.Provider value={section}>
        <TopBar />
        <Header />
      </ActiveSection.Provider>
      <main>
        <Routes>
          <Route path="/contact-us" element={<ContactPage {...shared} />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
          <Route path="/:slug?" element={<Page {...shared} setSection={setSection} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
    </BrowserRouter>
  )
}
