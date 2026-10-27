import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/posts";
import { siteUrl } from "@/lib/seo";

const routes = ["", "/services", "/training", "/supply", "/about", "/blog", "/contact"] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  const pages = routes.map((path) => ({
    url: `${siteUrl}${path || "/"}`,
    changeFrequency: path === "" || path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  })) satisfies MetadataRoute.Sitemap;

  const notes = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...notes];
}
