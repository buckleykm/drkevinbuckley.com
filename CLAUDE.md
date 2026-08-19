# drkevinbuckley.com

Kevin Buckley's personal portfolio site. Vite + React 19 + TypeScript + Tailwind CSS v4,
deployed to GitHub Pages at the custom domain drkevinbuckley.com via `buckleykm/drkevinbuckley.com`.

## Stack & commands

- `yarn dev --port <N> --strictPort` — dev server (always pass an explicit port; this repo
  doesn't reserve one)
- `yarn build` — `tsc -b && vite build`, must pass with zero errors before every push
- No test suite. Verification is: build clean, then screenshot the change with Playwright
  (`NODE_PATH=$(npm root -g) node -e "..."`, launch via
  `chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })`) before pushing.
- Tailwind v4 via `@tailwindcss/vite` — no `tailwind.config.js`, no separate PostCSS config.

## Design system

- Dark green / emerald theme throughout. Key colors: page background `#0b2416` (headers/footers),
  accent green `#34e0a1` / `#1f7a5c` / `#238a68`, body text `text-slate-600` on white sections.
- Alternating section backgrounds on long-form pages: plain white, then `bg-emerald-50/40` with
  a `border-t border-emerald-100`, alternating by index.
- Headers/footers on inner pages follow a consistent pattern: dark green `<header>` with a
  back-link + secondary nav link, title/tagline/tags block; dark green `<footer>` with an
  "Email Kevin" mailto and a back link.

## Routing (`src/App.tsx`)

- `/` — `Landing.tsx` (hero page)
- `/resume` — `Resume.tsx` (full resume, sticky header with anchor nav)
- `/artifacts` — `ArtifactsIndex.tsx` (grouped by `Artifact.type`, with jump-links)
- `/artifacts/:slug` — `ArtifactDetail.tsx` (branches on which optional fields are present)
- `/AeroCorp` + `/AeroCorp/*` — unlisted job-application page, **lazy-loaded** (see below)

## Content model (`src/content.ts`)

Single source of truth for all page content. Everything is typed exports consumed by page
components — don't hardcode content directly in JSX for anything that could grow (projects,
artifacts, experience).

`Artifact` is the important one — it's one type covering three different rendered layouts,
picked by which optional fields are set:

- **Case study**: `challenge`, `solutionIntro`, `netProductValueCallout`, `valueFactors`,
  `costFactors`, `process`, `resultsIntro`, `resultStats`, `benefits`, `closing`
- **White paper / long-form article**: `sections: { heading?, paragraphs?, bullets? }[]` —
  generic enough to be reused for anything with multiple headed sections. Used for the change
  management white paper and all 4 full-text article publications.
- **Publication / abstract**: `abstract`, `abstractHeading` (omit for "Abstract" heading, pass
  `''` to suppress the heading entirely), `keywords`, `references`, `downloadUrl` +
  `downloadLabel` (renders "Download this Publication" + a button right after the abstract)

`ArtifactType` (`'Case Study' | 'Publication' | 'White Paper'`) drives the index page's
grouping — add a new type there and a new artifact of that type gets its own section on
`/artifacts` automatically, no other changes needed.

`ArtifactDetail.tsx`'s `isCaseStudy` / `isWhitePaper` checks are `Boolean(artifact.challenge)` /
`Boolean(artifact.sections)` — mutually exclusive by construction, never set both.

## "On This Page" anchor nav (`ArtifactDetail.tsx`)

Built from whichever headers actually render for that artifact (case-study section titles,
white-paper section headings, the abstract heading, Keywords, References). On `xl:` and up it's
a `fixed` sidebar in the left margin, positioned via `left-[max(1rem,calc(50%-37.5rem))]` and a
`top` computed from the actual rendered header height (measured via a `ref` + `useEffect`, not
guessed). Below `xl:` it becomes a collapsible "On This Page" bar under the header instead.

## Chatbot widget (`public/chatbot-widget.js`)

Distills-generated RAG chatbot, vanilla JS, loaded via a plain `<script>` tag in `index.html` so
it's present on every route without going through React. Config (endpoint, colors, greeting) is
hardcoded at the top of the file. Styled to match the site theme; label pill hidden below 480px
via a media query so it doesn't overlap page content on small screens.

## Mobile nav pattern

`Landing.tsx` and `ArtifactsIndex.tsx`/`ArtifactDetail.tsx` each have their own small mobile nav
implementations (hamburger toggle / collapsible bar) using local `useState` — there's no shared
nav component. If adding nav to a new page, copy the closest existing pattern rather than
inventing a new one.

## Unlisted / private pages (the `/AeroCorp` pattern)

This is a fully static site with no auth — there is no way to truly gate a page. "Hidden from
the public" means: not linked from any nav, `noindex, nofollow` via the `useNoIndex()` hook
(`src/hooks/useNoIndex.ts`), and lazy-loaded via `React.lazy()` in `App.tsx` so its code isn't
shipped in the main bundle every visitor downloads. Say this limitation out loud to the user
before building anything like this — the URL itself is not access-controlled.

`/AeroCorp/*` is the reference implementation: `AeroCorpLayout.tsx` is the shared header/footer
wrapper (takes `eyebrow`/`title`/`tagline`/`backHref`/`backLabel`), each sub-page is its own
file under `src/pages/aerocorp/`. PDFs live under `public/aerocorp/`.

## Editing PDFs

`pymupdf` (`import pymupdf`, formerly `fitz`) is available and is the right tool for true
redaction — `page.add_redact_annot(rect)` + `page.apply_redactions()` actually removes the
underlying text, not just paints over it. `page.search_for(text)` finds the rect. To reinsert
replacement text matching the original font exactly, extract the embedded font
(`doc.extract_font(xref)`, find the xref via `page.get_fonts(full=True)`) and use
`page.insert_font(fontname=..., fontbuffer=...)` + `page.insert_text(...)`. Always render the
result to PNG (`page.get_pixmap(dpi=150).save(...)`) and visually check it before shipping —
don't just trust that the search-and-redact succeeded.

## Deploying

Every push to `main` triggers `.github/workflows/deploy.yml` (build → upload → deploy to GitHub
Pages). After pushing, the pattern used throughout this project's history: check the run via
`mcp__github__actions_list` (method `list_workflow_runs`, `workflow_runs_filter: {"branch":
"main"}`). That call reliably exceeds the tool's token limit on this repo now — when it errors,
read the saved file it points to and grep for the commit SHA instead of retrying with different
parameters:

```
python3 -c "
data = open('<path from the error message>').read()
idx = data.find('<commit-sha>')
print(repr(data[max(0,idx-60):idx+600]))
"
```

Look for `"status":"completed","conclusion":"success"` near the SHA.

## Hard-won lessons

- **Never use `-webkit-text-stroke` for outlined/hollow text.** It renders inconsistently
  across browsers and devices (confirmed broken on Android Chrome / Pixel hardware despite
  looking fine in every Linux-Chromium test). Use an inline SVG `<text fill="none"
  stroke="...">` instead — genuinely consistent because it's vector rendering, not a
  browser-specific CSS text-rendering path.
- **Don't guess a responsive SVG's width from `aspect-ratio` + `width: auto`.** Browsers
  resolve that inconsistently for `<svg>` elements with no `width`/`height` attributes — it
  looked correct in testing here and rendered far too narrow on a real device. Give explicit
  pixel widths per breakpoint, or better, measure the actual rendered content with
  `element.getBBox()` in a `useEffect` and size the container from that measurement. This is
  what `Landing.tsx`'s "KEVIN" wordmark does now — don't regress it back to a guessed size.
- **Don't hardcode `letterSpacing` to compensate for one font's metrics.** The device that
  renders differently than your test environment is usually using a different font (e.g.
  Android's Roboto vs. a Linux fallback font) — a fixed negative letter-spacing tuned for one
  font will visibly overlap glyphs in a tighter font. If you need to guarantee a fixed
  width regardless of font, measure at runtime instead of guessing a spacing value.
- **A "PDF file read" tool confirmation with no visible content is not the same as having read
  it.** Always re-invoke `Read` directly on the file path if the content didn't actually show
  up in context — don't proceed as if you've seen it.
- **`git pull` before editing anything the user might have touched directly.** They can and do
  push straight to `main` themselves (e.g. uploading a PDF via the GitHub web UI, or editing a
  typo in a comment) — always fetch/pull first, and if there's a rebase conflict, resolve it
  by rebasing your local commit on top rather than force-pushing over their change.
