import { useState } from 'react'
import { asset } from '../lib/asset'
import { Icon, Btn, Reveal, SectionHead, Photo, A } from './ui'
import BookingForm from './BookingForm'
import { clinic, heroChips, services, why, steps, testimonials, faqs, gallerySlots, transformations } from '../content/puducherry'

export function Hero({ treatment, setTreatment }) {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div className="absolute -top-32 -right-32 h-[460px] w-[460px] rounded-full bg-brand-100/70 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-20 grid gap-12 lg:grid-cols-[1.1fr_.9fr] items-center">
        <div>
          <p className="rise inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold text-brand-700" style={{ '--d': '0ms' }}>
            <Icon name="MapPin" size={14} /> Dental Clinic in Puducherry
          </p>
          <h1 className="rise mt-5 text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.15] text-brand-900" style={{ '--d': '100ms' }}>
            AVM Smiles &ndash; Best Dental Clinic in Puducherry for <span className="text-brand-600">Quality Care</span>
          </h1>
          <p className="rise mt-5 max-w-xl text-base leading-relaxed text-muted" style={{ '--d': '200ms' }}>
            AVM Smiles is a well-regarded dental clinic in Puducherry offering advanced treatments, skilled dentists, and attentive care for patients across all age groups. From regular dental checkups to complete smile makeovers and implants in Puducherry, we combine current technology with thoughtful, patient-centered treatment planning for lasting oral health.
          </p>
          <p className="rise mt-6 text-sm font-semibold uppercase tracking-[.18em] text-accent" style={{ '--d': '280ms' }}>
            Stronger Teeth, Brighter Smiles, Lasting Care
          </p>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {heroChips.map((c, i) => (
              <li key={c} className="rise flex items-center gap-2 rounded-full border border-brand-100 bg-white px-3.5 py-2 text-xs sm:text-sm font-medium text-ink shadow-sm" style={{ '--d': `${340 + i * 70}ms` }}>
                <Icon name="CircleCheck" size={16} className="text-brand-600" /> {c}
              </li>
            ))}
          </ul>
          <div className="rise mt-8 flex flex-wrap gap-3" style={{ '--d': '720ms' }}>
            <Btn variant="accent" href="#book"><Icon name="CalendarCheck" size={18} /> Book Your Appointment Today</Btn>
            <Btn variant="outline" href={clinic.phoneHref}><Icon name="Phone" size={18} /> Call Now</Btn>
            <Btn variant="whatsapp" href={clinic.whatsappHref} target="_blank" rel="noreferrer"><Icon name="MessageCircle" size={18} /> WhatsApp</Btn>
          </div>
        </div>

        <div className="relative">
          <div className="rise relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] overflow-hidden rounded-[28px] shadow-[0_18px_48px_-16px_rgba(40,36,89,.45)]" style={{ '--d': '300ms' }}>
            <Photo src={asset('/assets/images/site/hero-patient.jpg')} alt="Smiling patient at AVM Smiles dental clinic" label="Hero photo" icon="Smile" />
          </div>
          <div className="floaty absolute -left-3 sm:-left-8 bottom-10 rounded-2xl bg-white px-4 py-3 shadow-[0_18px_48px_-16px_rgba(40,36,89,.35)] flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-brand-600"><Icon name="HeartPulse" /></span>
            <div><p className="text-sm font-semibold text-brand-900">Pain-Free Care</p><p className="text-xs text-muted">Comfort first, always</p></div>
          </div>
          <div className="floaty absolute -right-2 sm:-right-6 top-10 rounded-2xl bg-white px-4 py-3 shadow-[0_18px_48px_-16px_rgba(40,36,89,.35)] flex items-center gap-3" style={{ animationDelay: '1.5s' }}>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-accent-50 text-accent"><Icon name="ScanLine" /></span>
            <div><p className="text-sm font-semibold text-brand-900">Digital Dentistry</p><p className="text-xs text-muted">Precise diagnosis</p></div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-xl px-4 pb-16 lg:hidden"><BookingForm id="hero-form" treatment={treatment} setTreatment={setTreatment} /></div>
    </section>
  )
}

