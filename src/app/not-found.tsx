import type { Metadata } from "next";
import {
  ArrowRight,
  Compass,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found",

  description:
    "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <main>
      <section className="mist-background">
        <Container className="flex min-h-[70vh] flex-col items-center justify-center py-20 text-center sm:py-24">
          <div className="hero-copy-enter flex flex-col items-center">
            <div className="flex size-16 items-center justify-center rounded-button bg-brand-50 text-brand-700">
              <Compass
                aria-hidden="true"
                size={30}
                strokeWidth={1.8}
              />
            </div>

            <p className="mt-6 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
              {"// 404"}
            </p>

            <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-text-strong sm:text-5xl">
              We couldn&apos;t find that page.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-text-muted sm:text-lg">
              The page you&apos;re looking for may have been
              moved or no longer exists. You can find our
              products or get in touch below.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink
                href="/"
                size="large"
              >
                Back to home

                <ArrowRight
                  aria-hidden="true"
                  size={19}
                />
              </ButtonLink>

              <ButtonLink
                href="/products"
                variant="secondary"
                size="large"
              >
                View products
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
