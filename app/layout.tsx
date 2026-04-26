import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
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
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});
const siteUrl = "https://repasta.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Repasta — Servis Laptop & PC Profesional di Padang",
    template: "%s | Repasta",
  },
  description:
    "Repasta menyediakan servis laptop dan PC profesional di Padang. Repaste thermal paste, deep clean, upgrade SSD/RAM. Diagnosa gratis, teknisi berpengalaman, harga transparan, garansi 6 bulan.",
  keywords: [
    "servis laptop Padang",
    "repaste laptop Padang",
    "cleaning laptop Padang",
    "ganti thermal paste laptop",
    "teknisi laptop panggilan Padang",
    "deepclean laptop Padang",
    "upgrade SSD laptop Padang",
    "servis PC Padang",
  ],
  authors: [{ name: "Repasta" }],
  openGraph: {
    title: "Repasta — Servis Laptop & PC Profesional di Padang",
    description:
      "Diagnosa gratis, repaste thermal paste, deep clean, upgrade SSD/RAM. Teknisi berpengalaman, harga transparan, garansi 6 bulan.",
    url: siteUrl,
    siteName: "Repasta",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Repasta — Servis Laptop & PC Padang",
    description:
      "Diagnosa gratis, repaste thermal paste, deep clean, upgrade SSD/RAM. Teknisi berpengalaman, harga transparan, garansi 6 bulan.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Repasta",
  description:
    "Servis laptop & PC profesional di Padang — repaste thermal paste, deep clean, upgrade hardware.",
  url: siteUrl,
  telephone: "+621919423939",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Padang",
    addressRegion: "Sumatera Barat",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-0.9471",
    longitude: "100.4172",
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
