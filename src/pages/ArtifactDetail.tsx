import { Link, useParams } from 'react-router-dom'
import { artifacts } from '../content'

function ArtifactDetail() {
  const { slug } = useParams()
  const artifact = artifacts.find((a) => a.slug === slug)

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

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-emerald-900 bg-[#0b2416] text-white">
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

      {isCaseStudy ? (
        <>
          <section className="mx-auto max-w-3xl px-6 py-14">
            <h2 className="text-xl font-semibold tracking-tight text-[#0b2416] sm:text-2xl">
              The Challenge
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
              {artifact.challenge!.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </section>

          <section className="border-t border-emerald-100 bg-emerald-50/40">
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

          <section className="mx-auto max-w-3xl px-6 py-14">
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

          <section className="border-t border-emerald-100 bg-emerald-50/40">
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

          <section className="mx-auto max-w-3xl px-6 py-14">
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
      ) : (
        <section className="mx-auto max-w-3xl px-6 py-14">
          <h2 className="text-xl font-semibold tracking-tight text-[#0b2416] sm:text-2xl">
            Abstract
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
            {artifact.abstract!.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          {artifact.keywords && (
            <div className="mt-10">
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
