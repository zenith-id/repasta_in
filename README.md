# Repastain — Landing Page

Halaman marketing statis untuk jasa servis laptop & PC **Repastain** di Bandung, Indonesia. Dibangun untuk mendorong konversi via WhatsApp.

**Versi**: `1.7.0`

---

## Stack

| Teknologi      | Versi | Keterangan                              |
| -------------- | ----- | --------------------------------------- |
| Next.js        | 16.x  | App Router, standalone output           |
| React          | 19.x  | UI Framework                            |
| TypeScript     | 5.x   | Type safety                             |
| Tailwind CSS   | 4.x   | Utility-first styling                   |
| Framer Motion  | 12.x  | Animasi & scroll reveal                 |
| Shadcn/ui      | —     | Komponen primitif (New York style)      |
| Lenis          | 1.3.x | Smooth scrolling via context            |
| Boneyard-js    | 1.8.x | Pixel-perfect skeleton loading screens  |

---

## Perintah

```bash
pnpm dev              # Development server → localhost:3000
pnpm build            # Production build (standalone)
pnpm start            # Production server
pnpm lint             # ESLint check
pnpm release          # Bump patch + changelog + tag
pnpm release:minor    # Bump minor + changelog + tag
npx boneyard-js build # Regenerate skeleton bones (dev server harus jalan)
```

---

## Struktur Halaman

```
Navbar              ← 6 link (Layanan · Kenapa Kami · Cara Pesan · Galeri · Testimoni · FAQ) + CTA
Hero                ← Canvas wave + counter stats + status badge
Problem Awareness   ← 2×2 kartu masalah dengan numbered overlay
Services            ← Tab Laptop/PC, harga lengkap
Features            ← Bento-grid kartu keunggulan
How It Works        ← 3 langkah vertical timeline
Gallery             ← Masonry grid + before/after comparison
Testimonials        ← 3-kolom infinite scroll + Google Review card
FAQ                 ← Accordion 10 pertanyaan (dengan statistik & expert quotes)
CTA                 ← Dark section dengan WhatsApp CTA
Footer              ← Dark footer dengan social links
WhatsApp Float      ← Tombol mengambang sudut kanan bawah
```

---

## Palet Warna

| Token CSS      | Hex       | HSL           | Peran                          |
| -------------- | --------- | ------------- | ------------------------------ |
| `--background` | `#F9F7F7` | `0 14% 97%`   | Background halaman             |
| `--card`       | `#DBE2EF` | `219 38% 90%` | Section alternating, card      |
| `--primary`    | `#3F72AF` | `213 47% 47%` | Tombol, aksen, ikon            |
| `--foreground` | `#112D4E` | `213 64% 19%` | Teks utama, hero/CTA/footer bg |

---

## Tipografi

| Kelas          | Font                  | Sumber             |
| -------------- | --------------------- | ------------------ |
| `font-sans`    | **Geist**             | `next/font/google` |
| `font-poppins` | **Bricolage Grotesque** | `next/font/google` |

---

## Static Data (constants/)

Semua konten statis dipisahkan ke folder `src/constants/`:

| File                                 | Konten                          |
| ------------------------------------ | ------------------------------- |
| `constants/contact.ts`               | WhatsApp number, link helper    |
| `constants/seo.ts`                   | SEO metadata & app URL helper   |
| `constants/layout/navbar.ts`         | Navigation links                |
| `constants/layout/hero.ts`           | Hero section content            |
| `constants/layout/footer.ts`         | Footer content                  |
| `constants/sections/problem-awareness.ts` | Problem cards data         |
| `constants/sections/services.ts`     | Laptop & PC services list       |
| `constants/sections/features.ts`     | Feature cards data              |
| `constants/sections/testimonials.ts` | Customer testimonials           |
| `constants/sections/gallery.ts`      | Gallery items & comparisons     |
| `constants/sections/faq.ts`          | FAQ questions (10 items)        |
| `constants/sections/how-it-works.ts` | Steps content                   |
| `constants/sections/cta.ts`          | CTA section content             |
| `constants/sections/layanan.ts`      | Layanan page services           |

Import dari `@/constants` untuk komponen yang butuh static data.

---

## Skeleton Loading (Boneyard-js)

