import { createContext } from 'react'

// Which landing section is in view (drives the menu's active item).
export const ActiveSection = createContext('home')

// Landing-page scroll-spy plumbing. When the scroll position itself changes the URL we must not
// scroll again in response, so the router-driven ScrollManager checks and clears skipScroll. lockUntil stops the spy
// rewriting the URL while a programmatic scroll to a section is still in flight.
export const spy = { skipScroll: false, lockUntil: 0 }

// Landing-page sections that have their own URL, in page order.
export const landingSections = [
  { id: 'home', path: '/' },
  { id: 'about', path: '/about' },
  { id: 'services', path: '/services' },
]
export const landingPaths = landingSections.map((s) => s.path)
