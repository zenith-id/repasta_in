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
  alternates: { canonical: "/" },
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
  other: { "article:modified_time": "2026-11-24" },
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
  name: "Repastain",
  alternateName: "Repasta.in",
  url: siteUrl,
  logo: `${siteUrl}/assets/logo/logo.webp`,
  description:
    "Servis laptop & PC di Bandung. Repaste, deep clean, dan upgrade SSD/RAM — harga jelas di awal, garansi 7 hari.",
  sameAs: ["https://www.instagram.com/repasta.in"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${WHATSAPP_NUMBER}`,
    contactType: "customer service",
    availableLanguage: "Indonesian",
    areaServed: ["Bandung", "Padang"],
  },
};

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: "Repastain",
  alternateName: "Repasta.in",
  description:
    "Servis laptop & PC di Bandung. Repaste, deep clean, dan upgrade SSD/RAM — harga jelas di awal, garansi 7 hari.",
  url: siteUrl,
  telephone: "+6282323633819",
  image: `${siteUrl}/assets/logo/logo.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bojongsoang",
    addressLocality: "Bandung",
    addressRegion: "Jawa Barat",
    postalCode: "40288",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-6.9812",
    longitude: "107.6631",
  },
  areaServed: [
    { "@type": "City", name: "Bandung" },
    { "@type": "AdministrativeArea", name: "Bandung Raya" },
    { "@type": "City", name: "Bojongsoang" },
    { "@type": "City", name: "Padang" },
    { "@type": "AdministrativeArea", name: "Sumatera Barat" },
  ],
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
  priceRange: "Rp 50.000 – Rp 300.000",
  sameAs: ["https://www.instagram.com/repasta.in"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servis Laptop",    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Repaste Thermal Paste" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Deep Clean Premium" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Deep Clean Phase Change" },
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

const jsonLdServiceArea = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Area Layanan Repastain",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Servis Laptop Bandung",
        areaServed: { "@type": "City", name: "Bandung" },
        provider: { "@id": `${siteUrl}/#localbusiness` },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Repaste Laptop Bandung",
        areaServed: { "@type": "City", name: "Bandung" },
        provider: { "@id": `${siteUrl}/#localbusiness` },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Deep Clean Laptop Bandung",
        areaServed: { "@type": "City", name: "Bandung" },
        provider: { "@id": `${siteUrl}/#localbusiness` },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Servis Laptop Padang",
        areaServed: { "@type": "City", name: "Padang" },
        provider: { "@id": `${siteUrl}/#localbusiness` },
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Repaste Laptop Padang",
        areaServed: { "@type": "City", name: "Padang" },
        provider: { "@id": `${siteUrl}/#localbusiness` },
      },
    },
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdServiceArea).replace(/</g, "\\u003c"),
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G69Z7C3WBE"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-G69Z7C3WBE');`,
          }}
        />
      </head>
      <body className="bg-background text-foreground font-sans antialiased" suppressHydrationWarning>
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
