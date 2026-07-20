import type {
  Metadata,
} from "next";
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/shared/container";
import { company } from "@/content/company";
import { Reveal } from "@/components/motions/reveal";
import { siteConfig } from "@/lib/site-config";

const pageTitle = "Contact Us";

const socialTitle = `Contact ${siteConfig.name}`;

const pageDescription =
  "Contact Kafa Medical Supplies LTD to request a quote for medical gloves, injection supplies, IV drips and infusion supplies, and the URIT-82 blood glucose meter in Kenya.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: socialTitle,
    description: pageDescription,
    url: "/contact",
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: [siteConfig.ogImage],
  },

  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: pageDescription,
    images: [siteConfig.ogImage.url],
  },
};

type ContactPageProps = {
  searchParams: Promise<{
    subject?:
      | string
      | string[];
  }>;
};

function getInitialSubject(
  subject:
    | string
    | string[]
    | undefined,
) {
  const value =
    Array.isArray(subject)
      ? subject[0]
      : subject;

  return value
    ?.trim()
    .slice(0, 150) ?? "";
}

const contactCardClasses = [
  "group flex items-start gap-4",
  "rounded-card border",
  "border-border-default",
  "bg-white p-5 shadow-card",
  "transition duration-200",
  "motion-safe:hover:-translate-y-0.5",
  "hover:border-brand-300",
  "hover:shadow-lifted",
  "focus-visible:-translate-y-0.5",
  "focus-visible:border-brand-300",
  "focus-visible:shadow-lifted",
].join(" ");

export default async function ContactPage({
  searchParams,
}: ContactPageProps) {
  const resolvedSearchParams =
    await searchParams;

  const initialSubject =
    getInitialSubject(
      resolvedSearchParams.subject,
    );

  return (
    <main>
      <section className="mist-background border-b border-border-default">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="hero-copy-enter mx-auto max-w-4xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
              {"// Contact us"}
            </p>

            <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-text-strong sm:text-5xl lg:text-6xl">
              Tell us what your facility needs.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
              Send us your product names,
              quantities and specifications.
              Our team will review your
              request and prepare a suitable
              quote.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-spacing bg-white">
        <Container>
         <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
  <Reveal distance={16}>
    <aside>
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
        {"// Direct contact"}
      </p>

      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-text-strong sm:text-4xl">
        Contact Kafa Medical directly.
      </h2>

      <p className="mt-5 text-base leading-7 text-text-muted">
        You can also reach us by phone, WhatsApp or email.
      </p>

      <div className="mt-8 space-y-4">
        <a
          href={company.phoneHref}
          className={contactCardClasses}
        >
          {/* <div className="flex size-11 shrink-0 items-center justify-center rounded-button bg-brand-50 text-brand-700 transition-transform duration-200 motion-safe:group-hover:scale-105"> */}
          <div className="flex size-11 shrink-0 items-center justify-center rounded-button bg-brand-50 text-brand-700 transition-transform duration-200 motion-safe:group-hover:scale-105">
            <Phone
              aria-hidden="true"
              size={21}
            />
          </div>

          <div>
            <p className="text-sm text-text-muted">
              Phone
            </p>

            <p className="mt-1 font-semibold text-text-strong">
              {company.phoneInternational}
            </p>
          </div>
        </a>

        <a
          href={company.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className={contactCardClasses}
        >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-button bg-brand-50 text-brand-700 transition-transform duration-200 motion-safe:group-hover:scale-105">
            <MessageCircle
              aria-hidden="true"
              size={21}
            />
          </div>

          <div>
            <p className="text-sm text-text-muted">
              WhatsApp
            </p>

            <p className="mt-1 font-semibold text-text-strong">
              {company.phoneDisplay}
            </p>
          </div>
        </a>

        <a
          href={company.emailHref}
          className={contactCardClasses}
        >
          {/* <div className="flex size-11 shrink-0 items-center justify-center rounded-button bg-brand-50 text-brand-700 transition-transform duration-200 motion-safe:group-hover:scale-105"> */}
            <div className="flex size-11 shrink-0 items-center justify-center rounded-button bg-brand-50 text-brand-700 transition-transform duration-200 motion-safe:group-hover:scale-105">
            <Mail
              aria-hidden="true"
              size={21}
            />
          </div>

          <div className="min-w-0">
            <p className="text-sm text-text-muted">
              Email
            </p>

            <p className="mt-1 break-all font-semibold text-text-strong">
              {company.email}
            </p>
          </div>
        </a>

        <address
          className={`${contactCardClasses} not-italic`}
        >
          <div className="flex size-11 shrink-0 items-center justify-center rounded-button bg-brand-50 text-brand-700 transition-transform duration-200 motion-safe:group-hover:scale-105">
            <MapPin
              aria-hidden="true"
              size={21}
            />
          </div>

          <div>
            <p className="text-sm text-text-muted">
              Address
            </p>

            <p className="mt-1 font-semibold leading-6 text-text-strong">
              {company.address}
            </p>
          </div>
        </address>
      </div>
    </aside>
  </Reveal>

  <Reveal
    distance={16}
    delay={0.08}
  >
    <div
      className={[
        "rounded-hero border",
        "border-border-default",
        "bg-surface-sunken",
        "p-6 shadow-card",
        "sm:p-8 lg:p-10",
      ].join(" ")}
    >
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
        {"// Request a quote"}
      </p>

      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-text-strong sm:text-4xl">
        Send your enquiry.
      </h2>

      <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted">
        Complete the form below. Fields marked as required must
        be completed before sending.
      </p>

      <div className="mt-9">
       <ContactForm
  initialSubject={initialSubject}
/>
      </div>
    </div>
  </Reveal>
</div>
        </Container>
      </section>
    </main>
  );
}