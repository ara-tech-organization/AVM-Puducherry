/* global process */
// Writes dist/<slug>/index.html for each service page with that page's own
// <title>, description, keywords, canonical and social tags, so crawlers that do not run
// JavaScript see the correct meta data instead of the homepage's.
import fs from 'node:fs'
import path from 'node:path'

const dist = path.resolve('dist')
const pages = {
  ...JSON.parse(fs.readFileSync('src/content/services.json', 'utf8')),
  ...JSON.parse(fs.readFileSync('src/content/static-pages.json', 'utf8')),
}
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

const setTag = (html, re, replacement) => {
  if (!re.test(html)) throw new Error(`prerender: tag not found for ${re}`)
  return html.replace(re, replacement)
}

for (const p of Object.values(pages)) {
  const url = `https://avmsmilesdental.com${(process.env.VITE_BASE || '/').replace(/\/$/, '')}/${p.slug}`
  let h = template
  h = setTag(h, /<title>.*?<\/title>/s, `<title>${esc(p.metaTitle)}</title>`)
  h = setTag(h, /<meta name="description" content="[^"]*"/, `<meta name="description" content="${esc(p.metaDescription)}"`)
  h = setTag(h, /<meta name="keywords" content="[^"]*"/, `<meta name="keywords" content="${esc(p.metaKeywords)}"`)
  h = setTag(h, /<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${url}"`)
  h = setTag(h, /<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${esc(p.metaTitle)}"`)
  h = setTag(h, /<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${esc(p.metaDescription)}"`)
  h = setTag(h, /<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${esc(p.metaTitle)}"`)
  if (p.noindex) h = setTag(h, /<meta name="robots" content="[^"]*"/, '<meta name="robots" content="noindex, nofollow"')
  const dir = path.join(dist, p.slug)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), h)
}

