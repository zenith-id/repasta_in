import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SERVICE_PAGES } from "@/constants/seo-pages";
import { WaCta } from "@/components/seo/wa-cta";

const siteUrl = "https://repasta-in.vercel.app"

export function generateMetadata(): Metadata {
  return {
    title: "Layanan Servis Laptop & PC Bandung | Repastain",
    description:
      "Daftar layanan Repastain: repaste laptop, deep cleaning, repaste PC, servis PC. Harga transparan, garansi 7 hari, dikerjakan di depan Anda.",
    alternates: { canonical: `${siteUrl}/layanan` },
  };
}

export default function LayananPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="sticky top-0 z-40 bg-background/92 backdrop-blur-xl border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            Kembali ke Beranda
          </Link>
          <WaCta location="header" text="Konsultasi" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold font-poppins text-foreground mb-5 leading-tight">
          Layanan Servis Laptop & PC Bandung
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          Semua layanan dikerjakan transparan di depan Anda, dengan bahan berkualitas dan garansi nyata. Pilih layanan untuk lihat detail, proses, dan harga.
        </p>

        <div className="space-y-4 mb-14">
          {SERVICE_PAGES.map((p) => (
            <Link
              key={p.slug}
              href={`/layanan/${p.slug}`}
              className="block p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-colors group"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-bold font-poppins text-foreground group-hover:text-primary transition-colors">
                  {p.h1}
                </h2>
                <ArrowRight size={18} className="text-primary shrink-0" />
              </div>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.description}</p>
            </Link>
          ))}
        </div>

        <div className="text-center p-10 rounded-2xl bg-foreground dark:bg-card">
          <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-background dark:text-foreground mb-3">
            Tidak yakin butuh layanan apa?
          </h2>
          <p className="text-background/70 dark:text-muted-foreground mb-7 max-w-sm mx-auto">
            Ceritakan masalahnya, kami bantu diagnosa dan rekomendasikan solusi terbaik. Gratis.
          </p>
          <WaCta location="footer" text="Chat via WhatsApp" big />
        </div>
      </div>
    </main>
  );
}
