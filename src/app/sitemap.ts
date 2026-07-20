import type { MetadataRoute } from "next";

import { createAbsoluteUrl } from "@/lib/site-config";

const staticRoutes = [
  "/",
  "/products",
  "/about",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((route) => ({
    url: createAbsoluteUrl(route),
  }));
}
