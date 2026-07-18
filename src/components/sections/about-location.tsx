import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { company } from "@/content/company";
import { SectionHeading } from "./section-heading";

const contactLinkClasses = [
  "inline-flex min-h-12 items-center",
  "justify-center gap-3 rounded-button",
  "border border-border-default bg-white",
  "px-5 text-sm font-semibold",
  "text-text-strong shadow-card",
  "transition duration-200",
  "hover:border-brand-300",
  "hover:text-brand-700",
].join(" ");

export function AboutLocation() {
  return (
    <section className="section-spacing bg-surface-sunken">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Our location"
              title="Based in Eastleigh, Nairobi."
              description="Customers can contact our team by phone, WhatsApp or email to discuss product requirements and request a quote."
            />

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={company.phoneHref}
                className={contactLinkClasses}
              >
                <Phone
                  aria-hidden="true"
                  size={18}
                  className="text-brand-600"
                />

                Call us
              </a>

              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className={contactLinkClasses}
              >
                <MessageCircle
                  aria-hidden="true"
                  size={18}
                  className="text-brand-600"
                />

                WhatsApp
              </a>

              <a
                href={company.emailHref}
                className={contactLinkClasses}
              >
                <Mail
                  aria-hidden="true"
                  size={18}
                  className="text-brand-600"
                />

                Email us
              </a>
            </div>
          </div>

          <address className="rounded-hero border border-border-default bg-white p-7 not-italic shadow-card sm:p-9">
            <div className="flex size-12 items-center justify-center rounded-button bg-brand-50 text-brand-700">
              <MapPin
                aria-hidden="true"
                size={24}
              />
            </div>

            <p className="mt-6 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Kafa Medical Supplies LTD
            </p>

            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-text-strong">
              {company.locationName}
            </h2>

            <div className="mt-5 space-y-1 text-base leading-7 text-text-muted">
              <p>{company.street}</p>
              <p>{company.area}</p>
              <p>{company.city}</p>
              <p>{company.country}</p>
            </div>

            <div className="mt-7 border-t border-border-default pt-6">
              <a
                href={company.phoneHref}
                className="block text-sm font-semibold text-text-strong transition-colors hover:text-brand-700"
              >
                {company.phoneInternational}
              </a>

              <a
                href={company.emailHref}
                className="mt-3 block text-sm font-semibold text-text-strong transition-colors hover:text-brand-700"
              >
                {company.email}
              </a>
            </div>
          </address>
        </div>
      </Container>
    </section>
  );
}