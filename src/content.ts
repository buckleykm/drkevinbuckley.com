export const profile = {
  name: 'Kevin Buckley',
  credentials: 'PMP',
  title: 'Technology Portfolio Operations Director',
  tagline: 'IT Portfolio & Program Leadership',
  location: 'Southern California',
  email: 'buckleykm@gmail.com',
  phone: '315-601-2269',
  linkedin: 'https://www.linkedin.com/in/kevin-buckley-pm/',
  summary:
    'Senior technology and portfolio executive with 15+ years leading technically complex software, cloud, and enterprise application portfolios and Technical Program Management functions. Proven record establishing portfolio management discipline, governance frameworks, Agile/SAFe delivery cadences, reporting rhythms, and data-driven decision support to improve release readiness and reduce execution risk. Experienced with systems engineering and software development lifecycles in matrixed, mission-driven environments; skilled at developing TPMs, influencing senior leaders, and aligning strategy, investment, and talent. PMP- and SAFe-certified leader known for building high-performing teams and maturing delivery operations.',
}

// anchorId links to a matching bullet id in Resume.tsx; omit if no bullet currently states this figure.
export const stats: { value: string; label: string; anchorId?: string }[] = [
  { value: '$150M', label: 'Portfolio Directed', anchorId: 'stat-portfolio' },
  { value: '100+', label: 'Deployable Code Units Governed', anchorId: 'stat-code-units' },
  { value: '40%', label: 'Efficiency Gained', anchorId: 'stat-efficiency' },
  { value: '700+', label: 'Contractors Coordinated', anchorId: 'stat-contractors' },
]

export type Role = {
  title: string
  org: string
  location: string
  period: string
  bullets: string[]
}

export const experience: Role[] = [
  {
    title: 'Information Technology Portfolio Manager',
    org: 'USDA FPAC Business Center',
    location: 'Lake Elsinore, CA',
    period: '2025 - Present',
    bullets: [
      'Built and implemented a sustainable portfolio management framework that standardized governance, quality assurance, release management, infrastructure migration planning, portfolio reporting cadences, and executive decision support.',
      'Partnered with the Software Delivery Chief, CTO, product owners, and DevOps to align technology execution with mission priorities, resource constraints, delivery risks, and portfolio objectives, including alignment to organizational OKRs and finance inputs.',
      'Improved portfolio efficiency by 40% by maturing operating cadence, governance controls, delivery accountability, and cross-functional coordination across application teams.',
      'Developed a product valuation process using Lean Portfolio Management principles and actual data points to improve portfolio ranking and goal-setting strategies.',
      'Drove adoption of portfolio management practices among peer IT portfolio managers, improving consistency, transparency, and delivery discipline across the organization.',
    ],
  },
  {
    title: 'Acting ISD Conservation Section Chief',
    org: 'USDA FPAC Business Center',
    location: 'Lake Elsinore, CA',
    period: '2024 - 2025',
    bullets: [
      'Selected to ensure continuity of operations during leadership transition for a $150M technology contract portfolio while concurrently serving as Government Program Manager.',
      'Directed operational oversight across five Agile software development and support services teams, maintaining continuity and stability for 50+ enterprise software solutions (100+ deployable code units), including COTS and custom applications.',
      'Led through influence across eight teams comprising federal employees and 700+ contractors, strengthening engagement, accountability, and delivery coordination during leadership transition.',
      'Implemented SAFe-based planning practices and change-management communications to create a three-month roadmap containing 200+ planned objectives and 300+ planned features.',
      'Improved organizational readiness by clarifying priorities, stabilizing delivery cadence, and enhancing communication across federal and contractor teams.',
    ],
  },
  {
    title: 'Government Program Manager',
    org: 'USDA FPAC Business Center',
    location: 'Lake Elsinore, CA',
    period: '2023 - 2025',
    bullets: [
      'Directed a $38M Agile software development program while maturing enterprise delivery, increasing stakeholder confidence, and elevating program performance across the portfolio.',
      'Developed a data-driven Program QA Plan with 20+ quality metrics, reducing software defects and improving program quality by 30% while increasing transparency into release readiness and delivery risk.',
      'Led a 98-member organization across eight development teams, two shared services teams, and one leadership team; achieved 100% adherence to SAFe best practices in contract execution.',
    ],
  },
  {
    title: 'Director of Technology Products and Services',
    org: '211 San Diego',
    location: 'San Diego, CA',
    period: '2020 - 2023',
    bullets: [
      'Managed a broad portfolio of strategic initiatives across client/affiliate support, call center operations, technology operations, and product enhancement, providing consulting support to partner agencies.',
      'Overhauled project management processes and applied automation and workflow technologies to complete 31 projects on time and on budget in a single year.',
    ],
  },
  {
    title: 'Director of Innovation and Technology',
    org: 'Disability Insurance Services',
    location: 'San Diego, CA',
    period: '2015 - 2020',
    bullets: [
      'Improved operational efficiency by 50% by optimizing information system utilization, modernizing processes, and improving technology enablement across the enterprise.',
      'Migrated a proprietary sales CRM supporting $6M in annual sales from on-premises infrastructure to a web-based platform, enabling uninterrupted remote operations during the COVID crisis.',
      'Built the IT function from a single-person operation into a multi-department, cross-domain team supporting enterprise systems, innovation, service delivery, and business operations.',
    ],
  },
]

