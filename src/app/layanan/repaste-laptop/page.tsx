import type { Metadata } from "next";
import { SERVICE_PAGES } from "@/constants/seo-pages";
import { ServicePage } from "@/components/seo/service-page";

const siteUrl = "https://repasta-in.vercel.app"
const page = SERVICE_PAGES.find((p) => p.slug === "repaste-laptop")!;

export function generateMetadata(): Metadata {
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `${siteUrl}/layanan/${page.slug}` },
  };
}

export default function RepasteLaptopPage() {
  return <ServicePage page={page} />;
}
