export const siteConfig = {
  name: "Kafa Medical Supplies LTD",
  shortName: "Kafa Medical",

  description:
    "Kafa Medical Supplies LTD supplies medical gloves, injection supplies, IV drips and infusion supplies, and the URIT-82 blood glucose meter to hospitals, clinics and other healthcare facilities in Kenya.",

  url: "https://kafamedical.com",
  locale: "en_KE",

  contact: {
    email: "info@kafamedical.com",
    phoneDisplay: "0722 818 199",
    phoneHref: "+254722818199",
  },

  address: {
    building: "BBS Mall",
    street: "General Waruinge Street",
    area: "Eastleigh",
    city: "Nairobi",
    country: "Kenya",
  },

  ogImage: {
    url: "/images/brand/kafa-og-image.png",
    width: 1200,
    height: 630,
    alt: "Kafa Medical Supplies logo",
  },
} as const;

export function createAbsoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}