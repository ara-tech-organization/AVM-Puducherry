import { asset } from '../lib/asset'

export const clinic = {
  name: 'AVM Smiles',
  // contact details come from the Puducherry "Contact Us" page of the client's content doc
  phone: '+91 8071404435',
  phoneHref: 'tel:+918071404435',
  // TODO: confirm the WhatsApp number with the client
  whatsappHref: 'https://wa.me/918071404435',
  email: 'avmsmiles.puducherry@gmail.com',
  address: 'First Floor, Door No: 34, Maraimalai Adigal Salai, Pondicherry, Puducherry - 605001.',
  shortAddress: 'Maraimalai Adigal Salai, Puducherry',
  hours: 'Monday - Saturday: 9:00 AM - 7:00 PM', // Contact Us page says 7 PM; the doc's footer outline says 8 PM
  mapsHref: 'https://maps.app.goo.gl/d66Xn2KXAS7VQmRG8',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.625136302697!2d79.81841467453184!3d11.93115523683547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361cf6cbd09d1%3A0x82e9f96fde276992!2sAVMSmiles%20Dental%20Wellness!5e0!3m2!1sen!2sin!4v1792145109865!5m2!1sen!2sin',
  // from the Contact Us page of the content doc; it gives no YouTube URL, so that icon is hidden until one is added
  social: { facebook: 'https://www.facebook.com/avmsmiles.puducherry', instagram: 'https://www.instagram.com/avmsmiles.puducherry/', youtube: '' },
}

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Services', href: '/#services', dropdown: true },
  { label: 'Smile Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact-us' },
]

export const heroChips = [
  'Experienced Dental Team',
  'Advanced Digital Diagnostics',
  'Gentle, Comfort-First Treatment',
  'Individualized Smile Plans',
  'Clear, Affordable Pricing',
]

export const services = [
  { icon: 'Scissors', title: 'Tooth Extraction', slug: 'tooth-extraction', image: asset('/assets/images/site/tooth-extraction.webp'), text: 'Safe, well-managed tooth extractions performed by experienced dentists using current techniques and effective anesthesia.' },
  { icon: 'Crown', title: 'Crowns & Bridges', slug: 'dental-crowns-and-bridges', image: asset('/assets/images/site/dental-crowns-and-bridges.jpg'), text: 'Replace missing or damaged teeth with strong, natural-looking crowns and bridges built for lasting use.' },
  { icon: 'Smile', title: 'Dentures', slug: 'dental-dentures', image: asset('/assets/images/site/dental-dentures.png'), text: 'Comfortable removable and fixed denture options crafted to replace missing teeth and restore your smile.' },
  { icon: 'Activity', title: 'Root Canal Treatment', slug: 'root-canal-treatment', image: asset('/assets/images/site/root-canal-treatment.jpg'), text: 'Relieve pain and treat infected teeth through advanced root canal care that preserves natural tooth structure.' },
  { icon: 'Sparkles', title: 'Teeth Whitening', slug: 'teeth-whitening-treatment', image: asset('/assets/images/site/teeth-whitening-treatment.webp'), text: 'Effective whitening treatments that lift persistent stains and brighten your smile several shades.' },
  { icon: 'Droplets', title: 'Scaling & Polishing', slug: 'dental-scaling-polishing', image: asset('/assets/images/site/dental-scaling-polishing.jpg'), text: 'Detailed cleaning sessions that clear plaque, tartar, and stains to support optimal oral health.' },
  { icon: 'Layers', title: 'Invisible Aligners', slug: 'invisible-aligners', image: asset('/assets/images/site/invisible-aligners.webp'), text: 'Clear, removable aligners that gradually shift teeth into place, offering a discreet alternative to braces.' },
  { icon: 'Grip', title: 'Braces', slug: 'invisible-braces', image: asset('/assets/images/site/invisible-braces.jpg'), text: 'Full orthodontic care for children, teens, and adults to address alignment and bite concerns.' },
  { icon: 'Gem', title: 'Veneers', slug: 'dental-veneer-treatment', image: asset('/assets/images/site/dental-veneer-treatment.jpg'), text: 'Custom-crafted veneers designed to improve the shape, shade, and overall look of your teeth.' },
  { icon: 'Anchor', title: 'Dental Implants', slug: 'dental-implants-treatment', image: asset('/assets/images/site/dental-implants-treatment.webp'), text: 'Long-term tooth replacement solutions that look, feel, and function just like natural teeth.' },
]

