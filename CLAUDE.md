# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project Overview
A Next.js 16 (App Router) marketing site for TJL Home Services, a professional pressure washing company in the Atlanta, GA metro area. Live at https://www.tjlhomeservices.com.

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build (use to verify before pushing)
- `npm run lint` — Run ESLint

## Architecture
- **Framework**: Next.js 16 with App Router, React 19, TypeScript
- **Styling**: Custom CSS in `src/app/globals.css` using CSS custom properties (`:root` variables). Do not convert to Tailwind utility classes — Tailwind is installed but only used via `@import "tailwindcss"` base reset.
- **Font**: Inter via `next/font/google`
- **Deployment**: Vercel auto-deploys on push to `main`

### Page structure
- `src/app/page.tsx` composes the homepage from section components in `src/components/`
- `src/app/privacy-policy/` and `src/app/terms-and-conditions/` are standalone legal pages (not indexed, used for Twilio SMS compliance)
- Components marked `"use client"`: `Navbar.tsx`, `Contact.tsx`, `FadeIn.tsx`
- All SVG icons are centralized in `src/components/Icons.tsx` — use these instead of emojis or inline SVGs

### Styling conventions
- All styles live in `globals.css`, scoped by class names matching component names
- Color scheme: red (`--red-*`) + black (`--black-*`) + gray (`--gray-*`)
- Responsive breakpoints: 900px (tablet), 640px (mobile), 380px (small phone)
- `FadeIn` wrapper provides scroll-triggered fade-in animations via Intersection Observer

## Workflow Rules
- **Every change must be committed and pushed** — no local-only changes
- All pushes go to `main` which triggers Vercel auto-deploy
- Run `npm run build` to verify before pushing
