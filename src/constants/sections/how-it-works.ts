import { MessageCircle, CalendarDays, CheckCircle2 } from "lucide-react";
import { WHATSAPP_LINK } from "@/constants/contact";
export { WHATSAPP_LINK };

export const steps = [
  {
    num: "01",
    icon: MessageCircle,
    title: "Hubungi Kami",
    desc: "Chat WA, cerita masalah laptop/PC kamu. Kami balas dalam hitungan menit, konsultasi gratis.",
    badge: "Balas < 5 menit",
  },
  {
    num: "02",
    icon: CalendarDays,
    title: "Jadwalkan Kunjungan",
    desc: "Teknisi bisa datang ke rumah, kost, kampus, atau kantor. Atau bawa ke outlet kami di Bandung, terserah yang paling enak.",
    badge: "Bisa home visit",
  },
  {
    num: "03",
    icon: CheckCircle2,
    title: "Beres & Ada Garansi",
    desc: "Perangkat balik normal dalam 1–2 jam, dikerjain di depan Anda. Garansi 7 hari.",
    badge: "Garansi 7 hari",
  },
] as const;

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
      text: "Total akomodasi dikasih tahu sebelum teknisi datang, jadi nggak ada biaya mendadak.",
      highlight: null,
    },
  ],
} as const;
