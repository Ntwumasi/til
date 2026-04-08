@AGENTS.md

# TJL Home Services - Pressure Washing Website

## Project Overview
A Next.js (App Router) marketing site for TJL Home Services, a professional pressure washing company. Converted from a single static HTML page into component-based React architecture.

## Tech Stack
- **Framework**: Next.js 16 with App Router and TypeScript
- **Styling**: Custom CSS in `src/app/globals.css` (not Tailwind utility classes)
- **Font**: Inter via `next/font/google`
- **Deployment**: Vercel (auto-deploys on push to `main`)

## Project Structure
- `src/app/page.tsx` — Main page composing all sections
- `src/app/layout.tsx` — Root layout with metadata and font
- `src/app/globals.css` — All custom styles (CSS variables, responsive breakpoints)
- `src/components/` — Section components:
  - `Navbar.tsx` (client) — Fixed nav with scroll effect and mobile hamburger
  - `Hero.tsx` — Hero section with stats card
  - `TrustBar.tsx` — Trust badges strip
  - `Services.tsx` — 6 service cards grid
  - `WhyUs.tsx` — 4 differentiators
  - `Testimonials.tsx` — 3 review cards
  - `Contact.tsx` (client) — Contact info + quote form
  - `Footer.tsx` — Footer with logo, links, copyright
  - `FadeIn.tsx` (client) — Intersection Observer scroll animation wrapper
  - `LogoSvg.tsx` — Reusable SVG logo component

## Workflow Rules
- **Every change must be committed and pushed** — no local-only changes
- Commit messages should be concise and descriptive
- All pushes go to `main` which triggers Vercel auto-deploy

## Style Guidelines
- Styles use CSS custom properties defined in `:root` in globals.css
- Responsive breakpoints: 900px (tablet), 640px (mobile), 380px (small phone)
- Color scheme: red (`--red-*`) + black (`--black-*`) + gray (`--gray-*`)
- Do not convert existing CSS to Tailwind utility classes

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — Run ESLint
