import type { Metadata } from "next";

import { Reveal } from "@/components/motions/reveal";
import { HomeAboutPreview } from "@/components/sections/home-about-preview";
import { HomeContactCta } from "@/components/sections/home-contact-cta";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeProductPreview } from "@/components/sections/home-product-preview";
import { HomeValues } from "@/components/sections/home-values";
import { siteConfig } from "@/lib/site-config";

const pageTitle =
  "Kafa Medical Supplies LTD | Medical Supplies in Kenya";

const pageDescription =
  "Kafa Medical Supplies LTD supplies medical gloves, injection supplies, IV drips and infusion supplies, and the URIT-82 blood glucose meter across Kenya.";

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },

  description: pageDescription,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/",
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: [siteConfig.ogImage],
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [siteConfig.ogImage.url],
  },
};

export default function HomePage() {
  return (
    <main>
      <HomeHero />

      <Reveal>
        <HomeValues />
      </Reveal>

      <Reveal distance={16}>
        <HomeProductPreview />
      </Reveal>

      <Reveal distance={16}>
        <HomeAboutPreview />
      </Reveal>

      <Reveal distance={12}>
        <HomeContactCta />
      </Reveal>
    </main>
  );
}