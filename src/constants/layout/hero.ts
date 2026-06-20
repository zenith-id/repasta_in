import { type Variants } from "framer-motion";

/* ── Animation ────────────────────────────────────────────── */

export const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.12 },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ── Content ──────────────────────────────────────────────── */

export const heroContent = {
  headline: {
    prefix: "Laptop Panas & Lemot? ",
    highlight: "Kami Solusinya",
  },
  subtext: {
    prefix:
      "Layanan repaste, deep clean, dan perawatan laptop/PC profesional langsung di depan Anda — ",
    highlight: "cepat, transparan, bergaransi.",
  },
  cta: {
    primary: {
      text: "Chat via WhatsApp",
      href: "https://wa.me/621919423939?text=Halo%20Repasta!%20Saya%20ingin%20konsultasi%20servis%20laptop.",
    },
    secondary: {
      text: "Lihat Layanan Kami",
      href: "#layanan",
    },
  },
  highlightPills: ["Diagnosa Gratis", "Garansi 7 Hari", "Home visit"] as const,
};

/* ── Stats ────────────────────────────────────────────────── */

export const statsData = [
  {
    label: "Pelanggan Puas",
    target: 500,
    suffix: "+",
    prefix: "",
    delay: 0.55,
  },
  {
    label: "Tingkat Sukses",
    target: 98,
    suffix: "%",
    prefix: "",
    delay: 0.63,
  },
  {
    label: "Waktu Diagnosa",
    target: 2,
    suffix: " Jam",
    prefix: "< ",
    delay: 0.71,
  },
] as const;
