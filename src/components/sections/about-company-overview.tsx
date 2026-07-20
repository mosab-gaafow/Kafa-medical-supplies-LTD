import {
  Check,
  FileText,
  HandHeart,
  MapPinned,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { company } from "@/content/company";
import { products } from "@/content/products";
import { SectionHeading } from "./section-heading";

const highlights = [
  {
    title: "Kenya-focused",
    description:
      "Our services and product supply are focused on the Kenyan healthcare market.",
    icon: MapPinned,
  },
  {
    title: "Quote-based service",
    description:
      "Customers can send their product requirements and receive a suitable quote.",
    icon: FileText,
  },
  {
    title: "Customer-first",
    description:
      "We listen carefully and help customers find the supplies they need.",
    icon: HandHeart,
  },
] as const;

export function AboutCompanyOverview() {
  return (
    <section className="section-spacing bg-white">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="Reliable medical supply with clear communication."
              description={`${company.name} was established in ${company.established}. The company supplies medical and healthcare products within Kenya.`}
            />

            <div className="mt-9 space-y-6">
              {highlights.map((highlight) => {
                const Icon = highlight.icon;

                return (
                  <article
                    key={highlight.title}
                    className="flex items-start gap-4"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-button bg-brand-50 text-brand-700">
                      <Icon
                        aria-hidden="true"
                        size={21}
                        strokeWidth={1.8}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-text-strong">
                        {highlight.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-text-muted">
                        {highlight.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="rounded-hero border border-border-default bg-surface-sunken p-6 sm:p-8">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
              {"// What we supply"}
            </p>

            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-text-strong sm:text-4xl">
              Medical products for modern healthcare facilities.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted">
              We supply four products to healthcare
              facilities in Kenya.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {products.map((product) => (
                <li
                  key={product.id}
                  className={[
                    "flex min-h-14 items-center",
                    "gap-3 rounded-button",
                    "border border-border-default bg-white",
                    "px-4 py-3 text-sm font-semibold",
                    "text-text-strong shadow-card",
                  ].join(" ")}
                >
                  <Check
                    aria-hidden="true"
                    size={17}
                    className="shrink-0 text-brand-600"
                  />

                  <span>{product.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}