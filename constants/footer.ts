export const FOOTER_CONTENT = {
  brand: {
    name: 'Repasta',
    desc: 'Servis laptop & PC profesional di Padang. Kami mengutamakan transparansi, kecepatan, dan hasil yang bergaransi.',
    cta: {
      text: 'Chat WhatsApp',
      message: 'Halo Repasta! Saya ingin konsultasi.',
    },
  },
  columns: [
    {
      title: 'Layanan',
      links: [
        { label: 'Repaste Laptop', href: '#layanan' },
        { label: 'Deep Clean', href: '#layanan' },
        { label: 'Upgrade RAM & SSD', href: '#layanan' },
        { label: 'Perbaikan Hardware', href: '#layanan' },
        { label: 'Servis PC Desktop', href: '#layanan' },
      ],
    },
    {
      title: 'Navigasi',
      links: [
        { label: 'Cara Pesan', href: '#cara-pesan' },
        { label: 'Harga', href: '#harga' },
        { label: 'Testimoni', href: '#testimoni' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Galeri', href: '#galeri' },
      ],
    },
  ],
  contact: {
    location: 'Padang, Sumatera Barat',
    hours: {
      weekday: 'Sen–Jum: 09.00–18.00',
      saturday: 'Sabtu: 10.00–15.00',
    },
  },
  social: [
    { label: 'Instagram', href: '#', icon: 'Instagram' },
    { label: 'Facebook', href: '#', icon: 'Facebook' },
  ],
} as const