# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [Unreleased]


### Features

* **data:** add features constants configuration file ([a29e4de](https://github.com/zenith-id/repasta_in/commit/a29e4de))
* **gallery:** remove unused assets const ([c93cfb6](https://github.com/zenith-id/repasta_in/commit/c93cfb6))
* **seo:** add detailed googlebot directives to robots meta ([eea92c3](https://github.com/zenith-id/repasta_in/commit/eea92c3))
* **seo:** add social preview image ([4eb6904](https://github.com/zenith-id/repasta_in/commit/4eb6904))

### Bug Fixes

* **seo:** use absolute url for og and twitter images ([ce7c7e3](https://github.com/zenith-id/repasta_in/commit/ce7c7e3))
* **seo:** use og.jpg instead of logo.webp for social images ([0476b88](https://github.com/zenith-id/repasta_in/commit/0476b88))
* **seo:** replace og image with png format ([43e8662](https://github.com/zenith-id/repasta_in/commit/43e8662))
* **seo:** use relative path for og image and remove wrong mime type ([d7b9fdd](https://github.com/zenith-id/repasta_in/commit/d7b9fdd))

### Refactoring

* **seo:** centralize metadata to constants/seo.ts ([fb7d205](https://github.com/zenith-id/repasta_in/commit/fb7d205))
* **seo:** simplify app url resolution logic ([dd5372f](https://github.com/zenith-id/repasta_in/commit/dd5372f))
* **hero:** remove emoji from status badge ([14447b3](https://github.com/zenith-id/repasta_in/commit/14447b3))

### Style

* **features:** rebrand title to repastain ([04acea8](https://github.com/zenith-id/repasta_in/commit/04acea8))
* **not-found:** enlarge logo and remove unused import ([687dfa1](https://github.com/zenith-id/repasta_in/commit/687dfa1))
* **hero:** improve stats grid layout on mobile ([1105858](https://github.com/zenith-id/repasta_in/commit/1105858))

### Documentation

* **readme:** rebrand to repastain and add seo.ts entry ([bb4110a](https://github.com/zenith-id/repasta_in/commit/bb4110a))
* **changelog:** restore missing ci and perf entries in v1.8.2 ([9212bb6](https://github.com/zenith-id/repasta_in/commit/9212bb6))

### CI

* **release:** fix awk script to support patch version headers ([804107b](https://github.com/zenith-id/repasta_in/commit/804107b))

### [1.8.2](https://github.com/zenith-id/repasta_in/compare/v1.8.0...v1.8.2) (2026-06-28)


### CI

* **release:** fix release workflow trigger ([090d325](https://github.com/zenith-id/repasta_in/commit/090d325a1a18e55f31a1d33de292042c2f7e2058))
* **release:** add workflow_dispatch to allow manual triggering ([018510c](https://github.com/zenith-id/repasta_in/commit/018510c3743892169a33c89bf5eaf22be0acd368))
* **release:** extract changelog for specific tag instead of latest ([1adcaf3](https://github.com/zenith-id/repasta_in/commit/1adcaf3683e23d8e9a9203e6814b15b5a5a9aa58))

### Bug Fixes

* **responsive:** fix overflow, touch label, and testimonial height ([9729939](https://github.com/zenith-id/repasta_in/commit/9729939fb8bea4cefd7b75d363ea74de7ce03109))
* **responsive:** respect prefers-reduced-motion in testimonials ([3605408](https://github.com/zenith-id/repasta_in/commit/360540854d2cddb282014304c8348fa50251b933))

### Performance

* **responsive:** add content-visibility-auto to below-fold sections ([a88b50f](https://github.com/zenith-id/repasta_in/commit/a88b50fad4d3fbc3008de5066b8c4fa2a530f378))

## [1.8.0](https://github.com/fukaziroh-id/repasta_in/compare/v1.7.0...v1.8.0) (2026-06-28)


### Refactoring

* **contact:** centralize whatsapp/email to env vars ([d11ad56](https://github.com/fukaziroh-id/repasta_in/commit/d11ad56))
* **contact:** use contact constants in navbar/hero/cta ([271cc6e](https://github.com/fukaziroh-id/repasta_in/commit/271cc6e))
* **contact:** use contact constants in how-it-works/services/pricing ([d692366](https://github.com/fukaziroh-id/repasta_in/commit/d692366))
* **contact:** use contact constants in remaining files ([78daae1](https://github.com/fukaziroh-id/repasta_in/commit/78daae1))
* **contact:** use whatsapp number in json-ld ([c773678](https://github.com/fukaziroh-id/repasta_in/commit/c773678))


### Documentation

* **readme:** update whatsapp number and env docs ([e2ded70](https://github.com/fukaziroh-id/repasta_in/commit/e2ded70))

## [1.7.0](https://github.com/fukaziroh-id/repasta_in/compare/v1.6.0...v1.7.0) (2026-06-28)


### Features

* **ai-seo:** add llms.txt and pricing.md ([8c258f4](https://github.com/fukaziroh-id/repasta_in/commit/8c258f4))
* **ai-seo:** comparison table and freshness signal ([d961e4d](https://github.com/fukaziroh-id/repasta_in/commit/d961e4d))
* **seo:** add multi-size icon metadata ([e55d80d](https://github.com/fukaziroh-id/repasta_in/commit/e55d80d))
* **seo:** optimize faq for ai search engines ([60b523b](https://github.com/fukaziroh-id/repasta_in/commit/60b523b))
* **skeleton:** add bones for gallery/testimonials/faq ([222bd3f](https://github.com/fukaziroh-id/repasta_in/commit/222bd3f))
* **skeleton:** add bones for problem/features/how-it-works ([7bc829b](https://github.com/fukaziroh-id/repasta_in/commit/7bc829b))
* **skeleton:** add bones registry and hero/services ([bfca6c6](https://github.com/fukaziroh-id/repasta_in/commit/bfca6c6))
* **skeleton:** add boneyard-js and config ([ef97502](https://github.com/fukaziroh-id/repasta_in/commit/ef97502))
* **skeleton:** add cta bones and integrate loading ([de2ea86](https://github.com/fukaziroh-id/repasta_in/commit/de2ea86))
* **skeleton:** wrap sections with skeleton ([b4747a5](https://github.com/fukaziroh-id/repasta_in/commit/b4747a5))


### Bug Fixes

* **ui:** update not-found page styling ([76b1ea5](https://github.com/fukaziroh-id/repasta_in/commit/76b1ea5))


### Chores

* **assets:** add favicon 16/32/48px png ([f804365](https://github.com/fukaziroh-id/repasta_in/commit/f804365))
* **assets:** add favicon 64/128px and webp ([5195514](https://github.com/fukaziroh-id/repasta_in/commit/5195514))
* **assets:** optimize favicon 16/32/48px ([145899e](https://github.com/fukaziroh-id/repasta_in/commit/145899e))
* **assets:** optimize favicon 64/128px and remove webp ([1ad5ded](https://github.com/fukaziroh-id/repasta_in/commit/1ad5ded))
* **bones:** regenerate hero and services bones ([b051435](https://github.com/fukaziroh-id/repasta_in/commit/b051435))
* **bones:** regenerate gallery/testimonials bones ([089f1d9](https://github.com/fukaziroh-id/repasta_in/commit/089f1d9))

## [1.6.0](https://github.com/fukaziroh-id/repasta_in/compare/v1.5.0...v1.6.0) (2026-06-28)


### Features

* **footer:** add email contact ([7fa0bf0](https://github.com/fukaziroh-id/repasta_in/commit/7fa0bf0))
* **gallery:** add gallery trail hook and sub-components ([30088ae](https://github.com/fukaziroh-id/repasta_in/commit/30088ae))
* **gallery:** add image-trail, masonry grid, and comparison slider ([6293c17](https://github.com/fukaziroh-id/repasta_in/commit/6293c17))
* **navbar:** add kenapa kami, testimoni, faq nav items ([688ca93](https://github.com/fukaziroh-id/repasta_in/commit/688ca93))
* **testimonials:** add google review card ([deca8ad](https://github.com/fukaziroh-id/repasta_in/commit/deca8ad))
* **testimonials:** extract column and card components ([c34063d](https://github.com/fukaziroh-id/repasta_in/commit/c34063d))


### Bug Fixes

* **gallery:** use neutral gray for skeleton loader ([2e73e53](https://github.com/fukaziroh-id/repasta_in/commit/2e73e53))
* **sections:** remove content-visibility-auto ([c43ba1c](https://github.com/fukaziroh-id/repasta_in/commit/c43ba1c))
* **seo:** add main tag and loading state ([e7694b8](https://github.com/fukaziroh-id/repasta_in/commit/e7694b8))
* **seo:** delete static sitemap override ([53583b8](https://github.com/fukaziroh-id/repasta_in/commit/53583b8))
* **seo:** descriptive alt text for logo images ([e99adca](https://github.com/fukaziroh-id/repasta_in/commit/e99adca))
* **seo:** per-page canonical and consistent og image ([20219c0](https://github.com/fukaziroh-id/repasta_in/commit/20219c0))


### Performance

* **css:** cleanup config and fix navbar observer ([5499f57](https://github.com/fukaziroh-id/repasta_in/commit/5499f57))
* **images:** use next/image and optimize hooks ([aa1e4d9](https://github.com/fukaziroh-id/repasta_in/commit/aa1e4d9))
* **split:** add code splitting with dynamic imports ([474078b](https://github.com/fukaziroh-id/repasta_in/commit/474078b))


### Refactoring

* **gallery:** remove image-trail component ([e9680e6](https://github.com/fukaziroh-id/repasta_in/commit/e9680e6))
* **gallery:** simplify header and remove mouse hook ([8c33627](https://github.com/fukaziroh-id/repasta_in/commit/8c33627))


### Chores

* **cleanup:** delete dead files ([7fb1d93](https://github.com/fukaziroh-id/repasta_in/commit/7fb1d93))
* **cleanup:** remove unused radix wrappers (1/3) ([b75f9d1](https://github.com/fukaziroh-id/repasta_in/commit/b75f9d1))
* **cleanup:** remove unused radix wrappers (2/3) ([9e36436](https://github.com/fukaziroh-id/repasta_in/commit/9e36436))
* **cleanup:** remove unused radix wrappers (3/4) ([62ddaa1](https://github.com/fukaziroh-id/repasta_in/commit/62ddaa1))
* **cleanup:** remove unused toggle-group wrapper (4/4) ([794cdd9](https://github.com/fukaziroh-id/repasta_in/commit/794cdd9))
* **deps:** remove dead packages ([69dfcf7](https://github.com/fukaziroh-id/repasta_in/commit/69dfcf7))

## [1.5.0](https://github.com/fukaziroh-id/repasta_in/compare/v1.4.2...v1.5.0) (2026-06-21)


### Features

* **cta:** simplify to single whatsapp button ([b061a27](https://github.com/fukaziroh-id/repasta_in/commit/b061a27))
* **footer:** add email contact ([7fa0bf0](https://github.com/fukaziroh-id/repasta_in/commit/7fa0bf0))
* **gallery:** add gallery trail hook and sub-components ([30088ae](https://github.com/fukaziroh-id/repasta_in/commit/30088ae))
* **gallery:** add image-trail, masonry grid, and comparison slider ([6293c17](https://github.com/fukaziroh-id/repasta_in/commit/6293c17))
* **navbar:** add kenapa kami, testimoni, faq nav items ([688ca93](https://github.com/fukaziroh-id/repasta_in/commit/688ca93))
* **testimonials:** add google review card ([deca8ad](https://github.com/fukaziroh-id/repasta_in/commit/deca8ad))
* **testimonials:** extract column and card components ([c34063d](https://github.com/fukaziroh-id/repasta_in/commit/c34063d))


### Refactoring

* **cta:** flatten button data structure ([356be92](https://github.com/fukaziroh-id/repasta_in/commit/356be92))
* **cta:** update animation imports to use base variants ([2296fb6](https://github.com/fukaziroh-id/repasta_in/commit/2296fb6))
* **footer:** update animation imports to use base variants ([fd19d99](https://github.com/fukaziroh-id/repasta_in/commit/fd19d99))
* **gallery:** add header and cta config data, unify image paths ([276d1f3](https://github.com/fukaziroh-id/repasta_in/commit/276d1f3))
* **gallery:** use section-header and base animations directly ([3639e91](https://github.com/fukaziroh-id/repasta_in/commit/3639e91))
* **motion:** consolidate variants into base fade-up, stagger, and fade-in ([5e7e341](https://github.com/fukaziroh-id/repasta_in/commit/5e7e341))
* **sections:** update animation imports to use base variants ([1d00531](https://github.com/fukaziroh-id/repasta_in/commit/1d00531))
* **sections:** update faq and features animation imports ([124b47e](https://github.com/fukaziroh-id/repasta_in/commit/124b47e))
* **testimonials:** use extracted components and variants ([544f06e](https://github.com/fukaziroh-id/repasta_in/commit/544f06e))
* **testimonials:** use local avatars and add google review data ([24cae0c](https://github.com/fukaziroh-id/repasta_in/commit/24cae0c))
