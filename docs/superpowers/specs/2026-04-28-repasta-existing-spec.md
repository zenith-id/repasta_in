# Repasta Landing Page - Technical Specification

**Version:** 1.0  
**Date:** 2026-04-28  
**Project:** Repasta - Laptop & PC Repair Service Landing Page  
**URL:** https://repasta-in.vercel.app

---

## 1. Project Overview

**Type:** Static marketing landing page (Single Page Application)  
**Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Shadcn/ui  
**Purpose:** Customer acquisition via WhatsApp contact for laptop/PC repair services in Bandung, Indonesia  
**Target Audience:** Laptop/PC users in Bandung needing repair, repaste, deep clean, or upgrade services

---

## 2. Page Structure

### Sections (in order)

| # | Section | File | Purpose |
|---|--------|------|---------|
| 1 | Navbar | `components/navbar.tsx` | Navigation, logo, WhatsApp CTA |
| 2 | Hero | `components/hero.tsx` | Main value prop, CTA, statistics |
| 3 | Problem Awareness | `components/problem-awareness.tsx` | Problem identification |
| 4 | Services | `components/services.tsx` | Service offerings (Laptop/PC tabs) |
| 5 | Features | `components/features.tsx` | Competitive advantages |
| 6 | How It Works | `components/how-it-works.tsx` | Process flow |
| 7 | Gallery | `components/gallery.tsx` | Portfolio images |
| 8 | Testimonials | `components/testimonials.tsx` | Social proof |
| 9 | FAQ | `components/faq.tsx` | Common questions |
| 10 | Pricing | `components/pricing.tsx` | Price plans |
| 11 | CTA | `components/cta.tsx` | Final call-to-action |
| 12 | Footer | `components/footer.tsx` | Links, contact, social |
| 13 | WhatsApp Float | `components/whatsapp-float.tsx` | Sticky WhatsApp button |

---

## 3. Technical Implementation

### Routing

- **Main page:** `app/page.tsx` - Single landing page composing all sections
- **Static routes:** `/layanan` (services) - Alias to main page
- **Assets:** `public/` - Images, icons, sitemap, robots.txt

### Data Layer

All content is hardcoded in `constants/` folder:
- `constants/hero.ts` - Hero section data
- `constants/services.ts` - Service listings
- `constants/pricing.ts` - Pricing plans
- `constants/testimonials.ts` - Customer reviews
- `constants/faq.ts` - FAQ items
- `constants/gallery.ts` - Portfolio images
- `constants/features.ts` - Feature data
- `constants/footer.ts` - Footer links

### Styling

- **Core:** Tailwind CSS 4 with custom HSL color tokens
- **Theme:** Dark/light mode via next-themes
- **Animations:** Framer Motion for interactive, CSS keyframes for static
- **Font:** 
  - Body: Geist (Sans)
  - Headings: Bricolage Grotesque

### Colors

| Token | Light | Dark |
|-------|-------|------|
| `--background` | #F9F7F7 | #112D4E |
| `--foreground` | #112D4E | #F9F7F7 |
| `--primary` | #3F72AF | #3F72AF (brighter) |
| `--card` | #DBE2EF | #1E3A5F |
| `--navy` | #112D4E | #0C1625 |

---

## 4. Features Implemented

### SEO
- [x] XML sitemap (`public/sitemap.xml`)
- [x] Robots.txt (`public/robots.txt`)
- [x] Metadata (title, description, keywords, OpenGraph, Twitter cards)
- [x] JSON-LD structured data (Organization, LocalBusiness, Breadcrumb, FAQPage)
- [x] Canonical URL
- [x] Language attribute (id)
- [x] Preconnect hints

### Performance
- [x] Image lazy loading
- [x] Font display:swap
- [x] Content-visibility for off-screen sections
- [x] Reduced font weights (400, 600, 700)

### Functionality
- [x] Dark/light theme toggle
- [x] Smooth scrolling (Lenis)
- [x] WhatsApp deep links
- [x] Responsive design (mobile-first)
- [x] Interactive service tabs (Laptop/PC)
- [x] Gallery lightbox
- [x] FAQ accordion

---

## 5. Contact Information

- **WhatsApp:** +62 819 1942 3939
- **Location:** Bandung, Jawa Barat, Indonesia
- **Hours:** Mon-Fri 09:00-18:00, Sat 10:00-15:00

---

## 6. Deployment

- **Platform:** Vercel
- **Build:** `pnpm build`
- **Dev:** `pnpm dev`
- **Lint:** `pnpm lint`

---

## 7. Future Considerations

- [ ] Actual domain (repasta.in)
- [ ] Google Search Console verification
- [ ] Analytics integration
- [ ] Contact form (email notification)
- [ ] Service booking system
- [ ] Before/after gallery
- [ ] Blog/education content