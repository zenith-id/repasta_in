import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { WaCta } from "@/components/seo/wa-cta";
import { getAppUrl } from "@/constants/seo";
import { SERVICE_PAGES, type ServicePageData } from "@/constants/seo-pages";

const siteUrl = getAppUrl();

export function ServicePage({ page }: { page: ServicePageData }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    description: page.description,
    provider: { "@id": `${siteUrl}/#localbusiness` },
    areaServed: { "@type": "City", name: "Bandung" },
    url: `${siteUrl}/layanan/${page.slug}`,
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
            href="/layanan"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            Semua Layanan
          </Link>
          <WaCta location="header" serviceName={page.slug} text="Konsultasi" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold font-poppins text-foreground mb-5 leading-tight">
          {page.h1}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12">{page.intro}</p>

        <div className="space-y-10 mb-14">
          {page.sections.map((s) => (
            <section key={s.h2}>
              <h2 className="text-2xl font-bold font-poppins text-foreground mb-3">{s.h2}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.body}</p>
            </section>
          ))}
        </div>

        <section className="mb-14">
          <h2 className="text-2xl font-bold font-poppins text-foreground mb-5">
            Pertanyaan yang sering ditanyakan
          </h2>
          <div className="space-y-4">
            {page.faqs.map((f) => (
              <div key={f.q} className="p-5 rounded-2xl bg-card border border-border">
                <h3 className="font-bold text-foreground font-poppins mb-2">{f.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold font-poppins text-foreground mb-4">Layanan terkait</h2>
          <div className="flex flex-wrap gap-3">
            {page.relatedSlugs.map((slug) => {
              const rel = SERVICE_PAGES.find((p) => p.slug === slug);
              if (!rel) return null;
              return (
                <Link
                  key={slug}
                  href={`/layanan/${slug}`}
                  className="px-5 py-3 rounded-xl bg-card border border-border text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {rel.h1}
                  <ArrowRight size={14} className="inline ml-2 text-primary" />
                </Link>
              );
            })}
          </div>
        </section>

        <div className="text-center p-10 rounded-2xl bg-foreground dark:bg-card">
          <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-background dark:text-foreground mb-3">
            Mau konsultasi dulu?
          </h2>
          <p className="text-background/70 dark:text-muted-foreground mb-7 max-w-sm mx-auto">
            Diagnosa gratis, Anda putuskan mau lanjut servis atau tidak.
          </p>
          <WaCta location="footer" serviceName={page.slug} text="Chat via WhatsApp" big />
        </div>
      </div>
    </main>
  );
}
