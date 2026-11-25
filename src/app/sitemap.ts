import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://repastain.my.id";
  return [
    {
      url: base,
      lastModified: new Date("2026-06-28"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/layanan`,
      lastModified: new Date("2026-06-28"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
