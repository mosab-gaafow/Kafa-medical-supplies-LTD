import type { Metadata } from "next";

import { Container } from "@/components/shared/container";
import { company } from "@/content/company";
import { Reveal } from "@/components/motions/reveal";
import { siteConfig } from "@/lib/site-config";

const pageTitle = "Privacy Policy";

const socialTitle = `Privacy Policy | ${siteConfig.name}`;

const pageDescription =
  "How Kafa Medical Supplies LTD collects, uses and protects the information you share through our contact form.";

const lastUpdated = "21 July 2026";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  alternates: {
    canonical: "/privacy",
  },

  openGraph: {
    title: socialTitle,
    description: pageDescription,
    url: "/privacy",
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

const proseParagraphClasses =
  "text-base leading-7 text-text-muted sm:text-lg";

export default function PrivacyPage() {
  return (
    <main>
      <section className="mist-background border-b border-border-default">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="hero-copy-enter mx-auto max-w-4xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
              {"// Privacy policy"}
            </p>

            <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-text-strong sm:text-5xl lg:text-6xl">
              Your privacy matters to us.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
              This page explains what information we collect
              through this website, why, and how you can
              contact us about it.
            </p>
          </div>
        </Container>
      </section>

      <Reveal distance={16}>
        <section className="section-spacing bg-white">
          <Container>
            <div className="mx-auto max-w-3xl space-y-10">
              <p className="text-sm text-text-muted">
                Last updated: {lastUpdated}
              </p>

              <div className="space-y-4">
                <h2 className="font-display text-2xl font-bold tracking-tight text-text-strong sm:text-3xl">
                  What we collect
                </h2>

                <p className={proseParagraphClasses}>
                  We only collect information you choose to
                  give us through our contact form: your full
                  name, email address, phone number, company
                  or facility name, and the subject and
                  content of your message. This site has no
                  user accounts, no checkout, and does not
                  collect any payment details.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-2xl font-bold tracking-tight text-text-strong sm:text-3xl">
                  How we use it
                </h2>

                <p className={proseParagraphClasses}>
                  We use the information you submit solely to
                  respond to your enquiry, confirm product
                  availability, and prepare a quote. We do not
                  use it for marketing, and we do not sell or
                  rent it to anyone.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-2xl font-bold tracking-tight text-text-strong sm:text-3xl">
                  How it is stored and sent
                </h2>

                <p className={proseParagraphClasses}>
                  When you submit the contact form, your
                  details are sent by email directly to our
                  company inbox ({company.email}). This
                  website does not store your submission in a
                  database — once sent, it exists only as an
                  email in our mailbox, kept for as long as we
                  need it to handle your enquiry.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-2xl font-bold tracking-tight text-text-strong sm:text-3xl">
                  Cookies and tracking
                </h2>

                <p className={proseParagraphClasses}>
                  This website does not use analytics,
                  advertising cookies, or third-party
                  trackers. The contact form includes basic,
                  invisible anti-spam checks (a hidden field
                  and a timing check) that do not identify you
                  or track your activity elsewhere.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-2xl font-bold tracking-tight text-text-strong sm:text-3xl">
                  Your rights
                </h2>

                <p className={proseParagraphClasses}>
                  Under Kenya&apos;s Data Protection Act, 2019,
                  you have the right to ask us what
                  information we hold about you, to have it
                  corrected, or to have it deleted. To
                  exercise any of these rights, contact us
                  using the details below.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-2xl font-bold tracking-tight text-text-strong sm:text-3xl">
                  Contact us
                </h2>

                <p className={proseParagraphClasses}>
                  If you have questions about this policy or
                  how your information is handled, contact us
                  at{" "}
                  <a
                    href={company.emailHref}
                    className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-600"
                  >
                    {company.email}
                  </a>{" "}
                  or {company.phoneDisplay}.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </Reveal>
    </main>
  );
}
