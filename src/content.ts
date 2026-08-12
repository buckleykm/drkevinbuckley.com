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
    tech: ['Case Study', 'Portfolio Valuation', 'Cost of Delay', 'WSJF', 'ISO 21504'],
    link: '/artifacts/value-management',
  },
  {
    title: 'Women in Computing Careers',
    description:
      'A qualitative research study identifying eleven strategies technology managers can use to improve the engagement and retention of women in computing careers.',
    tech: ['Publication', 'Abstract', 'Qualitative Research', 'Talent Retention', 'DEI'],
    link: '/artifacts/women-in-computing-careers',
  },
  {
    title: 'Creating IT Value Through Leadership',
    description:
      'An article examining how collaborative leadership — as opposed to purely transactional or transformational styles — helps IT organizations create measurable business and social value.',
    tech: ['Publication', 'Article', 'Leadership', 'IT Value', 'Collaborative Leadership'],
    link: '/artifacts/creating-it-value-through-leadership',
  },
  {
    title: 'Leadership Is an Art, Management Is a Science',
    description:
      "An article exploring former USC president Steven Sample's claim that management is a science but leadership is purely an art, and what separates process-focused management from people-focused leadership.",
    tech: ['Publication', 'Article', 'Leadership', 'Management Theory'],
    link: '/artifacts/leadership-is-an-art',
  },
  {
    title: 'Information Technology and Organizational Performance',
    description:
      "An article on how IT contributes to organizational performance through efficiency and effectiveness, and a five-metric scorecard for connecting IT investment to business outcomes.",
    tech: ['Publication', 'Article', 'IT Strategy', 'Organizational Performance', 'IT Metrics'],
    link: '/artifacts/it-and-organizational-performance',
  },
  {
    title: 'Overcoming Organizational Resistance to Change',
    description:
      "An article examining the individual and organizational sources of resistance to change, evaluating Lewin's and Kotter's change models, and identifying gaps in how change readiness is typically assessed.",
    tech: ['Publication', 'Article', 'Change Management', 'Organizational Behavior'],
    link: '/artifacts/overcoming-organizational-resistance-to-change',
  },
]

export type ArtifactType = 'Case Study' | 'Publication' | 'White Paper'

export type Artifact = {
  slug: string
  type: ArtifactType
  title: string
  tagline: string
  summary: string
  tags: string[]
  meta?: string
  // Case-study fields (optional — used by framework/case-study artifacts).
  challenge?: string[]
  solutionIntro?: string[]
  netProductValueCallout?: string
  valueFactors?: { factor: string; description: string }[]
  costFactors?: { factor: string; description: string }[]
  process?: { step: string; description: string }[]
  resultsIntro?: string[]
  resultStats?: { value: string; label: string }[]
  benefits?: { title: string; description: string }[]
  closing?: string
  // Publication fields (optional — used by paper/dissertation artifacts).
  abstract?: string[]
  // Heading shown above the abstract paragraphs. Defaults to "Abstract" when
  // omitted; pass '' to render the paragraphs with no heading above them.
  abstractHeading?: string
  keywords?: string[]
  references?: string[]
}

