import type { MetadataRoute } from "next";
import siteData from "@/data/site.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteData.siteUrl;
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
