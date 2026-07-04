import type { MetadataRoute } from "next";
import { TOTAL_RESULT_COUNT } from "@/data/results";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sajuzzal.vercel.app";
  const now = new Date();
  const staticRoutes = ["", "/fortune", "/privacy", "/contact"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
  }));
  const resultRoutes = Array.from({ length: TOTAL_RESULT_COUNT }, (_, index) => ({
    url: `${siteUrl}/result/${index + 1}`,
    lastModified: now,
  }));

  return [...staticRoutes, ...resultRoutes];
}
