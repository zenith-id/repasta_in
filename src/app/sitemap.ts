import type { MetadataRoute } from "next";
import { getAppUrl } from "@/constants/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getAppUrl();
  const routes: { path: string; priority: number; freq: "weekly" | "monthly" }[] = [
    { path: "", priority: 1, freq: "weekly" },
    { path: "/layanan", priority: 0.9, freq: "monthly" },
    { path: "/harga", priority: 0.8, freq: "monthly" },
    { path: "/blog", priority: 0.7, freq: "weekly" },
    { path: "/blog/tanda-laptop-perlu-repaste", priority: 0.6, freq: "monthly" },
    { path: "/blog/perbedaan-thermal-paste-ptm7950-liquid-metal", priority: 0.6, freq: "monthly" },
    { path: "/blog/kenapa-laptop-cepat-panas", priority: 0.6, freq: "monthly" },
    { path: "/layanan/repaste-laptop", priority: 0.8, freq: "monthly" },
    { path: "/layanan/deep-cleaning-laptop", priority: 0.8, freq: "monthly" },
    { path: "/layanan/repaste-pc", priority: 0.8, freq: "monthly" },
    { path: "/layanan/servis-pc", priority: 0.8, freq: "monthly" },
  ];
  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
