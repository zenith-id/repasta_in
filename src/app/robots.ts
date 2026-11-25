import type { MetadataRoute } from "next";
import { getAppUrl } from "@/constants/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${getAppUrl()}/sitemap.xml`,
  };
}
