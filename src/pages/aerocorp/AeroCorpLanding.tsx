import { Link } from 'react-router-dom'
import AeroCorpLayout from './AeroCorpLayout'

const items = [
  {
    slug: 'resume',
    title: 'Tailored Resume',
    summary:
      "A resume customized for the Portfolio Director, Software Integration Office role, emphasizing the portfolio management discipline built from scratch across a 100+ application portfolio at the USDA — the closest analog to standing up SIO's operating rhythm.",
  },
  {
    slug: 'value-graphic',
    title: 'Career Value Graphic',
    summary:
      'A one-page visual snapshot of career highlights, core strengths, and measurable results across two decades of technology and program leadership, including military intelligence service.',
  },
  {
    slug: '90-day-plan',
    title: '30/60/90-Day Entry Plan',
    summary:
      "A structured plan for the first 90 days in the role — listening and assessment, standing up a lightweight portfolio operating rhythm with the team, then executing and demonstrating value to SIO and ISCD leadership.",
  },
]

function AeroCorpLanding() {
  return (
    <AeroCorpLayout
      eyebrow="The Aerospace Corporation · Application Materials"
      title="Portfolio Director, Software Integration Office"
      tagline="Supporting materials prepared for this application — not indexed or linked from the public site."
      backHref="/"
      backLabel="Kevin Buckley"
    >
      <section className="mx-auto max-w-3xl px-6 py-14">
        <p className="leading-relaxed text-slate-600">
          These materials were prepared specifically for the Portfolio Director, Software
          Integration Office opportunity at The Aerospace Corporation: a tailored resume, a
          one-page career value graphic, and a 30/60/90-day entry plan for standing up SIO's
          portfolio management practice from the ground up. Each item below links to a full page
          with a downloadable PDF.
        </p>

        <div className="mt-10 space-y-6">
          {items.map((item) => (
            <Link
              key={item.slug}
              to={`/AeroCorp/${item.slug}`}
              className="block rounded-lg border border-emerald-100 bg-white p-6 transition hover:border-emerald-300 hover:shadow-sm"
            >
              <h2 className="text-lg font-semibold text-[#0b2416]">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.summary}</p>
              <span className="mt-4 inline-block text-sm font-medium text-emerald-600">
                View →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </AeroCorpLayout>
  )
}

export default AeroCorpLanding
