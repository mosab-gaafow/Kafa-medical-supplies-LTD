# Security and Truthfulness Rules

This is a medical supply company's public site. False claims here are a
regulatory and reputational risk, not a copywriting preference.

## Never invent

Do not write, generate or imply any of the following unless the owner has
explicitly confirmed it:

- Certifications, accreditations, standards compliance (ISO, CE, FDA, KEBS…)
- "Certified", "verified" or "approved" supplier status
- Partnerships, distributorships or manufacturer affiliations
- Statistics — customers served, orders shipped, years in business, delivery times
- Awards, endorsements, testimonials or reviews
- Regulatory approval or clinical efficacy claims

If copy needs a credibility signal, use something true: the company supplies
these products, in Kenya, and responds to enquiries with a quote.

## Images

Never introduce an image showing manufacturer branding, packaging copy,
trademarks, model numbers, lot numbers, expiry dates or certification marks.

Do not generate replacement product imagery. If an approved image is missing,
use a neutral placeholder and tell the owner exactly which image is needed.

Approvals are per-file and do not generalise. `blood-glucose-meters_1.png` is
approved; that says nothing about any other file.

## Contact form protections — keep them

The contact pipeline (`src/app/api/contact/route.ts`,
`src/lib/security/rate-limit.ts`, `src/lib/validation/contact-schema.ts`) has
existing protections. Do not weaken or remove them while changing unrelated
things:

- Zod validation on every field
- Rate limiting
- Honeypot field plus submission timing check
- Content-type, payload size and method checks
- Origin checking

Validate on the server regardless of client validation.

## Secrets

Never read, print, log or commit values from `.env` files. Reference variables
by name only. Never echo an API key into a response, a comment or a commit
message.

## Data handling

The site collects enquiry details through the contact form. Do not log message
bodies or personal details to the console, do not add analytics or third-party
trackers, and do not send form data anywhere other than the existing SMTP
integration (`src/app/api/contact/route.ts`, via `nodemailer`).
