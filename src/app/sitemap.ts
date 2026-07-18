import type { MetadataRoute } from "next";

import { productCategories } from "@/content/product-categories";
import { createAbsoluteUrl } from "@/lib/site-config";

const staticRoutes = [
  "/",
  "/products",
  "/about",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap =
    staticRoutes.map((route) => ({
      url: createAbsoluteUrl(route),
    }));

  const productCategoryPages: MetadataRoute.Sitemap =
    productCategories.map((category) => ({
      url: createAbsoluteUrl(
        `/products/${category.slug}`,
      ),
    }));

  return [
    ...staticPages,
    ...productCategoryPages,
  ];
}