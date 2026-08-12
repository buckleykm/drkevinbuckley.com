import { Link } from 'react-router-dom'
import { artifacts } from '../content'

function ArtifactsIndex() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-emerald-900 bg-[#0b2416] text-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 text-sm">
          <Link to="/" className="font-semibold tracking-wide text-emerald-100 hover:text-white">
            ← Kevin Buckley
          </Link>
          <Link to="/resume" className="text-emerald-100 hover:text-white">
            Full Resume
          </Link>
        </div>
        <div className="mx-auto max-w-3xl px-6 pb-14 pt-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Artifacts</h1>
          <p className="mt-3 text-lg text-emerald-100/90">
            Case studies, proposed frameworks, and other work samples.
          </p>
          <p className="mt-4 text-xs text-emerald-200/60">
            All items listed here are the intellectual property of Kevin Buckley and, where
            applicable, named collaborators credited within each artifact.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-14">
        <div className="space-y-6">
          {artifacts.map((artifact) => (
            <Link
              key={artifact.slug}
              to={`/artifacts/${artifact.slug}`}
              className="block rounded-lg border border-emerald-100 bg-white p-6 transition hover:border-emerald-300 hover:shadow-sm"
            >
              <h2 className="text-lg font-semibold text-[#0b2416]">{artifact.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{artifact.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {artifact.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-4 inline-block text-sm font-medium text-emerald-600">
                View artifact →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ArtifactsIndex
