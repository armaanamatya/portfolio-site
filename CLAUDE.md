# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

Run from the repo root (the app lives at the root, not in a subdirectory):

- `npm run dev` — Vite dev server with HMR
- `npm run build` — `tsc -b && vite build` (TypeScript project-references build, then Vite bundle)
- `npm run lint` — ESLint over the repo
- `npm run preview` — preview the production build locally

There is no test runner configured.

## Architecture

Single-page React 19 + TypeScript portfolio bundled by Vite 7. Deployed to Vercel (`vercel.json`).

`src/App.tsx` is the single page. It composes section blocks (`#hero`, `#about`, `#experience`, `#education`, `#skills`, `#projects`) inside `<main className="main-content">`, with a fixed `left-sidebar` for social/contact links and a `ResumeViewer` modal toggled from the sidebar. Section content lives in `src/components/`:

- `ExperienceCard` — work experience rows; `App.tsx` instantiates one per role with hardcoded props (title, company, period, description bullets, techStack, logoUrl/logoText, isCurrent, companyUrl). All resume content is authored inline in `App.tsx` rather than loaded from data files.
- `Education`, `Skills`, `ProjectSlider`, `ResumeViewer` — self-contained section components rendered directly by `App.tsx`.
- Other components (`Certificates`, `HackathonSlider`, `HighlightWidget`, `InfoCard`, `ProjectModal`, `ScrollWheel`, `SectionTags`) exist in `src/components/` but are not all wired into the current `App.tsx` — check imports before assuming a component is live.

Styling is plain CSS (`src/App.css`, `src/index.css`) — no Tailwind / CSS-in-JS. Class names follow component-scoped BEM-ish conventions (`.portfolio`, `.hero-section`, `.experience-section`, `.section-title`, `.highlight`). Static assets (logos, profile image, resume) are served from `public/` and referenced by absolute paths like `/uh.jpg`, `/logos/algoverse.jpg`.

## TypeScript

Composite setup: `tsconfig.json` references `tsconfig.app.json` (app sources) and `tsconfig.node.json` (Vite/build tooling). The build script runs `tsc -b` first, so type errors in either project will fail `npm run build`.

## Conventions

- When adding a new experience or section item, edit `App.tsx` directly — there is no CMS or data layer.
- New static assets go in `public/` and are referenced with a leading slash.
