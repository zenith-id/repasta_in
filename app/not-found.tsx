import Link from 'next/link'
import { Wrench, ArrowLeft, MessageCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">

        {/* Logo */}
        <div className="flex items-center justify-center gap-2.5 mb-12">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, hsl(213 47% 55%), hsl(213 47% 38%))' }}
          >
            <Wrench size={18} className="text-white" />
          </div>
          <span className="font-poppins font-bold text-xl text-foreground">Repasta</span>
        </div>

        {/* 404 */}
        <div className="mb-8">
          <p className="text-8xl font-black text-primary/15 font-poppins leading-none select-none mb-4">
            404
          </p>
          <h1 className="text-2xl font-bold font-poppins text-foreground mb-3">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Halaman yang Anda cari tidak ada atau sudah dipindahkan.
            Mungkin URL-nya salah ketik?
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all text-sm"
          >
            <ArrowLeft size={16} />
            Kembali ke Beranda
          </Link>
          <a
            href="https://wa.me/621919423939?text=Halo%20Repasta!%20Saya%20ingin%20konsultasi."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground/70 font-semibold rounded-xl hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all text-sm"
          >
            <MessageCircle size={16} />
            Hubungi Kami
          </a>
        </div>

      </div>
    </div>
  )
}
