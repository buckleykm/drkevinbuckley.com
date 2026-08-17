import AeroCorpLayout from './AeroCorpLayout'

const principles = [
  'Listen before changing anything — understand how SIO and its people actually work before introducing new process.',
  'Build lightweight, sustainable practices, not heavy process for its own sake.',
  'Create visible early wins while investing in long-term portfolio capability.',
  'Develop people alongside process — coaching TPMs is part of the operating rhythm from day one, not an afterthought.',
]

const phases = [
  {
    range: 'Days 1–30',
    name: 'Listen, Learn, and Assess',
    color: '#0b2416',
    focus:
      'Build relationships and get an honest, first-hand picture of the portfolio, the team, and the customer landscape before proposing any changes.',
    bullets: [
      'Complete 1:1s with every TPM, SIO leadership, and key ISCD stakeholders; begin relationships with priority customers.',
      'Inventory all 5–10 active projects — scope, deliverable type (software, systems engineering, technical analysis), status, budget, and risk.',
      'Assess current reporting, governance, and communication practices (or the lack of them, given SIO is new) to identify what to keep, fix, or build.',
      "Shadow customer engagement and strategy sessions to understand voice-of-customer and how SIO's charter translates into day-to-day priorities.",
      'Identify one or two quick wins — a stalled deliverable to unblock, a reporting gap to close — to build early credibility without overreaching.',
    ],
    deliverable:
      '30-Day Deliverable: A portfolio baseline assessment, stakeholder relationship map, and initial risk register, shared with SIO leadership.',
  },
  {
    range: 'Days 31–60',
    name: 'Design, Align, and Stand Up the Operating Rhythm',
    color: '#b8621b',
    focus:
      'Convert what I learned in the first 30 days into a working portfolio management practice, built with the team rather than imposed on it.',
    bullets: [
      'Stand up reporting cadences, status-review formats, and stakeholder communication practices sized to a 5–10 project portfolio — disciplined, not bureaucratic.',
      'Establish governance controls for cost, schedule, and scope tracking, with clear escalation paths.',
      'Build individual development plans with each TPM — creating stretch opportunities for early- and mid-career high performers, and a growth path for the most senior TPMs.',
      'Begin contributing directly to SIO work products: customer portfolio analyses and ISCD capability offerings.',
      'Get fluent in the SIO tech-investment planning cycle and the full RFP-to-close-out execution path for at least one active project.',
      'Socialize the new practices with customers and stakeholders; adjust based on what actually helps them, not just what looks good on paper.',
    ],
    deliverable:
      '60-Day Deliverable: A live portfolio management framework in use across all active projects, individual TPM development plans, and a first authored contribution to SIO strategy documentation.',
  },
  {
    range: 'Days 61–90',
    name: 'Execute, Demonstrate Value, and Set the Next Roadmap',
    color: '#7a1f2b',
    focus:
      "Run the portfolio end-to-end under the new operating rhythm and show SIO leadership concrete proof it's working.",
    bullets: [
      'Take full accountability for on-time, on-budget delivery across the entire portfolio under the new reporting and governance model.',
      'Lead the first complete status-review and reporting cycle end-to-end, incorporating stakeholder feedback from the prior 60 days.',
      'Deliver the first complete customer portfolio analysis or capability offering as a finished SIO work product.',
      'Formalize the TPM coaching cadence and identify the first concrete leadership growth opportunity for a high-performing TPM.',
      "Bring forward specific, evidence-based input on SIO's organizational structure and business processes as the organization matures.",
      'Present a 90-day results summary and a proposed roadmap for the next quarter to SIO and ISCD leadership.',
    ],
    deliverable:
      '90-Day Deliverable: A fully operational portfolio management practice, demonstrated stakeholder confidence, and an agreed roadmap for the next 90 days.',
  },
]

