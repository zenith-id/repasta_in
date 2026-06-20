# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [Unreleased]

### Features

#### Add GPU repaste and OS license services

- **Date:** 2026-06-20
- **Commits:** `b1a9729`

- Add GPU Repaste service (from Rp 150.000)
- Add Instal Ulang OS + License Key (Rp 120.000)

#### Add 8 new customer testimonials

- **Date:** 2026-06-18
- **Commits:** `b530a2d`

- Add 8 new testimonials from real customer reviews
- Rebalance testimonial column slices for even distribution

### Style

#### Remove hero badge and trailing whitespace

- **Date:** 2026-06-20
- **Commits:** `3aa7a29`

- Remove redundant badge above headline
- Clean up trailing whitespace in canvas code

#### Restyle footer with slate color palette

- **Date:** 2026-06-18
- **Commits:** `73aa7cf`

- Replace theme-aware `bg-foreground`/`text-background` with hardcoded slate palette
- Add Google Maps link to location text and social icons
- Add `gmaps` field to contact constants

### Refactoring

#### Move footer from sections to layout

- **Date:** 2026-06-20
- **Commits:** `968b2e4`

- Relocate `footer.tsx` from `components/sections/` to `components/layout/`
- Update import path in `app/page.tsx`

#### Restructure components and constants into layout/sections directories

- **Date:** 2026-06-18
- **Commits:** `65b96ac` `6481383` `03a7aa4` `edfe748`

- Move Navbar and Hero to `components/layout/` and `constants/layout/`
- Move all section components (CTA, FAQ, Features, Footer, Gallery, HowItWorks, Pricing, ProblemAwareness, Services, Testimonials, WhatsAppFloat) to `components/sections/`
- Move all section constants to `constants/sections/`
- Update imports in `app/page.tsx`, `app/layout.tsx`, `app/layanan/page.tsx`
- Update `constants/index.ts` re-exports for new paths

### Documentation

#### Add project templates and design specs

- **Date:** 2026-06-18
- **Commits:** `ed8973b` `d1c2172` `4610ace`

- Add `CHANGELOG_TEMPLATE.md` and `COMMIT_TEMPLATE.md`
- Add design specs for gallery, brainstorming, and existing site
- Add spec template for future documentation

## [1.4.0](https://github.com/zenith-id/repasta_in/compare/v1.3.1...v1.4.0) (2026-06-17)


### Features

* **ui:** add grainient shader component ([50ae7d3](https://github.com/zenith-id/repasta_in/commit/50ae7d34c367c886f214891f68552b98844cbbf2))


### Bug Fixes

* **navbar:** replace broken harga routing with cara-pesan ([8a4a83e](https://github.com/zenith-id/repasta_in/commit/8a4a83e6dc8123891e825b42dde27a35b176fc72))

### [1.3.1](https://github.com/zenith-id/repasta_in/compare/v1.3.0...v1.3.1) (2026-05-13)

## [1.3.0](https://github.com/zenith-id/repasta_in/compare/v2.0.1...v1.3.0) (2026-05-13)

### Features

- add automated release workflow and revert package version to 1.1.0 ([a50c610](https://github.com/zenith-id/repasta_in/commit/a50c610dc4e386c21e1e1d8bb9019bdc307a6d2a))

### [2.0.1](https://github.com/zenith-id/repasta_in/compare/v2.0.0...v2.0.1) (2026-05-13)

## 1.2.0 (2026-05-13)

### ⚠ BREAKING CHANGES

- **constants:** Static data now in constants/. Components updated to use imports.

### Features

- add new skills to lockfile and update Next.js types path ([22068b3](https://github.com/zenith-id/repasta_in/commit/22068b3e3623331679eec87d09f99d4982bd271d))
- **constants:** add problem-awareness and whatsapp-float constants ([a666fec](https://github.com/zenith-id/repasta_in/commit/a666fec98bef5f9fa17c254717e72d7c338a97de))
- **constants:** extract static data to constants folder ([4725d3a](https://github.com/zenith-id/repasta_in/commit/4725d3ab9fd0165f803e41626a0376d77472f10e))
- extract static data to constants and optimize opengraph image ([#1](https://github.com/zenith-id/repasta_in/issues/1)) ([12901be](https://github.com/zenith-id/repasta_in/commit/12901be022c30149a92ec54fee7873019622a527))
- **footer:** show app version in footer ([8ff0095](https://github.com/zenith-id/repasta_in/commit/8ff0095a309399c64ef7f74033429028c5410561))
- **seo:** add sitemap.xml and robots.txt ([888bb46](https://github.com/zenith-id/repasta_in/commit/888bb46fecbf3c5e7875d3fbac2f6f17a5c2b825))

## 1.1.0 (2026-05-13)

### ⚠ BREAKING CHANGES

- **constants:** Static data now in constants/. Components updated to use imports.

### Features

- add new skills to lockfile and update Next.js types path ([22068b3](https://github.com/fukaziroh-id/repasta_in/commit/22068b3e3623331679eec87d09f99d4982bd271d))
- **constants:** add problem-awareness and whatsapp-float constants ([a666fec](https://github.com/fukaziroh-id/repasta_in/commit/a666fec98bef5f9fa17c254717e72d7c338a97de))
- **constants:** extract static data to constants folder ([4725d3a](https://github.com/fukaziroh-id/repasta_in/commit/4725d3ab9fd0165f803e41626a0376d77472f10e))
- **seo:** add sitemap.xml and robots.txt ([888bb46](https://github.com/fukaziroh-id/repasta_in/commit/888bb46fecbf3c5e7875d3fbac2f6f17a5c2b825))

## [1.1.0] - 2026-04-26

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
