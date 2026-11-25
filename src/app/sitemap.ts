import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://repastain.my.id";
  const routes: { path: string; priority: number; freq: "weekly" | "monthly" }[] = [
    { path: "", priority: 1, freq: "weekly" },
    { path: "/layanan", priority: 0.9, freq: "monthly" },
    { path: "/harga", priority: 0.8, freq: "monthly" },
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
