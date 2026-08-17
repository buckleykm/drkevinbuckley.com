import AeroCorpLayout from './AeroCorpLayout'

const highlights = [
  {
    title: 'Aligning Technology with Business Needs',
    body: 'At the USDA, optimized program alignment with NCRS requirements by enhancing relations with government product owners. Liaised with three DevOps groups to improve infrastructure support across AWS.',
  },
  {
    title: 'Creating World-Class PMOs',
    body: 'Provided leadership at the USDA that increased the efficiency of a portfolio of more than 100 applications by 40%. Earlier, directed a $38M Agile software development program while maturing enterprise delivery, increasing stakeholder confidence, and elevating program performance across the portfolio.',
  },
  {
    title: 'Building High-Performance, Highly Motivated Teams',
    body: 'At the USDA, motivated a team of 6 Federal staff and 700 contractors by providing inspirational and disciplined leadership and actively promoting continuing professional development. At Disability Insurance Services, grew a single-person IT function into a multi-department, cross-domain team driving innovation and providing enterprise support.',
  },
]

const skills = [
  'Strategic Planning | Change Management',
  'Enterprise IT Strategy and Governance',
  'IT Modernization and Innovation',
  'Agile Project Management (including SAFe)',
  'IT Portfolio Management',
  'Enterprise-Scale Software Deployments',
  'Large-Scale Program Management',
  'Team Building | Leadership Development',
  'Vendor Management | Resource Optimization',
  'Cloud Infrastructure | AWS | GCP',
  'Business Analytics and Automation',
  'Process Improvement and Optimization',
]

const experience = [
  {
    org: 'USDA Farm Production and Conservation Business Center',
    location: 'Lake Elsinore, CA',
    period: '2023 – Present',
    roles: [
      {
        title: 'Information Technology Portfolio Manager',
        period: '2025 – Present',
        intro:
          "Promoted to establish formal portfolio management discipline within the National Conservation Resource Services Mission (NCRS) area, where fragmented oversight and inconsistent delivery practices were limiting visibility and alignment across a portfolio of >100 applications. Established baseline portfolio management practices for NCRS mission area. Developed and responsibly managed policies and procedures that govern portfolio operations including quality assurance, release management, and infrastructure migration plans.",
        bullets: [
          'Provided strategic leadership at the enterprise level. Enhanced executive visibility and decision-making across the NCRS. Partnered with the Software Delivery Chief and CTO to align IT and business strategies across a portfolio of >100 applications. Standardized governance controls and ensure compliance with cost, schedule, and scope objectives.',
          'Elevated maturity and accountability of enterprise delivery by implementing a sustainable portfolio management framework and driving its adoption by peer IT portfolio managers. Streamlined contract recompete processes and standardized related contract language, while ensuring 100% compliance with release, quality assurance, and infrastructure migration controls.',
        ],
      },
      {
        title: 'Acting ISD Conservation Section Chief',
        period: '2024 – 2025',
        intro:
          "Briefly deployed (12/2024 – 02/2025) to ensure continuity of operations during leadership transition for a $150M contract portfolio while serving concurrently as a Government Program Manager. Planned and directed the efforts of five Agile software development and support services teams, while ensuring the operational continuity of a diverse applications portfolio, maintaining performance and stability across the agency's enterprise software solutions.",
        bullets: [
          'Effectively managed by influence and delegation. Provided inspirational leadership to eight separate teams comprised of federal employees and >700 contractors. Improved the user experience with seamless performance, while ensuring the uninterrupted availability of >50 software solutions, including COTS and custom applications, conservation and administrative programs.',
          'Improved applications delivery and positioned the organization for a smooth leadership transition. Facilitated digital disruption, improved employee engagement, and enhanced team productivity. Directed SAFe execution to facilitate development of a three-month roadmap with >200 planned objectives and >300 planned features.',
        ],
      },
      {
        title: 'Government Program Manager',
        period: '2023 – 2025',
        intro:
          'Recruited to accelerate development and implementation of an enterprise database and document management systems supporting mission-critical operations at NCRS, formerly known as the Soil Conservation Service. Directed a $38M Agile software development program while maturing enterprise delivery, increasing stakeholder confidence, and elevating program performance across the portfolio.',
        bullets: [
          'Improved program quality and consistency. Developed a Program QA Plan that reduced software defects and increased quality by 30%. Guided implementation of a program with >20 new quality metrics designed to reduce software defects and substantially improve program quality.',
          'Led a world-class organization. Led 98-member team across eight development teams, two shared services, and one leadership team. Achieved 100% adherence to Scaled Agile (SAFe) best practices in contract execution, while strengthening coordination between federal and contractor personnel.',
        ],
      },
    ],
  },
  {
    org: '211 San Diego',
    location: 'San Diego, CA',
    period: '2020 – 2023',
    roles: [
      {
        title: 'Director of Technology Products and Services',
        period: '',
        intro:
          "Brought on to drive continuing development of three technology products comprising the firm's product suite. Took the lead in maximizing alignment of technology with the strategic goals of this company providing information and connections to community, health, and disaster resources. Responsibly managed a wide variety of strategic projects in areas including client/affiliate support, call center operations, and external/partner agency consulting.",
        bullets: [
          'Effectively demonstrated strong project management skills by managing and completing 31 projects on time and on budget in a single year. Creatively leveraged emerging automation and workflow technologies to overhaul and streamline the project management process.',
        ],
      },
    ],
  },
  {
    org: 'Disability Insurance Services',
    location: 'San Diego, CA',
    period: '2015 – 2020',
    roles: [
      {
        title: 'Director of Innovation and Technology',
        period: '',
        intro:
          "Hired to improve organizational efficiency and resilience of this disability insurance distributor. Optimized alignment of technology with business strategy, while modernizing core systems that effectively supported the company's vision, strategy, and goals. Served as a trusted advisor and strategic partner to C-suite leadership providing key insights focused on improving sales performance. Improved operational efficiency 50% by optimizing information systems utilization.",
        bullets: [
          'Positioned the company to operate during the COVID crisis. Migrated a proprietary sales CRM that facilitated annual sales of $6M from on-prem to a web-based platform and facilitated its launch to ensure uninterrupted operations and expanding accessibility for remote teams.',
        ],
      },
    ],
  },
]

