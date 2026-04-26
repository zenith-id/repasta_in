export interface Testimonial {
  text: string
  image: string
  name: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    text: 'Laptop saya sangat panas dan lemot parah. Tim Repasta cek dan ternyata kipas rusak plus pasta thermal habis. Ditangani beberapa jam, sekarang dingin dan kencang lagi!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Budi Santoso',
    role: 'Pemilik Usaha',
  },
  {
    text: 'Butuh servis darurat sebelum deadline tugas akhir, langsung dapat jadwal hari itu juga. Pelayanannya ramah, hasilnya memuaskan, dan harga sesuai estimasi.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Siti Nurhaliza',
    role: 'Mahasiswi',
  },
  {
    text: 'Langganan Repasta untuk maintenance laptop kantor sudah 2 tahun. Profesional, konsisten, dan selalu on-time. Partner servis terbaik yang pernah saya temui di Padang.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Ahmad Wijaya',
    role: 'IT Manager',
  },
  {
    text: 'Baterai tidak mau ngecas dan SSD mulai error. Keduanya ditangani cepat dan transparan dari sisi harga. Hasilnya memuaskan banget, pasti balik lagi!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Rina Kusuma',
    role: 'Freelancer',
  },
  {
    text: 'Upgrade SSD dari HDD 500GB di Repasta, bedanya luar biasa. Laptop yang tadinya butuh 3 menit buat booting, sekarang cuma 15 detik. Worth it banget!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Danu Prasetyo',
    role: 'Pelajar',
  },
  {
    text: 'Layar laptop saya retak karena jatuh. Repasta ganti panel baru dengan kualitas bagus dan harga jauh lebih murah dari service center resmi. Sangat puas!',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Yuli Hastuti',
    role: 'Desainer Grafis',
  },
  {
    text: 'Laptop tidak mau menyala sama sekali. Saya sudah pasrah, tapi Repasta berhasil perbaiki dalam satu hari. Ternyatta masalah di kapasitor motherboard. Keren!',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Ridwan Maulana',
    role: 'Programmer',
  },
  {
    text: 'Laptop sudah sangat lemot, hampir tidak bisa dipakai kerja. Setelah di-service dan bersih-bersih di Repasta, performanya kembali normal. Terima kasih!',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Dewi Anggraini',
    role: 'Guru',
  },
  {
    text: 'Beberapa tombol keyboard rusak dan touchpad tidak responsif. Repasta perbaiki dengan cepat dan rapi. Hasil pengerjaan sangat bersih, seperti baru lagi.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Fauzi Ramadhan',
    role: 'Fotografer',
  },
] as const

export const col1 = testimonials.slice(0, 3)
export const col2 = testimonials.slice(3, 6)
export const col3 = testimonials.slice(6, 9)

export const header = { title: 'Kata Pelanggan Kami', subtitle: 'Lebih dari 500 pelanggan di Padang telah mempercayakan servis laptop mereka kepada kami.' } as const