import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { landingSections, spy } from '../lib/spy'
import { Hero, TrustStrip, About, Services, Why, Gallery, Process, Testimonials, FAQ, BookSection, Location } from '../components/Sections'

export default function Landing({ treatment, setTreatment, setSection }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  // Scroll-spy: the section crossing the upper part of the viewport becomes the active menu item
  // and its URL (/, /about, /services) replaces the current one.
  useEffect(() => {
    const els = landingSections.map((s) => document.getElementById(s.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting)
        if (!hit) return
        const sec = landingSections.find((s) => s.id === hit.target.id)
        setSection(sec.id)
        if (sec.path !== pathname && Date.now() > spy.lockUntil) {
          spy.skipScroll = true
          navigate(sec.path, { replace: true })
        }
      },
      { rootMargin: '-35% 0px -60% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [navigate, pathname, setSection])

  return (
    <>
      <Hero treatment={treatment} setTreatment={setTreatment} />
      <TrustStrip />
      <About />
      <Services onPick={setTreatment} />
      <Why />
      <Gallery />
      <Process />
      <Testimonials />
      <FAQ />
      <BookSection treatment={treatment} setTreatment={setTreatment} />
      <Location />
    </>
  )
}
