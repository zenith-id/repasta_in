import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { pricingPlans } from "@/constants/sections/pricing";
import { laptopServices, paketLaptopServices, pcServices } from "@/constants/sections/services";
import { WaCta } from "@/components/seo/wa-cta";
const siteUrl = "https://repastain.my.id";

export function generateMetadata(): Metadata {
  return {
    title: "Harga Servis Laptop & PC Bandung | Repastain",
    description:
      "Daftar harga servis laptop dan PC di Bandung: repaste dari Rp 120.000, deep clean dari Rp 220.000, instal OS Rp 75.000, rakit PC Rp 150.000. Diagnosa gratis.",
    alternates: { canonical: `${siteUrl}/harga` },
  };
}
const allPrices = [

  ...laptopServices.map((s) => ({ name: s.name, price: s.price, desc: s.desc })),
  ...paketLaptopServices.map((s) => ({ name: s.name, price: s.price, desc: s.desc })),
  ...pcServices.map((s) => ({ name: s.name, price: s.price, desc: s.desc })),
];


export default function HargaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Harga Layanan Repastain",
    itemListElement: allPrices.map((p, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: { "@type": "Service", name: p.name, description: p.desc },
    })),
  };
  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
          Harga Servis Laptop & PC Bandung
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          Harga sudah termasuk pengerjaan dan garansi 7 hari. Diagnosa gratis, bayar setelah pekerjaan beres. Belum termasuk spare part bila diperlukan, estimasi diberitahu sebelum mulai.
        </p>
        <section className="mb-14">
          <h2 className="text-2xl font-bold font-poppins text-foreground mb-5">Paket servis</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`p-6 rounded-2xl border ${
                  plan.highlighted ? "border-primary bg-primary/5" : "border-border bg-card"
                }`}
              >
                <h3 className="font-bold font-poppins text-foreground mb-1">{plan.name}</h3>
                <p className="text-2xl font-bold text-primary font-poppins mb-3">{plan.price}</p>
                <ul className="space-y-1.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-foreground/75">
                      <Check size={12} className="text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-14">
          <h2 className="text-2xl font-bold font-poppins text-foreground mb-5">Semua layanan</h2>
          <div className="space-y-3">
            {allPrices.map((p) => (
              <div
                key={p.name}
                className="flex items-start justify-between gap-4 p-4 rounded-xl bg-card border border-border"
              >
                <div>
                  <p className="font-bold text-foreground text-sm font-poppins">{p.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{p.desc}</p>
                </div>
                <span className="shrink-0 font-bold text-sm text-primary font-poppins">{p.price}</span>
              </div>
            ))}
          </div>
        </section>
        <div className="text-center p-10 rounded-2xl bg-foreground dark:bg-card">
          <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-background dark:text-foreground mb-3">
            Mau tanya harga untuk kasus Anda?
          </h2>
          <p className="text-background/70 dark:text-muted-foreground mb-7 max-w-sm mx-auto">
            Ceritakan masalahnya, kami beri estimasi biaya dan waktu. Gratis.
          </p>
          <WaCta location="footer" text="Chat via WhatsApp" big />
        </div>
      </div>
    </main>
  );
}