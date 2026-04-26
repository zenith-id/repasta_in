export const PRICING_CONTENT = {
  header: {
    icon: 'Zap',
    title: 'Harga Jelas,',
    highlight: 'Tanpa Kejutan',
    subtitle:
      'Kami percaya transparansi adalah fondasi kepercayaan. Semua harga dikonfirmasi sebelum pekerjaan dimulai.',
  },
  plans: [
    {
      name: 'Diagnosa',
      price: 'Gratis',
      priceNote: 'tanpa biaya',
      description: 'Pengecekan kondisi lengkap tanpa komitmen',
      features: [
        'Diagnosa menyeluruh',
        'Identifikasi masalah',
        'Estimasi biaya perbaikan',
        'Konsultasi teknisi',
        'Tanpa syarat apapun',
      ],
      highlighted: false,
      badge: null,
      cta: 'Daftar Sekarang',
      ctaMsg: 'Halo Repasta! Saya ingin diagnosa gratis.',
    },
    {
      name: 'Paket Standar',
      price: 'Rp 150.000',
      priceNote: 'sekali servis',
      description: 'Perawatan rutin untuk laptop tetap prima',
      features: [
        'Bersih internal menyeluruh',
        'Ganti pasta thermal premium',
        'Cek kipas & airflow',
        'Verifikasi performa sistem',
        'Garansi 3 bulan',
      ],
      highlighted: true,
      badge: 'Paling Populer',
      cta: 'Pilih Paket Ini',
      ctaMsg: 'Halo Repasta! Saya ingin Paket Standar.',
    },
    {
      name: 'Paket Premium',
      price: 'Rp 300.000+',
      priceNote: 'tergantung kerusakan',
      description: 'Perbaikan tuntas untuk kerusakan serius',
      features: [
        'Diagnosa + Perbaikan penuh',
        'Spare part berkualitas',
        'Tenaga teknisi senior',
        'Garansi 6 bulan',
        'Prioritas antrian servis',
      ],
      highlighted: false,
      badge: null,
      cta: 'Konsultasi Dulu',
      ctaMsg: 'Halo Repasta! Saya ingin tanya Paket Premium.',
    },
  ],
  bottomNote: {
    text: 'Kerusakan khusus atau ingin harga terbaik?',
    cta: {
      text: 'Minta Estimasi Khusus',
      message: 'Halo Repasta! Saya ingin minta estimasi harga.',
    },
  },
} as const