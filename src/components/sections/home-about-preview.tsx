import {
  ArrowRight,
  FileText,
  HandHeart,
  MapPin,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { ButtonLink } from "@/components/ui/button";
import { company } from "@/content/company";
import { SectionHeading } from "./section-heading";
import Image from "next/image";

const highlights = [
  {
    title: "Focused on Kenya",
    description:
      "We supply medical and healthcare products for facilities across Kenya.",
    icon: MapPin,
  },
  {
    title: "Quote-based service",
    description:
      "Tell us what you need, and our team will help prepare a suitable quote.",
    icon: FileText,
  },
  {
    title: "Customer-first support",
    description:
      "We provide clear communication and helpful support throughout your enquiry.",
    icon: HandHeart,
  },
] as const;

export function HomeAboutPreview() {
  return (
    <section className="section-spacing bg-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div className="brand-gradient relative min-h-[420px] overflow-hidden rounded-hero p-6 shadow-lifted sm:min-h-[500px] sm:p-8">
            <div
              aria-hidden="true"
              className="absolute -left-16 -top-16 size-52 rounded-full bg-white/15 blur-2xl"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-20 -right-16 size-64 rounded-full bg-accent-200/30 blur-3xl"
            />

           <div className="relative min-h-[370px] overflow-hidden rounded-large sm:min-h-[436px]">
  <Image
    src="/images/products/blood-glucose-meters_1.webp"
    alt="URIT-82 handheld blood glucose meter"
    fill
    sizes="(min-width: 1024px) 470px, 100vw"
    className="object-cover"
  />

  <div
    aria-hidden="true"
    className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent"
  />
</div>

            <div className="absolute bottom-8 left-8 right-8 rounded-card border border-white/30 bg-white/90 p-4 shadow-card backdrop-blur-lg sm:left-auto sm:w-[220px]">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700">
                Established
              </p>

              <p className="mt-2 text-lg font-bold text-text-strong">
                {company.established}
              </p>

              <p className="mt-1 text-sm text-text-muted">
                Serving the Kenyan market
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="About Kafa Medical"
              title="Reliable medical supply, focused on Kenya."
              description="Kafa Medical Supplies LTD provides medical and healthcare products for hospitals, clinics and other healthcare facilities across Kenya. We focus on dependable sourcing, clear communication and helpful customer support."
            />

            <div className="mt-9 space-y-6">
              {highlights.map((highlight) => {
                const Icon = highlight.icon;

                return (
                  <div
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

                      <p className="mt-2 max-w-xl text-sm leading-6 text-text-muted">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/about">
                About Kafa Medical

                <ArrowRight
                  aria-hidden="true"
                  size={18}
                />
              </ButtonLink>

              <ButtonLink
                href="/contact"
                variant="secondary"
              >
                Contact us
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}