import {
  profile,
  experience,
  education,
  certifications,
  skillGroups,
  projects,
} from './content'

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
      {children}
    </h2>
  )
}

function Hero() {
  return (
    <header className="border-b border-slate-200 bg-slate-900 text-white">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {profile.name}, {profile.credentials}
        </h1>
        <p className="mt-3 text-lg text-slate-300">{profile.title}</p>
        <p className="text-slate-400">{profile.tagline}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-slate-300">
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
    </header>
  )
}

function About() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading>Summary</SectionHeading>
      <p className="mt-4 leading-relaxed text-slate-600">{profile.summary}</p>
    </section>
  )
}

function Experience() {
  return (
    <section className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <SectionHeading>Experience</SectionHeading>
        <div className="mt-8 space-y-10">
          {experience.map((role) => (
            <article key={`${role.org}-${role.title}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-slate-900">
                  {role.title}
                </h3>
                <span className="text-sm font-medium text-slate-500">
                  {role.period}
                </span>
              </div>
              <p className="text-sm text-slate-500">
                {role.org} · {role.location}
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
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
    <section className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading>Skills</SectionHeading>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="font-semibold text-slate-900">{group.category}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700"
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
    <section className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <SectionHeading>Projects &amp; Artifacts</SectionHeading>
        <p className="mt-2 text-sm text-slate-500">
          Placeholder cards below — swap in real projects, case studies, or
          writing samples in{' '}
          <code className="rounded bg-slate-200 px-1 py-0.5 text-slate-700">
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
                  ? 'border-dashed border-slate-300 bg-white/60'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <h3 className="font-semibold text-slate-900">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  className="mt-3 inline-block text-sm font-medium text-blue-600 hover:underline"
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
    <section className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading>Education &amp; Certifications</SectionHeading>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <div>
          <h3 className="font-semibold text-slate-900">Education</h3>
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
          <h3 className="font-semibold text-slate-900">Certifications</h3>
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
    <footer className="border-t border-slate-200 bg-slate-900 text-white">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center">
        <SectionHeading>
          <span className="text-white">Get in touch</span>
        </SectionHeading>
        <p className="mt-4 text-slate-300">
          Open to conversations about technology portfolio leadership,
          program management, and delivery operations.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-200"
          >
            Email {profile.name.split(' ')[0]}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-slate-600 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            LinkedIn Profile
          </a>
        </div>
        <p className="mt-10 text-xs text-slate-500">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <EducationSection />
      <Contact />
    </div>
  )
}

export default App
