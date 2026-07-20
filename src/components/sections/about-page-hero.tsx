import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { ButtonLink } from "@/components/ui/button";
import { company } from "@/content/company";

export function AboutPageHero() {
  return (
    <section className="mist-background overflow-hidden border-b border-border-default">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          {/* <div> */}
          <div className="hero-copy-enter">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
              {"// About Kafa Medical"}
            </p>

            <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-text-strong sm:text-5xl lg:text-6xl">
              A medical supply partner focused on Kenya.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-text-muted sm:text-lg">
              Kafa Medical Supplies LTD supplies medical and
              healthcare products to hospitals, clinics and
              other healthcare facilities across Kenya.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-text-muted">
              We focus on dependable sourcing, consistent quality,
              responsive customer service and reliable delivery.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink
                href="/products"
                size="large"
              >
                Explore products

                <ArrowRight
                  aria-hidden="true"
                  size={19}
                />
              </ButtonLink>

              <ButtonLink
                href="/contact"
                variant="secondary"
                size="large"
              >
                Contact us
              </ButtonLink>
            </div>
          </div>

          <div className="hero-visual-enter relative mx-auto w-full max-w-[560px]">
            <div
              aria-hidden="true"
              className="absolute -left-10 top-10 size-40 rounded-full bg-brand-200/60 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute -right-10 top-0 size-44 rounded-full bg-accent-200/45 blur-3xl"
            />

            <div className="relative aspect-[4/3] overflow-hidden rounded-hero bg-brand-50 shadow-lifted">
              <Image
                src="/images/products/blood-glucose-meters_1.webp"
                alt="URIT-82 handheld blood glucose meter"
                fill
                priority
                sizes="(min-width: 640px) 560px, 100vw"
                className="object-cover"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink-950/55 via-transparent to-transparent"
              />

              <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-card border border-white/30 bg-white/90 p-4 shadow-card backdrop-blur-lg">
                  <CalendarDays
                    aria-hidden="true"
                    size={21}
                    className="shrink-0 text-brand-700"
                  />

                  <div>
                    <p className="text-xs text-text-muted">
                      Established
                    </p>

                    <p className="font-bold text-text-strong">
                      {company.established}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-card border border-white/30 bg-white/90 p-4 shadow-card backdrop-blur-lg">
                  <MapPin
                    aria-hidden="true"
                    size={21}
                    className="shrink-0 text-brand-700"
                  />

                  <div>
                    <p className="text-xs text-text-muted">
                      Market
                    </p>

                    <p className="font-bold text-text-strong">
                      {company.market}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}