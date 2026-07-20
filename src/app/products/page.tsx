import type { Metadata } from "next";
import {
  ArrowRight,
  MessageCircle,
} from "lucide-react";

import { Reveal } from "@/components/motions/reveal";
import { ProductCard } from "@/components/products/produc-card";
import { ProductsPageHero } from "@/components/sections/products-page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { Container } from "@/components/shared/container";
import { ButtonLink } from "@/components/ui/button";
import { products } from "@/content/products";
import { siteConfig } from "@/lib/site-config";

const pageTitle = "Medical Products and Supplies in Kenya";

const socialTitle = `${pageTitle} | ${siteConfig.name}`;

const pageDescription =
  "Medical gloves, injection supplies, IV drips and infusion supplies, and the URIT-82 blood glucose meter from Kafa Medical Supplies LTD in Kenya.";

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
    images: [siteConfig.ogImage],
  },

  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: pageDescription,
    images: [siteConfig.ogImage.url],
  },
};

export default function ProductsPage() {
  return (
    <main>
      <ProductsPageHero />

      <Reveal distance={16}>
        <section
          id="products"
          className="section-spacing scroll-mt-24 bg-white"
        >
          <Container>
            <SectionHeading
              eyebrow="Our products"
              title="What we supply."
              description="Product availability, specifications and quantities are confirmed when you request a quote."
              align="center"
            />

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
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
                Ready to request a quote?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-text-muted">
                Tell us the product, quantity and any
                specifications you need. Our team will confirm
                availability and prepare a suitable quote.
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