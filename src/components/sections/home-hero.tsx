import Image from "next/image";
import {
  ArrowRight,
  CircleCheck,
  Phone,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { ButtonLink } from "@/components/ui/button";

const trustItems = [
  "Trusted sourcing",
  "Reliable delivery",
  "Dependable quality",
] as const;

export function HomeHero() {
  return (
    <section className="mist-background overflow-hidden">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          {/* <div> */}
          <div className="hero-copy-enter">
            <p className="mb-5 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              <span
                aria-hidden="true"
                className="size-2 rounded-full bg-brand-500"
              />

              Proudly supplying Kenya
            </p>

            <h1 className="display-title max-w-3xl text-text-strong">
              Trusted medical supplies for Kenyan{" "}
              <span className="text-brand-600">
                healthcare facilities.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-text-muted sm:text-lg">
              Medical gloves, injection supplies, IV drips
              and infusion supplies, and the URIT-82 blood
              glucose meter — supplied to hospitals, clinics
              and healthcare facilities across Kenya.
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
                <Phone
                  aria-hidden="true"
                  size={19}
                />

                Get in touch
              </ButtonLink>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              {trustItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-semibold text-ink-700"
                >
                  <CircleCheck
                    aria-hidden="true"
                    size={18}
                    className="shrink-0 text-brand-600"
                  />

                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-visual-enter relative mx-auto w-full max-w-[560px]">
            <div
              aria-hidden="true"
              className="absolute -left-12 top-8 size-40 rounded-full bg-brand-200/50 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute -right-10 top-2 size-44 rounded-full bg-accent-200/45 blur-3xl"
            />

            <div className="brand-gradient relative overflow-hidden rounded-hero p-4 shadow-lifted sm:p-5">
              <div className="grid min-h-[440px] grid-cols-[1.25fr_0.85fr] gap-3 sm:min-h-[500px]">
                <div className="relative overflow-hidden rounded-large bg-brand-800">
                  <Image
                    src="/images/products/syringes-needles.webp"
                    alt="Medical syringes with graduation markings"
                    fill
                    priority
                    sizes={[
                      "(min-width: 640px) 300px",
                      "47vw",
                    ].join(", ")}
                    className="object-cover"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink-950/45 via-transparent to-transparent"
                  />
                </div>

                <div className="grid gap-3">
                  <div className="relative overflow-hidden rounded-large bg-brand-800">
                    <Image
                      src="/images/products/blood-glucose-meters.webp"
                      alt="Handheld blood glucose meter displaying a reading in mmol/L"
                      fill
                      sizes={[
                        "(min-width: 640px) 205px",
                        "32vw",
                      ].join(", ")}
                      className="object-cover"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-ink-950/35 via-transparent to-transparent"
                    />
                  </div>

                  <div className="relative overflow-hidden rounded-large bg-brand-800">
                    <Image
                      src="/images/products/iv-infusion.webp"
                      alt="IV fluid bag connected to an infusion giving set"
                      fill
                      sizes={[
                        "(min-width: 640px) 205px",
                        "32vw",
                      ].join(", ")}
                      className="object-cover"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-ink-950/35 via-transparent to-transparent"
                    />
                  </div>
                </div>
              </div>

              <div
                className={[
                  "absolute bottom-7 left-7",
                  "flex max-w-[230px] items-center gap-3",
                  "rounded-card border border-white/40",
                  "bg-white/90 p-3 shadow-card",
                  "backdrop-blur-lg sm:p-4",
                ].join(" ")}
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-button bg-brand-600 text-white">
                  <ShieldCheck
                    aria-hidden="true"
                    size={22}
                  />
                </div>

                <div>
                  <p className="text-sm font-bold text-text-strong">
                    Quality assured
                  </p>

                  <p className="mt-1 text-xs leading-5 text-text-muted">
                    Dependable medical-grade products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}