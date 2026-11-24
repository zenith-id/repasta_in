import { Laptop, LayoutGrid, Monitor, Sparkles } from "lucide-react";
import { WHATSAPP_LINK } from "@/constants/contact";
export { WHATSAPP_LINK };

export const laptopServices = [
  {
    name: "Repaste Premium",
    desc: "Pasta termal harian yang adem dan awet. Pakai CryoFuze 5 / Arctic MX-6, aman buat pemakaian normal — suhu turun, kipas nggak berisik terus.",
    price: "Rp 120.000",
    popular: false,
  },
  {
    name: "Repaste Phase change",
    desc: "Naik kelas dari pasta biasa. PTM 7950 / ID-Cooling PTM2 mengeras saat panas dan nggak mudah kering, jadi ademnya tahan bertahun-tahun tanpa sering ganti.",
    price: "Rp 170.000",
    popular: false,
  },
  {
    name: "Repaste Liquid Metal",
    desc: "Paling dingin yang ada. Liquid metal 128 W/mK menghantarkan panas jauh lebih cepat dari pasta biasa — pilihan buat laptop gaming atau editing berat yang suhunya gampang naik.",
    price: "Rp 200.000",
    popular: false,
  },
  {
    name: "Cleaning Keyboard ext",
    desc: "Keyboard mechanical dicuci bersih: keycaps dilepas, kerak dan debu dibersihin, lalu dipasang lagi rapi. Tombol jadi lebih enak ditekan.",
    price: "Mulai dari Rp 100.000*",
    popular: false,
  },
  {
    name: "Special req",
    desc: "Punya kebutuhan khusus? Cerita aja, nanti kita sesuaikan penanganannya.",
    price: "Hubungi Kami",
    popular: false,
  },
] as const;

export const paketLaptopServices = [
  {
    name: "Deepclean Premium",
    desc: "Paket paling lengkap buat pemakaian harian: repaste CryoFuze 5 / Arctic MX-6 + seluruh body dibersihin (keyboard, layar, palmrest). Adem dan bersih dalam satu servis.",
    price: "Rp 200.000",
    popular: true,
  },
  {
    name: "Deepclean Phase Change",
    desc: "Sama seperti Premium, tapi pasta diganti phase change PTM 7950 yang lebih awet. Cocok buat yang nggak mau repot ganti pasta tiap tahun.",
    price: "Rp 220.000",
    popular: false,
  },
  {
    name: "Deepclean Liquid Metal",
    desc: "Paket teratas: repaste liquid metal + deep clean seluruh body. Buat yang mau suhu paling dingin dan laptop tampak seperti baru lagi.",
    price: "Rp 250.000",
    popular: false,
  },
  {
    name: "Special Request",
    desc: "Butuh penanganan khusus? Kita diskusi dulu detailnya, baru kita kasih solusinya.",
    price: "Hubungi Kami",
    popular: false,
  },
] as const;

export const pcServices = [
  {
    name: "PC Repaste",
    desc: "Ganti pasta termal processor PC desktop. Mengatasi PC yang gampang panas dan bikin performa lebih stabil, semua brand dan socket.",
    price: "Rp 220.000",
    popular: false,
  },
  {
    name: "GPU Repaste",
    desc: "Pasta termal kartu grafis diganti + GPU dibersihin. Suhu VGA lebih adem saat gaming atau render, performa nggak gampang drop.",
    price: "Mulai dari Rp 150.000",
    popular: false,
  },
  {
    name: "Instal Ulang OS",
    desc: "Windows 10/11 atau Linux dipasang ulang dari kosong, bersih + driver dasar. PC langsung bisa dipakai tanpa sampel aplikasi lama.",
    price: "Rp 75.000",
    popular: false,
  },

  {
    name: "Instal Ulang OS + License Key",
    desc: "Sama seperti instal ulang biasa, tapi sekalian aktivasi license key. Sistem legal dan siap pakai tanpa urusan aktivasi lagi.",
    price: "Rp 120.000",
    popular: false,
  },
  {
    name: "Jasa Rakit PC",
    desc: "Rakit PC dari komponen yang Anda sediakan. Teknisi pasang rapi, kabel rapi, dan langsung dites biar nyala normal.",
    price: "Rp 150.000",
    popular: false,
  },
] as const;

export const servicesHeader = {
  tag: "Layanan & Harga",
  title: "Harga Transparan, Tanpa Biaya Tersembunyi",
  subtitle:
    "Diagnosa gratis, harga jelas di awal, garansi 7 hari.",
} as const;

export const note = {
  text: "Tidak yakin butuh layanan apa? ",
  highlight: "Diagnosa gratis",
  detail: "— kami bantu cari tahu.",
  cta: {
    text: "Konsultasi Gratis",
    message: "Halo Repastain! Saya ingin tanya layanan yang sesuai.",
  },
} as const;

export const laptopAddons = [
  {
    name: "Repaste VRAM/VRM",
    desc: "Thermal putty performa terbaik untuk bagian VRAM & VRM.",
    price: "Rp 50.000",
  },
] as const;

export const allServices = [
  ...laptopServices.map((s) => ({ ...s, category: "Laptop" })),
  ...paketLaptopServices.map((s) => ({ ...s, category: "Paket Laptop" })),
  ...pcServices.map((s) => ({ ...s, category: "PC Desktop" })),
] as const;

export const tabsData = [
  { id: "all" as const, label: "Semua", icon: LayoutGrid },
  { id: "laptop" as const, label: "Laptop", icon: Laptop },
  { id: "paket_laptop" as const, label: "Paket Laptop", icon: Sparkles },
  { id: "pc" as const, label: "PC Desktop", icon: Monitor },
] as const;
