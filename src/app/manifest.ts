import type { MetadataRoute } from "next";
import { company } from "@/lib/content";
import { defaultDescription } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.name,
    short_name: "EKA",
    description: defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#f4f7f8",
    theme_color: "#0b7a42",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
