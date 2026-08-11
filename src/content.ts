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
      'Directed operational oversight across five Agile software development and support services teams, maintaining continuity and stability for 50+ enterprise software solutions, including COTS and custom applications.',
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

// TODO: replace these placeholders with real projects/artifacts.
export const projects: Project[] = [
  {
    title: 'Portfolio Governance Framework (add your writeup)',
    description:
      'Describe a real initiative here — e.g. the portfolio management framework you built at USDA FPAC: the problem, your approach, and the measurable outcome.',
    tech: ['Replace', 'With', 'Real Tags'],
    placeholder: true,
  },
  {
    title: 'Case Study Placeholder',
    description:
      'Add a second artifact: a presentation, whitepaper, dashboard, or process you designed. Link to a PDF, deck, or write-up if you have one.',
    tech: ['Replace', 'With', 'Real Tags'],
    placeholder: true,
  },
  {
    title: 'Case Study Placeholder',
    description:
      'A third slot for a project, publication, or talk. Delete this card if you only have two to show.',
    tech: ['Replace', 'With', 'Real Tags'],
    placeholder: true,
  },
]
