import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useNoIndex } from '../../hooks/useNoIndex'

type Props = {
  eyebrow?: string
  title: string
  tagline?: string
  backHref: string
  backLabel: string
  children: ReactNode
}

function AeroCorpLayout({ eyebrow, title, tagline, backHref, backLabel, children }: Props) {
  useNoIndex()

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-emerald-900 bg-[#0b2416] text-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 text-sm">
          <Link to={backHref} className="font-semibold tracking-wide text-emerald-100 hover:text-white">
            ← {backLabel}
          </Link>
          <a
            href="mailto:buckleykm@gmail.com?subject=The Aerospace Corporation"
            className="text-emerald-100 hover:text-white"
          >
            Email Kevin
          </a>
        </div>
        <div className="mx-auto max-w-3xl px-6 pb-14 pt-4">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300/80">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
          {tagline && <p className="mt-3 text-lg text-emerald-100/90">{tagline}</p>}
        </div>
      </header>

      {children}

      <footer className="border-t border-emerald-900 bg-[#0b2416] text-white">
        <div className="mx-auto max-w-3xl px-6 py-12 text-center">
          <p className="text-emerald-100/80">Questions about this application package?</p>
          <div className="mt-5 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:buckleykm@gmail.com?subject=The Aerospace Corporation"
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-[#0b2416] hover:bg-emerald-50"
            >
              Email Kevin
            </a>
            <Link
              to="/AeroCorp"
              className="rounded-md border border-emerald-800 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-900/40"
            >
              ← Back to overview
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AeroCorpLayout
