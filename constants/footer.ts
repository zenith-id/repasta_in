export const cols = [
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
] as const

export const brand = {
  name: 'Repasta',
  desc: 'Servis laptop & PC profesional di Padang. Kami mengutamakan transparansi, kecepatan, dan hasil yang bergaransi.',
} as const

export const contact = {
  phone: '+62 191 942 3939',
  waLink: 'https://wa.me/621919423939',
  waConsultLink: 'https://wa.me/621919423939?text=Halo%20Repasta!%20Saya%20ingin%20konsultasi.',
  location: 'Padang, Sumatera Barat',
  hours: {
    weekday: 'Sen–Jum: 09.00–18.00',
    saturday: 'Sabtu: 10.00–15.00',
  },
} as const