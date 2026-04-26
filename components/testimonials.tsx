'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Testimonial {
  text: string
  image: string
  name: string
  role: string
}

const testimonials: Testimonial[] = [
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
    text: 'Laptop tidak mau menyala sama sekali. Saya sudah pasrah, tapi Repasta berhasil perbaiki dalam satu hari. Ternyata masalah di kapasitor motherboard. Keren!',
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
]

const col1 = testimonials.slice(0, 3)
const col2 = testimonials.slice(3, 6)
const col3 = testimonials.slice(6, 9)

function TestimonialsColumn({
  className,
  items,
  duration = 14,
}: {
  className?: string
  items: Testimonial[]
  duration?: number
}) {
  return (
    <div className={className}>
      <motion.ul
        animate={{ translateY: '-50%' }}
        transition={{ duration, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
        className="flex flex-col gap-5 pb-5 list-none m-0 p-0"
      >
        {[0, 1].map((pass) => (
          <React.Fragment key={pass}>
            {items.map((t, i) => (
              <motion.li
                key={`${pass}-${i}`}
                aria-hidden={pass === 1 ? 'true' : 'false'}
                tabIndex={pass === 1 ? -1 : 0}
                whileHover={{
                  scale: 1.03,
                  y: -6,
                  transition: { type: 'spring', stiffness: 380, damping: 18 },
                }}
                className="p-7 rounded-2xl border border-border bg-background shadow-md shadow-foreground/5 max-w-xs w-full cursor-default select-none group"
              >
                <blockquote className="m-0 p-0">
                  <p className="text-foreground/70 leading-relaxed text-sm m-0">
                    "{t.text}"
                  </p>
                  <footer className="flex items-center gap-3 mt-5">
                    <Image
                      width={40}
                      height={40}
                      src={t.image}
                      alt={`Avatar ${t.name}`}
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-border group-hover:ring-primary/40 transition-all duration-300"
                    />
                    <div className="flex flex-col">
                      <cite className="font-semibold not-italic tracking-tight leading-5 text-foreground text-sm font-poppins">
                        {t.name}
                      </cite>
                      <span className="text-xs leading-5 text-muted-foreground mt-0.5">
                        {t.role}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </motion.li>
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimoni"
      aria-labelledby="testimoni-heading"
      className="bg-card py-24 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -1 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="container px-4 z-10 mx-auto"
      >
        {/* Header */}
        <div className="flex flex-col items-center justify-center max-w-lg mx-auto mb-16">
          <div className="section-tag mb-5">
            Testimoni
          </div>
          <h2
            id="testimoni-heading"
            className="text-4xl md:text-5xl font-bold tracking-tight mt-2 text-center text-foreground font-poppins"
          >
            Kata Pelanggan Kami
          </h2>
          <p className="text-center mt-4 text-muted-foreground text-lg leading-relaxed max-w-sm">
            Lebih dari 500 pelanggan telah mempercayakan perangkat mereka kepada Repasta.
          </p>
        </div>

        {/* Scrolling columns */}
        <div
          className="flex justify-center gap-5 mt-10 max-h-[740px] overflow-hidden"
          style={{ maskImage: 'linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)' }}
          role="region"
          aria-label="Testimoni pelanggan"
        >
          <TestimonialsColumn items={col1} duration={16} />
          <TestimonialsColumn items={col2} className="hidden md:block" duration={21} />
          <TestimonialsColumn items={col3} className="hidden lg:block" duration={18} />
        </div>
      </motion.div>
    </section>
  )
}
