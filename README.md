# Repasta — Landing Page

Halaman marketing statis untuk jasa servis laptop & PC **Repasta** di Padang, Indonesia. Dibangun untuk mendorong konversi via WhatsApp.

---

## Stack

| Teknologi | Versi | Keterangan |
|-----------|-------|-----------|
| Next.js | 16.x | App Router, SSG |
| React | 19.x | UI Framework |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility-first styling |
| Framer Motion | 12.x | Animasi & scroll reveal |
| GSAP | 3.x | Dihapus (konflik Lenis) |
| Shadcn/ui | — | Komponen primitif (New York style) |
| Lenis | 1.3.x | Smooth scrolling via context |

---

## Perintah

```bash
pnpm dev      # Development server → localhost:3000
pnpm build    # Production build
pnpm start    # Production server
pnpm lint     # ESLint check
```

---

## Struktur Halaman

```
Navbar                ← 3 link (Layanan · Harga · Galeri) + CTA
Hero                  ← GlowyWaves canvas + counter animation stats
Problem Awareness     ← 2×2 kartu masalah dengan numbered overlay
Services              ← Tab Laptop/PC, harga lengkap dari blueprint
Features (Bento)      ← Bento-grid 5 kartu keunggulan
How It Works          ← 3 langkah vertical timeline editorial
Gallery               ← Masonry grid + lightbox portofolio
Testimonials          ← 3-kolom infinite scroll
FAQ                   ← Accordion 7 pertanyaan
Pricing               ← 3 paket harga
CTA                   ← Dark section dengan WhatsApp CTA
Footer                ← 4-kolom dark footer dengan social links
WhatsApp Float        ← Tombol mengambang sudut kanan bawah
```

---

## Palet Warna

| Token CSS | Hex | HSL | Peran |
|-----------|-----|-----|-------|
| `--background` | `#F9F7F7` | `0 14% 97%` | Background halaman |
| `--card` | `#DBE2EF` | `219 38% 90%` | Section alternating, card |
| `--primary` | `#3F72AF` | `213 47% 47%` | Tombol, aksen, ikon |
| `--foreground` | `#112D4E` | `213 64% 19%` | Teks utama, hero/CTA/footer bg |

> Tidak ada warna lain di luar 4 token di atas (orange/purple/green dihapus).

---

## Tipografi

| Kelas | Font | Sumber |
|-------|------|--------|
| `font-sans` | **Geist** | `next/font/google` → `--geist-sans` |
| `font-poppins` | **Bricolage Grotesque** | `next/font/google` → `--bricolage` |

---

## Smooth Scrolling

Lenis v1.3 dikonfigurasi via React Context:

```tsx
// Expose instance
import { useLenis } from '@/components/lenis-provider'

const lenis = useLenis()
lenis?.scrollTo('#section-id', { offset: -80, duration: 1.4 })
```

Navbar menggunakan `lenis.scrollTo()` untuk semua link navigasi. Fallback ke `scrollIntoView` jika instance belum siap.

---

## Komponen Kustom

| File | Inspirasi | Deskripsi |
|------|-----------|-----------|
| `hero.tsx` | 21st.dev · moumensoliman/glowy-waves-hero | Canvas wave interaktif + counter angka |
| `testimonials.tsx` | 21st.dev · avanishverma4/testimonial-v2 | Infinite scroll 3-kolom |
| `features.tsx` | 21st.dev · meschacirung/features-8 | Bento grid 5 kartu |
| `gallery.tsx` | Custom | Masonry grid + lightbox |
| `services.tsx` | Custom | Tab Laptop/PC dengan harga blueprint |
| `how-it-works.tsx` | Custom | Vertical timeline editorial |
| `problem-awareness.tsx` | Custom | 2×2 kartu masalah + resolusi |
| `faq.tsx` | Custom | Accordion AnimatePresence |
| `whatsapp-float.tsx` | Custom | Floating button sudut kanan bawah |

---

## Layanan & Harga (dari Blueprint)

### Laptop
| Layanan | Harga |
|---------|-------|
| Repaste Regular (CryoFuze 5 / Arctic MX-6) | Rp 150.000 |
| Repaste Phase Change (PTM 7950) | Rp 180.000 |
| Repaste Liquid Metal (128 W/mK) | Rp 200.000 |
| Repaste VRAM / VRM | Rp 50.000 |
| Cleaning Keyboard Eksternal | Rp 80.000 |
| Deepclean Phase Change ⭐ Populer | Rp 230.000 |
| Deepclean Liquid Metal | Rp 250.000 |
| Special Request | Hubungi Kami |

### PC Desktop
| Layanan | Harga |
|---------|-------|
| PC Repaste | Rp 220.000 |
| Instal Ulang OS | Rp 75.000 |
| Jasa Rakit PC | Rp 150.000 |

---

## Kontak WhatsApp

Nomor: `+62 191 942 3939` → `wa.me/621919423939`

Muncul di: `navbar.tsx`, `hero.tsx`, `how-it-works.tsx`, `services.tsx`, `cta.tsx`, `footer.tsx`, `whatsapp-float.tsx`

---

## Catatan Teknis

- `next.config.mjs` — `ignoreBuildErrors: true` dan `unoptimized: true` untuk images
- GSAP dihapus dari footer karena konflik dengan Lenis (`position: fixed` + `clipPath` tidak kompatibel)
- CSS `html.lenis body { overflow: hidden }` dihapus — tidak diperlukan lagi
- Lenis instance di-expose via `LenisContext` dan hook `useLenis()`
- Path alias `@/` → root project (`tsconfig.json`)
- `lang="id"` di `app/layout.tsx` (Bahasa Indonesia)
