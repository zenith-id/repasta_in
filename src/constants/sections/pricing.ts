export const pricingPlans = [
  {
    name: "Diagnosa",
    price: "Gratis",
    priceNote: "tanpa biaya",
    description: "Cek kondisi laptop, tanpa harus lanjut servis.",
    features: [
      "Cek menyeluruh",
      "Cari tahu sumber masalah",
      "Estimasi biaya",
      "Konsultasi teknisi",
      "Tanpa syarat",
    ],
    highlighted: false,
    badge: null,
    cta: "Coba Diagnosa",
    ctaMsg: "Halo Repastain, mau diagnosa gratis.",
  },
  {
    name: "Paket Standar",
    price: "Rp 150.000",
    priceNote: "sekali servis",
    description: "Perawatan rutin biar laptop tetap oke",
    features: [
      "Bersihin bagian dalam",
      "Ganti pasta thermal",
      "Cek kipas & aliran udara",
      "Cek performa",
      "Garansi 7 hari",
    ],
    highlighted: true,
    badge: "Paling Populer",
    cta: "Ambil Paket Ini",
    ctaMsg: "Halo Repastain, mau Paket Standar.",
  },
  {
    name: "Paket Premium",
    price: "Rp 300.000+",
    priceNote: "tergantung kerusakan",
    description: "Untuk kerusakan yang lebih serius",
    features: [
      "Diagnosa + perbaikan",
      "Spare part oke",
      "Dikerjain teknisi senior",
      "Garansi 7 hari",
      "Antrean diprioritaskan",
    ],
    highlighted: false,
    badge: null,
    cta: "Tanya Dulu",
    ctaMsg: "Halo Repastain, mau tanya Paket Premium.",
  },
] as const;

import { WHATSAPP_LINK } from "@/constants/contact";
export { WHATSAPP_LINK };