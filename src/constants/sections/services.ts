import { Laptop, Monitor, Sparkles } from "lucide-react";
import { WHATSAPP_LINK } from "@/constants/contact";
export { WHATSAPP_LINK };

export const laptopServices = [
  {
    name: "Repaste Premium",
    desc: "Repasta menggunakan bahan cair terbaik dengan CryoFuze 5 / Arctic MX-6, bahan terbaik untuk suhu lebih adem.",
    price: "Rp 120.000",
    popular: false,
  },
  {
    name: "Repaste Phase change",
    desc: "Repasta menggunakan bahan phase change terbaik di kelasnya! Opsi pasta: PTM 7950 by Honeywell & ID-Cooling PTM2 - solusi suhu adem maksimal dengan umur yang lebih panjang.",
    price: "Rp 170.000",
    popular: false,
  },
  {
    name: "Repaste Liquid Metal",
    desc: "Repaste dengan Liquid Metal terbaik di kelasnya! Konduktivitas tinggi (128 W/mK) untuk pendinginan ekstrem.",
    price: "Rp 200.000",
    popular: false,
  },
  {
    name: "Repaste VRAM/VRM",
    desc: "Repasta bagian VRAM/VRM menggunakan thermal putty performa terbaik.",
    price: "Rp 50.000",
    popular: false,
  },
  {
    name: "Cleaning Keyboard ext",
    desc: "Cleaning keyboard mechanical, membersihkan kerak yang menempel pada keycaps (cuci) dan plate keyboard.",
    price: "Rp 100.000*",
    popular: false,
  },
  {
    name: "Special req",
    desc: "Sesuaikan dengan kebutuhanmu!",
    price: "Hubungi Kami",
    popular: false,
  },
] as const;

export const paketLaptopServices = [
  {
    name: "Deepclean Phase Change",
    desc: "Repasta menggunakan bahan phase change terbaik di kelasnya! berserta cleaning bagian body laptop yang mencakup keyboard, layar dan palmrest.",
    price: "Rp 220.000",
    popular: true,
  },
  {
    name: "Deepclean Liquid Metal",
    desc: "Repasta menggunakan bahan Liquid metal berserta cleaning bagian body laptop yang mencakup keyboard, layar dan palmrest.",
    price: "Rp 250.000",
    popular: false,
  },
  {
    name: "Special Request",
    desc: "Layanan kustom sesuai kebutuhan spesifik Anda — konsultasi dulu",
    price: "Hubungi Kami",
    popular: false,
  },
] as const;

export const pcServices = [
  {
    name: "PC Repaste",
    desc: "Penggantian pasta termal untuk PC desktop — semua brand & socket",
    price: "Rp 220.000",
    popular: false,
  },
  {
    name: "GPU Repaste",
    desc: "Penggantian pasta thermal GPU + Cleaning GPU",
    price: "Mulai dari Rp 150.000",
    popular: false,
  },
  {
    name: "Instal Ulang OS",
    desc: "Instalasi sistem operasi bersih + driver — Windows 10/11 atau Linux",
    price: "Rp 75.000",
    popular: false,
  },

  {
    name: "Instal Ulang OS + License Key",
    desc: "Instalasi sistem operasi bersih + driver — Windows 10/11 atau Linux + License Key",
    price: "Rp 120.000",
    popular: false,
  },
  {
    name: "Jasa Rakit PC",
    desc: "Perakitan PC dari komponen yang Anda sediakan — oleh teknisi berpengalaman",
    price: "Rp 150.000",
    popular: false,
  },
] as const;

export const servicesHeader = {
  tag: "Layanan & Harga",
  title: "Harga Transparan, Tanpa Biaya Tersembunyi",
  subtitle:
    "Semua harga dikonfirmasi sebelum pengerjaan. Anda tahu persis berapa yang dibayar.",
} as const;

export const note = {
  text: "Tidak yakin butuh layanan apa? ",
  highlight: "Diagnosa gratis",
  detail: "— kami bantu cari tahu.",
  cta: {
    text: "Konsultasi Gratis",
    message: "Halo Repasta! Saya ingin tanya layanan yang sesuai.",
  },
} as const;

export const tabsData = [
  { id: "laptop" as const, label: "Laptop", icon: Laptop },
  { id: "paket_laptop" as const, label: "Paket Laptop", icon: Sparkles },
  { id: "pc" as const, label: "PC Desktop", icon: Monitor },
] as const;

