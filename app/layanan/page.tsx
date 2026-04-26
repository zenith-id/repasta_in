import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, MessageCircle, Check, Star, Shield, Clock, Wrench } from 'lucide-react'
import { LAYANAN_CONTENT } from '@/constants/layanan'

export const metadata: Metadata = {
  title: 'Layanan Servis Laptop & PC',
  description:
    'Daftar lengkap layanan Repasta: repaste thermal paste, deep clean laptop, upgrade SSD/RAM, instalasi OS, rakit PC. Harga transparan, garansi 6 bulan, di Padang.',
}

const { laptopServices, pcServices, guarantees, notes } = LAYANAN_CONTENT

function ServiceCard({ svc }: { svc: (typeof laptopServices)[number] | (typeof pcServices)[number] }) {
  return (
    <div className="relative flex flex-col p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
      {svc.badge && (
        <span className="absolute -top-3 left-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-md">
          <Star size={9} className="fill-white" />
          {svc.badge}
        </span>
      )}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-bold text-foreground font-poppins">{svc.name}</h3>
        <span className={`flex-shrink-0 font-bold font-poppins text-sm ${svc.price === 'Hubungi Kami' ? 'text-foreground/50' : 'text-primary'}`}>
          {svc.price}
        </span>
      </div>
      {svc.material !== '—' && (
        <p className="text-[11px] text-primary font-semibold bg-primary/8 px-2.5 py-1 rounded-lg inline-block mb-3 w-fit">
          {svc.material}
        </p>
      )}
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{svc.desc}</p>
      <ul className="space-y-1.5 mt-auto">
        {svc.includes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs text-foreground/75">
            <Check size={12} className="text-primary mt-0.5 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function LayananPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Back nav */}
      <div className="sticky top-0 z-40 bg-background/92 backdrop-blur-xl border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            Kembali ke Beranda
          </Link>
          <a
            href="https://wa.me/621919423939?text=Halo%20Repasta!%20Saya%20ingin%20konsultasi%20layanan."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors"
          >
            <MessageCircle size={15} />
            Konsultasi
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Page header */}
        <div className="mb-14">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Repasta · Padang</p>
          <h1 className="text-4xl sm:text-5xl font-bold font-poppins text-foreground mb-5 leading-tight">
            Layanan Servis<br />
            <span className="text-primary">Laptop & PC</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Semua layanan dikerjakan transparan di depan Anda, dengan bahan berkualitas dan garansi nyata.
            Tidak ada biaya tersembunyi.
          </p>
        </div>

        {/* Guarantees row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-16 p-5 rounded-2xl bg-card border border-border">
          {guarantees.map((g, i) => {
            const Icon = g.icon
            return (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={15} className="text-primary" />
                </div>
                <span className="text-xs font-medium text-foreground/80">{g.text}</span>
              </div>
            )
          })}
        </div>

        {/* Laptop section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Wrench size={18} className="text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-poppins text-foreground">Layanan Laptop</h2>
              <p className="text-sm text-muted-foreground">Semua merek & tipe — Asus, Lenovo, HP, Dell, Acer, MSI, MacBook</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {laptopServices.map((svc) => <ServiceCard key={svc.name} svc={svc} />)}
          </div>
        </div>

        {/* PC section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Wrench size={18} className="text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-poppins text-foreground">Layanan PC Desktop</h2>
              <p className="text-sm text-muted-foreground">Semua socket & platform — Intel & AMD</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pcServices.map((svc) => <ServiceCard key={svc.name} svc={svc} />)}
          </div>
        </div>

        {/* Notes */}
        <div className="p-6 rounded-2xl bg-primary/6 border border-primary/15 mb-14">
          <h3 className="font-bold text-foreground font-poppins mb-3">Catatan Penting</h3>
          <ul className="space-y-2 text-sm text-foreground/75">
            {notes.map((item, i) => (
              <li key={i} className="flex gap-2"><Check size={14} className="text-primary mt-0.5 flex-shrink-0" />{item}</li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center p-10 rounded-2xl bg-foreground dark:bg-card">
          <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-background dark:text-foreground mb-3">
            Tidak yakin butuh layanan apa?
          </h2>
          <p className="text-background/70 dark:text-muted-foreground mb-7 max-w-sm mx-auto">
            Ceritakan masalahnya — kami bantu diagnosa dan rekomendasikan solusi terbaik. Gratis.
          </p>
          <a
            href="https://wa.me/621919423939?text=Halo%20Repasta!%20Saya%20ingin%20konsultasi%20masalah%20laptop%20saya."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-background dark:bg-primary text-foreground dark:text-primary-foreground font-semibold rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg"
          >
            <MessageCircle size={20} />
            Chat via WhatsApp — Gratis
          </a>
        </div>

      </div>
    </div>
  )
}
