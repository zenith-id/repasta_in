export const WHATSAPP_LINK = (msg: string) =>
  `https://wa.me/621919423939?text=${encodeURIComponent(msg)}`;

export const ctaContent = {
  badge: { text: "Siap Membantu Anda Sekarang" },
  headline: {
    prefix: "Laptop Anda Bermasalah?",
    highlight: "Hubungi Kami Sekarang",
  },
  subtext:
    "Diagnosa gratis, penanganan cepat, dan harga transparan. Tim teknisi kami siap menjawab pertanyaan Anda via WhatsApp.",
  cta: {
    primary: {
      text: "Chat via WhatsApp",
      href: WHATSAPP_LINK("Halo Repasta! Saya ingin servis laptop."),
    },
    secondary: { text: "Lihat Layanan", href: "#layanan" },
  },
  hours: {
    weekday: "Sen–Jum 09–18",
    saturday: "Sab 10–15",
  },
  location: {
    area: "Bojongsoang, Bandung",
    mapsUrl: "https://maps.app.goo.gl/6wkYfFzpS8EjyJ4p8",
  },
} as const;