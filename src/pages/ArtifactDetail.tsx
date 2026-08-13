import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { artifacts } from '../content'

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function ArtifactDetail() {
  const { slug } = useParams()
  const artifact = artifacts.find((a) => a.slug === slug)
  const headerRef = useRef<HTMLElement>(null)
  const [headerHeight, setHeaderHeight] = useState<number | null>(null)
  const [mobileTocOpen, setMobileTocOpen] = useState(false)

  useEffect(() => {
    function measure() {
      if (headerRef.current) setHeaderHeight(headerRef.current.getBoundingClientRect().height)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [artifact])

  if (!artifact) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-6 text-center">
        <h1 className="text-2xl font-semibold text-[#0b2416]">Artifact not found</h1>
        <Link to="/artifacts" className="text-emerald-600 hover:underline">
          ← Back to Artifacts
        </Link>
      </div>
    )
  }

  const isCaseStudy = Boolean(artifact.challenge)
  const isWhitePaper = Boolean(artifact.sections)

  const tocItems: { id: string; label: string }[] = []
  if (isCaseStudy) {
    tocItems.push(
      { id: 'the-challenge', label: 'The Challenge' },
      { id: 'the-solution', label: 'The Solution' },
      { id: 'how-the-framework-works', label: 'How the Framework Works' },
      { id: 'results-impact', label: 'Results & Impact' },
      { id: 'benefits', label: 'Benefits' },
    )
  } else if (isWhitePaper) {
    artifact.sections!.forEach((section) => {
      if (section.heading) tocItems.push({ id: slugify(section.heading), label: section.heading })
    })
  } else {
    const headingText = artifact.abstractHeading ?? 'Abstract'
    if (headingText !== '') tocItems.push({ id: 'abstract', label: headingText })
  }
  if (artifact.keywords) tocItems.push({ id: 'keywords', label: 'Keywords' })
  if (artifact.references) tocItems.push({ id: 'references', label: 'References' })

  return (
    <div className="min-h-screen bg-white">
      <header ref={headerRef} className="border-b border-emerald-900 bg-[#0b2416] text-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 text-sm">
          <Link to="/artifacts" className="font-semibold tracking-wide text-emerald-100 hover:text-white">
            ← Artifacts
          </Link>
          <Link to="/resume" className="text-emerald-100 hover:text-white">
            Full Resume
          </Link>
        </div>
        <div className="mx-auto max-w-3xl px-6 pb-14 pt-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{artifact.title}</h1>
          <p className="mt-3 text-lg text-emerald-100/90">{artifact.tagline}</p>
          {artifact.meta && (
            <p className="mt-2 text-sm text-emerald-200/60">{artifact.meta}</p>
          )}
          <div className="mt-5 flex flex-wrap gap-2">
            {artifact.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-emerald-700/60 bg-emerald-900/40 px-3 py-1 text-xs font-medium text-emerald-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {tocItems.length > 0 && (
        <>
          <nav
            style={{ top: (headerHeight ?? 140) + 32 }}
            className="hidden max-h-[calc(100vh-8rem)] w-52 overflow-y-auto xl:fixed xl:left-[max(1rem,calc(50%-37.5rem))] xl:block"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700/70">
              On This Page
            </p>
            <ul className="mt-3 space-y-2 border-l border-emerald-100 pl-4 text-sm">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-slate-600 hover:text-emerald-700">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-b border-emerald-100 xl:hidden">
            <button
              type="button"
              onClick={() => setMobileTocOpen((open) => !open)}
              aria-expanded={mobileTocOpen}
              className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-3 text-xs font-semibold uppercase tracking-wide text-emerald-700"
            >
              On This Page
              <span className={`transition-transform ${mobileTocOpen ? 'rotate-180' : ''}`}>▾</span>
            </button>
            {mobileTocOpen && (
              <ul className="mx-auto max-w-3xl space-y-1 px-6 pb-4 text-sm">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setMobileTocOpen(false)}
                      className="block py-1.5 text-slate-600 hover:text-emerald-700"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}

      {isCaseStudy ? (
        <>
          <section id="the-challenge" className="mx-auto max-w-3xl px-6 py-14">
            <h2 className="text-xl font-semibold tracking-tight text-[#0b2416] sm:text-2xl">
              The Challenge
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
              {artifact.challenge!.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </section>

          <section id="the-solution" className="border-t border-emerald-100 bg-emerald-50/40">
            <div className="mx-auto max-w-3xl px-6 py-14">
              <h2 className="text-xl font-semibold tracking-tight text-[#0b2416] sm:text-2xl">
                The Solution
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
                {artifact.solutionIntro!.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <div className="mt-8 rounded-lg border border-emerald-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  Key Concept: Net Product Value
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {artifact.netProductValueCallout}
                </p>
              </div>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-[#0b2416]">Value Score factors</h3>
                  <dl className="mt-3 space-y-4">
                    {artifact.valueFactors!.map((f) => (
                      <div key={f.factor}>
                        <dt className="text-sm font-semibold text-emerald-700">{f.factor}</dt>
                        <dd className="mt-1 text-sm text-slate-600">{f.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0b2416]">Cost / Drag Score factors</h3>
                  <dl className="mt-3 space-y-4">
                    {artifact.costFactors!.map((f) => (
                      <div key={f.factor}>
                        <dt className="text-sm font-semibold text-emerald-700">{f.factor}</dt>
                        <dd className="mt-1 text-sm text-slate-600">{f.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </section>

          <section id="how-the-framework-works" className="mx-auto max-w-3xl px-6 py-14">
            <h2 className="text-xl font-semibold tracking-tight text-[#0b2416] sm:text-2xl">
              How the Framework Works
            </h2>
            <ol className="mt-6 space-y-6">
              {artifact.process!.map((step, i) => (
                <li key={step.step} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0b2416]">{step.step}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="results-impact" className="border-t border-emerald-100 bg-emerald-50/40">
            <div className="mx-auto max-w-3xl px-6 py-14">
              <h2 className="text-xl font-semibold tracking-tight text-[#0b2416] sm:text-2xl">
                Results &amp; Impact
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
                {artifact.resultsIntro!.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6 rounded-lg border border-emerald-200 bg-white p-6 sm:grid-cols-4">
                {artifact.resultStats!.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold tracking-tight text-[#0b2416] sm:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-wide text-emerald-700/70">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="benefits" className="mx-auto max-w-3xl px-6 py-14">
            <h2 className="text-xl font-semibold tracking-tight text-[#0b2416] sm:text-2xl">
              Benefits
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {artifact.benefits!.map((b) => (
                <div key={b.title} className="rounded-lg border border-emerald-100 bg-white p-5">
                  <h3 className="font-semibold text-[#0b2416]">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 leading-relaxed text-slate-600">{artifact.closing}</p>
          </section>
        </>
      ) : isWhitePaper ? (
        <>
          {artifact.sections!.map((section, i) => (
            <section
              key={section.heading || i}
              id={section.heading ? slugify(section.heading) : undefined}
              className={
                i % 2 === 1
                  ? 'border-t border-emerald-100 bg-emerald-50/40'
                  : undefined
              }
            >
              <div className="mx-auto max-w-3xl px-6 py-14">
                {section.heading && (
                  <h2 className="text-xl font-semibold tracking-tight text-[#0b2416] sm:text-2xl">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs && (
                  <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
                    {section.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                )}
                {section.bullets && (
                  <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-slate-600">
                    {section.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </>
      ) : (
        <section
          id={(artifact.abstractHeading ?? 'Abstract') !== '' ? 'abstract' : undefined}
          className="mx-auto max-w-3xl px-6 py-14"
        >
          {(artifact.abstractHeading ?? 'Abstract') !== '' && (
            <h2 className="text-xl font-semibold tracking-tight text-[#0b2416] sm:text-2xl">
              {artifact.abstractHeading ?? 'Abstract'}
            </h2>
          )}
          <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
            {artifact.abstract!.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>
      )}

      {(artifact.keywords || artifact.references) && (
        <section className="border-t border-emerald-100">
          <div className="mx-auto max-w-3xl px-6 py-14">
            {artifact.keywords && (
              <div id="keywords">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                  Keywords
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {artifact.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="rounded bg-emerald-50 px-2 py-1 text-sm text-emerald-700"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {artifact.references && (
              <div id="references" className={artifact.keywords ? 'mt-10' : undefined}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                  References
                </h3>
                <ol className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600">
                  {artifact.references.map((ref) => (
                    <li key={ref}>{ref}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </section>
      )}

      <footer className="border-t border-emerald-900 bg-[#0b2416] text-white">
        <div className="mx-auto max-w-3xl px-6 py-12 text-center">
          <p className="text-emerald-100/80">Want to talk through how this could apply to your portfolio?</p>
          <div className="mt-5 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:buckleykm@gmail.com?subject=Let's connect"
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-[#0b2416] hover:bg-emerald-50"
            >
              Email Kevin
            </a>
            <Link
              to="/artifacts"
              className="rounded-md border border-emerald-800 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-900/40"
            >
              ← Back to Artifacts
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ArtifactDetail
