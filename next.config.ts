import type { NextConfig } from "next";

// The category layer was removed in the scope change. Each retired category
// URL redirects to /products with an exact 301 — `permanent: true` would emit
// 308. Listed explicitly rather than as /products/:slug, which would swallow
// future product URLs and risk a loop against /products itself.
const retiredCategorySlugs = [
  "medical-gloves",
  "iv-infusion",
  "syringes-needles",
  "blood-glucose-meters",
  "laboratory-equipment",
  "ppe-protective-wear",
  "diagnostic-devices",
] as const;

const nextConfig: NextConfig = {
  async redirects() {
    return retiredCategorySlugs.map((slug) => ({
      source: `/products/${slug}`,
      destination: "/products",
      statusCode: 301,
    }));
  },
};

export default nextConfig;
