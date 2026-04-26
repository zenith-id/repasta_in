export const HERO_CONTENT = {
  badge: {
    icon: 'Wrench',
    text: 'Servis Terpercaya · Padang',
  },
  headline: {
    prefix: 'Laptop Panas & Lemot? ',
    highlight: 'Kami Solusinya',
  },
  subtext:
    'Layanan repaste, deep clean, dan perawatan laptop/PC profesional langsung di depan Anda — cepat, transparan, bergaransi.',
  cta: {
    primary: {
      text: 'Chat via WhatsApp',
      message: 'Halo Repasta! Saya ingin konsultasi servis laptop.',
    },
    secondary: {
      text: 'Lihat Layanan Kami',
      href: '#layanan',
    },
  },
  highlights: ['Diagnosa Gratis', 'Garansi 6 Bulan', 'Servis < 2 Jam'] as const,
  stats: [
    { label: 'Pelanggan Puas', target: 500, suffix: '+', prefix: '', delay: 0.55 },
    { label: 'Tingkat Sukses', target: 98, suffix: '%', prefix: '', delay: 0.63 },
    { label: 'Waktu Diagnosa', target: 2, suffix: ' Jam', prefix: '< ', delay: 0.71 },
    { label: 'Garansi Kerja', target: 6, suffix: ' Bln', prefix: '', delay: 0.79 },
  ] as const,
} as const