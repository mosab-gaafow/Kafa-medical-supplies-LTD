import {
  ArrowRight,
  Boxes,
  MessageCircle,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { ButtonLink } from "@/components/ui/button";

export function HomeContactCta() {
  return (
    <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
      <Container>
        <div
          className={[
            "brand-gradient relative overflow-hidden",
            "rounded-hero px-6 py-14",
            "shadow-lifted",
            "sm:px-10 sm:py-16",
            "lg:px-16 lg:py-20",
          ].join(" ")}
        >
          <div
            aria-hidden="true"
            className={[
              "absolute -right-16 -top-20",
              "size-64 rounded-full",
              "border border-white/15 bg-white/10",
              "backdrop-blur-md",
            ].join(" ")}
          />

          <div
            aria-hidden="true"
            className={[
              "absolute -bottom-28 -left-20",
              "size-72 rounded-full",
              "bg-brand-300/20 blur-3xl",
            ].join(" ")}
          />

          <div
            aria-hidden="true"
            className={[
              "absolute right-[10%] top-[25%]",
              "size-32 rounded-full",
              "bg-accent-300/30 blur-3xl",
            ].join(" ")}
          />

          <div className="relative mx-auto max-w-3xl text-center">
           <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/65">
  {"// Let's work together"}
</p>

            <h2
              className={[
                "mt-5 font-display text-3xl",
                "font-bold leading-tight tracking-tight",
                "text-white sm:text-4xl lg:text-5xl",
              ].join(" ")}
            >
              Ready to stock your facility with supplies you can trust?
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
              Tell us what your facility needs. Our team will help you
              check product availability and prepare a suitable quote.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <ButtonLink
                href="/contact"
                variant="accent"
                size="large"
              >
                <MessageCircle
                  aria-hidden="true"
                  size={19}
                />

                Contact us

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
                <Boxes
                  aria-hidden="true"
                  size={19}
                />

                Browse products
              </ButtonLink>
            </div>

            <p className="mt-7 text-sm leading-6 text-white/55">
              Request a quote for medical products and healthcare
              supplies anywhere in Kenya.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}