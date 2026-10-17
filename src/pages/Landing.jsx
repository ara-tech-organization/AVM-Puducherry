import { Hero, TrustStrip, About, Services, Why, Gallery, Process, Testimonials, FAQ, BookSection, Location } from '../components/Sections'

export default function Landing({ treatment, setTreatment }) {
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
