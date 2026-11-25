export interface BlogSection { h2: string; body: string; }
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  published: string;
  updated: string;
  h1: string;
  intro: string;
  sections: BlogSection[];
  relatedServiceSlug: string;
  relatedServiceAnchor: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "tanda-laptop-perlu-repaste",
    title: "7 Tanda Laptop Sudah Perlu Repaste | Repastain",
    description:
      "Laptop cepat panas, kipas berisik, atau performa drop? Ini 7 tanda laptop sudah perlu repaste, plus penjelasan kenapa pasta termal kering jadi penyebabnya.",
    published: "2026-11-25",
    updated: "2026-11-25",
    h1: "7 Tanda Laptop Sudah Perlu Repaste",
    intro:
      "Pasta termal itu penghubung panas antara prosesor dan heatsink. Seiring waktu, pasta ini mengering dan kemampuannya menurun. Akibatnya panas terjebak di dalam laptop. Berikut tanda-tandanya.",
    sections: [
      {
        h2: "1. Suhu CPU atau GPU naik terus",
        body:
          "Buka aplikasi pemantau suhu seperti HWMonitor atau HWiNFO. Kalau suhu CPU idle sudah di atas 70 derajat, atau saat dipakai ringan sudah 85 derajat ke atas, pasta termal kemungkinan sudah jebol. Laptop sehat biasanya idle di 40 sampai 60 derajat, dan load berat di 80 sampai 90 derajat. Kalau idle saja sudah 80, itu tanda jelas.",
      },
      {
        h2: "2. Kipas berisik terus tanpa henti",
        body:
          "Kipas berputar kencang terus meski laptop cuma dipakai browsing, itu reaksi dari panas yang menumpuk. Kipas mencoba menurunkan suhu, tapi pasta yang kering membuat panas sulit tersalurkan ke heatsink. Hasilnya kipas kerja ekstra tapi suhu tetap tinggi.",
      },
      {
        h2: "3. Performa drop saat gaming atau rendering",
        body:
          "Laptop gaming yang dulu smooth sekarang tiba-tiba patah-patah setelah 10 sampai 15 menit dipakai. Ini biasanya thermal throttling: prosesor menurunkan kecepatannya sendiri supaya suhu tidak melebihi batas aman. Repaste menurunkan suhu, dan throttling hilang.",
      },
      {
        h2: "4. Laptop mati sendiri saat dipakai berat",
        body:
          "Mati mendadak tanpa shutdown adalah proteksi terakhir dari prosesor yang terlalu panas. Kalau ini sering terjadi saat gaming atau rendering, dan bukan masalah baterai atau adaptor, pasta termal yang kering penyebab yang paling umum.",
      },
      {
        h2: "5. Bagian bawah laptop terasa sangat panas",
        body:
          "Laptop yang dipakai di pangkuan terasa menyentuh sampai tidak nyaman, itu panas yang tidak bisa naik ke heatsink. Panasnya balik ke body dan keyboard. Setelah repaste, area ini jauh lebih adem.",
      },
      {
        h2: "6. Sudah lebih dari 2 tahun tidak pernah repaste",
        body:
          "Pasta termal punya umur pakai. Pasta biasa seperti CryoFuze 5 atau Arctic MX-6 idealnya diganti setiap 1 sampai 2 tahun untuk pemakaian normal. Phase change seperti PTM 7950 bisa tahan lebih lama. Kalau laptop Anda sudah lebih dari 2 tahun dan tidak pernah dibersihkan, sebaiknya dicek.",
      },
      {
        h2: "7. Kipas berdebu dan heatsink tersumbat",
        body:
          "Kadang masalahnya bukan pasta, tapi debu yang menutupi sirip heatsink. Ini biasanya ditangani sekalian dengan deep cleaning. Teknisi yang berpengalaman akan cek dulu mana yang jadi penyebutnya, debu atau pasta, dan merekomendasikan yang sesuai.",
      },
      {
        h2: "Kapan harus repaste dan kapan cukup cleaning",
        body:
          "Kalau suhu tinggi tapi kipas dan heatsink masih bersih, pasta yang jadi masalah, repaste solusinya. Kalau debu tebal terlihat saat laptop dibuka, deep cleaning dulu, baru nilai ulang suhunya. Kami selalu cek keduanya sebelum merekomendasikan.",
      },
    ],
    relatedServiceSlug: "repaste-laptop",
    relatedServiceAnchor: "Jasa Repaste Laptop di Bandung",
  },
  {
    slug: "perbedaan-thermal-paste-ptm7950-liquid-metal",
    title: "Thermal Paste vs PTM 7950 vs Liquid Metal | Repastain",
    description:
      "Bingung pilih thermal paste biasa, phase change PTM 7950, atau liquid metal? Ini perbedaan konduktivitas, umur pakai, dan cocok untuk siapa.",
    published: "2026-11-25",
    updated: "2026-11-25",
    h1: "Perbedaan Thermal Paste, PTM 7950, dan Liquid Metal",
    intro:
      "Tiga pilihan material perekat panas ini sering membingungkan. Semua tugasnya sama, menghantarkan panas dari prosesor ke heatsink, tapi performa, umur pakai, dan tingkat kesulitan pemasangannya beda.",
    sections: [
      {
        h2: "Thermal paste biasa (CryoFuze 5, Arctic MX-6)",
        body:
          "Pasta cair yang paling umum. Konduktivitas termal sekitar 8 sampai 12 W/mK. Mudah dipasang, mudah dibersihkan, harga paling terjangkau. Cocok untuk laptop pemakaian harian: office, browsing, streaming. Kekurangannya bisa mengering setelah 1 sampai 2 tahun, sehingga perlu diganti lagi.",
      },
      {
        h2: "Phase change PTM 7950",
        body:
          "PTM 7950 dari Honeywell adalah phase change material. Padat saat dingin, meleleh saat panas, lalu membentuk lapisan tipis yang mengisi celah mikro antara prosesor dan heatsink. Konduktivitas sekitar 8,5 W/mK, tapi performanya stabil dalam jangka panjang karena tidak mengering seperti pasta biasa. Umur pakai bisa lebih dari 5 tahun. Cocok untuk yang tidak mau repot ganti pasta tiap tahun. Kekurangannya pemasangan butuh ketelitian, dan harganya lebih mahal dari pasta biasa.",
      },
      {
        h2: "Liquid metal",
        body:
          "Liquid metal seperti Thermal Grizzly Conductonaut paduan galium, konduktivitasnya 128 W/mK, jauh di atas pasta biasa. Suhu bisa turun 15 sampai 20 derajat dibanding pasta biasa yang turun 10 sampai 15 derajat. Tapi liquid metal konduktif listrik, jadi kalau tumpah ke komponen lain bisa konslet. Pemasangan wajib diisolasi, dan hanya untuk yang paham risikonya. Cocok untuk laptop gaming atau workstation editing berat yang suhunya ekstrem.",
      },
      {
        h2: "Perbandingan singkat",
        body:
          "Untuk pemakaian harian, thermal paste biasa sudah cukup dan paling ekonomis. Untuk yang malas ganti pasta tiap tahun dan mau performa stabil jangka panjang, PTM 7950 pilihan terbaik. Untuk gaming berat atau editing yang butuh suhu serendah mungkin dan siap menerima risiko pemasangan, liquid metal. Semua pilihan tersedia di layanan repaste kami, teknisi kami yang pasang.",
      },
      {
        h2: "Berapa derajat sih yang bisa turun",
        body:
          "Dari pengalaman 500+ servis, pasta biasa menurunkan suhu sekitar 10 sampai 15 derajat, phase change 12 sampai 18 derajat, liquid metal 15 sampai 20 derajat. Angka ini tergantung kondisi awal laptop. Kalau pasta lama sudah sangat kering, penurunannya bisa lebih besar. Kalau pasta lama masih lumayan, penurunannya lebih kecil.",
      },
    ],
    relatedServiceSlug: "repaste-laptop",
    relatedServiceAnchor: "Jasa Repaste Laptop di Bandung",
  },
  {
    slug: "kenapa-laptop-cepat-panas",
    title: "Kenapa Laptop Cepat Panas? 6 Penyebab Umum | Repastain",
    description:
      "Laptop cepat panas bikin tidak nyaman. Ini 6 penyebab paling umum, cara cek sendiri di rumah, dan kapan harus bawa ke teknisi.",
    published: "2026-11-25",
    updated: "2026-11-25",
    h1: "Kenapa Laptop Cepat Panas? 6 Penyebab Umum",
    intro:
      "Laptop yang panas bukan cuma tidak nyaman dipakai, tapi juga bikin performa turun dan umur komponen pendek. Kenali penyebabnya supaya tahu harus ngapain.",
    sections: [
      {
        h2: "1. Debu menumpuk di fan dan heatsink",
        body:
          "Penyebab paling umum. Debu tersedot ke dalam laptop, lengket di sirip heatsink, dan menyumbat aliran udara. Panas dari prosesor tidak bisa keluar dengan bebas. Cek lubang exhaust di sisi laptop, kalau keluar angin tapi tidak ada panas yang terasa, heatsink kemungkinan tersumbat. Solusinya deep cleaning.",
      },
      {
        h2: "2. Pasta termal mengering",
        body:
          "Pasta termal bertugas menyalurkan panas dari prosesor ke heatsink. Setelah 1 sampai 2 tahun, pasta ini mengering dan retak. Panas tidak tersalurkan dengan baik, suhu naik. Tanda khasnya suhu idle sudah tinggi dan kipas berisik terus. Solusinya repaste.",
      },
      {
        h2: "3. Laptop dipakai di permukaan yang tidak cocok",
        body:
          "Dipakai di kasur, bantal, atau pangkuan menyebabkan lubang angin tertutup. Laptop butuh aliran udara masuk dan keluar yang lancar. Kalau memang sering dipakai di kasur, pakai laptop stand atau meja kecil supaya lubang angin tidak tertutup.",
      },
      {
        h2: "4. Beban kerja terlalu berat untuk spesifikasi",
        body:
          "Laptop office dengan RAM 4 GB dipaksa buka Chrome 20 tab plus video conference, pasti panas. Bukan laptopnya rusak, tapi bebannya melebihi kapasitas. Cek Task Manager, kalau CPU dan RAM selalu di atas 90 persen, pertimbangkan upgrade RAM atau SSD, atau kurangi aplikasi yang jalan bersamaan.",
      },
      {
        h2: "5. Sirkulasi udara ruangan panas",
        body:
          "Ruang yang panas membuat laptop sulit menyeimbangkan suhu. Ini sering diabaikan. Kalau ruangan sudah terasa gerah, laptop juga ikut panas. Kipas angin atau AC di ruangan membantu, dan pastikan laptop tidak dipakai dekat jendela yang kena matahari langsung.",
      },
      {
        h2: "6. Malware atau proses background berjalan terus",
        body:
          "Aplikasi yang jalan di background tanpa Anda sadari bikin CPU kerja terus. Buka Task Manager, urutkan berdasarkan CPU. Kalau ada proses aneh yang makan CPU terus, matikan atau scan dengan antivirus. Mining malware juga penyebab yang makin umum.",
      },
      {
        h2: "Kapan harus bawa ke teknisi",
        body:
          "Kalau sudah bersihkan lubang angin, ganti permukaan pemakaian, dan kurangi beban tapi suhu tetap tinggi, masalahnya di dalam. Pasta termal atau debu di heatsink tidak bisa dibersihkan tanpa membuka laptop. Kami cek gratis, beri tahu penyebabnya, dan Anda putuskan mau lanjut servis atau tidak.",
      },
    ],
    relatedServiceSlug: "deep-cleaning-laptop",
    relatedServiceAnchor: "Jasa Deep Cleaning Laptop di Bandung",
  },
];
