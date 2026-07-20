import type { Metadata } from "next";

import { Reveal } from "@/components/motions/reveal";
import { AboutCompanyOverview } from "@/components/sections/about-company-overview";
import { AboutLocation } from "@/components/sections/about-location";
import { AboutPageHero } from "@/components/sections/about-page-hero";
import { HomeContactCta } from "@/components/sections/home-contact-cta";
import { HomeValues } from "@/components/sections/home-values";
import { siteConfig } from "@/lib/site-config";

const pageTitle = "About Us";

const socialTitle = `About ${siteConfig.name}`;

const pageDescription =
  "Learn about Kafa Medical Supplies LTD, a Kenya-focused supplier of medical gloves, injection supplies, IV drips and infusion supplies, and the URIT-82 blood glucose meter.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: socialTitle,
    description: pageDescription,
    url: "/about",
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

export default function AboutPage() {
  return (
    <main>
      <AboutPageHero />

      <Reveal distance={16}>
        <AboutCompanyOverview />
      </Reveal>

      <Reveal distance={16}>
        <HomeValues />
      </Reveal>

      <Reveal distance={16}>
        <AboutLocation />
      </Reveal>

      <Reveal distance={12}>
        <HomeContactCta />
      </Reveal>
    </main>
  );
}