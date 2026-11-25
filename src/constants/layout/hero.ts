import { WHATSAPP_LINK } from "@/constants/contact";

/* ── Content ──────────────────────────────────────────────── */

export const heroContent = {
  headline: {
    prefix: "Repaste Laptop Bandung",
    highlight: "Panas & Lemot Beres",
  },
  subtext: {
    prefix:
      "Servis laptop & PC: repaste thermal paste, deep clean, upgrade SSD/RAM. Dikerjakan di depan Anda, ",
    highlight: "cepat, transparan & bergaransi",
  },
  cta: {
    primary: {
      text: "Chat via WhatsApp",
      href: WHATSAPP_LINK(
        "Halo Repastain, mau tanya servis laptop.",
      ),
    },
    secondary: {
      text: "Lihat Layanan Kami",
      href: "/layanan",
    },
  },
  highlightPills: ["Diagnosa Gratis", "Garansi 7 Hari", "Home visit"] as const,
};

/* ── Stats ────────────────────────────────────────────────── */

export const statsData = [
  {
    label: "Pelanggan Puas",
    target: 200,
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