const education = [
  { degree: 'DM, Technology Management', school: 'Colorado Technical University' },
  { degree: 'MSM, IT Management', school: 'Colorado Technical University' },
  { degree: 'BS, Computer Information Systems', school: 'SUNY, Institute of Technology' },
]

const certifications = [
  'Certified SAFe® 6 Agilist, Scaled Agile, Inc.',
  'Project Management Professional, Project Management Institute',
  'Disciplined Agile Scrum Manager, Project Management Institute',
]

function AeroCorpResume() {
  return (
    <AeroCorpLayout
      eyebrow="The Aerospace Corporation · Tailored Resume"
      title="Kevin Buckley, PMP"
      tagline="Enhancing Operational Efficiency and Driving Business Value with Innovative Technology Solutions"
      backHref="/AeroCorp"
      backLabel="Application Overview"
    >
      <div className="border-b border-emerald-100 bg-emerald-50/40">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <p className="text-sm text-slate-600">
            Southern California · 315-601-2269 · buckleykm@gmail.com
          </p>
          <a
            href="/aerocorp/kevin-buckley-resume-aerospace.pdf"
            download
            className="rounded-md bg-[#0b2416] px-4 py-2 text-sm font-medium text-white hover:bg-emerald-900"
          >
            Download PDF
          </a>
        </div>
      </div>

      <section className="mx-auto max-w-3xl px-6 py-14">
        <p className="leading-relaxed text-slate-600">
          Versatile Senior Technology Executive and change agent who creates and implements
          innovative, business-focused technology strategies through high-performance team
          building, stakeholder engagement, and large-scale enterprise technology project
          management consistently delivered on time and on budget. A continuous learner and a
          quick study in new industries and technologies with advanced degrees (DM, MSM) in
          technology management.
        </p>

        <div className="mt-8 space-y-5">
          {highlights.map((h) => (
            <div key={h.title}>
              <p className="text-slate-700">
                <span className="font-semibold text-[#0b2416]">{h.title}:</span> {h.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-emerald-100 bg-emerald-50/40">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <h2 className="text-xl font-semibold tracking-tight text-[#0b2416] sm:text-2xl">
            Business and IT Leadership Skills that Enhance Efficiency and Lower Costs
          </h2>
          <div className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {skills.map((skill) => (
              <p key={skill} className="text-sm text-slate-600">
                ▪ {skill}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-14">
        <h2 className="text-xl font-semibold tracking-tight text-[#0b2416] sm:text-2xl">
          Optimizing the Performance of People, Processes, and Technology
        </h2>
        <div className="mt-8 space-y-10">
          {experience.map((org) => (
            <article key={org.org}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-[#0b2416]">{org.org}</h3>
                <span className="text-sm font-medium text-emerald-700/70">{org.period}</span>
              </div>
              <p className="text-sm text-emerald-700/70">{org.location}</p>

              <div className="mt-4 space-y-6">
                {org.roles.map((role) => (
                  <div key={role.title}>
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <h4 className="font-semibold text-slate-800">{role.title}</h4>
                      {role.period && (
                        <span className="text-xs font-medium text-emerald-700/70">
                          ({role.period})
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{role.intro}</p>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                      {role.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-emerald-100 bg-emerald-50/40">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <h2 className="text-center text-xl font-semibold tracking-tight text-[#0b2416] sm:text-2xl">
            Education, Certifications, and Awards
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold text-[#0b2416]">Education</h3>
              <ul className="mt-3 space-y-2 text-slate-600">
                {education.map((item) => (
                  <li key={item.degree}>
                    <span className="font-medium text-slate-800">{item.degree}</span>
                    <br />
                    {item.school}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#0b2416]">Certifications</h3>
              <ul className="mt-3 space-y-2 text-slate-600">
                {certifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </AeroCorpLayout>
  )
}

export default AeroCorpResume
