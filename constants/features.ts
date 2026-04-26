export const FEATURES_CONTENT = {
  header: {
    icon: 'CheckCircle',
    title: 'Kenapa Pilih',
    highlight: 'Repasta?',
    subtitle: 'Standar profesional yang mengutamakan kejujuran, kecepatan, dan kualitas kerja.',
  },
  cards: [
    {
      title: 'Diagnosa Gratis',
      subtitle: 'Cek kondisi laptop tanpa biaya, tanpa syarat apapun.',
      highlight: 'GRATIS',
    },
    {
      title: 'Garansi 6 Bulan',
      subtitle: 'Setiap pekerjaan dan spare part dilindungi garansi penuh. Tenang tanpa risiko.',
    },
    {
      title: 'Proses < 2 Jam',
      subtitle: 'Diagnosa cepat dalam hitungan jam. Anda tahu kondisi perangkat hari itu juga.',
    },
    {
      title: 'Layanan Lengkap',
      subtitle: 'Satu tempat untuk semua kebutuhan servis laptop dan PC Anda.',
      services: [
        { icon: 'Wrench', label: 'Bersih & Pasta Thermal' },
        { icon: 'Zap', label: 'Upgrade RAM & SSD' },
        { icon: 'Shield', label: 'Perbaikan Hardware' },
        { icon: 'CheckCircle', label: 'Instal & Optimasi OS' },
      ],
    },
    {
      title: '500+ Pelanggan Puas',
      subtitle: 'Dipercaya ratusan pelanggan di Padang sejak kami berdiri.',
      stats: { satisfied: 500, successRate: 98 },
      avatars: [
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=64&h=64',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=64&h=64',
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=64&h=64',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=64&h=64',
      ],
    },
  ],
} as const