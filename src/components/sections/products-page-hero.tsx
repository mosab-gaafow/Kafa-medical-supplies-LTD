import {
  ArrowDown,
  ArrowRight,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { ButtonLink } from "@/components/ui/button";

export function ProductsPageHero() {
  return (
    <section className="mist-background border-b border-border-default">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="hero-copy-enter mx-auto max-w-4xl text-center">
         <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
  {"// Products & services"}
</p>

          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-text-strong sm:text-5xl lg:text-6xl">
            Medical supplies, sourced with care.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
            Browse our medical supply categories.
            Select a category to learn more or contact us
            to request a quote for the products your
            facility needs.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <ButtonLink
              href="#product-categories"
              size="large"
            >
              Browse categories

              <ArrowDown
                aria-hidden="true"
                size={19}
              />
            </ButtonLink>

            <ButtonLink
              href="/contact"
              variant="secondary"
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
  );
}