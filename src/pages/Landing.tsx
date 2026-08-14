import { useState } from 'react'
import { profile } from '../content'

const navItems = [
  { num: 4, label: 'ARTIFACTS', href: '/artifacts' },
  { num: 3, label: 'SKILLS', href: '/resume#skills' },
  { num: 2, label: 'ABOUT', href: '/resume#about' },
  { num: 1, label: 'CONTACT', href: '/resume#contact' },
]

function Landing() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div
      className="relative min-h-screen overflow-hidden text-[#dff5e8]"
      style={{
        background:
          'radial-gradient(circle at 22% 45%, rgba(52,211,153,0.12), transparent 45%), linear-gradient(200deg, #071a10 0%, #0c2419 55%, #071a10 100%)',
      }}
    >
      {/* top bar */}
      <div className="flex items-center justify-between px-6 py-6 sm:px-10 sm:py-8">
        <div className="flex items-center gap-3">
          <svg className="h-6 w-6 shrink-0" viewBox="0 0 32 32" fill="none">
            <path
              d="M4 24 L11 14 L17 19 L28 6"
              stroke="#34e0a1"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="28" cy="6" r="2.6" fill="#e08a34" />
          </svg>
          <div className="text-sm font-bold uppercase tracking-[3px]">
            KEVIN
            <span className="block text-[9px] font-normal tracking-[3px] text-[#6f9a82]">
              BUCKLEY
            </span>
          </div>
        </div>

        <nav className="hidden gap-6 sm:flex sm:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-baseline gap-2 text-xs font-semibold tracking-[2px] text-[#dff5e8] hover:text-white"
            >
              <span className="text-[#34e0a1]">{item.num}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 sm:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={`h-[2px] w-6 bg-[#dff5e8] transition-transform ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
          />
          <span
            className={`h-[2px] w-6 bg-[#dff5e8] transition-opacity ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`h-[2px] w-6 bg-[#dff5e8] transition-transform ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col border-t border-white/10 px-6 py-4 sm:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-baseline gap-3 border-b border-white/10 py-3 text-sm font-semibold tracking-[2px] text-[#dff5e8] last:border-b-0 hover:text-white"
            >
              <span className="text-[#34e0a1]">{item.num}</span>
              {item.label}
            </a>
          ))}
        </nav>
      )}

      {/* hero */}
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 pb-24 pt-6 sm:px-10 lg:flex-row lg:items-center lg:justify-center lg:gap-16 lg:px-16 lg:py-20 xl:gap-24 xl:px-24">
        <div className="relative w-[240px] shrink-0 sm:w-[340px] lg:w-[420px] xl:w-[480px]">
          <div className="absolute -inset-4 rounded-full border border-white/15 sm:-inset-6" />
          <div
            className="aspect-square w-full overflow-hidden rounded-full"
            style={{
              background:
                'linear-gradient(150deg, #1f3d2c 0%, #16291d 60%, #0c1a11 100%)',
            }}
          >
            <img
              src="/kevin-headshot.webp"
              alt="Kevin Buckley"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 text-center lg:gap-6 lg:text-right">
          <div className="order-2 max-w-xl lg:order-1">
            <div className="mb-3 text-sm font-light uppercase tracking-[8px] text-[#6f9a82] lg:hidden">
              DOCTOR
            </div>
            <div className="mx-auto h-[3px] w-[70px] bg-[#34e0a1] lg:mx-0 lg:ml-auto" />
            <h1 className="mt-5 font-black uppercase leading-[0.86] tracking-tight">
              <svg
                viewBox="0 0 360 100"
                role="img"
                aria-label="Kevin"
                className="mx-auto block h-[48px] w-[173px] sm:h-[69px] sm:w-[248px] lg:mx-0 lg:ml-auto lg:h-[86px] lg:w-[310px] xl:h-[101px] xl:w-[364px]"
              >
                <text
                  x="2"
                  y="80"
                  textLength="335"
                  lengthAdjust="spacingAndGlyphs"
                  className="font-black uppercase"
                  style={{ fontSize: 88 }}
                  fill="none"
                  stroke="#3a6b52"
                  strokeWidth={2.5}
                >
                  KEVIN
                </text>
              </svg>
              <span className="block text-[56px] text-[#34e0a1] sm:text-[80px] lg:text-[100px] xl:text-[118px]">
                BUCKLEY
              </span>
            </h1>
            <p className="mt-6 text-base text-[#c8e6d3] sm:text-lg">
              Technology Executive
              <span className="mx-3 text-[#4f7d64]">|</span>
              PMP
              <span className="mx-3 text-[#4f7d64]">|</span>
              Project, Program, and Portfolio Management Evangelist
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 lg:justify-end">
              <a
                href={`mailto:${profile.email}?subject=Let's connect`}
                className="flex items-center gap-2 text-xs font-bold tracking-[1.5px] text-[#dff5e8] hover:text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dff5e8] text-[11px]">
                  ▶
                </span>
                BOOK A CONVERSATION
              </a>
              <a
                href="/resume"
                className="rounded-sm bg-[#1f7a5c] px-7 py-4 text-xs font-bold tracking-[1.5px] text-[#eefaf3] hover:bg-[#238a68]"
              >
                VIEW FULL RESUME →
              </a>
            </div>
          </div>

          <div
            className="order-1 hidden shrink-0 text-2xl font-light uppercase tracking-[10px] text-[#6f9a82] lg:order-2 lg:block"
            style={{ writingMode: 'vertical-rl' }}
          >
            DOCTOR
          </div>
        </div>
      </div>

      {/* pdf download badge */}
      <a
        href="/kevin-buckley-resume.pdf"
        download
        className="fixed bottom-6 left-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#c0392b] text-[10px] font-extrabold tracking-wide text-white shadow-lg hover:bg-[#a8331f]"
        aria-label="Download resume PDF"
      >
        PDF
      </a>
    </div>
  )
}

export default Landing
