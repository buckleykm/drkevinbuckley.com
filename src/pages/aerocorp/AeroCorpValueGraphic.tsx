import AeroCorpLayout from './AeroCorpLayout'

function AeroCorpValueGraphic() {
  return (
    <AeroCorpLayout
      eyebrow="The Aerospace Corporation · Career Value Graphic"
      title="Career Value Graphic"
      tagline="A one-page visual snapshot of career highlights, core strengths, and measurable results."
      backHref="/AeroCorp"
      backLabel="Application Overview"
    >
      <div className="border-b border-emerald-100 bg-emerald-50/40">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <p className="text-sm text-slate-600">
            Career timeline, transformational strengths, executive expertise, and dynamic results
            at a glance.
          </p>
          <a
            href="/aerocorp/kevin-buckley-value-graphic-aerospace.pdf"
            download
            className="rounded-md bg-[#0b2416] px-4 py-2 text-sm font-medium text-white hover:bg-emerald-900"
          >
            Download PDF
          </a>
        </div>
      </div>

      <section className="mx-auto max-w-3xl px-6 py-14">
        <img
          src="/aerocorp/value-graphic.png"
          alt="Kevin Buckley career value graphic: career timeline from military intelligence roles through Director of Innovation and Technology, Director of Technology Products and Services, Government Program Manager, Acting ISD Conservation Section Chief, and Information Technology Portfolio Manager, plus transformational strengths, executive expertise areas, and dynamic results including increasing portfolio efficiency by 40% and directing a $38M Agile software program."
          className="w-full rounded-lg border border-emerald-100 shadow-sm"
        />
      </section>
    </AeroCorpLayout>
  )
}

export default AeroCorpValueGraphic