export const education = [
  { degree: 'DM, Technology Management', school: 'Colorado Technical University' },
  { degree: 'MSM, IT Management', school: 'Colorado Technical University' },
  { degree: 'BS, Computer Information Systems', school: 'SUNY Institute of Technology' },
]

export const certifications = [
  'Project Management Professional (PMP), Project Management Institute',
  'Certified SAFe 6 Agilist, Scaled Agile, Inc.',
]

export const skillGroups: { category: string; skills: string[] }[] = [
  {
    category: 'Technical Program & Portfolio Leadership',
    skills: [
      'Technical Program Management',
      'IT Portfolio Management',
      'Enterprise Planning',
      'OKRs',
      'Strategic Roadmaps',
      'Operating Cadence',
      'Governance Frameworks',
      'Executive Reporting',
      'Cross-Functional Program Delivery',
      'Technical Architecture',
      'Systems Engineering',
    ],
  },
  {
    category: 'Agile & Software Delivery',
    skills: [
      'SAFe',
      'Agile Program Management',
      'Release Management',
      'Software Development Lifecycle',
      'Quality Assurance',
      'DevOps Coordination',
      'Cloud Infrastructure',
      'AWS',
      'GCP',
    ],
  },
  {
    category: 'Transformation & Operations',
    skills: [
      'Change Management',
      'Process Improvement',
      'Resource Optimization',
      'Vendor Management',
      'Contract Portfolio Oversight',
      'Risk Management',
      'Delivery Maturity',
      'Analytics',
      'RFP',
    ],
  },
  {
    category: 'Executive Leadership',
    skills: [
      'Stakeholder Management',
      'Product/Engineering Alignment',
      'Team Building',
      'Talent Development',
      'Leadership Development',
      'Communication Strategy',
      'Business-Technology Alignment',
      'Data-Driven Decision Support',
    ],
  },
]

export type Project = {
  title: string
  description: string
  tech: string[]
  link?: string
  placeholder?: boolean
}

export const projects: Project[] = [
  {
    title: 'Value-Driven IT Portfolio Valuation',
    description:
      'A repeatable scoring framework that ranks an entire IT portfolio by measurable mission value versus cost and technical debt, turning modernization prioritization into an evidence-based decision instead of a guess.',
    tech: ['Portfolio Valuation', 'Cost of Delay', 'WSJF', 'ISO 21504'],
    link: '/artifacts/value-management',
  },
  {
    title: 'Artifact Placeholder',
    description:
      'Add a second artifact: a presentation, whitepaper, dashboard, or process you designed. Link to a PDF, deck, or write-up if you have one.',
    tech: ['Replace', 'With', 'Real Tags'],
    placeholder: true,
  },
  {
    title: 'Artifact Placeholder',
    description:
      'A third slot for a project, publication, or talk. Delete this card if you only have two to show.',
    tech: ['Replace', 'With', 'Real Tags'],
    placeholder: true,
  },
]

