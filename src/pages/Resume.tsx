import { Link } from 'react-router-dom'
import {
  profile,
  stats,
  experience,
  education,
  certifications,
  skillGroups,
  projects,
} from '../content'

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-semibold tracking-tight text-[#0b2416] sm:text-3xl">
      {children}
    </h2>
  )
}

const sectionNav = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

function TitleSection() {
  return (
    <header className="sticky top-0 z-20 border-b border-emerald-900 bg-[#0b2416] text-white">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3 text-sm">
        <Link to="/" className="font-semibold tracking-wide text-emerald-100 hover:text-white">
          ← Kevin Buckley
        </Link>
        <a
          href="/kevin-buckley-resume.pdf"
          download
          className="rounded border border-emerald-800 px-3 py-1.5 text-emerald-100 hover:bg-emerald-900/40"
        >
          Download PDF
        </a>
      </div>

      <div className="mx-auto max-w-4xl px-6 pb-6 pt-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {profile.name}, {profile.credentials}
        </h1>
        <p className="mt-2 text-base text-emerald-100/90 sm:text-lg">{profile.title}</p>
        <p className="text-sm text-emerald-200/60">{profile.tagline}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-emerald-100/80">
          <a className="hover:text-white" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <span aria-hidden="true">·</span>
          <span>{profile.phone}</span>
          <span aria-hidden="true">·</span>
          <span>{profile.location}</span>
          <span aria-hidden="true">·</span>
          <a
            className="hover:text-white"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <nav className="border-t border-emerald-900/70 bg-[#091f13]">
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-x-6 gap-y-2 px-6 py-3 text-xs font-semibold uppercase tracking-[1.5px]">
          {sectionNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-emerald-100/80 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

function StatStrip() {
  return (
    <div className="border-b border-emerald-100 bg-white">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-4">
        {stats.map((stat) => {
          const content = (
            <>
              <div className="text-3xl font-bold tracking-tight text-[#0b2416] sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wide text-emerald-700/70 sm:text-sm">
                {stat.label}
              </div>
            </>
          )
          return stat.anchorId ? (
            <a key={stat.label} href={`#${stat.anchorId}`} className="text-center hover:opacity-70">
              {content}
            </a>
          ) : (
            <div key={stat.label} className="text-center">
              {content}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl scroll-mt-[280px] px-6 py-16">
      <SectionHeading>Summary</SectionHeading>
      <p className="mt-4 leading-relaxed text-slate-600">{profile.summary}</p>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-[280px] border-t border-emerald-100 bg-emerald-50/40">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <SectionHeading>Experience</SectionHeading>
        <div className="mt-8 space-y-10">
          {experience.map((role) => (
            <article key={`${role.org}-${role.title}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-[#0b2416]">
                  {role.title}
                </h3>
                <span className="text-sm font-medium text-emerald-700/70">
                  {role.period}
                </span>
              </div>
              <p className="text-sm text-emerald-700/70">
                {role.org} · {role.location}
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
                {role.bullets.map((bullet) => {
                  const isEfficiencyStat = bullet.includes('efficiency by 40%')
                  return (
                    <li
                      key={bullet}
                      id={isEfficiencyStat ? 'stat-efficiency' : undefined}
                      className={isEfficiencyStat ? 'scroll-mt-[280px]' : undefined}
                    >
                      {bullet}
                    </li>
                  )
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl scroll-mt-[280px] px-6 py-16">
      <SectionHeading>Skills</SectionHeading>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="font-semibold text-[#0b2416]">{group.category}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-[280px] border-t border-emerald-100 bg-emerald-50/40">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <SectionHeading>Projects &amp; Artifacts</SectionHeading>
        <p className="mt-2 text-sm text-emerald-700/70">
          Placeholder cards below — swap in real projects, case studies, or
          writing samples in{' '}
          <code className="rounded bg-emerald-100/70 px-1 py-0.5 text-emerald-800">
            src/content.ts
          </code>
          .
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`rounded-lg border p-5 ${
                project.placeholder
                  ? 'border-dashed border-emerald-200 bg-white/60'
                  : 'border-emerald-100 bg-white'
              }`}
            >
              <h3 className="font-semibold text-[#0b2416]">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-emerald-100/60 px-2 py-0.5 text-xs text-emerald-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  className="mt-3 inline-block text-sm font-medium text-emerald-600 hover:underline"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EducationSection() {
  return (
    <section id="education" className="mx-auto max-w-4xl scroll-mt-[280px] px-6 py-16">
      <SectionHeading>Education &amp; Certifications</SectionHeading>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <div>
          <h3 className="font-semibold text-[#0b2416]">Education</h3>
          <ul className="mt-3 space-y-2 text-slate-600">
            {education.map((item) => (
              <li key={item.degree}>
                <span className="font-medium text-slate-800">
                  {item.degree}
                </span>
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
    </section>
  )
}

function Contact() {
  return (
    <footer id="contact" className="scroll-mt-[280px] border-t border-emerald-900 bg-[#0b2416] text-white">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Get in touch
        </h2>
        <p className="mt-4 text-emerald-100/80">
          Open to conversations about technology portfolio leadership,
          program management, and delivery operations.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-[#0b2416] hover:bg-emerald-50"
          >
            Email {profile.name.split(' ')[0]}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-emerald-800 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-900/40"
          >
            LinkedIn Profile
          </a>
        </div>
        <p className="mt-10 text-xs text-emerald-200/50">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  )
}

function Resume() {
  return (
    <div className="min-h-screen bg-white">
      <TitleSection />
      <StatStrip />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <EducationSection />
      <Contact />
    </div>
  )
}

export default Resume
