import { ProductCategory } from "@/types/products";

export const productCategories: ProductCategory[] = [
  {
    name: "Medical gloves",
    slug: "medical-gloves",
    badge: "PPE",
    description:
      "Medical examination gloves for hospitals, clinics and laboratories.",
    seoDescription:
      "Explore medical gloves supplied by Kafa Medical Supplies LTD for hospitals, clinics and laboratories across Kenya.",
    imageSrc: "/images/products/medical-gloves.jpg",
    imageAlt:
      "Boxes of medical examination gloves used in healthcare facilities",
    featuredOnHome: true,
    products: [],
  },
  {
    name: "IV drips and infusion",
    slug: "iv-infusion",
    badge: "Consumables",
    description:
      "IV drips, infusion sets, cannulas and related medical supplies.",
    seoDescription:
      "Explore IV drips, infusion supplies and related medical consumables available from Kafa Medical Supplies LTD.",
    imageSrc: "/images/products/iv-infusion.jpg",
    imageAlt:
      "IV infusion supplies and medical equipment",
    featuredOnHome: true,
    products: [],
  },
  {
    name: "Syringes and needles",
    slug: "syringes-needles",
    badge: "Injections",
    description:
      "Syringes, needles and related injection supplies.",
    seoDescription:
      "Explore syringes, needles and injection supplies available from Kafa Medical Supplies LTD in Kenya.",
    imageSrc: "/images/products/syringes-needles.jpg",
    imageAlt:
      "Sterile medical syringes and injection supplies",
    featuredOnHome: true,
    products: [],
  },
  {
    name: "Blood glucose meters",
    slug: "blood-glucose-meters",
    badge: "Diagnostics",
    description:
      "Blood glucose meters, test strips and related accessories.",
    seoDescription:
      "Explore blood glucose meters and related diagnostic accessories supplied by Kafa Medical Supplies LTD.",
    imageSrc:
      "/images/products/blood-glucose-meters.jpg",
    imageAlt:
      "Blood glucose meter and testing accessories",
    featuredOnHome: true,
    products: [],
  },
  {
    name: "Laboratory equipment",
    slug: "laboratory-equipment",
    badge: "Laboratory",
    description:
      "Laboratory equipment and supplies for healthcare facilities.",
    seoDescription:
      "Explore laboratory equipment and medical laboratory supplies available from Kafa Medical Supplies LTD.",
    imageSrc:
      "/images/products/laboratory-equipment.jpg",
    imageAlt:
      "Modern medical laboratory equipment and supplies",
    featuredOnHome: true,
    products: [],
  },
  {
    name: "PPE and protective wear",
    slug: "ppe-protective-wear",
    badge: "PPE",
    description:
      "Protective wear and infection-control supplies for healthcare teams.",
    seoDescription:
      "Explore PPE and protective wear supplied by Kafa Medical Supplies LTD for healthcare facilities across Kenya.",
    imageSrc:
      "/images/products/ppe-protective-wear.jpg",
    imageAlt:
      "Healthcare personal protective equipment and protective wear",
    featuredOnHome: true,
    products: [],
  },
  {
    name: "Diagnostic devices",
    slug: "diagnostic-devices",
    badge: "Diagnostics",
    description:
      "Diagnostic devices for everyday clinical and healthcare use.",
    seoDescription:
      "Explore diagnostic devices available from Kafa Medical Supplies LTD for healthcare facilities in Kenya.",
    imageSrc:
      "/images/products/diagnostic-devices.jpg",
    imageAlt:
      "Medical diagnostic devices used in healthcare facilities",
    featuredOnHome: false,
    products: [],
  },
];

export const featuredProductCategories =
  productCategories.filter(
    (category) => category.featuredOnHome,
  );

export function getProductCategoryBySlug(
  slug: string,
) {
  return productCategories.find(
    (category) => category.slug === slug,
  );
}