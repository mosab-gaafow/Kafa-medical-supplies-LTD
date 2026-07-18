import type { Metadata } from "next";
import {
  ArrowRight,
  MessageCircle,
} from "lucide-react";

import { Reveal } from "@/components/motions/reveal";
import { ProductCategoryCard } from "@/components/products/product-category-card";
import { ProductCategoryNavigation } from "@/components/products/product-category-navigation";
import { ProductsPageHero } from "@/components/sections/products-page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { Container } from "@/components/shared/container";
import { ButtonLink } from "@/components/ui/button";
import { productCategories } from "@/content/product-categories";
import { siteConfig } from "@/lib/site-config";

const pageTitle = "Medical Products and Supplies in Kenya";

const socialTitle = `${pageTitle} | ${siteConfig.name}`;

const pageDescription =
  "Explore medical gloves, IV and infusion supplies, syringes, diagnostic devices, laboratory equipment, PPE and healthcare consumables from Kafa Medical Supplies LTD in Kenya.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  alternates: {
    canonical: "/products",
  },

  openGraph: {
    title: socialTitle,
    description: pageDescription,
    url: "/products",
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
  },

  twitter: {
    card: "summary",
    title: socialTitle,
    description: pageDescription,
  },
};

export default function ProductsPage() {
  return (
    <main>
      <ProductsPageHero />

      <Reveal distance={16}>
        <section
          id="product-categories"
          className="section-spacing scroll-mt-24 bg-white"
        >
          <Container>
            <SectionHeading
              eyebrow="Product categories"
              title="Everything your facility needs."
              description="Choose a category to view more information. Product availability and specifications will be confirmed when you request a quote."
              align="center"
            />

            <div className="mt-10">
              <ProductCategoryNavigation />
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {productCategories.map((category) => (
                <ProductCategoryCard
                  key={category.slug}
                  category={category}
                />
              ))}
            </div>
          </Container>
        </section>
      </Reveal>

      <Reveal distance={12}>
        <section className="bg-surface-sunken pb-16 pt-4 sm:pb-20 lg:pb-24">
          <Container>
            <div
              className={[
                "rounded-hero border",
                "border-border-default bg-white",
                "px-6 py-12 text-center shadow-card",
                "sm:px-10 sm:py-14",
              ].join(" ")}
            >
              <div className="mx-auto flex size-12 items-center justify-center rounded-button bg-brand-50 text-brand-700">
                <MessageCircle
                  aria-hidden="true"
                  size={24}
                />
              </div>

              <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-bold tracking-tight text-text-strong sm:text-4xl">
                Cannot find the product you need?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-text-muted">
                Send us your product name, quantity and
                specifications. Our team will check availability
                and prepare a suitable quote.
              </p>

              <div className="mt-8">
                <ButtonLink
                  href="/contact"
                  size="large"
                >
                  Request a quote

                  <ArrowRight
                    aria-hidden="true"
                    size={19}
                  />
                </ButtonLink>
              </div>
            </div>
          </Container>
        </section>
      </Reveal>
    </main>
  );
}