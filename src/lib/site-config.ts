export const siteConfig = {
  name: "Kafa Medical Supplies LTD",
  shortName: "Kafa Medical",

  description:
    "Kafa Medical Supplies LTD supplies medical products and healthcare supplies to hospitals, clinics, laboratories, and other healthcare facilities in Kenya.",

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
} as const;

export function createAbsoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}