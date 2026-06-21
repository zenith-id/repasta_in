import { MessageCircle, CalendarDays, CheckCircle2 } from "lucide-react";

export const steps = [
  {
    num: "01",
    icon: MessageCircle,
    title: "Hubungi Kami",
    desc: "Chat via WhatsApp — ceritakan masalah laptop/PC Anda. Kami respon dalam hitungan menit, konsultasi gratis tanpa komitmen.",
    badge: "Respon < 5 menit",
  },
  {
    num: "02",
    icon: CalendarDays,
    title: "Jadwalkan Kunjungan",
    desc: "Teknisi datang ke rumah, kost, kampus, atau kantor Anda. Atau bawa langsung ke outlet kami di Bandung — pilih yang paling mudah.",
    badge: "Home visit tersedia",
  },
  {
    num: "03",
    icon: CheckCircle2,
    title: "Selesai & Bergaransi",
    desc: "Perangkat kembali optimal dalam 1–2 jam, dikerjakan transparan di depan Anda. Garansi 7 hari untuk setiap layanan.",
    badge: "Garansi 7 hari",
  },
] as const;

export const WHATSAPP_LINK = (msg: string) =>
  `https://wa.me/621919423939?text=${encodeURIComponent(msg)}`;

export const accommodationData = {
  freeZone: {
    area: "Bojongsoang",
    label: "GRATIS",
  },
  pricing: [
    {
      label: "15 KM PERTAMA (LUAR AREA)",
      value: "Rp 50.000",
      suffix: null,
    },
    {
      label: "SELANJUTNYA",
      value: "+Rp 10.000",
      suffix: "/km",
    },
  ],
  notes: [
    {
      type: "info" as const,
      text: "Di luar area Bojongsoang hanya tersedia paket Deep Clean.",
      highlight: "hanya tersedia paket Deep Clean",
    },
    {
      type: "check" as const,
      text: "Total akomodasi dikonfirmasi sebelum kunjungan — transparan, tanpa biaya kejutan.",
      highlight: null,
    },
  ],
} as const;
