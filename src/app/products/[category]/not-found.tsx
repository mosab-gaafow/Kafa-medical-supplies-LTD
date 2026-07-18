import {
  ArrowLeft,
  SearchX,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { ButtonLink } from "@/components/ui/button";

export default function CategoryNotFound() {
  return (
    <main>
      <section className="mist-background section-spacing">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-card bg-brand-50 text-brand-700">
              <SearchX
                aria-hidden="true"
                size={27}
              />
            </div>

            <p className="mt-7 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
  {"// Category not found"}
</p>

            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-text-strong sm:text-5xl">
              This product category does not exist.
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-text-muted">
              The category may have been removed, or the
              address may be incorrect. Return to the
              Products page to view the available categories.
            </p>

            <div className="mt-8">
              <ButtonLink
                href="/products"
                size="large"
              >
                <ArrowLeft
                  aria-hidden="true"
                  size={19}
                />

                View all categories
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}