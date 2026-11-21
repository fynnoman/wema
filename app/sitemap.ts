import type { MetadataRoute } from "next";
import { PRODUKTE } from "@/lib/site";
import { SITE_URL } from "@/lib/seo";

const LANDING_SLUGS = [
  "beton-recyclinganlage-hersteller",
  "tellerzwangsmischer",
  "mischanlagen-hersteller",
  "restbeton-und-spuelwasser-recycling",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE_URL}/unternehmen`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}/leistungen`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/kontakt`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/sitemap`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const produkte: MetadataRoute.Sitemap = PRODUKTE.map((p) => ({
    url: `${SITE_URL}/leistungen/${p.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  const landings: MetadataRoute.Sitemap = LANDING_SLUGS.map((s) => ({
    url: `${SITE_URL}/${s}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...core, ...produkte, ...landings];
}
