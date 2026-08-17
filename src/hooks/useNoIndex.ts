import { useEffect } from 'react'

// Keeps unlisted pages out of search engine indexes without affecting the
// rest of the site, which has no robots meta tag and is indexable by default.
export function useNoIndex() {
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    return () => {
      document.head.removeChild(meta)
    }
  }, [])
}
