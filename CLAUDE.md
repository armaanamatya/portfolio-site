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

# context-mode — MANDATORY routing rules

You have context-mode MCP tools available. These rules are NOT optional — they protect your context window from flooding. A single unrouted command can dump 56 KB into context and waste the entire session.

## BLOCKED commands — do NOT attempt these

### curl / wget — BLOCKED
Any Bash command containing `curl` or `wget` is intercepted and replaced with an error message. Do NOT retry.
Instead use:
- `ctx_fetch_and_index(url, source)` to fetch and index web pages
- `ctx_execute(language: "javascript", code: "const r = await fetch(...)")` to run HTTP calls in sandbox

### Inline HTTP — BLOCKED
Any Bash command containing `fetch('http`, `requests.get(`, `requests.post(`, `http.get(`, or `http.request(` is intercepted and replaced with an error message. Do NOT retry with Bash.
Instead use:
- `ctx_execute(language, code)` to run HTTP calls in sandbox — only stdout enters context

### WebFetch — BLOCKED
WebFetch calls are denied entirely. The URL is extracted and you are told to use `ctx_fetch_and_index` instead.
Instead use:
- `ctx_fetch_and_index(url, source)` then `ctx_search(queries)` to query the indexed content

## REDIRECTED tools — use sandbox equivalents

### Bash (>20 lines output)
Bash is ONLY for: `git`, `mkdir`, `rm`, `mv`, `cd`, `ls`, `npm install`, `pip install`, and other short-output commands.
For everything else, use:
- `ctx_batch_execute(commands, queries)` — run multiple commands + search in ONE call
- `ctx_execute(language: "shell", code: "...")` — run in sandbox, only stdout enters context

### Read (for analysis)
If you are reading a file to **Edit** it → Read is correct (Edit needs content in context).
If you are reading to **analyze, explore, or summarize** → use `ctx_execute_file(path, language, code)` instead. Only your printed summary enters context. The raw file content stays in the sandbox.

### Grep (large results)
Grep results can flood context. Use `ctx_execute(language: "shell", code: "grep ...")` to run searches in sandbox. Only your printed summary enters context.

## Tool selection hierarchy

1. **GATHER**: `ctx_batch_execute(commands, queries)` — Primary tool. Runs all commands, auto-indexes output, returns search results. ONE call replaces 30+ individual calls.
2. **FOLLOW-UP**: `ctx_search(queries: ["q1", "q2", ...])` — Query indexed content. Pass ALL questions as array in ONE call.
3. **PROCESSING**: `ctx_execute(language, code)` | `ctx_execute_file(path, language, code)` — Sandbox execution. Only stdout enters context.
4. **WEB**: `ctx_fetch_and_index(url, source)` then `ctx_search(queries)` — Fetch, chunk, index, query. Raw HTML never enters context.
5. **INDEX**: `ctx_index(content, source)` — Store content in FTS5 knowledge base for later search.

## Subagent routing

When spawning subagents (Agent/Task tool), the routing block is automatically injected into their prompt. Bash-type subagents are upgraded to general-purpose so they have access to MCP tools. You do NOT need to manually instruct subagents about context-mode.

## Output constraints

- Keep responses under 500 words.
- Write artifacts (code, configs, PRDs) to FILES — never return them as inline text. Return only: file path + 1-line description.
- When indexing content, use descriptive source labels so others can `ctx_search(source: "label")` later.

## ctx commands

| Command | Action |
|---------|--------|
| `ctx stats` | Call the `ctx_stats` MCP tool and display the full output verbatim |
| `ctx doctor` | Call the `ctx_doctor` MCP tool, run the returned shell command, display as checklist |
| `ctx upgrade` | Call the `ctx_upgrade` MCP tool, run the returned shell command, display as checklist |