export const artifacts: Artifact[] = [
  {
    slug: 'value-management',
    type: 'Case Study',
    title: 'Case Study: Value-Driven IT Portfolio Valuation',
    tagline: 'A repeatable scoring framework for prioritizing IT investment by measurable mission value, not gut feel.',
    summary:
      'A repeatable scoring framework that ranks an entire IT portfolio by measurable mission value versus cost and technical debt, turning modernization prioritization into an evidence-based decision instead of a guess.',
    tags: ['Case Study', 'Portfolio Valuation', 'Cost of Delay', 'WSJF', 'ISO 21504'],
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
  {
    slug: 'women-in-computing-careers',
    type: 'Publication',
    title:
      'Publication: Women in Computing Careers — Discovering the Factors That Attract and Retain Them: A Qualitative Research Study',
    tagline:
      'Doctoral dissertation research identifying eleven strategies technology managers can use to improve the engagement and retention of women in computing careers.',
    summary:
      'A qualitative research study identifying eleven strategies technology managers can use to improve the engagement and retention of women in computing careers.',
    tags: ['Publication', 'Abstract', 'Qualitative Research', 'Talent Retention', 'DEI'],
    meta: 'Doctor of Management Dissertation · Colorado Technical University · 2019',
    abstract: [
      'Despite the increasing number of women entering into science, technology, engineering, and math occupations, the number of women entering computing occupations has drastically fallen since the early 1990s (National Center for Women in Technology, 2014). The purpose of this study was to explore strategies that technology managers can use to retain women in the computing industry.',
      'The study conducted was a qualitative exploratory study that was designed to develop strategies that technology managers could use to retain female computing professionals and realized the benefits of a gender diverse team. Data collection occurred using semi-structured interviews, which were analyzed and synthesized to derive conclusions.',
      'The findings of this study largely corroborated key elements of the existing literature and led to the identification of eleven strategies for use by technology managers to help improve the engagement and retention levels of female computing professionals.',
    ],
    keywords: [
      'women in computing',
      'women in technology',
      'gender balance in computing',
      'diversity in computing',
    ],
  },
  {
    slug: 'creating-it-value-through-leadership',
    type: 'Publication',
    title: 'Publication: Creating IT Value Through Leadership',
    tagline:
      'How collaborative leadership styles can help IT organizations create measurable value, not just deliver technology.',
    summary:
      'An article examining how collaborative leadership — as opposed to purely transactional or transformational styles — helps IT organizations create measurable business and social value.',
    tags: ['Publication', 'Article', 'Leadership', 'IT Value', 'Collaborative Leadership'],
    meta: 'Article · Originally published July 27, 2017',
    abstractHeading: '',
    abstract: [
      'The concept of creating value is not unique to the IT industry. Porter and Kramer (2006) framed value creation as a way for organizations to look beyond the traditional producer/consumer relationship and consider their broader impact on society. This article explores how collaborative leadership — rather than purely transactional or transformational approaches — can help IT organizations translate that broader idea of value creation into practice.',
      'Transactional leadership rewards task completion but risks follower disengagement, while transformational leadership empowers followers but depends on highly motivated, capable teams. Collaborative leadership, by contrast, embraces input from cross-functional teams, ad-hoc groups, and third-party vendors rather than resisting these non-traditional influences — a fit for organizations shaped by social networks and the growing expectation that employees contribute to, not just execute, strategy.',
      "IT itself has long been a source of competitive advantage, from improving how organizations process information to spawning entirely new business opportunities out of internally built tools. The article argues that pairing that technical potential with a collaborative leadership style — one that taps into employees' need to contribute and be heard — produces faster problem-solving, higher morale, and better retention, particularly among younger employees who actively seek collaborative environments.",
    ],
    keywords: [
      'collaborative leadership',
      'IT value creation',
      'transformational leadership',
      'organizational behavior',
    ],
    references: [
      'Porter, M. E., & Kramer, M. R. (2006). Strategy and society: The link between competitive advantage and corporate social responsibility. Harvard Business Review, December 2006.',
      'Porter, M. E., & Millar, V. E. (1985). How information gives you competitive advantage. Harvard Business Review (July 1985).',
      'Robbins, S. P., & Judge, T. A. (2015). Organizational behavior (16th ed.). Pearson.',
      'Sant, P., & Catania, G. (2014). The growing web of influence of social networking sites on interpersonal relationships. International Journal of Arts & Sciences, 7(5), 719-734.',
      'Wander, F. (2013). Transforming IT culture: How to use social intelligence, human factors and collaboration to create an IT department that outperforms (Vol. 580). John Wiley & Sons.',
      'Willis, S. (2015). The very real benefits of collaborative leadership. Retrieved from http://switchandshift.com/the-very-real-benefits-of-collaborative-leadership',
    ],
  },
  {
    slug: 'leadership-is-an-art',
    type: 'Publication',
    title: 'Publication: Leadership Is an Art, Management Is a Science',
    tagline:
      'Why treating leadership and management as the same discipline undersells both — and what separates a great leader from a great manager.',
    summary:
      "An article exploring former USC president Steven Sample's claim that management is a science but leadership is purely an art, and what separates process-focused management from people-focused leadership.",
    tags: ['Publication', 'Article', 'Leadership', 'Management Theory'],
    meta: 'Article · Originally published July 15, 2016',
    abstractHeading: '',
    abstract: [
      'Former USC president Steven Sample once wrote that "leadership is an art, not a science. Effective management may be a science…but effective leadership is purely an art." This article examines that distinction, drawing on Kotter\'s (1990) framing of management as process-centric work — planning, budgeting, organizing, staffing, controlling — versus leadership as people-centric work: establishing direction, aligning people, motivating, and inspiring.',
      'The core argument is that management tasks are process-focused and can be accomplished through established, repeatable methods, while leadership deals with people — who are inherently less predictable. That unpredictability is where the "art" in leadership lives: a great leader reads the situational context and adjusts their strategy accordingly, rather than applying a fixed process regardless of circumstance.',
    ],
    keywords: ['leadership vs management', 'leadership theory', 'Steven Sample', 'John Kotter'],
    references: [
      'Bennis, W., Sample, S. B., & Asghar, R. (2015). The art and adventure of leadership: Understanding failure, resilience and success. John Wiley & Sons.',
      'Kotter, J. P. (1990). A force for change: How leadership differs from management.',
      'Northouse, P. G. (2015). Leadership: Theory and practice (7th ed.). Sage Publications.',
      "Sample, S. B., & Bennis, W. (2002). The contrarian's guide to leadership. Jossey-Bass San Francisco.",
      'Zaleznik, A. (1977). Managers and leaders: Are they different.',
    ],
  },
  {
    slug: 'it-and-organizational-performance',
    type: 'Publication',
    title: 'Publication: Information Technology and Organizational Performance',
    tagline:
      'How IT investment translates into measurable organizational performance — and the metrics that prove it.',
    summary:
      'An article on how IT contributes to organizational performance through efficiency and effectiveness, and a five-metric scorecard for connecting IT investment to business outcomes.',
    tags: ['Publication', 'Article', 'IT Strategy', 'Organizational Performance', 'IT Metrics'],
    meta: 'Article · Originally published August 10, 2017',
    abstractHeading: '',
    abstract: [
      "There is no shortage of research linking IT investment to organizational performance, whether measured through financial results or increased business process agility. This article synthesizes that literature, categorizing IT's contribution to organizations into two buckets: efficiency and effectiveness, and surveys practical tools — from networking and knowledge management to financial tracking applications — that IT leaders can use to drive both.",
      'The article also presents a five-metric IT performance scorecard adapted from Symons et al. (2008): alignment of IT investment to business strategy, the cumulative business value of IT investment, the IT spend ratio between new initiatives and maintenance, critical business service availability, and operational health. Together, these metrics translate IT performance into terms business executives can understand and act on — connecting technical execution directly to business outcomes rather than treating IT as a cost center measured in isolation.',
    ],
    keywords: ['IT business value', 'IT performance metrics', 'IT strategy', 'organizational performance'],
    references: [
      'Chen, Y., Wang, Y., Nevo, S., Jin, J., Wang, L., & Chow, W. S. (2014). IT capability and organizational performance: The roles of business process agility and environmental factors. European Journal of Information Systems, 23(3), 326-342.',
      'Melville, N., Kraemer, K., & Gurbaxani, V. (2004). Information technology and organizational performance: An integrative model of IT business value. MIS Quarterly, 28(2), 283-322.',
      'Mouawad, F. (2015). 5 ways technology can improve productivity at work. Retrieved from http://fredmouawad.com/5-ways-technology-can-improve-productivity-at-work/',
      'Ronan, B. (2015). 12 critical metrics for IT success. Retrieved from http://www.cio.com/article/2955777/best-practices/12-critical-metrics-for-it-success.html',
      'Stoel, M. D., & Muhanna, W. A. (2009). IT capabilities and firm performance: A contingency analysis of the role of industry and IT capability type. Information & Management, 46(3), 181-189.',
      'Symons, C., Peters, A., Cullen, A., & Worthington, B. (2008). The five essential metrics for managing IT. Retrieved from https://vitalvoiceanddata.com/wp-content/uploads/2012/01/Essential-Metrics-for-Measuring-IT.pdf',
    ],
  },
  {
    slug: 'overcoming-organizational-resistance-to-change',
    type: 'Publication',
    title: 'Publication: Overcoming Organizational Resistance to Change',
    tagline:
      "Why change management methodologies like Lewin's and Kotter's models address resistance indirectly — and what the research still gets wrong about it.",
    summary:
      "An article examining the individual and organizational sources of resistance to change, evaluating Lewin's and Kotter's change models, and identifying gaps in how change readiness is typically assessed.",
    tags: ['Publication', 'Article', 'Change Management', 'Organizational Behavior'],
    meta: 'Article · Originally published March 14, 2016',
    abstractHeading: '',
    abstract: [
      "The purpose of this article is to discuss the contributing factors to organizational change resistance. It introduces the resistance categories of individual and organizational change resistance, as well as whether proposed changes are planned or unplanned (emergent), and presents two methodologies for successfully implementing change: Lewin's three-step model (unfreeze, change, refreeze) and Kotter's eight-step model.",
      "Both methodologies address change resistance indirectly rather than by design — Kotter's model, for example, addresses it through removing barriers to change and proactively building systems and teams that align with it. The article argues that no single activity can fully mitigate organizational change resistance; successful implementation instead requires a change readiness assessment that accounts for individual, group, and organizational-level factors.",
      'Finally, the article identifies two gaps in the existing change management literature: the limited understanding of how emotions affect change readiness, and the lack of a multilevel perspective — individual, work group, and organizational — when assessing whether an organization is truly ready for a proposed change.',
    ],
    keywords: [
      'organizational change',
      'change resistance',
      'change management',
      "Kotter's eight-step model",
      "Lewin's three-step model",
    ],
    references: [
      'Alasadi, R., & Askary, S. (2014). Employee involvement and the barriers to organizational change. International Journal of Information, Business and Management, 6(1), 29-51.',
      "Armenakis, A. A., Bernerth, J. B., Pitts, J. P., & Walker, H. J. (2007). Organizational change recipients' beliefs scale: Development of an assessment instrument. The Journal of Applied Behavioral Science, 43(4), 481-505.",
      'Armenakis, A. A., Harris, S. G., & Mossholder, K. W. (1993). Creating readiness for organizational change. Human Relations, 46(6), 681-703.',
      'Battilana, J., & Casciaro, T. (2013). Overcoming resistance to organizational change: Strong ties and affective cooptation. Management Science, 59(4), 819-836.',
      'Beer, M., & Nohria, N. (2000). Cracking the code of change. If you read nothing else on change, read these best-selling articles, 15.',
      'Cervone, H. F. (2011). Overcoming resistance to change in digital library projects. OCLC Systems and Services, 27(2), 95-98.',
      'Crites, S. L., Fabrigar, L. R., & Petty, R. E. (1994). Measuring the affective and cognitive properties of attitudes: Conceptual and methodological issues. Personality and Social Psychology Bulletin, 20(6), 619-634.',
      'Downs, A. (2012). Resistance to change as a positive influencer: An introduction. Journal of Organizational Change Management, 25(6).',
      'Ford, J. D., & Ford, L. W. (2010). Stop blaming resistance to change and start using it. Organizational Dynamics, 39(1), 24-36.',
      'Georgalis, J., Samaratunge, R., Kimberley, N., & Lu, Y. (2015). Change process characteristics and resistance to organizational change: The role of employee perceptions of justice. Australian Journal of Management, 40(1), 89-113.',
      'Gonçalves, J. M., & Gonçalves, R. P. d. S. (2012). Overcoming resistance to changes in information technology organizations. Procedia Technology, 5, 293-301.',
      'Hughes, M. (2011). Do 70 per cent of all organizational change initiatives really fail? Journal of Change Management, 11(4), 451-464.',
      'Kotter, J. (2015). The 8-step process for leading change. Kotter International.',
      'Kotter, J. P. (1996). Leading change. Harvard Business Press.',
      'Lewin, K. (1947). Frontiers in group dynamics II. Channels of group life; social planning and action research. Human Relations, 1(2), 143-153.',
      'McKay, K., Kuntz, J. R., & Naswall, K. (2013). The effect of affective commitment, communication and participation on resistance to change: The role of change readiness. New Zealand Journal of Psychology, 42(2), 29-40.',
      'Rafferty, A. E., Jimmieson, N. L., & Armenakis, A. A. (2013). Change readiness: A multilevel review. Journal of Management, 39(1), 110-135.',
      'Robbins, S. P., & Judge, T. A. (2015). Organizational behavior (16th ed.). Pearson.',
    ],
  },
]