Skeleton loading di-generate otomatis dari DOM asli menggunakan [boneyard-js](https://github.com/nicholasgriffintn/boneyard-js):

```bash
pnpm dev                    # Terminal 1: start dev server
npx boneyard-js build       # Terminal 2: generate bones
```

Config: `boneyard.config.json` (breakpoints, colors, animation).
Output: `src/bones/` (registry.ts + .bones.json per section).
Regenerate setelah layout berubah: `npx boneyard-js build --force`.

---

## SEO & Structured Data

| Element              | Status | File                     |
| -------------------- | ------ | ------------------------ |
| JSON-LD @graph       | ✅     | `layout.tsx`             |
| Organization         | ✅     | `layout.tsx`             |
| LocalBusiness        | ✅     | `layout.tsx`             |
| BreadcrumbList       | ✅     | `layout.tsx`             |
| FAQPage (10 Q&A)     | ✅     | `layout.tsx`             |
| Canonical per-page   | ✅     | `layout.tsx` + per page  |
| Dynamic sitemap      | ✅     | `src/app/sitemap.ts`     |
| robots.txt           | ✅     | `src/app/robots.ts`      |
| llms.txt             | ✅     | `public/llms.txt`        |
| pricing.md           | ✅     | `public/pricing.md`      |
| Multi-size favicon   | ✅     | `layout.tsx` metadata    |
| OG + Twitter meta    | ✅     | `layout.tsx`             |
| `<html lang="id">`   | ✅     | `layout.tsx`             |

---

## Smooth Scrolling

Lenis v1.3 dikonfigurasi via React Context:

```tsx
import { useLenis } from "@/components/lenis-provider";

const lenis = useLenis();
lenis?.scrollTo("#section-id", { offset: -80, duration: 1.4 });
```

Navbar menggunakan `lenis.scrollTo()` untuk semua link navigasi. Fallback ke `scrollIntoView` jika instance belum siap.

---

## Layanan & Harga

### Laptop

| Layanan                                    | Harga        |
| ------------------------------------------ | ------------ |
| Repaste Premium (CryoFuze 5 / Arctic MX-6) | Rp 120.000   |
| Repaste Phase Change (PTM 7950)            | Rp 170.000   |
| Repaste Liquid Metal (128 W/mK)            | Rp 200.000   |
| Repaste VRAM / VRM                         | Rp 50.000    |
| Cleaning Keyboard Eksternal                | Rp 100.000   |
| Special Request                            | Hubungi Kami |

### PC Desktop

| Layanan         | Harga      |
| --------------- | ---------- |
| PC Repaste      | Rp 220.000 |
| Instal Ulang OS | Rp 75.000  |
| Jasa Rakit PC   | Rp 150.000 |

---

## Kontak WhatsApp

Nomor: `+62 823-2363-3819` → `wa.me/621919423939`

Muncul di: `navbar`, `hero`, `how-it-works`, `services`, `cta`, `footer`, `whatsapp-float`

---

## Catatan Teknis

- `next.config.mjs` — `ignoreBuildErrors: true`, `output: 'standalone'`, `trailingSlash: true`
- Image optimization: `formats: ['image/avif', 'image/webp']`, `minimumCacheTTL: 30 days`
- Path alias `@/` → `src/` (`tsconfig.json`)
- `lang="id"` di `app/layout.tsx` (Bahasa Indonesia)
- Lenis instance di-expose via `LenisProvider` dan hook `useLenis()`
- Animations defined in `globals.css` via `@theme inline` (single source of truth)
- Changelog: `CHANGELOG.md`

---

## Commit Rules & Release CI

- Husky aktif via script `prepare` di `package.json`.
- Hook `.husky/commit-msg`:
  - Wajib lulus `commitlint` (`@commitlint/config-conventional`).
  - `type` hanya: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`.
  - Subject wajib lower-case.
  - Body max 3 baris non-empty.
- Hook `.husky/pre-commit`:
  - Maksimal 3 file staged per commit.
  - Jika lebih, commit ditolak agar tetap atomic.
- Workflow release: `.github/workflows/release.yml`.
  - Trigger saat push ke `main`.
  - Jalankan `pnpm run release` (standard-version), push commit/tag, lalu buat GitHub Release dari `CHANGELOG.md`.