const glance = [
  {
    day: 'Day 30',
    items: [
      'Relationship map built across TPMs, SIO leadership, ISCD, and key customers',
      'Full inventory and risk assessment of the 5–10 project portfolio',
      'Baseline understanding of SIO strategy and charter',
    ],
  },
  {
    day: 'Day 60',
    items: [
      'Portfolio reporting cadence, status reviews, and stakeholder comms live',
      'TPM coaching plans in place for every team member',
      'First contribution to SIO strategy work products',
    ],
  },
  {
    day: 'Day 90',
    items: [
      'Full ownership of on-time, on-budget delivery across the portfolio',
      'First completed customer portfolio analysis delivered',
      'Next-quarter roadmap presented to leadership',
    ],
  },
]

const successMeasures = [
  'Every active project tracked on-time and on-budget against committed milestones, with no surprises in status reviews.',
  'Portfolio reporting and governance practices adopted and trusted by TPMs, SIO leadership, and customers alike.',
  'Measurable growth for at least one TPM — a new scope of ownership, a stretch assignment, or a step toward promotion.',
  "Direct, visible contributions to SIO's customer strategy and technical investment planning, not just portfolio execution.",
  "SIO leadership has clear, evidence-based input to keep shaping the organization's structure and processes as it matures.",
]

function AeroCorp90DayPlan() {
  return (
    <AeroCorpLayout
      eyebrow="The Aerospace Corporation · 90-Day Entry Plan"
      title="30/60/90-Day Entry Plan"
      tagline="Portfolio Director, Software Integration Office"
      backHref="/AeroCorp"
      backLabel="Application Overview"
    >
      <div className="border-b border-emerald-100 bg-emerald-50/40">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <p className="text-sm text-slate-600">A starting hypothesis, not a fixed script.</p>
          <a
            href="/aerocorp/kevin-buckley-90-day-plan-aerospace.pdf"
            download
            className="rounded-md bg-[#0b2416] px-4 py-2 text-sm font-medium text-white hover:bg-emerald-900"
          >
            Download PDF
          </a>
        </div>
      </div>

      <section className="mx-auto max-w-3xl px-6 py-14">
        <p className="leading-relaxed text-slate-600">
          Because SIO is a brand-new organization, my first 90 days are about earning trust,
          gaining full visibility into the portfolio, and standing up a disciplined but
          lightweight operating rhythm before scaling execution — the same sequence I used to
          build portfolio management discipline from scratch across a fragmented, 100+
          application portfolio at the USDA. This plan is a starting hypothesis, not a fixed
          script; I will pressure-test it with the team and adjust in the first two weeks.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight text-[#0b2416] sm:text-2xl">
          Guiding Principles
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
          {principles.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </section>

      {phases.map((phase, i) => (
        <section
          key={phase.range}
          className={i % 2 === 1 ? 'border-t border-emerald-100 bg-emerald-50/40' : 'border-t border-emerald-100'}
        >
          <div className="mx-auto max-w-3xl px-6 py-14">
            <div
              className="inline-block rounded px-3 py-1 text-xs font-bold uppercase tracking-wide text-white"
              style={{ backgroundColor: phase.color }}
            >
              {phase.range}
            </div>
            <h2 className="mt-3 text-xl font-semibold tracking-tight text-[#0b2416] sm:text-2xl">
              {phase.name}
            </h2>
            <p className="mt-3 text-sm font-medium text-slate-500">Focus: {phase.focus}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              {phase.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="mt-6 rounded-lg border border-emerald-200 bg-white p-4 text-sm text-slate-700">
              {phase.deliverable}
            </div>
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-3xl px-6 py-14">
        <h2 className="text-xl font-semibold tracking-tight text-[#0b2416] sm:text-2xl">
          90 Days at a Glance
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {glance.map((col) => (
            <div key={col.day} className="rounded-lg border border-emerald-100 p-4">
              <h3 className="font-semibold text-[#0b2416]">{col.day}</h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                {col.items.map((item) => (
                  <li key={item}>– {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-emerald-100 bg-emerald-50/40">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <h2 className="text-xl font-semibold tracking-tight text-[#0b2416] sm:text-2xl">
            How I'll Measure Success
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
            {successMeasures.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      </section>
    </AeroCorpLayout>
  )
}

export default AeroCorp90DayPlan
