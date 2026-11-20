import { statSync } from "node:fs";
import { join } from "node:path";
import { MetadataRoute } from "next";
import { caseStudySlugs } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://harshmann.vercel.app";
  // Tie lastModified to the content source: an unrelated rebuild no longer makes
  // every URL look changed to crawlers.
  const lastModified = statSync(join(process.cwd(), "lib", "data.ts")).mtime;

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...caseStudySlugs.map((slug) => ({
      url: `${baseUrl}/projects/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
