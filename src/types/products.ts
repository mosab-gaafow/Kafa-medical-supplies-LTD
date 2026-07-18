export type ProductItem = {
  id: string;
  name: string;
  shortDescription: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type ProductCategory = {
  name: string;
  slug: string;
  badge: string;
  description: string;
  seoDescription: string;
  imageSrc: string;
  imageAlt: string;
  featuredOnHome: boolean;
  products: ProductItem[];
};