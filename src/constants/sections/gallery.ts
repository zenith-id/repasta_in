// ── Header Config ──
export const galleryHeader = {
  tag: "Galeri Portofolio",
  titlePrefix: "Hasil Kerja ",
  titleHighlight: "Nyata",
  subtitle:
    "Setiap pekerjaan dikerjakan dengan presisi. Ini sebagian dokumentasi layanan kami.",
} as const;

// ── CTA Config ──
export const galleryCta = {
  prefix: "Punya proyek servis laptop atau PC? ",
  linkText: "Hubungi kami sekarang →",
  message: "Halo Repasta! Saya ingin konsultasi.",
} as const;

// ── Image Trail ──
export const galleryTrailImages = [
  "/assets/images/cleaning/repasta_1.webp",
  "/assets/images/cleaning/repasta_2.webp",
  "/assets/images/cleaning/repasta_3.webp",
  "/assets/images/cleaning/repasta_4.webp",
  "/assets/images/cleaning/before_cleaning.webp",
  "/assets/images/pc/pc_cpu_repasta.webp",
  "/assets/images/pc/pc_cleaning.webp",
  "/assets/images/gpu/gpu_cleaning.webp",
  "/assets/images/gpu/gpu_repasta.webp",
] as const;

// ── Masonry Gallery Items ──
export interface GalleryItem {
  src: string;
  label: string;
}

export const galleryMasonryItems: GalleryItem[] = [
  { src: "/assets/images/gallery/trail-1.webp", label: "Repaste Thermal Paste" },
  { src: "/assets/images/gallery/trail-2.webp", label: "Repaste Laptop Gaming" },
  { src: "/assets/images/gallery/trail-3.webp", label: "Repaste CPU Desktop" },
  { src: "/assets/images/gallery/trail-4.webp", label: "Repaste GPU VGA" },
  { src: "/assets/images/gallery/trail-5.webp", label: "Cleaning Internal" },
  { src: "/assets/images/gallery/trail-6.webp", label: "PC Build Assembly" },
  { src: "/assets/images/gallery/trail-7.webp", label: "GPU Cleaning" },
  { src: "/assets/images/gallery/trail-8.webp", label: "GPU Repaste" },
  { src: "/assets/images/gallery/trail-9.webp", label: "GPU Service" },
  { src: "/assets/images/gallery/card-repaste.webp", label: "Repaste CPU" },
  { src: "/assets/images/gallery/card-deepclean.webp", label: "Deepclean Result" },
  { src: "/assets/images/gallery/card-cleaning.webp", label: "PC Cleaning" },
  { src: "/assets/images/gallery/card-upgrade.webp", label: "Instalasi SSD/RAM" },
  { src: "/assets/images/gallery/compare-1-before.webp", label: "Before Deepclean" },
  { src: "/assets/images/gallery/compare-1-after.webp", label: "After Deepclean" },
] as const;

// ── Before/After Comparisons ──
export const galleryComparisons = [
  {
    id: 1,
    before: "/assets/images/gallery/compare-1-before.webp",
    after: "/assets/images/gallery/compare-1-after.webp",
    label: "Deepclean Laptop Gaming",
  },
] as const;
