# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **npm** (see `package-lock.json`).

- `npm run dev` — start the dev server at http://localhost:3000
- `npm run build` — production build
- `npm start` — serve the production build
- `npm run lint` — run ESLint (`next/core-web-vitals` + `next/typescript`)

There is no test runner configured in this project.

## Architecture

Marketing/brochure site for "Soft Solutions Technologies", built on **Next.js 14 App Router** (React 18, TypeScript, Tailwind). It is entirely static/presentational — no backend, no database, no API routes.

### Routing (`app/`)
- `app/layout.tsx` is the root layout: it loads the local Geist fonts, sets site metadata, and wraps every page with `<Navbar />` and `<Footer />`. Individual pages only render their content section.
- Route groups organize the URL space without adding path segments:
  - `app/(routes)/about/` → `/about`
  - `app/(routes)/(our-services)/<service>/` → `/software-development`, `/networking`, `/cyber-security`, `/cloud-services`
- **Page files are thin wrappers.** Each `page.tsx` does nothing but import and render one component from `components/`. Actual markup and logic live in `components/`, not in `app/`.

### Components (`components/`)
Organized by feature/section, mirroring the pages:
- `components/navigation/` — `navbar.tsx`, `footer.tsx` (rendered globally by the layout)
- `components/home/` — home page sections; reusable home sub-cards live under `components/home/lib/ui/`
- `components/about/`, `components/our-services/*/` — one folder per page section
- `components/forms/contact-us-form.tsx` — react-hook-form + Zod contact form (currently `console.log`s on submit; no send implemented)
- `components/ui/` — shadcn/ui-style primitives (`button`, `input`, `form`, `textarea`, `label`, `dropdown-menu`, etc.) built on Radix and `class-variance-authority`

### Shared code
- `lib/constants.ts` — **single source of truth for site content**: nav `links` (including the Services dropdown sub-links), `services`, and other card/section data arrays. Update copy and navigation here rather than hardcoding in components.
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge) used everywhere for conditional class names.
- `types/types.d.ts` — shared TypeScript interfaces (e.g. `ServiceType`), including Lucide `icon` fields.

### Conventions
- Import alias `@/*` maps to the repo root (e.g. `@/components/ui/button`, `@/lib/utils`).
- Icons come from `lucide-react`; content objects in `lib/constants.ts` store the icon *component* directly.
- Styling is Tailwind-only. Custom theme tokens are defined in `tailwind.config.ts` — notably the colors `monochrome`, `app-gray`, and `app-destructive`. Prefer these tokens over raw hex values.
- Forms use `react-hook-form` with `zodResolver`; email validation uses the `validator` library inside a Zod `.refine()`.
- Dependencies are kept current automatically via Renovate (`renovate.json`).
