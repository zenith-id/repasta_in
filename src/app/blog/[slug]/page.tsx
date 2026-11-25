import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/constants/blog";
import { SERVICE_PAGES } from "@/constants/seo-pages";
import { WaCta } from "@/components/seo/wa-cta";
import { getAppUrl } from "@/constants/seo";

const siteUrl = getAppUrl();

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Artikel tidak ditemukan" };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${siteUrl}/blog/${post.slug}` },
    openGraph: {
      type: "article",
      publishedTime: post.published,
      modifiedTime: post.updated,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const service = SERVICE_PAGES.find((p) => p.slug === post.relatedServiceSlug)!;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.h1,
    description: post.description,
    datePublished: post.published,
    dateModified: post.updated,
    author: { "@type": "Organization", name: "Repastain" },
    url: `${siteUrl}/blog/${post.slug}`,
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
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            Semua Artikel
          </Link>
          <WaCta location="header" text="Konsultasi" />
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold font-poppins text-foreground mb-5 leading-tight">
          {post.h1}
        </h1>
        <p className="text-xs text-muted-foreground mb-8">
          Dipublikasi {post.published} · Diperbarui {post.updated}
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12">{post.intro}</p>

        <div className="space-y-10 mb-14">
          {post.sections.map((s) => (
            <section key={s.h2}>
              <h2 className="text-2xl font-bold font-poppins text-foreground mb-3">{s.h2}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-card border border-border mb-10">
          <h2 className="text-xl font-bold font-poppins text-foreground mb-2">
            Butuh bantuan teknisi?
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Layanan kami yang relevan dengan artikel ini:
          </p>
          <Link
            href={`/layanan/${service.slug}`}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            {post.relatedServiceAnchor}
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="text-center p-10 rounded-2xl bg-foreground dark:bg-card">
          <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-background dark:text-foreground mb-3">
            Mau tanya soal laptop Anda?
          </h2>
          <p className="text-background/70 dark:text-muted-foreground mb-7 max-w-sm mx-auto">
            Diagnosa gratis, Anda putuskan mau lanjut servis atau tidak.
          </p>
          <WaCta location="footer" text="Chat via WhatsApp" big />
        </div>
      </article>
    </main>
  );
}
