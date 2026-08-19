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
  {
    title: 'Building a Modern, Risk-Based Change Management Framework',
    description:
      'A modern, risk-based change management framework — built around a five-factor risk model and a Virtual Change Advisory Board — that replaced ad hoc, one-size-fits-all change approvals with governance scaled to actual risk.',
    tech: ['White Paper', 'Change Management', 'IT Governance', 'Risk Management', 'ITIL'],
    link: '/artifacts/change-management-framework',
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
  // Optional downloadable source document, offered right after the abstract.
  downloadUrl?: string
  downloadLabel?: string
  // White-paper fields (optional — used for long-form, multi-section artifacts).
  sections?: { heading?: string; paragraphs?: string[]; bullets?: string[] }[]
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
    downloadUrl: '/women-in-computing-dissertation.pdf',
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
    sections: [
      {
        heading: 'Creating Value',
        paragraphs: [
          'The concept of creating value is not unique to the information technology (IT) industry. Porter and Kramer (2006) presented the idea of creating value in a Harvard Business Review article as a new way for a business to review their relationship with society that transcends the traditional producer/consumer system. They also presented a framework that allowed organizations to identify the social ramifications of their actions, to identify approaches to contribute to society and organizational growth simultaneously, and to embrace the concept of corporate social responsibility. The purpose of this article is to discuss how collaborative leadership can contribute to creating IT value.',
        ],
      },
      {
        heading: 'Leadership Styles',
        paragraphs: [
          'Transactional leadership. Transactional leadership is a basic form of leadership in which a leader rewards a follower for work performed (Robbins & Judge, 2015). Transactional leadership is a highly task-oriented style of leadership that is often criticized for its lack of empowerment of followers. The risk of failure in transactional leadership is that a leader runs the risk of follower disenchantment and general apathy towards the work being conducted.',
          'Transformational leadership. Transformative leadership theory is a complimentary theory in which a leader motivates, empowers, and educates their followers to perform work with less direct guidance and management. This relationship-oriented theory asserts that this approach will result in more effort, higher morale, increased productivity, and overall greater levels of satisfaction from employees (Robbins & Judge, 2015). However, transformational leadership is not without its risks. This style of leadership is dependent upon a highly motivated and capable follower that can complete tasks with little to no direction.',
          'Collaborative leadership. Wander (2013) argues that traditional management and leadership styles are no longer as effective as they once were. The traditional hierarchies still exist, however, Wander presents non-traditional hierarchies, such as cross-functional or ad-hoc teams, and interaction with third party vendors as heavy influencers on the organizational work pace. Rather than fight these non-traditional influencers, collaborative leadership accepts and even encourages the inputs of multiple sources when developing strategy and making decisions.',
        ],
      },
      {
        heading: 'The Importance of Collaboration in Business Today',
        paragraphs: [
          'There is no denying that social networks have become major areas of influence. Sant and Catania (2014) attribute the increase in the influence of social networks to the "innate need to interact, communicate, and form relationships with others" (p. 719). The simple fact is individuals are accustomed to being part of a larger community where they have influence and the ability to contribute. Willis (2015) argues that employing a collaborative leadership style will help to tap into this existing phenomenon to realize benefits such as better and faster problem solving, increased morale, improved operational flexibility, and the attraction and retention of younger employees who actively seek collaborative environments.',
        ],
      },
      {
        heading: 'Creating Value Through IT',
        paragraphs: [
          'The idea of value creation through IT is not new. As far back as the mid-1980s Porter and Millar (1985) presented several ways that IT added real value to an organization through competitive advantage. The first way that IT adds value lies in how it impacts information processing. Increases in technological hardware capabilities, as well as the development of software applications, contribute to the overall reduction in time and increases in efficiency and accuracy in which the organization processes information. A second way that IT can add value to an organization lies in its ability to spawn new business opportunities. For example, an internally-developed software application to process customer orders might be packaged and sold to other organizations, successfully monetizing what would traditionally be considered an operational expense.',
        ],
      },
      {
        heading: 'Key Takeaways',
        bullets: [
          'Collaborative leadership is becoming an increasingly popular leadership style, especially with individuals who are familiar with participating in online communities and large social networks.',
          'Creating value is a means in which an organization can review their relationship with society that transcends the traditional producer/consumer system.',
          'IT can create value for an organization in several ways, such as increased competitive advantage and spawning new business opportunities.',
        ],
      },
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
    sections: [
      {
        paragraphs: [
          '"One must always keep in mind that leadership is an art, not a science. Effective management may be a science…but effective leadership is purely an art." — Steven Sample',
          'Former USC president Steven Sample once wrote, "One must always keep in mind that leadership is an art, not a science. Effective management may be a science…but effective leadership is purely an art" (Sample & Bennis, 2002). It is important to note that this quote not only equivocates leadership to an art form but equally suggests management as a science. I like this quote as I find it clearly illustrates the major distinctions between the two disciplines.',
          'As Northouse (2015) (amongst others) points out, leadership as a process is similar to management and, in fact, there are many areas in which both disciplines have overlapping skills that contribute to success. Additionally, both are concerned with the successful attainment of a goal or achievement. However, Northouse alludes to the rise of management in the twentieth century as a discipline concerned with reducing chaos and increasing efficiency, whereas discussion on effective leadership can be traced as far back as Aristotle. Based on these premises, it is easy to see where Sample can make his claim.',
          'Given the above context in which leadership and management focus on different factors for success, it is easy to evaluate them against the benchmark of art or science. Kotter (1990) identifies major functions of management that exist in the areas of planning, budgeting, organizing, staffing, controlling, and problem-solving. These are all process-centric tasks. Likewise, Kotter tasks leadership with the areas of establishing direction, aligning people, motivating, and inspiring. These are all people-centric tasks.',
          'The distinction between art and science for the given discipline can be found within the focus of the tasks described. Zaleznik (1977) suggests that managers work with people in an effort to solve problems only. Being process-focused, management tasks are easily accomplished, managed, and improved using established, repeatable processes. The same cannot be said of people-focused tasks, as people tend to be irrational and unpredictable. The "art" in leadership lies within the control and management of this unpredictability and differs in almost every case. A great leader is one that can understand the situational context and adjust their strategy to accomplish goals (Bennis, Sample, & Asghar, 2015).',
        ],
      },
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
    sections: [
      {
        heading: 'IT Organizational Performance',
        paragraphs: [
          'There is no shortage of literature on the subject of the effects of IT on organizational performance. The consensus amongst many researchers is that IT value directly contributes to overall organizational performance (Chen et al., 2014; Melville, Kraemer, & Gurbaxani, 2004; Stoel & Muhanna, 2009). There exist many ways that the relationship between IT and performance can be measured, such as financial performance (Stoel & Muhanna, 2009) and increased business process agility (Chen et al., 2014). Melville et al. (2004) categorize IT contributions to organizational performance into two categories: efficiency and effectiveness.',
        ],
      },
      {
        heading: 'IT Tools and Apps That Increase Performance',
        paragraphs: [
          'Much like the literature regarding how IT contributes to organizational performance, there are an even greater number of tools, applications, and other solutions designed to help an organization to improve performance, productivity, efficiency, and effectiveness. Mouawad (2015) presents a few ways that technology can contribute to increased performance.',
          'Networking. Attending conferences, trade shows, and participating in peer groups are still common ways to create and maintain professional network contacts. However, in an increasingly digital society, keeping track of these contacts is shifting from business cards and indexes to email and other digital contact lists. Many of these also provide automated functions to keep communications open with our professional peers.',
          'Knowledge. Gone are the days where formal research included a trip to the library or the records room to pour through physical media. The rise of the Internet and digitization of documents have made information almost instantaneous. There is no reason for anyone to utter the words "I don\'t know," given enough time. There exists, however, the danger of misinformation. It is imperative that we take caution when performing any research to ensure that the sources are legitimate and trustworthy.',
          'Financial tracking. Continuing along the digitization path, electronic records keeping has provided a tremendous increase in the ability to track and analyze financial performance. Applications like QuickBooks and FreshBooks are designed to help automate the financial tracking process, but a simple spreadsheet in Microsoft Excel or Google Sheets can save time and help identify financial trends.',
        ],
      },
      {
        heading: 'Quantifying IT Performance',
        paragraphs: [
          'Ronan (2015) points out that one of the strengths of quantifying performance is that it allows for the identification of deviation from expected norms. When these deviations occur, the organization can take steps to correct, adjust, or pivot to ensure the achievement of goals or to capitalize on opportunities. Symons, Peters, Cullen, and Worthington (2008) recommend connecting performance tracking metrics to business outcomes to demonstrate the IT contribution to business goals.',
        ],
      },
      {
        heading: 'IT Performance Metrics',
        paragraphs: [
          'Symons et al. (2008) present a five metric IT performance scorecard that serves a twofold purpose: connecting IT contributions to business outcomes and presenting metrics that business executives can understand and find relevant.',
          'Alignment of IT investments to business strategy. The first metric ties IT operations to strategic themes, maps investments to these themes, and identifies the expected return from each investment.',
          'The cumulative business value of IT investment. The second metric shows the maximum potential and actual value of IT projects and initiatives.',
          'IT spend ratio — new versus maintenance. The third metric shows how much of the IT budget is dedicated to new initiatives and how much is spent on keeping existing initiatives running.',
          'Critical business service availability. The fourth metric focuses on customer satisfaction with provided IT services. Customer satisfaction surveys and measurements of actual IT performance to service level agreement (SLA) standards are excellent ways to generate this metric.',
          'Operational health. The fifth metric looks at the stability of IT operations. IT service reliability, safe and secure systems, and consistent project execution are all elements that comprise an overall IT operational health metric.',
        ],
      },
      {
        heading: 'Key Takeaways',
        bullets: [
          'There is a direct relationship between IT initiatives and operational performance.',
          'IT managers have a myriad of choices when it comes to IT tools and applications that help to improve performance.',
          'The development of quantifiable metrics that can be directly mapped to business goals and outcomes will provide a great means to track IT performance, as well as illustrate the value that IT adds to organizational goals.',
        ],
      },
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
    sections: [
      {
        heading: 'Abstract',
        paragraphs: [
          "The purpose of this paper is to discuss contributing factors to organizational change resistance. Introduced are the resistance categories of individual and organizational change resistance, as well as whether or not the proposed changes are planned or unplanned (emergent). The author presents two methodologies for successfully implementing change: Lewin's three-step method and Kotter's eight-step method. Finally, the author discusses two gaps in the current change management literature, namely understanding the impact of emotions on change readiness and the lack of a multilevel perspective when assessing change readiness.",
        ],
      },
      {
        heading: 'Overcoming Organizational Resistance to Change',
        paragraphs: [
          'There are many factors contributing to organizational change, such as fear of the unknown (Alasadi & Askary, 2014), employee cynicism (Cervone, 2011), threats to organizational identity (Downs, 2012), and perceived fairness of the change being implemented (Georgalis, Samaratunge, Kimberley, & Lu, 2015). While many studies identify common themes in organizational change resistance, no one has identified a singular approach to overcoming this resistance (Rafferty, Jimmieson, & Armenakis, 2013). By leveraging personal relationships, understanding the affect of the change, and adopting a multi-level approach, a comprehensive plan for successful change implementation can be created that addresses resistance at all organizational levels.',
          'There are numerous sources of resistance to organizational change. These sources can be categorized as individual and organizational changes (Alasadi & Askary, 2014). One individual cause of resistance is the level of uncertainty that surrounds change. This fear of the unknown can be a strong deterrent to adoption of a proposed change. Another example of an individual source of resistance is the loss of convenience. Existing patterns of operation or habits may no longer be available or acceptable, and this may cause discomfort or confusion until new patterns and habits emerge. A third cause of individual resistance is employee cynicism. The disbelief in the motives of others can severely impact change acceptance. This is especially evident when there are poor employee/management relations (Cervone, 2011).',
          'Unlike individual sources of change resistance, organizational sources of resistance are derived from the organizational structure itself (Robbins & Judge, 2015). An example of an organizational source of resistance is the threat to established power relationships. Change may redistribute authority to another decision maker, and this could impact process and performance if the wrong decision maker is selected. Another example of an organizational source of resistance is group inertia. Changes in process may impact group norms which in turn may hinder acceptance until norms are reestablished with the incorporated change.',
          'Another factor to consider when analyzing organizational resistance to change is whether or not the change is planned or unplanned (emergent). Planned change is proactively implemented and is done so to achieve specific goals. Unplanned change emerges from external influences in an organization, such as new technologies, social trends, and competition in the market (Robbins & Judge, 2015). The impetus for change can have both positive and negative effects on the way that organizational members perceive and accept the proposed change.',
          'There are many common recommendations for overcoming resistance to organizational change. One of the primary recommendations for reducing change resistance is increasing communication about the change (Cervone, 2011; Gonçalves & Gonçalves, 2012; McKay, Kuntz, & Naswall, 2013; Robbins & Judge, 2015). Increased communications help to eliminate the uncertainty surrounding potential change, allowing affected individuals the ability to understand the reasoning for change, share concerns, and provide input and recommendation that may change the change (Ford & Ford, 2010).',
          'Another recommendation for overcoming change resistance is to leverage organizational ties and personal relationships to win support for the change. This is also known as Coopting (Battilana & Casciaro, 2013; Georgalis et al., 2015). One example of this is to focus on two categories of change influencers — that of the fence-sitters (those that are undecided) and resistors (those that are openly against the change) (Battilana & Casciaro, 2013). Fence-sitters are the easier of the two groups to coopt because they can already see some positive benefit of adopting the change, but are not fully convinced that the change is necessary. Resistors, on the other hand, are much more difficult to convince, with the likelihood of successful cooption related directly to the amount of divergence from current organizational practices that the change presents. A second relationship-based strategy is the Leader-Member Exchange (LMX). At the heart of the LMX is the idea that leaders and employees develop a unique relationship, and that relationship carries with it the potential to lessen employee resistance (Georgalis et al., 2015).',
          'Among the many recommendations for overcoming organizational change resistance, two methodologies have emerged to provide a framework for managing change in a way that overcomes resistance. These methodologies are Lewin\'s three-step model and Kotter\'s eight-step model. It is important to note that these methodologies are not designed specifically to overcome change resistance. Rather, they are change implementation methodologies that contain components that inherently increase the potential for change adoption.',
          'Kurt Lewin (1947) was one of the pioneers of change management. His three-step model for change implementation is basic: unfreeze, change, and refreeze. In this simplistic model, the unfreezing step is the preparation of the organization for the impending change. Information about the proposed change is communicated. The change step is the process of implementing the proposed changes. The final step, refreezing, is the normalization of the organization with the changes in place.',
          "Originally developed in 1996 to help organizations successfully implement change, Dr. John Kotter's eight-step plan was revised in 2014 to update its processes to apply to today's current, fast-paced marketplace (J. Kotter, 2015). The first step in the process is to create a sense of urgency. The goal of this step is to leverage a potential opportunity to motivate employees to accept the change. The second step, build a guiding coalition, highlights the importance of having an influential team, with authority, that can drive a collaborative change process. The third step, form a strategic vision and initiatives, points out the need for an organization to develop strategic goals and identify those projects that will help the organization to meet those goals. The fourth step, enlist a volunteer army, extends the second step to the workforce by pointing out the need for change implementers, influencers, and adopters. The fifth step, enable action by removing barriers, refers to the need for change implementers to set up a clear path to successful change adoption by removing obstacles and threats to allow the change process to continue along its critical path. The sixth step, generate short-term wins, discusses the need to record, acknowledge, and discuss both large and small accomplishments and to tie them to overall results. The seventh step, sustain acceleration, builds upon the fifth step by suggesting that an organization proactively changes its culture to support the change by hiring new and developing existing employees that can implement the vision, by introducing new systems and starting new projects that all align with the change. The eighth and final step, institute change, deals with communicating the relationship between the change behaviors and organizational successes that result from it. It also includes the need for leadership development and succession to ensure that the change is maintained.",
          "As stated previously, these Lewin and Kotter's methodologies are not designed to overcome organizational change resistance, rather they address them within the steps of the methodologies. It is more evident in Kotter's (2015) eight-step plan. Specifically, step five, which points out the need to remove barriers to change (such as change resistance), and step seven, which proactively combats change resistance by implementing new systems and individuals that align with (accept and even champion) the proposed change.",
          'With such a diverse array of recommendations and methodologies for overcoming change resistance, one would think that there is very little impact on change implementation by resistance. Some sources still champion the statistic that change failure rates are as high as seventy percent (Beer & Nohria, 2000; J. P. Kotter, 1996). It has been widely argued that the seventy percent statistic has no empirical proof, being a normalized claim touted to sell consultancy services (Hughes, 2011). Hughes (2011) also identified that the lack of a uniform measure of change success makes creating a statistical metric almost impossible. Regardless of whether you believe the seventy percent metric or not, the truth is that many change implementations are at least partially unsuccessful, and some of that is related to change resistance.',
          'It is important to pause and discuss the counter-argument, which is that change resistance is not inherently bad. Ford and Ford (2010) were the first to point out that blaming change resistance is flawed. Firstly, many change managers become defensive when encountering resistance. In doing so, they may alienate potential allies by identifying them as problems that need to be overcome, rather than potential resources for success (i.e. resistors in the LMX model). Secondly, placing the resistance solely external to themselves is a poor perspective. Part of the resistance is related to the change manager. Lastly, blaming resistance ignores the intrinsic value of resistance — that is resistance could potentially identify flaws in the change or perceived need for the change. By leveraging resistance, change managers have the ability to view the change objectively and potentially alter the change to both appease initial resistors and better suit the needs of the organization. This could lead to overall greater success or organizational gains than the original change may have.',
          'Even with decades of research and discussion regarding change resistance, there are still areas of change resistance that have yet to be studied. One such area is the emotional affect on change acceptance. There is an agreement in the literature on certain key beliefs that impact readiness for change (Armenakis, Harris, & Mossholder, 1993); however, researchers have not addressed the emotional element of the change readiness attitude. According to social psychologists, the affective component is just as important a component of attitude as the cognitive element (Crites, Fabrigar, & Petty, 1994). By not including these elements, researchers have failed to factor in half of the change readiness attitude which could contribute to overall resistance to change.',
          'Crites et al. (1994) postulate that different emotions, such as sadness, happiness, hate, and love all contribute to affective emotional response. While Armenakis et al. (1993) do not discuss affective components, continued discussion by Armenakis, Bernerth, Pitts, and Walker (2007) do mention the importance of the affective component. Specifically, they define change readiness as "the extent to which an individual or individuals are cognitively and emotionally inclined to accept, embrace, and adapt a particular plan to alter purposefully the status quo" (2007:235). Rafferty et al. (2013) go as far as to stipulate openly that change readiness should be assessed by capturing emotions related to the proposed change.',
          'Another gap in the literature is the lack of a multilevel perspective of change, which Rafferty et al. (2013) identify as critical to understanding change adoption on both the individual and organizational level. They have devised a multilevel framework that incorporates all of the "antecedents and consequences of individual, work group, and organization change" (2013:112). By doing so, they provide coverage of both the emotional affect and multilevel gaps in assessing the likelihood of change adoption. Additionally, their analysis suggests that the antecedents and consequences will not be the same for all organizational levels.',
          'The construct of the multilevel framework developed by Rafferty et al. (2013) is focused on the outcomes of change events. Arguing that change acceptance is isomorphic, or that all individuals have the same perception of change acceptance, the framework focuses on change-supportive behaviors and positive job attitudes, such as commitment to the organization and job satisfaction, at the individual level. At the work group level, they also identify change-supportive behaviors and positive group attitudes. However, at the organizational level, they identify "dynamic capabilities concerned with change" (2013:113) as the best indication of change readiness. The presence of said dynamic capabilities indicates that not only is the organization ready for a specific change but that it is ready for any number of changes.',
          'In-depth analysis of the change literature led Rafferty et al. (2013) to draw several conclusions. At the individual level, a formal change management process, effective communication, and employee participation in the change process will positively influence the individual and cause positive beliefs regarding the change, leading to an overall higher potential to adopt the change. Additionally, they found that larger scale changes negatively impacted the positivity of individuals affected by the change.',
          'At the workgroup level, it was found that work group leaders who had the ability to recognize group emotions and fostered a "group vision" mentality positively influenced the group\'s willingness to accept change (Rafferty et al., 2013). They also found that groups that had a positive affective view of the change showed a higher level of trust in the change event and, therefore, a higher willingness to accept change. Conversely, groups with a negative affective view were more likely to reject the change.',
          'Lastly, at the organizational level, senior leadership\'s positive association with change acceptance is directly influenced by the collective desire for the change. This will influence the overall feeling that the collective organization is ready for the change. Additionally, they found that organizations that focus on adaptability and development are more likely to have a positive affective view of a change event (Rafferty et al., 2013).',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'In conclusion, there are numerous sources that contribute to organizational change resistance. There is a high volume of literature surrounding change resistance and change acceptance — offering an equally high volume of solutions. While many researchers agree on common solutions such as a formalized change management process, effective communications plans, and increased employee involvement activities, no one activity can mitigate organizational change resistance. Successful change implementation plans should include a change readiness assessment that accounts for emotional mindsets at the individual, group, and organizational levels about the change. This holistic approach will help change managers identify whether or not the organization is ready for the proposed change event.',
        ],
      },
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
  {
    slug: 'change-management-framework',
    type: 'White Paper',
    title: 'White Paper: Building a Modern, Risk-Based Change Management Framework',
    tagline:
      'A risk-based change management framework that replaced fragmented, one-size-fits-all change approvals with governance scaled to each change’s actual risk.',
    summary:
      'A modern, risk-based change management framework — built around a five-factor risk model and a Virtual Change Advisory Board — that replaced ad hoc, one-size-fits-all change approvals with governance scaled to actual risk.',
    tags: ['White Paper', 'Change Management', 'IT Governance', 'Risk Management', 'ITIL'],
    sections: [
      {
        heading: 'Executive Summary',
        paragraphs: [
          'A major public-sector IT organization’s existing change management process had not kept pace with its evolving technology environment. Without a unified, risk-aware approach to approving changes, the organization saw inconsistencies, oversight gaps, and inefficiencies — challenges that grew more acute as a move to cloud platforms and Agile/DevOps practices increased the volume and velocity of system changes.',
          'The organization conducted a comprehensive Change Management Review and designed a modern, risk-based change management framework that introduces a unified set of policies and procedures across all IT teams. The framework is codified in a concise governance policy, supported by detailed process guides and Standard Operating Procedures (SOPs) that cover the how of implementation. It features a formal risk scoring matrix that classifies changes by risk level and tailors the approval workflow accordingly — from low to very high risk. It replaces rigid weekly change boards with a Virtual Change Advisory Board (vCAB) model that convenes real-time reviews only for high-risk changes, strengthens integration with cybersecurity and project governance, and requires that all changes be logged in one authoritative system with standardized data requirements for traceability and audit readiness.',
          'By aligning with industry best practices — including ITIL v4, NIST SP 800-128/37, and OMB A-130 — and focusing on measurable outcomes, the framework is expected to improve operational stability, change agility, and transparency. Leadership and stakeholders gain clearer visibility into upcoming changes through a centralized change calendar with risk-based notification lead times, low-risk standard changes move through faster approvals, and high-risk changes receive thorough scrutiny. The organization also expects fewer incidents and emergency changes, driven by more disciplined procedures, better up-front risk mitigation, and continuous improvement informed by tracked metrics such as change success rate, approval cycle time, and rollback frequency.',
        ],
      },
      {
        heading: 'Background & Challenges',
        paragraphs: [
          'The organization’s previous change management process — established years earlier and only minorly updated since — had become fragmented and outdated. Different IT teams followed their own protocols for deploying changes, so key steps like risk assessments and stakeholder notifications were not uniformly performed. An existing change control board in one division focused narrowly on approving funding and scheduling rather than technical risk and impact, so many changes — especially application updates and infrastructure tweaks — bypassed rigorous risk review. In practice, teams often treated change management as a formality: filling out change records after deployment, or using fast-track "emergency" designations so broadly that many non-critical changes were classified as urgent, undermining governance and increasing the potential for uncontrolled system modifications.',
          'These issues were magnified by broader shifts in the IT landscape. The organization was migrating systems to the cloud and adopting Agile/DevSecOps practices to deliver updates more frequently, so change volume was rising while weekly change-board meetings and manual, paper-based approvals couldn’t keep pace. The lack of a formal risk-based approach made it difficult to ensure high-impact changes received adequate scrutiny, while low-risk routine updates were often delayed by one-size-fits-all procedures. Auditors and oversight bodies also raised concerns that the existing process did not fully align with federal IT guidelines such as NIST security controls for configuration change management, and system owners had uneven visibility into upcoming changes — sometimes learning about significant updates only after the fact. Together, these factors made the case for a comprehensive overhaul.',
        ],
      },
      {
        heading: 'Design Principles for the New Framework',
        bullets: [
          'Enterprise-Wide Consistency — Establish one unified policy for all IT change activity, replacing fragmented, team-specific processes so every change follows the same core requirements regardless of department or system.',
          'Risk-Based Governance — Move from a one-size-fits-all approach to one proportionate to risk: routine, well-understood changes are fast-tracked with minimal overhead, while high-risk changes undergo rigorous review.',
          'Integration of Security & Compliance — Fully embed security and compliance checkpoints into the change process, so any change affecting security posture triggers a mandatory security impact analysis and sign-off before implementation.',
          'Separation of Policy from Procedure — Keep the policy document focused on the high-level what and why, while detailed how-to guidance lives in separate process guides and SOPs that can evolve without requiring policy re-approval.',
          'Transparency and Communication — Give stakeholders early, proactive visibility into planned changes through a central change calendar, with notification lead times scaled to risk.',
          'Continuous Improvement — Treat the change process itself as a living program, using defined KPIs and a quarterly review cycle to refine risk thresholds, standard-change definitions, and training over time.',
        ],
      },
      {
        heading: 'Framework Overview',
        bullets: [
          'Policy (Governance Document) — A concise, top-level Change Management Policy that states the purpose, scope, and key requirements every change must meet, and defines roles and responsibilities for change governance.',
          'Process Guides & SOPs — A supporting library of process guides and Standard Operating Procedures that drill into specifics — how to perform a risk assessment, submit a change record, or conduct a post-implementation review — so implementation details can be updated without altering the core policy.',
          'Risk Model & Change Tiers — A Risk Scoring Matrix evaluates each proposed change across five dimensions: service impact, security impact, user impact, deployment complexity, and cross-system dependencies. The combined score sets the change’s risk tier (Low, Medium, High, or Very High), which in turn drives the approval path, documentation, and notification requirements.',
          'Change Workflows — Low-risk changes are approved and executed quickly by designated Change Authorities; medium-risk changes add peer review from operations and security but stay asynchronous; high-risk changes convene the Virtual CAB; very-high-risk changes add executive sign-off and longer stakeholder notice.',
          'Standard vs. Emergency Changes — Low-risk, well-understood changes that meet predefined criteria are pre-approved through a Standard Change Catalog. Emergency changes are strictly redefined and limited to true production emergencies, and still require a post-implementation review within two business days.',
          'Unified Tooling & Records — Every change is logged in a single system of record with standardized minimum data requirements — description, systems affected, risk assessment, approvals, implementation and rollback plans, and testing evidence — improving audit readiness and institutional memory.',
          'Communication & Scheduling Controls — A centralized change calendar and standard notification procedure keep stakeholders informed, with lead times scaled to risk tier so business units are never caught off guard by a significant change.',
        ],
      },
      {
        heading: 'Governance & Operating Model',
        paragraphs: [
          'A central innovation of the framework is the shift to a Virtual Change Advisory Board (vCAB) model. Traditional ITIL-style change boards meet in person on a fixed schedule — often weekly — which proved too slow and resource-intensive for a fast-paced IT environment. Under the new model, routine change approvals happen asynchronously through digital workflow approvals, and real-time meetings are reserved for high-stakes changes only.',
          'The vCAB is not a standing committee but an on-demand virtual meeting of key stakeholders for critical changes: the accountable Change Authority with final approval rights, a Change Manager team that administers the process and coordinates meetings, a security representative for security-critical changes, an operations lead for infrastructure expertise, and the business or product owner of the affected system. For high- or very-high-risk changes, the Change Authority co-chairs the vCAB session and the approval decision becomes a collective one, with escalation to executive leadership for the highest-risk situations. For most low- and medium-risk changes, governance is enforced through automated workflows: reviewers receive tasks to approve or comment, and the system logs their responses as part of the record — reducing administrative burden while preserving rigor where it matters most.',
        ],
      },
      {
        heading: 'Process & Controls in the New Framework',
        bullets: [
          'Submission & Logging — Teams create a change request in the centralized system using a standardized template, with required fields covering the nature of the change, affected systems, proposed timing, expected impact, and preliminary risk factors.',
          'Risk Assessment — The change is scored against the five-factor Risk Scoring Matrix, producing an automatic risk-tier classification that determines the required approval path.',
          'Approvals & Review — Required approvers are notified based on risk tier: medium-risk changes need Change Authority and operations/security sign-off; high-risk changes convene a vCAB session where stakeholders discuss and vote. A RACI matrix defines accountability at each stage.',
          'Pre-Implementation Checks — Before execution, the change owner verifies prerequisites — successful staging tests, stakeholder notifications, and a documented back-out plan — before a deployment window is confirmed.',
          'Execution & Validation — The assigned implementer carries out the change during its planned window, validates the outcome, and executes the rollback plan if any issue arises.',
          'Closure & Post-Implementation Review — The change record is updated with the outcome, and significant, problematic, or emergency changes receive a Post-Implementation Review within a couple of days to capture lessons and assign follow-up actions.',
        ],
      },
      {
        heading: 'Expected Outcomes & Benefits',
        bullets: [
          'Increased Change Success Rate & System Reliability — Rigorous up-front review and documentation for high-risk changes are expected to reduce change-related incidents and improve system uptime and stability.',
          'Faster, More Efficient Delivery of Low-Risk Changes — Pre-approval of standard changes and delegated authority for low-risk scenarios speed up routine updates, cutting approval time from as long as a week to as little as a day for many changes.',
          'Better Risk Mitigation & Fewer Emergencies — Formal risk assessment surfaces potential issues before deployment, and stricter emergency-change criteria reduce the number of changes executed in fire-fighting mode.',
          'Improved Transparency and Stakeholder Trust — The change calendar and notification process give stakeholders advance visibility into changes that affect them, and leadership receives regular metrics reporting on change performance.',
          'Stronger Compliance and Audit Readiness — A single system of record with complete change information makes it straightforward to demonstrate control to auditors, and formal security evaluation reduces the likelihood of compliance gaps.',
          'Cultural and Organizational Benefits — Clear roles and responsibilities break down silos between applications, operations, and security teams, fostering a culture of accountability and continuous improvement.',
        ],
      },
      {
        heading: 'Risks and Mitigations',
        bullets: [
          'Adoption & Compliance Risk — Teams may initially bypass or only superficially follow the new process. Mitigated through early stakeholder involvement in designing the policy, clear communication of rationale, and enforcement built into the centralized tooling.',
          'Overhead vs. Agility Trade-off — A risk-based design right-sizes the level of ceremony to each change’s risk, keeping low-risk changes simple and fast while directing rigor where it’s actually needed.',
          'Tooling and Data Quality Issues — User-friendly forms, pragmatic minimum data requirements, and periodic audits of change records help ensure data quality without overburdening staff.',
          'Maintaining Momentum and Avoiding Backsliding — A quarterly metrics review cadence and ongoing governance ownership treat the framework as a living program, preventing it from becoming stale after initial rollout.',
        ],
      },
      {
        heading: 'Applicability & Adoption Guidance',
        bullets: [
          'Start with a Diagnostic Review — Build the case for change with evidence: change failure rates, incident causes, and process pain points such as untracked changes or unclear accountability.',
          'Customize a Risk Model — A five-factor model (impact, security, users, complexity, dependencies) is a solid starting point, but scoring weights should reflect what matters most to the organization’s mission.',
          'Balance Rigor with Flexibility — Avoid over-engineering, which stifles innovation, and under-engineering, which leads to inconsistency: automate and streamline low-risk changes while remaining unyielding on checks for high-risk ones.',
          'Invest in Training & Tool Support — Configure tooling to make risk assessment and documentation easy, and train staff on why each control exists, not just how to follow it.',
          'Executive Sponsorship and Oversight — Strong, sustained leadership support — tied to broader goals like reliability, security, and audit readiness — is critical to maintaining momentum.',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'This change management review led to a modern, risk-aware framework that addresses the shortcomings of a legacy process. By rooting the design in risk management, standardization, and transparency, the organization charted a path to more reliable and responsive IT operations — one expected to reduce unplanned outages, accelerate routine updates, and strengthen stakeholder confidence that technology changes will support mission needs without undermining security or service quality. Other organizations can apply the same lens to their own change processes: manage every change with a level of control proportional to its risk, and continually improve the process itself as technology and business demands evolve.',
        ],
      },
    ],
  },
]
