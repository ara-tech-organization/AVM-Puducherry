import { useEffect } from 'react'

function setMeta(selector, attr, value) {
  const el = document.querySelector(selector)
  if (!el) return () => {}
  const prev = el.getAttribute(attr)
  el.setAttribute(attr, value)
  return () => el.setAttribute(attr, prev)
}

// Gives a page its own <title>, description, keywords, canonical and social tags,
// restoring the previous values when the page unmounts.
export function useSeo(page) {
  useEffect(() => {
    if (!page) return
    const prevTitle = document.title
    document.title = page.metaTitle
    const undo = [
      setMeta('meta[name="description"]', 'content', page.metaDescription),
      setMeta('meta[name="keywords"]', 'content', page.metaKeywords),
      setMeta('meta[property="og:title"]', 'content', page.metaTitle),
      setMeta('meta[property="og:description"]', 'content', page.metaDescription),
      setMeta('meta[name="twitter:title"]', 'content', page.metaTitle),
      setMeta('link[rel="canonical"]', 'href', `https://avmsmilesdental.com${import.meta.env.BASE_URL.replace(/\/$/, '')}${page.path}`),
    ]
    return () => {
      document.title = prevTitle
      undo.forEach((u) => u())
    }
  }, [page])
}
