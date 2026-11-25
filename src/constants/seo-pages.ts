export interface ServicePageSection { h2: string; body: string; }
export interface ServicePageFaq { q: string; a: string; }
export interface ServicePageData {
  slug: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  sections: ServicePageSection[];
  faqs: ServicePageFaq[];
  relatedSlugs: string[];
}

export const SERVICE_PAGES: ServicePageData[] = [
  {
    slug: "repaste-laptop",
    h1: "Jasa Repaste Laptop di Bandung",
    title: "Jasa Repaste Laptop Bandung dari Rp 120.000 | Repastain",
    description:
      "Laptop cepat panas atau lemot? Jasa repaste laptop di Bandung dari Rp 120.000, pilihan CryoFuze 5, PTM 7950, dan liquid metal. Garansi 7 hari.",
    intro:
      "Repaste adalah penggantian pasta termal pada prosesor dan heatsink. Dikerjakan di depan Anda, biasanya selesai 1 sampai 2 jam, dengan garansi 7 hari untuk pekerjaan kami.",
    sections: [
      {
        h2: "Kapan laptop perlu repaste",
        body:
          "Suhu CPU atau GPU naik 10 hingga 15 derajat dari biasa, kipas berisik terus, performa turun saat gaming, atau laptop sering mati sendiri karena panas. Pasta termal yang kering bisa membuat suhu naik sampai 20 derajat. Repaste ulang menurunkan suhu dan membuat kipas bekerja lebih tenang.",
      },
      {
        h2: "Pilihan material repaste",
        body:
          "Repaste Premium Rp 120.000 pakai CryoFuze 5 atau Arctic MX-6, cocok untuk pemakaian harian. Repaste Phase change Rp 170.000 pakai PTM 7950 atau ID-Cooling PTM2, lebih awet tanpa ganti tiap tahun. Repaste Liquid Metal Rp 200.000 pakai Conductonaut atau Thermal Grizzly 128 W/mK, untuk gaming dan editing berat. Semua pilihan termasuk buka dan bersih heatsink, pasang material baru, cek suhu setelah pasang, dan garansi 7 hari.",
      },
      {
        h2: "Proses pengerjaan",
        body:
          "Teknisi membuka heatsink, membersihkan pasta lama, memasang material baru, lalu memasang semuanya kembali. Suhu diukur sebelum dan sesudah supaya Anda lihat sendiri hasilnya. Proses dikerjakan di depan Anda, jadi Anda bisa tanya kapan saja selama pengerjaan.",
      },
      {
        h2: "Perangkat yang perlu penanganan khusus",
        body:
          "MacBook dan laptop gaming dengan sistem pendingin kompleks butuh perlakuan berbeda. Kami tangani semua merek: Asus, Lenovo, HP, Dell, Acer, MSI, MacBook. Untuk liquid metal, area sensitif di sekitar prosesor diisolasi dulu supaya aman.",
      },
    ],
    faqs: [
      {
        q: "Berapa lama proses repaste?",
        a: "Biasanya 1 sampai 2 jam. Dari 500+ servis yang kami kerjakan, 95% selesai di hari yang sama.",
      },
      {
        q: "Apakah data di laptop saya aman?",
        a: "Aman. Kami hanya menangani hardware, tidak membuka data atau sistem Anda. Proses dikerjakan di depan Anda.",
      },
      {
        q: "Apakah ada garansi?",
        a: "Ada garansi 7 hari untuk semua pekerjaan repaste. Klaim garansi kami kurang dari 2%.",
      },
    ],
    relatedSlugs: ["deep-cleaning-laptop", "servis-pc"],
  },
  {
    slug: "deep-cleaning-laptop",
    h1: "Jasa Deep Cleaning Laptop di Bandung",
    title: "Jasa Deep Cleaning Laptop Bandung Rp 200.000 | Repastain",
    description:
      "Deep cleaning laptop di Bandung dari Rp 200.000. Bersih fan, heatsink, keyboard, layar, palmrest, plus repaste. Garansi 7 hari.",
    intro:
      "Deep cleaning membersihkan bagian dalam laptop yang tidak bisa dijangkau tiupan angin biasa: fan, heatsink, dan body dalam. Sekalian repaste supaya suhu turun maksimal.",
    sections: [
      {
        h2: "Tanda laptop butuh deep cleaning",
        body:
          "Kipas berisik atau berdebum, laptop panas di bagian bawah, keyboard terasa hangat, atau performa drop saat dipakai lama. Debu yang menumpuk di fan dan heatsink membuat panas terjebak di dalam.",
      },
      {
        h2: "Paket deep cleaning",
        body:
          "Deepclean Premium Rp 200.000: bersih fan, heatsink, body dalam, plus repaste CryoFuze 5 atau Arctic MX-6, dan bersih keyboard, layar, palmrest. Deepclean Phase Change Rp 220.000 sama seperti Premium tapi pakai PTM 7950 yang lebih awet. Deepclean Liquid Metal Rp 250.000 untuk suhu paling dingin. Semua paket termasuk cek suhu dan benchmark, garansi 7 hari.",
      },
      {
        h2: "Proses pengerjaan",
        body:
          "Laptop dibuka sampai bagian dalam, fan dan heatsink dibersihkan dari debu, pasta lama diganti, keyboard dan layar dibersihkan. Semua dikerjakan di depan Anda, biasanya selesai dalam 1 sampai 2 jam.",
      },
    ],
    faqs: [
      {
        q: "Seberapa sering laptop perlu deep cleaning?",
        a: "Untuk pemakaian normal, sekali setahun cukup. Kalau laptop dipakai di tempat berdebu atau untuk gaming berat, 6 sampai 8 bulan sekali lebih ideal.",
      },
      {
        q: "Apakah deep cleaning termasuk repaste?",
        a: "Ya, semua paket deep cleaning kami sudah termasuk repaste. Tidak perlu bayar terpisah.",
      },
      {
        q: "Apakah keyboard juga dibersihkan?",
        a: "Ya, keyboard, layar, dan palmrest dibersihkan di semua paket deep cleaning.",
      },
    ],
    relatedSlugs: ["repaste-laptop", "repaste-pc"],
  },
  {
    slug: "repaste-pc",
    h1: "Jasa Repaste PC Desktop di Bandung",
    title: "Jasa Repaste PC Bandung dari Rp 220.000 | Repastain",
    description:
      "Repaste PC desktop di Bandung dari Rp 220.000. Semua socket Intel dan AMD, GPU repaste mulai Rp 150.000. Garansi 7 hari.",
    intro:
      "Repaste PC desktop mengganti pasta termal pada processor dan GPU. Suhu lebih terkendali, sistem lebih stabil, dan performa gaming tidak gampang drop karena panas.",
    sections: [
      {
        h2: "Kapan PC perlu repaste",
        body:
          "Suhu CPU naik saat gaming atau rendering, kipas PC berisik, PC restart sendiri saat beban berat, atau performa drop setelah dipakai beberapa jam. Pasta termal pada PC desktop perlu diganti setiap 1 sampai 2 tahun.",
      },
      {
        h2: "Layanan repaste PC",
        body:
          "PC Repaste Rp 220.000 untuk processor, semua socket Intel dan AMD, termasuk buka dan bersih heatsink CPU, pasang pasta baru, cek suhu idle dan load, garansi 7 hari. GPU Repaste mulai Rp 150.000 untuk kartu grafis, termasuk pembersihan GPU. Add-on Repaste VRAM/VRM Rp 50.000 pakai thermal putty untuk VRAM dan VRM.",
      },
      {
        h2: "Proses pengerjaan",
        body:
          "Processor atau GPU dilepas, pasta lama dibersihkan, pasta baru dipasang, lalu suhu diukur saat idle dan load. Semua dikerjakan di depan Anda dan biasanya selesai dalam 1 sampai 2 jam.",
      },
    ],
    faqs: [
      {
        q: "Apakah bisa repaste GPU juga?",
        a: "Bisa. GPU Repaste mulai Rp 150.000, termasuk pembersihan kartu grafis. Harga final tergantung model GPU.",
      },
      {
        q: "Semua socket bisa?",
        a: "Ya, semua socket Intel dan AMD kami tangani.",
      },
      {
        q: "Apakah ada garansi?",
        a: "Ada garansi 7 hari untuk semua pekerjaan repaste PC.",
      },
    ],
    relatedSlugs: ["servis-pc", "repaste-laptop"],
  },
  {
    slug: "servis-pc",
    h1: "Jasa Servis PC Desktop di Bandung",
    title: "Jasa Servis PC Bandung, Rakit PC & Instal OS | Repastain",
    description:
      "Servis PC desktop di Bandung: instal ulang OS Rp 75.000, jasa rakit PC Rp 150.000, repaste, dan perbaikan. Garansi 7 hari.",
    intro:
      "Servis PC desktop untuk masalah software maupun hardware: instal ulang OS, rakit PC baru, repaste, dan perbaikan lainnya. Dikerjakan di depan Anda dengan garansi 7 hari.",
    sections: [
      {
        h2: "Layanan servis PC",
        body:
          "Instal Ulang OS Rp 75.000: Windows 10 atau 11 atau Linux, bersih dengan driver dasar, langsung bisa dipakai. Instal Ulang OS + License Key Rp 120.000 untuk yang butuh aktivasi resmi. Jasa Rakit PC Rp 150.000: rakit dari komponen yang Anda sediakan, cable management dibereskan, BIOS setup dan POST test, instal OS opsional tambah Rp 75.000.",
      },
      {
        h2: "Masalah PC yang kami tangani",
        body:
          "PC lambat, gagal booting, blue screen, restart sendiri, tidak nyala sama sekali, atau mau dirakit PC baru dari nol. Diagnosa gratis, Anda putuskan mau lanjut servis atau tidak setelah tahu estimasi biayanya.",
      },
      {
        h2: "Proses pengerjaan",
        body:
          "Ceritakan masalahnya via WhatsApp, kami beri estimasi biaya dan waktu. Jika sepakat, servis dikerjakan dan Anda bisa pantau langsung. Bayar setelah pekerjaan beres dan Anda puas.",
      },
    ],
    faqs: [
      {
        q: "Berapa biaya instal ulang OS?",
        a: "Instal ulang OS Rp 75.000, sudah termasuk driver dasar. Kalau butuh license key resmi, paket Rp 120.000.",
      },
      {
        q: "Bisa rakit PC dari komponen sendiri?",
        a: "Bisa. Jasa Rakit PC Rp 150.000, Anda beli komponennya, kami rakit rapi dan tes sampai nyala normal. Instal OS opsional tambah Rp 75.000.",
      },
      {
        q: "Apakah ada garansi?",
        a: "Ada garansi 7 hari untuk semua pekerjaan servis PC.",
      },
    ],
    relatedSlugs: ["repaste-pc", "repaste-laptop"],
  },
];
