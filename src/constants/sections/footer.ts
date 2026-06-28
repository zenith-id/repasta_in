import { WHATSAPP_NUMBER, WHATSAPP_LINK, EMAIL, EMAIL_LINK } from "@/constants/contact";

export const cols = [
  {
    title: "Layanan",
    links: [
      { label: "Repaste Laptop", href: "#layanan" },
      { label: "Deep Clean", href: "#layanan" },
      { label: "Upgrade RAM & SSD", href: "#layanan" },
      { label: "Perbaikan Hardware", href: "#layanan" },
      { label: "Servis PC Desktop", href: "#layanan" },
    ],
  },
  {
    title: "Navigasi",
    links: [
      { label: "Cara Pesan", href: "#cara-pesan" },
      { label: "Harga", href: "#harga" },
      { label: "Testimoni", href: "#testimoni" },
      { label: "FAQ", href: "#faq" },
      { label: "Galeri", href: "#galeri" },
    ],
  },
] as const;

export const brand = {
  name: "Repasta",
  desc: "Servis laptop & PC profesional di Bandung. Kami mengutamakan transparansi, kecepatan, dan hasil yang bergaransi.",
} as const;

export const contact = {
  phone: `+${WHATSAPP_NUMBER.slice(0, 2)} ${WHATSAPP_NUMBER.slice(2, 5)}-${WHATSAPP_NUMBER.slice(5, 9)}-${WHATSAPP_NUMBER.slice(9)}`,
  email: EMAIL,
  emailLink: EMAIL_LINK("Tanya Servis Laptop - Repasta", "Halo Repasta! Saya ingin tanya mengenai servis laptop saya."),
  ig: "https://www.instagram.com/repasta.in/",
  waLink: `https://wa.me/${WHATSAPP_NUMBER}`,
  waConsultLink: WHATSAPP_LINK("Halo Repasta! Saya ingin konsultasi."),
  location: "Bojongsoang, Bandung, Jawa Barat",
  gmaps: "https://maps.app.goo.gl/6wkYfFzpS8EjyJ4p8",
  hours: {
    weekday: "Senin-Jumat: 09.00-18.00",
    saturday: "Sabtu: 10.00-15.00",
  },
} as const;