export function TrustStrip() {
  const items = [
    ['ShieldCheck', 'Safety & Hygiene'],
    ['Cpu', 'Modern Technology'],
    ['Users', 'Skilled Specialists'],
    ['Wallet', 'Honest Pricing'],
  ]
  return (
    <section className="bg-brand-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map(([i, t], k) => (
          <Reveal key={t} delay={k * 80} className="flex items-center justify-center gap-3 text-white text-sm font-medium">
            <Icon name={i} size={24} className="text-brand-200" /> {t}
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function About() {
  const pts = [
    ['ShieldPlus', 'Preventive'], ['Wrench', 'Restorative'], ['Sparkles', 'Cosmetic'], ['Layers', 'Orthodontic'],
  ]
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 lg:grid-cols-2 items-center">
        <Reveal>
          <div className="aspect-[4/3] overflow-hidden rounded-[28px] shadow-[0_18px_48px_-16px_rgba(40,36,89,.35)]">
            <Photo src={asset('/assets/images/site/who-we-are.png')} alt="Modern AVM Smiles dental treatment room" label="Clinic photo" icon="Building2" />
          </div>
        </Reveal>
        <div>
          <SectionHead center={false} eyebrow="About AVM Smiles" title="Puducherry's Trusted Choice for Dental Care" />
          <Reveal delay={100} className="-mt-6 space-y-4 text-muted leading-relaxed">
            <p>At AVM Smiles, we focus on delivering the best dental clinic services in Puducherry through modern treatment approaches, attentive care, and rewarding patient experiences. Our clinic prioritizes preventive, restorative, cosmetic, and orthodontic dentistry to help patients achieve stronger, more confident smiles.</p>
            <p>From routine cleanings to full smile transformations, our team combines skill, technology, and genuine attention to provide the best dental care in Puducherry for every member of the family.</p>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {pts.map(([i, t], k) => (
              <Reveal key={t} delay={150 + k * 70} className="flex items-center gap-3 rounded-2xl bg-surface border border-line px-4 py-3 text-sm font-medium text-ink">
                <Icon name={i} size={20} className="text-brand-600" /> {t} care
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Services({ onPick }) {
  return (
    <section id="services" className="bg-section py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="What we offer" title="Our Dental Services" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 80}>
              <article className="group h-full flex flex-col overflow-hidden rounded-[20px] bg-white border border-line transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_48px_-16px_rgba(40,36,89,.3)]">
                <div className="relative z-10 aspect-[16/10] bg-brand-50">
                  <div className="h-full w-full overflow-hidden">
                    <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </div>
                  <span className="absolute bottom-0 left-5 grid h-12 w-12 translate-y-1/2 place-items-center rounded-full bg-white text-brand-600 shadow-md ring-4 ring-white transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon name={s.icon} size={24} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 pt-9">
                  <h3 className="text-lg font-semibold text-brand-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted flex-1">{s.text}</p>
                  <div className="mt-5 flex items-center justify-between">
                  <A href={`/${s.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700">
                    Read more <Icon name="ArrowRight" size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </A>
                  <A href="#book" onClick={() => onPick(s.title)} className="rounded-full bg-accent-50 px-3.5 py-1.5 text-xs font-semibold text-accent hover:bg-accent hover:text-white transition-colors duration-200">
                    Book Now!
                  </A>
                </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Why() {
  return (
    <section className="bg-brand-900 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead light eyebrow="Our promise" title="Why Choose AVM Smiles Puducherry?" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {why.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 90}>
              <div className="h-full rounded-[20px] border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/10">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-brand-300"><Icon name={w.icon} size={24} /></span>
                <h3 className="mt-5 text-lg font-semibold text-white">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-200">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Compare() {
  const [pos, setPos] = useState(50)
  const [idx, setIdx] = useState(0)
  const t = transformations[idx]
  return (
    <div className="mx-auto w-full max-w-md">
      <div className="relative aspect-square overflow-hidden rounded-[28px] shadow-[0_18px_48px_-16px_rgba(40,36,89,.35)] select-none">
        <img src={t.after} alt={`${t.title} after`} className="absolute inset-0 h-full w-full object-cover" />
        <img src={t.before} alt={`${t.title} before`} className="absolute inset-0 h-full w-full object-cover" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700">Before</span>
        <span className="absolute right-4 top-4 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">After</span>
        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white" style={{ left: `${pos}%` }}>
          <span className="absolute top-1/2 left-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-brand-600 shadow-lg"><Icon name="MoveHorizontal" size={20} /></span>
        </div>
        <input type="range" min="0" max="100" value={pos} onChange={(e) => setPos(+e.target.value)} aria-label="Compare before and after" className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {transformations.map((x, i) => (
          <button key={x.title} onClick={() => { setIdx(i); setPos(50) }} aria-pressed={i === idx} className={`cursor-pointer rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${i === idx ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-700 hover:bg-brand-100'}`}>
            {x.title}
          </button>
        ))}
      </div>
    </div>
  )
}

export function Gallery({ fullPage = false }) {
  return (
    <section id="gallery" className={fullPage ? 'bg-section py-14 lg:py-20' : 'py-20 lg:py-28'}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="Before & After Smile Gallery" title="Real Patient Transformations" text="Explore genuine smile makeovers created by our skilled Puducherry dental team." />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] items-start">
          <Reveal><Compare /></Reveal>
          <div className={`grid grid-cols-2 sm:grid-cols-3 gap-3 ${fullPage ? 'hidden' : ''}`}>
            {gallerySlots.map((g, i) => (
              <Reveal key={g.label} delay={i * 60}>
                <div className="group aspect-square overflow-hidden rounded-2xl">
                  <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-110">
                    <Photo src={g.src} alt={g.label} label={g.label} icon="Camera" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className={`mt-10 text-center ${fullPage ? 'hidden' : ''}`}>
          <Btn variant="primary" href="/gallery">View Full Gallery <Icon name="ArrowRight" size={18} className="transition-transform group-hover:translate-x-1" /></Btn>
        </Reveal>
      </div>
    </section>
  )
}

export function Process() {
  return (
    <section className="bg-section py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="How it works" title="Your Path to a Healthier Smile" />
        <Reveal className="relative">
          <div className="timeline-line hidden lg:block absolute left-[10%] right-[10%] top-8 h-0.5 bg-brand-200" />
          <ol className="relative grid gap-8 lg:grid-cols-5">
            {steps.map((s, i) => (
              <li key={s.title} className="flex lg:flex-col items-start lg:items-center gap-4 lg:text-center">
                <span className="relative z-10 grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white text-brand-600 border-4 border-brand-100 shadow-md">
                  <Icon name={s.icon} size={26} />
                  <span className="absolute -top-1 -right-1 grid h-6 w-6 place-items-center rounded-full bg-accent text-[11px] font-bold text-white">{i + 1}</span>
                </span>
                <div>
                  <h3 className="font-semibold text-brand-900">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="Testimonials" title="What Our Patients Say" />
        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-3 md:overflow-visible">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 100} className="snap-center shrink-0 w-[85%] md:w-auto">
              <figure className="h-full rounded-[20px] border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_48px_-16px_rgba(40,36,89,.3)]">
                <Icon name="Quote" size={32} className="text-brand-200" />
                <div className="mt-3 flex gap-1 text-amber-400" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((s) => <Icon key={s} name="Star" size={18} className="fill-current" />)}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-ink">{t}</blockquote>
                <figcaption className="mt-5 flex items-center gap-3 text-xs text-muted">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-50 text-brand-600"><Icon name="User" size={18} /></span>
                  Verified patient, Puducherry
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        {/* Google Reviews integration slot (add the embed here once the client provides it) */}
        <Reveal className="mt-8 rounded-2xl border border-dashed border-brand-200 bg-brand-50/50 p-6 text-center text-sm text-brand-500">
          <Icon name="Star" size={20} className="mx-auto mb-2" /> Google Reviews widget placeholder
        </Reveal>
      </div>
    </section>
  )
}

export function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="bg-section py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHead eyebrow="FAQs" title="Frequently Asked Questions" />
        <div className="space-y-3">
          {faqs.map(([q, a], i) => (
            <Reveal key={q} delay={i * 50}>
              <div className={`rounded-2xl border bg-white transition-colors duration-300 ${open === i ? 'border-brand-300' : 'border-line'}`}>
                <h3>
                  <button className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm sm:text-base font-semibold text-brand-900 cursor-pointer" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
                    {q}
                    <Icon name="ChevronDown" size={20} className={`shrink-0 text-brand-600 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
                  </button>
                </h3>
                <div className={`faq-body ${open === i ? 'open' : ''}`}>
                  <div><p className="px-5 pb-5 text-sm leading-relaxed text-muted">{a}</p></div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BookSection({ treatment, setTreatment }) {
  return (
    <section id="book" className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-900 py-20 lg:py-28">
      <img src={asset('/assets/images/site/clinic-cta.jpg')} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-luminosity" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 lg:grid-cols-2 items-center">
        <Reveal className="text-white">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-brand-200 mb-3">Book now</p>
          <h2 className="text-[clamp(1.625rem,3vw,2.5rem)] font-semibold leading-tight">Book Your Dental Consultation in Puducherry Today</h2>
          <p className="mt-5 leading-relaxed text-brand-100">Looking for the best dental clinic in Puducherry? AVM Smiles is dedicated to offering advanced treatments, personalized care, experienced specialists, and consistent patient satisfaction.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Btn variant="light" href={clinic.phoneHref}><Icon name="Phone" size={18} /> {clinic.phone}</Btn>
            <Btn variant="whatsapp" href={clinic.whatsappHref} target="_blank" rel="noreferrer"><Icon name="MessageCircle" size={18} /> WhatsApp</Btn>
          </div>
        </Reveal>
        <Reveal delay={120}><BookingForm id="book-form" treatment={treatment} setTreatment={setTreatment} /></Reveal>
      </div>
    </section>
  )
}

export function Location() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="Visit us" title="Our Location" />
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="overflow-hidden rounded-[28px] border border-line shadow-[0_18px_48px_-16px_rgba(40,36,89,.25)] h-80 lg:h-full min-h-80">
              <iframe title="AVM Smiles Puducherry on Google Maps" src={clinic.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full w-full border-0" />
            </div>
          </Reveal>
          <Reveal delay={100} className="space-y-4">
            {[
              ['MapPin', 'Address', clinic.address],
              ['Clock', 'Clinic Hours', clinic.hours],
              ['Phone', 'Phone', clinic.phone],
            ].map(([i, t, v]) => (
              <div key={t} className="flex gap-4 rounded-2xl border border-line bg-surface p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600"><Icon name={i} size={22} /></span>
                <div><p className="text-sm font-semibold text-brand-900">{t}</p><p className="mt-1 text-sm text-muted">{v}</p></div>
              </div>
            ))}
            <Btn variant="primary" href={clinic.mapsHref} target="_blank" rel="noreferrer" className="w-full"><Icon name="Navigation" size={18} /> Get Directions</Btn>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
