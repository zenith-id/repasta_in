import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { faqs } from "@/constants/sections/faq";
import { WHATSAPP_NUMBER } from "@/constants/contact";
import "./globals.css";
import "@/bones/registry";

import { Bricolage_Grotesque, Geist } from "next/font/google";
const geist = Geist({
  subsets: ["latin"],
  variable: "--geist-sans",
  display: "swap",
});
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--bricolage",
  weight: ["400", "600", "700"],
  display: "swap",
});

import { SEO, getAppUrl } from "@/constants/seo";
const siteUrl = getAppUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SEO.title,
    template: "%s | Repastain",
  },
  description: SEO.description,
  keywords: SEO.keywords,
  authors: [{ name: SEO.author }],
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    url: "/",
    siteName: SEO.siteName,
    locale: SEO.locale,
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: SEO.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: ["/og.png"],
  },
  verification: {
    google: "google-site-verification-code-placeholder",
  },
  icons: {
    icon: [
      {
        url: "/assets/logo/repasta-ico-16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/assets/logo/repasta-ico-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/assets/logo/repasta-ico-48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/assets/logo/repasta-ico-64.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        url: "/assets/logo/repasta-ico-128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        url: "/assets/logo/repasta-icon-48.webp",
        sizes: "48x48",
        type: "image/webp",
      },
      { url: "/assets/logo/logo.webp", type: "image/webp" },
    ],
    shortcut: "/assets/logo/logo.webp",
    apple: [
      {
        url: "/assets/logo/repasta-ico-128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        url: "/assets/logo/repasta-ico-64.png",
        sizes: "64x64",
        type: "image/png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: { "article:modified_time": "2026-06-28" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F9F7F7" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1625" },
  ],
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Repasta",
  url: siteUrl,
  logo: `${siteUrl}/assets/logo/logo.webp`,
  description:
    "Servis laptop & PC profesional di Bandung — repaste thermal paste, deep clean, upgrade hardware.",
  sameAs: ["https://www.instagram.com/repasta.in"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${WHATSAPP_NUMBER}`,
    contactType: "customer service",
    availableLanguage: "Indonesian",
  },
};

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Repasta",
  description:
    "Servis laptop & PC profesional di Bandung — repaste thermal paste, deep clean, upgrade hardware.",
  url: siteUrl,
  telephone: "+6282323633819",
  image: `${siteUrl}/assets/logo/logo.webp`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bandung",
    addressRegion: "Jawa Barat",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-6.9175",
    longitude: "107.6191",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "15:00",
    },
  ],
  priceRange: "Rp 50.000 – Rp 250.000",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servis Laptop",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Repaste Thermal Paste" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Deep Clean" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Upgrade SSD/RAM" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Servis PC" },
      },
    ],
  },
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Beranda",
      item: siteUrl,
    },
  ],
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    jsonLdOrganization,
    jsonLdLocalBusiness,
    jsonLdBreadcrumb,
    jsonLdFAQ,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${geist.variable} ${bricolage.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