export const why = [
  { icon: 'Cpu', title: 'Modern Technology', text: 'Digital diagnostic tools and updated treatment methods for precise, comfortable dental care.' },
  { icon: 'GraduationCap', title: 'Skilled Specialists', text: 'Dentists with focused training and hands-on experience across multiple dental fields.' },
  { icon: 'UserCheck', title: 'Patient-First Approach', text: "Personalized treatment plans shaped around each patient's specific needs and goals." },
  { icon: 'ShieldCheck', title: 'Safety & Hygiene', text: 'Rigorous sterilization procedures that align with international clinical standards.' },
  { icon: 'Wallet', title: 'Transparent Costs', text: 'Clear treatment pricing with no hidden charges or unexpected fees.' },
  { icon: 'Armchair', title: 'Welcoming Clinic', text: 'A comfortable, friendly space where patients feel at ease during every visit.' },
]

export const steps = [
  { icon: 'Stethoscope', title: 'Consultation', text: 'Complete dental examination alongside a discussion of your treatment options.' },
  { icon: 'ScanLine', title: 'Diagnosis', text: 'Digital evaluation used to develop an accurate treatment plan.' },
  { icon: 'ClipboardList', title: 'Personalized Treatment Plan', text: 'Customized care recommendations based on your dental needs.' },
  { icon: 'HeartPulse', title: 'Treatment', text: 'Skilled treatment delivered using modern techniques and equipment.' },
  { icon: 'CalendarClock', title: 'Follow-Up Care', text: 'Ongoing guidance to help maintain your oral health and smile.' },
]

export const testimonials = [
  'AVM Smiles Puducherry was excellent from start to finish. The dentist was patient and knowledgeable, and made sure I was comfortable throughout the treatment.',
  "I visited for a dental procedure and was impressed by the professionalism of the whole team. Modern technology combined with caring service made every visit pleasant.",
  'My time at AVM Smiles Puducherry was excellent, with dentists who were professional and friendly and explained each phase of treatment clearly. Highly recommended for quality care.',
]

export const faqs = [
  ['What is the best dental clinic in Puducherry?', 'AVM Smiles is a well-known, growing dental clinic in Puducherry recognized for its qualified dentists, modern technology, and personalized patient care for individuals and families.'],
  ['Do you have dental implants?', 'Yes, we provide dental implants for single, multiple, and full mouth tooth replacement, restoring both function and natural appearance.'],
  ['Are invisible aligners available?', 'Yes, we offer custom invisible aligners as a comfortable and discreet way to straighten teeth, a good alternative to traditional braces for many patients.'],
  ['How often should I visit the dentist?', "It's recommended to have a dental checkup every six months to maintain oral health and catch problems early."],
  ['Is teeth whitening safe?', 'Yes, professional teeth whitening is a safe and effective way to enhance your smile, performed under expert supervision for the best results.'],
  ['Do you offer emergency dental care?', 'Yes, we provide emergency dental treatment for tooth pain, infections, broken teeth, and injuries to relieve discomfort quickly.'],
]

export const gallerySlots = [
  { label: 'Modern treatment room', src: asset('/assets/images/site/clinic-interior.jpg') },
  { label: 'Dental chair and equipment', src: asset('/assets/images/site/who-we-are.png') },
  { label: 'Our clinic', src: asset('/assets/images/site/clinic-cta.jpg') },
  { label: 'A higher standard of dental care', src: asset('/assets/images/site/higher-standard.jpg') },
  { label: 'Smiling patient', src: asset('/assets/images/site/hero-patient.jpg') },
  { label: 'Dental implants care', src: asset('/assets/images/site/dental-implants-treatment.webp') },
]

export const transformations = [
  { title: 'Complete Smile Transformation', before: asset('/assets/images/site/before-1.png'), after: asset('/assets/images/site/after-1.png') },
  { title: 'Smile Makeover', before: asset('/assets/images/site/before-2.png'), after: asset('/assets/images/site/after-2.png') },
  { title: 'Restored Confidence', before: asset('/assets/images/site/before-3.jpg'), after: asset('/assets/images/site/after-3.jpg') },
]
