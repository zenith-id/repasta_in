import type { Metadata } from "next";
import { SERVICE_PAGES } from "@/constants/seo-pages";
import { ServicePage } from "@/components/seo/service-page";
import { getAppUrl } from "@/constants/seo";

const siteUrl = getAppUrl();
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
