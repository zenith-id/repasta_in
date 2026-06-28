import { WHATSAPP_LINK } from "@/constants/contact";

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
      href: WHATSAPP_LINK("Halo Repasta! Saya ingin konsultasi servis laptop."),
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
