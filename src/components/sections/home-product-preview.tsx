import { ArrowRight } from "lucide-react";

import { ProductCategoryCard } from "@/components/products/product-category-card";
import { Container } from "@/components/shared/container";
import { ButtonLink } from "@/components/ui/button";
import { featuredProductCategories } from "@/content/product-categories";
import { SectionHeading } from "./section-heading";

export function HomeProductPreview() {
  return (
    <section className="section-spacing bg-surface-sunken">
      <Container>
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Our products"
            title="Everything a modern facility needs."
            description="Explore our main medical supply categories. Select a category to see the products available under it."
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProductCategories.map(
            (category) => (
              <ProductCategoryCard
                key={category.slug}
                category={category}
              />
            ),
          )}
        </div>
      </Container>
    </section>
  );
}