export type Artifact = {
  slug: string
  title: string
  tagline: string
  summary: string
  tags: string[]
  challenge: string[]
  solutionIntro: string[]
  netProductValueCallout: string
  valueFactors: { factor: string; description: string }[]
  costFactors: { factor: string; description: string }[]
  process: { step: string; description: string }[]
  resultsIntro: string[]
  resultStats: { value: string; label: string }[]
  benefits: { title: string; description: string }[]
  closing: string
}

export const artifacts: Artifact[] = [
  {
    slug: 'value-management',
    title: 'Value-Driven IT Portfolio Valuation',
    tagline: 'A repeatable scoring framework for prioritizing IT investment by measurable mission value, not gut feel.',
    summary:
      'A repeatable scoring framework that ranks an entire IT portfolio by measurable mission value versus cost and technical debt, turning modernization prioritization into an evidence-based decision instead of a guess.',
    tags: ['Portfolio Valuation', 'Cost of Delay', 'WSJF', 'ISO 21504'],
    challenge: [
      'Public-sector agencies often struggle to prioritize IT investment and legacy modernization in a rational, transparent way. Traditional prioritization methods — subjective judgment, "gut feelings," or simplistic measures like level of effort or story points — frequently fail to capture how work actually impacts service outcomes or what the true cost of delay is.',
      'Without clear insight into which systems deliver the most value, major investment decisions end up driven by the loudest voice or the most urgent technical fire rather than strategic mission value — and organizations risk pouring resources into low-impact initiatives while higher-value opportunities wait.',
      'Value isn’t just vibes or story points — it’s measurable outcomes, cost of delay, and strategic fit, expressed in a way leadership can actually use to make decisions.',
    ],
    solutionIntro: [
      'I designed a value-driven IT product and portfolio valuation framework to solve this. It introduces clear, outcome-focused metrics and a repeatable process for evaluating and ranking an entire IT application portfolio — enabling leaders to compare disparate projects on an apples-to-apples basis and confidently direct limited budget and resources to the highest-value work.',
      'Because the scoring is based on shared, transparent criteria rather than politics, it also builds the accountability public-sector spending decisions need to withstand oversight. The framework draws on established portfolio management standards — including PMI’s Portfolio Management Professional guidelines and ISO 21504 — to keep the definitions, scoring method, and stakeholder buy-in consistent.',
    ],
    netProductValueCallout:
      'Net Product Value = Value Score − Cost Score, where the Value Score sums four factors (mission outcomes, user adoption, risk reduction, and strategic alignment) and the Cost Score sums three factors (run cost, change complexity, and operational burden). A positive Net Product Value marks a high-benefit, relatively low-cost "keeper" system; a low or negative score flags a system that’s dragging down the portfolio and may warrant modernization or replacement.',
    valueFactors: [
      {
        factor: 'Mission Outcome Impact',
        description:
          'Gains in mission results or service outcomes — faster delivery, improved accuracy, or greater capacity to serve constituents.',
      },
      {
        factor: 'User Adoption & Usage',
        description:
          'How widely and intensively the system is used: number of users, transaction volume, and how many other systems depend on it.',
      },
      {
        factor: 'Risk Reduction',
        description:
          'The system’s contribution to reducing risk — security/compliance posture, fewer audit findings or errors, continuity and data integrity.',
      },
      {
        factor: 'Strategic Alignment',
        description:
          'How well the system supports high-level strategic priorities, mandates, or modernization goals.',
      },
    ],
    costFactors: [
      {
        factor: 'Run Cost',
        description:
          'Ongoing operational cost to run and maintain the system — hosting, licenses, support staff.',
      },
      {
        factor: 'Change Complexity',
        description:
          'The difficulty, time, and expense required to safely modify or enhance the system — legacy code, tight integrations, low test automation, compliance overhead.',
      },
      {
        factor: 'Operational Burden (Drag)',
        description:
          'How much the system creates drag on operations — frequent incidents, manual workarounds, recurring data fixes, and other "firefighting."',
      },
    ],
    process: [
      {
        step: 'Build a Portfolio Inventory',
        description:
          'Compile a single, comprehensive list of every application in the portfolio, noting name, purpose, users, owning business unit, integrations, and rough annual cost. This becomes the source of truth for what gets evaluated.',
      },
      {
        step: 'Define the Scoring Model',
        description:
          'Before scoring anything, lock the rubric and get stakeholder agreement on what each Value and Cost factor means and what separates a 5 from a 1. A shared "value language" removes bias from the process.',
      },
      {
        step: 'Score the Value Factors',
        description:
          'Assess Outcome Impact and Usage first, using available metrics or reasonable estimates, then Risk Reduction and Strategic Alignment. Rough estimates are fine to start — perfect data isn’t required to get a useful result.',
      },
      {
        step: 'Score the Cost & Drag Factors',
        description:
          'Estimate Run Cost, Change Complexity, and Operational Burden for each application, approximated from budgets, known technical constraints, and incident history.',
      },
      {
        step: 'Calculate Net Product Value & Rank',
        description:
          'Net Product Value = Value Score − Cost Score for each application, then rank the full portfolio highest to lowest. This single, consistently derived number produces a first-cut ranking that cuts through politics and bias.',
      },
      {
        step: 'Deep-Dive on Top Candidates (Cost of Delay)',
        description:
          'For the highest-value, highest-drag systems, calculate a Cost of Delay: what each month of deferring improvement is actually costing in lost value, inefficiency, extra work, and risk — expressed in dollars per month. Lower-value systems generally don’t need this level of analysis.',
      },
      {
        step: 'Prioritize Improvement Initiatives',
        description:
          'Sequence the roadmap using Cost of Delay divided by effort — a "shortest job first" approach similar to WSJF in agile portfolio governance — so a high-value, high-drag system can outrank an easier but lower-value enhancement.',
      },
      {
        step: 'Recommend Portfolio Actions',
        description:
          'Tag every application with a clear action: Invest/Scale, Modernize/Stabilize, Maintain, Consolidate, or Retire/Replace — plain-language labels executives can act on immediately.',
      },
    ],
    resultsIntro: [
      'This framework changed how IT investment conversations happen. Instead of "we think this system is a problem," the discussion becomes "this legacy system’s delays are costing us $X a month" — a shift from intuition to evidence.',
      'One example: a mission-critical payment processing system scored 19 out of 20 on value delivered, reflecting its essential role serving thousands of constituents — but also carried a cost/drag score of 12 out of 15 due to high operating costs, fragile integrations, and frequent manual intervention. That produced a Net Product Value of +7: a strong positive score, but far below its potential if the technical debt were addressed.',
      'The team estimated each month of delay in modernizing the system cost roughly $34,000 in wasted effort, support costs, and risk exposure. That number made the case for prioritization immediately obvious — and turned stabilization and modernization into a top priority backed by data instead of instinct.',
    ],
    resultStats: [
      { value: '19/20', label: 'Value Score' },
      { value: '12/15', label: 'Cost / Drag Score' },
      { value: '+7', label: 'Net Product Value' },
      { value: '$34K/mo', label: 'Cost of Delay' },
    ],
    benefits: [
      {
        title: 'Clearer strategic alignment',
        description:
          'IT investment is now discussed in terms of mission outcomes and public value, not just technical need.',
      },
      {
        title: 'Greater transparency and buy-in',
        description:
          'Shared criteria and real metrics mean stakeholders — from engineering to budget officers — can understand, and even challenge, the rankings, building trust in the process.',
      },
      {
        title: 'Focused investment on high-impact work',
        description:
          'High-value, high-drag legacy systems get identified for modernization, while low-value work gets paused or phased out, so limited resources go where they create the most value.',
      },
    ],
    closing:
      'This approach isn’t tied to any one organization’s structure or tooling — it’s a flexible framework any portfolio leader can adapt by tailoring the value and cost factors to their own mission and data availability. Even a first, imperfect pass at scoring beats first-come-first-served or politically driven prioritization. In an environment where the cost of doing nothing often exceeds the cost of change, having a clear view of each investment’s true net value and urgency is what turns a legacy-bound portfolio into a modernization roadmap that delivers real value.',
  },
]
