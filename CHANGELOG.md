# Changelog

All notable changes documented here. Format: [SemVer](https://semver.org/).

## [1.0.1] - 2026-04-26

### Changed
- README.md updated with complete constants list
- Added SemVer section with version 1.0.1
- Fixed duplicate Stack header in README
- Added Problem Awareness section to page structure

### Added
- CHANGELOG.md file for tracking releases
- New constants: `problem-awareness.ts`, `whatsapp-float.ts`
- SemVer documentation in README

### Refactor
- Static data extraction to `constants/` folder
- All components updated to import from `@/constants`
- Separate constants per section (contact, navbar, hero, services, features, testimonials, pricing, cta, footer, gallery, faq, how-it-works, layanan)

### Performance
- Simplified OpenGraph image to reduce bundle size (< 1MB)

## [1.0.0] - 2026-04-26

### Added
- Initial release of Repasta landing page
- Hero section with interactive wave canvas
- Services section with Laptop/PC tabs
- Features section with bento grid layout
- How It Works section with 3-step timeline
- Gallery with masonry grid and lightbox
- Testimonials with 3-column infinite scroll
- FAQ with accordion animation
- Pricing section with 3 plans
- CTA section with WhatsApp integration
- Footer with 4-column layout
- WhatsApp floating button
- Problem Awareness section
- Static data extraction to `constants/` folder
- Semantic Versioning documentation

### Features
- Dark/Light theme toggle
- Smooth scrolling with Lenis
- Responsive design (mobile-first)
- OpenGraph image generation

### Stack
- Next.js 16.x (App Router, SSG)
- React 19.x
- TypeScript 5.x
- Tailwind CSS 4.x
- Framer Motion 12.x
- Shadcn/ui (New York style)
- Lenis 1.3.x (smooth scrolling)

## [Unreleased]

No unreleased changes.

---

Template:
```
## [MAJOR.MINOR.PATCH] - YYYY-MM-DD

### Added
### Changed
### Deprecated
### Removed
### Fixed
### Security
```