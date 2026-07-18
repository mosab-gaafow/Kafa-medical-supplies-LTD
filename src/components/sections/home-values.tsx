import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Gem,
  HandHeart,
  Truck,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { companyValues } from "@/content/values";
import type { CompanyValueIcon } from "@/types/company-value";
import { SectionHeading } from "./section-heading";

const iconMap: Record<CompanyValueIcon, LucideIcon> = {
  certified: BadgeCheck,
  delivery: Truck,
  quality: Gem,
  customer: HandHeart,
};

export function HomeValues() {
  return (
    <section className="section-spacing bg-white">
      <Container>
        <SectionHeading
          eyebrow="What we stand for"
          title="A partner your facility can rely on."
          description="Our approach is based on dependable sourcing, quality products, responsive service and reliable delivery."
          align="center"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {companyValues.map((value) => {
            const Icon = iconMap[value.icon];

            return (
              <article
                key={value.title}
                className={[
                  "group rounded-card border",
                  "border-border-default bg-white",
                  "p-6 shadow-card",
                  "transition duration-200",
                  "hover:-translate-y-1",
                  "hover:border-brand-200",
                  "hover:shadow-lifted",
                ].join(" ")}
              >
                <div
                  className={[
                    "flex size-12 items-center",
                    "justify-center rounded-button",
                    "bg-brand-50 text-brand-700",
                    "transition duration-200",
                    "group-hover:bg-brand-600",
                    "group-hover:text-white",
                  ].join(" ")}
                >
                  <Icon
                    aria-hidden="true"
                    size={23}
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold tracking-tight text-text-strong">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-text-muted">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}