import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

import { ProductCategoryNavigation } from "@/components/products/product-category-navigation";
import { ProductEmptyState } from "@/components/products/product-empty-state";
import { Container } from "@/components/shared/container";
import { ButtonLink } from "@/components/ui/button";
import {
  getProductCategoryBySlug,
  productCategories,
} from "@/content/product-categories";
import { ProductCard } from "@/components/products/produc-card";
import { Reveal } from "@/components/motions/reveal";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return productCategories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;

  const category =
    getProductCategoryBySlug(categorySlug);

  if (!category) {
    return {
      title: "Product Category Not Found",
    };
  }

  const canonicalUrl =
    `/products/${category.slug}`;

  return {
    title: category.name,
    description: category.seoDescription,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title:
        `${category.name} | Kafa Medical Supplies LTD`,
      description: category.seoDescription,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: category.imageSrc,
          alt: category.imageAlt,
        },
      ],
    },
  };
}

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { category: categorySlug } = await params;

  const category =
    getProductCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const quoteUrl = `/contact?subject=${encodeURIComponent(
    `Quote request: ${category.name}`,
  )}`;

  return (
    <main>
      <section className="mist-background border-b border-border-default">
        <Container className="py-14 sm:py-18 lg:py-20">
          <Link
            href="/products"
            className={[
              "inline-flex min-h-11 items-center gap-2",
              "text-sm font-semibold text-brand-700",
              "transition-colors hover:text-brand-800",
            ].join(" ")}
          >
            <ArrowLeft
              aria-hidden="true"
              size={18}
            />

            Back to all products
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            {/* <div> */}
            <div className="hero-copy-enter">
              <span
                className={[
                  "inline-flex rounded-full",
                  "bg-brand-50 px-3 py-1",
                  "font-mono text-[10px]",
                  "font-semibold uppercase",
                  "tracking-[0.14em]",
                  "text-brand-700",
                ].join(" ")}
              >
                {category.badge}
              </span>

              <h1
                className={[
                  "mt-5 font-display",
                  "text-4xl font-bold leading-tight",
                  "tracking-[-0.04em]",
                  "text-text-strong",
                  "sm:text-5xl lg:text-6xl",
                ].join(" ")}
              >
                {category.name}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-text-muted sm:text-lg">
                {category.description}
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-text-muted">
                Contact our team to confirm product
                specifications, quantities and availability.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink
                  href={quoteUrl}
                  size="large"
                >
                  <MessageCircle
                    aria-hidden="true"
                    size={19}
                  />

                  Request a quote

                  <ArrowRight
                    aria-hidden="true"
                    size={19}
                  />
                </ButtonLink>

                <ButtonLink
                  href="#category-products"
                  variant="secondary"
                  size="large"
                >
                  View products
                </ButtonLink>
              </div>
            </div>

            {/* <div className="relative aspect-[4/3] overflow-hidden rounded-hero bg-brand-50 shadow-lifted"> */}
            <div className="hero-visual-enter relative aspect-[4/3] overflow-hidden rounded-hero bg-brand-50 shadow-lifted">
              <Image
                src={category.imageSrc}
                alt={category.imageAlt}
                fill
                priority
                sizes={[
                  "(min-width: 1024px) 42vw",
                  "100vw",
                ].join(", ")}
                className="object-cover"
              />

              <div
                aria-hidden="true"
                className={[
                  "absolute inset-0",
                  "bg-gradient-to-t",
                  "from-ink-950/30",
                  "via-transparent",
                  "to-transparent",
                ].join(" ")}
              />

              <span
                className={[
                  "absolute left-4 top-4",
                  "rounded-full border border-white/30",
                  "bg-surface-inverse/65 px-3 py-1",
                  "font-mono text-[9px] font-semibold",
                  "uppercase tracking-[0.14em]",
                  "text-white backdrop-blur-md",
                ].join(" ")}
              >
                Temporary image
              </span>
            </div>
          </div>
        </Container>
      </section>

      <Reveal distance={8}>
  <section className="border-b border-border-default bg-white py-8">
    <Container>
      <ProductCategoryNavigation
        activeSlug={category.slug}
      />
    </Container>
  </section>
</Reveal>
      <Reveal distance={16}>
  <section
    id="category-products"
    className="section-spacing scroll-mt-24 bg-white"
  >
    <Container>
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
          {"// Available products"}
        </p>

        <h2 className="mt-4 section-title text-text-strong">
          Products under {category.name}
        </h2>

        <p className="mt-5 text-base leading-7 text-text-muted sm:text-lg">
          Product availability may change. Contact our
          team to confirm the correct product,
          specification and quantity.
        </p>
      </div>

      {category.products.length > 0 ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {category.products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              categoryName={category.name}
            />
          ))}
        </div>
      ) : (
        <div className="mt-12">
          <ProductEmptyState
            categoryName={category.name}
          />
        </div>
      )}
    </Container>
  </section>
</Reveal>
    </main>
  );
}