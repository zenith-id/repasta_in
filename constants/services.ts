export const SERVICES_CONTENT = {
  header: {
    tag: 'Layanan & Harga',
    title: 'Harga Transparan, Tanpa Biaya Tersembunyi',
    subtitle: 'Semua harga dikonfirmasi sebelum pengerjaan. Anda tahu persis berapa yang dibayar.',
  },
  tabs: [
    { id: 'laptop' as const, label: 'Laptop', icon: 'Laptop' },
    { id: 'pc' as const, label: 'PC Desktop', icon: 'Monitor' },
  ],
  laptop: [
    {
      name: 'Repaste Regular',
      desc: 'Pasta termal cair (CryoFuze 5 / Arctic MX-6) — solusi cepat & efisien',
      price: 'Rp 150.000',
      popular: false,
    },
    {
      name: 'Repaste Phase Change',
      desc: 'Bahan premium PTM 7950 / ID-Cooling PTM2 — tahan lama, konduktivitas tinggi',
      price: 'Rp 180.000',
      popular: false,
    },
    {
      name: 'Repaste Liquid Metal',
      desc: 'Konduktivitas 128 W/mK — pendinginan ekstrem untuk gaming & workstation',
      price: 'Rp 200.000',
      popular: false,
    },
    {
      name: 'Repaste VRAM / VRM',
      desc: 'Thermal putty untuk area VRAM & VRM — mencegah throttling GPU',
      price: 'Rp 50.000',
      popular: false,
    },
    {
      name: 'Cleaning Keyboard Eksternal',
      desc: 'Bersih kerak pada keycaps & plate keyboard — seperti baru lagi',
      price: 'Rp 80.000',
      popular: false,
    },
    {
      name: 'Deepclean Phase Change',
      desc: 'Cleaning komprehensif seluruh laptop + repaste PTM 7950 — paket terlengkap',
      price: 'Rp 230.000',
      popular: true,
    },
    {
      name: 'Deepclean Liquid Metal',
      desc: 'Cleaning keyboard, layar, palmrest + liquid metal — performa puncak',
      price: 'Rp 250.000',
      popular: false,
    },
    {
      name: 'Special Request',
      desc: 'Layanan kustom sesuai kebutuhan spesifik Anda — konsultasi dulu',
      price: 'Hubungi Kami',
      popular: false,
    },
  ],
  pc: [
    {
      name: 'PC Repaste',
      desc: 'Penggantian pasta termal untuk PC desktop — semua brand & socket',
      price: 'Rp 220.000',
      popular: false,
    },
    {
      name: 'Instal Ulang OS',
      desc: 'Instalasi sistem operasi bersih + driver — Windows 10/11 atau Linux',
      price: 'Rp 75.000',
      popular: false,
    },
    {
      name: 'Jasa Rakit PC',
      desc: 'Perakitan PC dari komponen yang Anda sediakan — oleh teknisi berpengalaman',
      price: 'Rp 150.000',
      popular: false,
    },
  ],
  note: {
    text: 'Tidak yakin butuh layanan apa? ',
    highlight: 'Diagnosa gratis',
    detail: '— kami bantu cari tahu.',
    cta: {
      text: 'Konsultasi Gratis',
      message: 'Halo Repasta! Saya ingin tanya layanan yang sesuai.',
    },
  },
} as const