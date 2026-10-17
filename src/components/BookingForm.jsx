import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { Icon, Btn } from './ui'
import { clinic, services } from '../content/puducherry'

const field =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-all duration-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 focus:outline-none'

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || 'https://avmsmilesdental.com/api/email.php'
const SOURCE = 'AVM Smiles Puducherry'
const options = [...services.map((s) => s.title), 'General Checkup']

// Custom dropdown (button + listbox) with keyboard support, replaces the native <select>.
function TreatmentSelect({ id, value, onChange }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(-1)
  const root = useRef(null)

  useEffect(() => {
    if (!open) return
    const close = (e) => { if (!root.current?.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [open])

  const pick = (v) => { onChange(v); setOpen(false) }
  const onKey = (e) => {
    if (e.key === 'Escape') return setOpen(false)
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      if (!open) { setActive(Math.max(options.indexOf(value), 0)); return setOpen(true) }
      setActive((a) => (e.key === 'ArrowDown' ? Math.min(a + 1, options.length - 1) : Math.max(a - 1, 0)))
    } else if ((e.key === 'Enter' || e.key === ' ') && open && active >= 0) {
      e.preventDefault(); pick(options[active])
    }
  }

  return (
    <div ref={root} className="relative">
      <button
        type="button" id={id} role="combobox" aria-haspopup="listbox" aria-expanded={open} aria-controls={`${id}-list`}
        onClick={() => { setActive(Math.max(options.indexOf(value), 0)); setOpen(!open) }} onKeyDown={onKey}
        className={`${field} flex cursor-pointer items-center justify-between gap-2 text-left`}
      >
        <span className={value ? '' : 'text-muted/70'}>{value || 'Select treatment'}</span>
        <Icon name="ChevronDown" size={18} className={`shrink-0 text-brand-600 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <ul id={`${id}-list`} role="listbox" className="absolute z-30 mt-2 max-h-60 w-full overflow-auto rounded-xl border border-line bg-white p-1 shadow-[0_18px_48px_-16px_rgba(40,36,89,.35)]">
          {options.map((o, i) => (
            <li
              key={o} role="option" aria-selected={o === value}
              onMouseEnter={() => setActive(i)} onClick={() => pick(o)}
              className={`flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm ${i === active ? 'bg-brand-50 text-brand-700' : 'text-ink'} ${o === value ? 'font-semibold' : ''}`}
            >
              {o}{o === value && <Icon name="Check" size={16} className="text-brand-600" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function BookingForm({ id, treatment, setTreatment, dark = false }) {
  const [form, setForm] = useState({ name: '', phone: '', date: '' })
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)
  const [busy, setBusy] = useState(false)
  const navigate = useNavigate()

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    const er = {}
    if (form.name.trim().length < 2) er.name = 'Please enter your name'
    if (!/^(\+91|91|0)?[6-9]\d{9}$/.test(form.phone.replace(/[\s-]/g, ''))) er.phone = 'Enter a valid 10-digit mobile number'
    setErrors(er)
    if (Object.keys(er).length) return

    setBusy(true)
    const payload = { name: form.name.trim(), phone: form.phone.trim(), date: form.date, treatment: treatment || 'Not specified', source: SOURCE }
    try {
      const r = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const body = await r.json().catch(() => null)
      if (!r.ok || body?.success === false || body?.status === 'error') throw new Error(body?.message || 'failed')
      setForm({ name: '', phone: '', date: '' })
      setTreatment('')
      navigate('/thankyou')
    } catch (err) {
      console.error('Booking form:', err, payload)
      setErrors({ form: `Something went wrong${err.message && err.message !== 'failed' ? ` (${err.message})` : ''}. Please call us on ${clinic.phone}.` })
    } finally {
      setBusy(false)
    }
  }

  if (done) {
    return (
      <div className="rounded-3xl bg-white p-8 text-center shadow-[0_18px_48px_-16px_rgba(40,36,89,.35)]">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-50 text-brand-600"><Icon name="CircleCheck" size={32} /></span>
        <h3 className="mt-4 text-xl font-semibold text-brand-900">Request received</h3>
        <p className="mt-2 text-sm text-muted">Thank you. Our team will contact you shortly to confirm your appointment.</p>
        <button onClick={() => setDone(false)} className="mt-5 text-sm font-semibold text-brand-600 hover:underline cursor-pointer">Book another</button>
      </div>
    )
  }

  return (
    <form id={id} onSubmit={submit} noValidate className={`@container rounded-3xl p-6 sm:p-8 ${dark ? 'bg-white' : 'bg-white'} shadow-[0_18px_48px_-16px_rgba(40,36,89,.35)] border border-line`}>
      <h3 className="text-lg font-semibold text-brand-900 flex items-center gap-2">
        <Icon name="CalendarCheck" className="text-accent" /> Schedule Your Appointment
      </h3>
      <div className="mt-5 grid gap-4">
        <div>
          <label htmlFor={`${id}-name`} className="mb-1.5 block text-xs font-medium text-muted">Name</label>
          <input id={`${id}-name`} className={field} placeholder="Your full name" value={form.name} onChange={set('name')} autoComplete="name" aria-invalid={!!errors.name} />
          {errors.name && <p className="mt-1 text-xs text-accent flex items-center gap-1"><Icon name="CircleAlert" size={14} />{errors.name}</p>}
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className="mb-1.5 block text-xs font-medium text-muted">Phone Number</label>
          <input id={`${id}-phone`} className={field} placeholder="10-digit mobile number" inputMode="tel" value={form.phone} onChange={set('phone')} autoComplete="tel" aria-invalid={!!errors.phone} />
          {errors.phone && <p className="mt-1 text-xs text-accent flex items-center gap-1"><Icon name="CircleAlert" size={14} />{errors.phone}</p>}
        </div>
        <div className="grid gap-4 @md:grid-cols-2">
          <div>
            <label htmlFor={`${id}-date`} className="mb-1.5 block text-xs font-medium text-muted">Preferred Date</label>
            <input id={`${id}-date`} type="date" className={field} value={form.date} onChange={set('date')} min={new Date().toISOString().slice(0, 10)} />
          </div>
          <div>
            <label htmlFor={`${id}-tx`} className="mb-1.5 block text-xs font-medium text-muted">Treatment Required</label>
            <TreatmentSelect id={`${id}-tx`} value={treatment} onChange={setTreatment} />
          </div>
        </div>
        {errors.form && <p className="text-xs text-accent">{errors.form}</p>}
        <Btn variant="accent" type="submit" disabled={busy} className="w-full mt-1">
          {busy ? <Icon name="Loader" className="animate-spin" size={18} /> : <Icon name="Send" size={18} />}
          Book Appointment
        </Btn>
      </div>
    </form>
  )
}
