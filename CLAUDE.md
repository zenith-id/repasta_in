# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Repasta is a static marketing landing page for a laptop/PC repair service based in Padang, Indonesia. It drives customer acquisition via WhatsApp contact links. There is no backend, database, or API.

## Commands

```bash
pnpm dev      # Start development server
pnpm build    # Production build
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

Use **pnpm** as the package manager (configured via `pnpm-workspace.yaml`).

## Architecture

**Stack:** Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS 4 + Framer Motion + Shadcn/ui (New York style)

**Page structure** — `app/page.tsx` composes the landing page from sequential section components:

```
Navbar → Hero → Services → Features → Testimonials → Pricing → CTA → Footer
```

Each section is a standalone component in `/components/`. All content (services, pricing, testimonials) is hardcoded inside the component files — there is no CMS or data layer.

**Component layers:**
- `/components/ui/` — Shadcn/ui primitives (Radix UI-based, do not modify manually; use `npx shadcn@latest add <component>` to add new ones)
- `/components/*.tsx` — Page section components (navbar, hero, services, features, pricing, testimonials, cta, footer)
- `/components/lenis-provider.tsx` — Wraps the app for smooth scrolling (Lenis)
- `/components/theme-provider.tsx` — Wraps app for dark/light mode (next-themes)

**Styling conventions:**
- Tailwind utility classes with CSS custom properties (HSL color tokens defined in `app/globals.css`)
- Dark mode via `.dark` class toggled by `next-themes`
- Animations use Framer Motion for interactive elements; CSS keyframes (defined in `tailwind.config.ts`) for static ones
- `cn()` from `lib/utils.ts` is used everywhere for conditional class merging (clsx + tailwind-merge)

**Fonts:** Inter (body) and Poppins (headings), loaded via `next/font/google` in `app/layout.tsx`.

**Analytics:** Vercel Analytics injected in `app/layout.tsx` — active only in production.

## Key Notes

- `next.config.mjs` sets `ignoreBuildErrors: true` for TypeScript and `unoptimized: true` for images — builds succeed even with TS errors.
- WhatsApp contact number: `+62 191 942 3939` (appears in multiple components as `wa.me` links — update all occurrences if it changes).
- The `lang` attribute in `app/layout.tsx` is set to `"pt-BR"` — this appears to be a scaffold artifact and may need correction to `"id"` (Indonesian).
- Path alias `@/` resolves to the project root (configured in `tsconfig.json`).
