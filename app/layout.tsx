import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { faqs } from "@/constants/faq";
import "./globals.css";

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
const siteUrl = "https://repasta-in.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Repasta — Servis Laptop & PC Profesional di Bandung",
    template: "%s | Repasta",
  },
  description:
    "Repasta menyediakan servis laptop dan PC profesional di Bandung. Repaste thermal paste, deep clean, upgrade SSD/RAM. Diagnosa gratis, teknisi berpengalaman, harga transparan, garansi 6 bulan.",
  keywords: [
    "servis laptop Bandung",
    "repaste laptop Bandung",
    "cleaning laptop Bandung",
    "ganti thermal paste laptop",
    "teknisi laptop panggilan Bandung",
    "deepclean laptop Bandung",
    "upgrade SSD laptop Bandung",
    "servis PC Bandung",
  ],
  authors: [{ name: "Repasta" }],
  openGraph: {
    title: "Repasta — Servis Laptop & PC Profesional di Bandung",
    description:
      "Diagnosa gratis, repaste thermal paste, deep clean, upgrade SSD/RAM. Teknisi berpengalaman, harga transparan, garansi 6 bulan.",
    url: siteUrl,
    siteName: "Repasta",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/icon.svg",
        width: 1200,
        height: 630,
        alt: "Repasta — Servis Laptop & PC Bandung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Repasta — Servis Laptop & PC Bandung",
    description:
      "Diagnosa gratis, repaste thermal paste, deep clean, upgrade SSD/RAM. Teknisi berpengalaman, harga transparan, garansi 6 bulan.",
    images: ["/icon.svg"],
  },
  verification: {
    google: "google-site-verification-code-placeholder",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
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
  "name": "Repasta",
  "url": siteUrl,
  "logo": `${siteUrl}/icon.svg`,
  "description": "Servis laptop & PC profesional di Bandung — repaste thermal paste, deep clean, upgrade hardware.",
  "sameAs": [
    "https://www.instagram.com/repasta.in",
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+6281919423939",
    "contactType": "customer service",
    "availableLanguage": "Indonesian",
  },
};

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Repasta",
  "description":
    "Servis laptop & PC profesional di Bandung — repaste thermal paste, deep clean, upgrade hardware.",
  "url": siteUrl,
  "telephone": "+6281919423939",
  "image": `${siteUrl}/icon.svg`,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bandung",
    addressRegion: "Jawa Barat",
    addressCountry: "ID",
  },
  "geo": {
    "@type": "GeoCoordinates",
    latitude: "-6.9175",
    longitude: "107.6191",
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "10:00",
      "closes": "15:00",
    },
  ],
  "priceRange": "Rp 50.000 – Rp 250.000",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500",
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servis Laptop",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Repaste Thermal Paste" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deep Clean" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Upgrade SSD/RAM" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Servis PC" } },
    ],
  },
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Beranda",
      "item": siteUrl,
    },
  ],
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
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
