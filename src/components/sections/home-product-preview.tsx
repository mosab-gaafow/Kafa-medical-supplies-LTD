import { ArrowRight } from "lucide-react";

import { ProductCard } from "@/components/products/produc-card";
import { Container } from "@/components/shared/container";
import {
  StaggerGrid,
  StaggerItem,
} from "@/components/motions/stagger-grid";
import { ButtonLink } from "@/components/ui/button";
import { products } from "@/content/products";
import { SectionHeading } from "./section-heading";

export function HomeProductPreview() {
  return (
    <section className="section-spacing bg-surface-sunken">
      <Container>
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Our products"
            title="What we supply."
            description="The medical products we supply to healthcare facilities across Kenya. Contact us to request a quote."
          />

          <ButtonLink
            href="/products"
            variant="secondary"
            className="shrink-0 self-start md:self-auto"
          >
            View all products

            <ArrowRight
              aria-hidden="true"
              size={18}
            />
          </ButtonLink>
        </div>

        <StaggerGrid className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8 xl:grid-cols-4">
          {products.map((product) => (
            <StaggerItem
              key={product.id}
              className="h-full"
            >
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </Container>
    </section>
  );
}