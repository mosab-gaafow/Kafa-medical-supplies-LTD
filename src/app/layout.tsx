import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque,
  Hanken_Grotesk,
  IBM_Plex_Mono,
} from "next/font/google";

import { SiteHeader } from "@/components/layout/site-header";

import "./globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { MotionProvider } from "@/components/motions/motion-provider";
import { company } from "@/content/company";
import {
  createAbsoluteUrl,
  siteConfig,
} from "@/lib/site-config";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteConfig.name} | Medical Supplies in Kenya`,
    template: `%s | ${siteConfig.shortName}`,
  },

  description: siteConfig.description,

  applicationName: siteConfig.name,

  authors: [
    {
      name: siteConfig.name,
    },
  ],

  creator: siteConfig.name,
  publisher: siteConfig.name,

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Medical Supplies in Kenya`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Medical Supplies in Kenya`,
    description: siteConfig.description,
    images: [siteConfig.ogImage.url],
  },

  category: "Medical supplies",
};

export const viewport: Viewport = {
  themeColor: "#117a70",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: company.phoneInternational,
  email: company.email,
  foundingDate: String(company.establishedYear),
  image: createAbsoluteUrl(siteConfig.ogImage.url),
  address: {
    "@type": "PostalAddress",
    streetAddress: `${company.locationName}, ${company.street}, ${company.area}`,
    addressLocality: company.city,
    addressCountry: "KE",
  },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body
  className={[
    bricolageGrotesque.variable,
    hankenGrotesk.variable,
    ibmPlexMono.variable,
    "antialiased",
  ].join(" ")}
>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(organizationJsonLd).replace(
        /</g,
        "\\u003c",
      ),
    }}
  />

  <MotionProvider>
    <a
      href="#main-content"
      className={[
        "sr-only fixed left-4 top-4 z-[200]",
        "rounded-button bg-brand-700 px-4 py-3",
        "font-semibold text-white",
        "focus:not-sr-only",
      ].join(" ")}
    >
      Skip to main content
    </a>

    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <div
        id="main-content"
        className="flex-1"
      >
        {children}
      </div>

      <SiteFooter />
    </div>
  </MotionProvider>
</body>
    </html>
  );
}