import type { Metadata } from "next";
import { company } from "@/lib/content";

export const siteUrl = "https://ekaconsultingtrading.com";

export const defaultDescription =
  "Consulting, technical advisory, training, HSEQ, and safety supply from EKA Consulting and Trading PLC. Tomorrow begins with today's best.";

const shareImage = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "EKA Consulting and Trading PLC. Tomorrow begins with today's best.",
} as const;

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} · ${company.name}`;
  const canonical = path === "/" ? "/" : path;

  return {
    // The root layout template does not apply to the root page, so the home title is written in full.
    title: path === "/" ? fullTitle : title,
    description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: new URL(canonical, siteUrl).toString(),
      siteName: company.name,
      locale: "en_US",
      type: "website",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [shareImage],
    },
  };
}
