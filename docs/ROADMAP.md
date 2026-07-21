# Roadmap

Status as of 20 July 2026.

## Current state of the code

The application code now matches the **approved** scope: four products, a flat
`/products` page, no category layer, and no copy referencing laboratory
equipment, PPE or diagnostic devices.

Code and docs agree as of Phase 1.

## Phase 0 — Documentation and Claude setup ✅

Complete. `CLAUDE.md`, `docs/`, `.claude/rules/`, `.claude/skills/`,
`.claude/settings.json`.

## Phase 1 — Scope change ✅

Complete. The category structure was collapsed to the four approved products.

All 13 steps landed. `src/content/products.ts` holds the four products; the
flat `Product` type replaced `ProductCategory` and `ProductItem`.
`/products` renders a four-card grid with no category navigation. The dynamic
`/products/[category]` route, the three category components and
`src/content/product-categories.ts` were deleted after zero-reference greps.
Seven `statusCode: 301` redirects cover the retired URLs, verified as `301` in
`.next/routes-manifest.json`. The four condemned images were deleted.

Verified: `tsc --noEmit`, `lint` and `build` all pass clean.

One additional rename went with step 7: the `CompanyValueIcon` member
`"certified"` became `"sourcing"`, and its `BadgeCheck` icon became
`Handshake` — a badge-check mark reads as a certification claim.

### Approved decisions carried into Phase 1

- `blood-glucose-meters_1.png` is approved for the URIT-82 — a one-file
  exception, not a precedent for any other generated or branded image
- Remove every visible "Temporary image" badge
- Medical Gloves ships on a clean branded placeholder until an approved photo
  arrives
- Redirects must use `statusCode: 301`, never `permanent: true` (which emits
  308) — see `TECH_STACK.md`

### Old URLs receiving 301 redirects to `/products`

```
/products/medical-gloves
/products/iv-infusion
/products/syringes-needles
/products/blood-glucose-meters
/products/laboratory-equipment
/products/ppe-protective-wear
/products/diagnostic-devices
```

Seven explicit entries — not a `/products/:slug` wildcard, which would swallow
future product URLs and risk a loop against `/products` itself.

## Outstanding — needs the owner

Nothing currently blocking. `products/surgical-cloves.png` and
`brand/kafa-logo.png` were both deleted by the owner directly. Image licensing
is confirmed — the owner has signed off on the current images.

### SEO pass — resolved

- **`src/app/robots.ts`** added — generates `/robots.txt`, allows all crawlers,
  points to the sitemap. Didn't exist before.
- **Sitewide `LocalBusiness` JSON-LD** added to `src/app/layout.tsx`, built
  entirely from already-confirmed facts in `src/content/company.ts` and
  `src/lib/site-config.ts` (name, address, phone, email, founding year, logo)
  — nothing invented. No ratings, reviews, opening hours or price range, since
  none of those are confirmed facts.
- **Social share image** — every page's `openGraph.images` /
  `twitter.images` now points at `brand/kafa-og-image.png`
  (`siteConfig.ogImage`, in `site-config.ts`), and Twitter cards upgraded from
  `summary` to `summary_large_image`. Previously zero pages had a share image
  at all.
- **Dedicated 1200×630 share banner — resolved.** The original approach used
  the raw logo (736×224), which isn't the standard 1.91:1 social-card ratio
  and could get letterboxed. Generated `public/images/brand/kafa-og-image.png`
  locally with a one-off `sharp` script: the same approved logo, resized and
  composited onto a 1200×630 canvas filled with the site's own brand gradient
  (`--color-brand-700` → `--color-brand-600`). No new artwork or invented
  claims — just the existing logo placed on the correct canvas size.
- **`viewport.themeColor`** added (`#117a70`, the existing `brand-600` token)
  so mobile browser chrome matches the brand on Android/iOS.
- Each of the four pages needed its own `images`/`card` update, not just the
  root layout — Next.js metadata merges `openGraph`/`twitter` shallowly per
  key, so a page's own `openGraph` object fully replaces the root's rather
  than merging into it.

### Copy fixes — resolved

- **"Cannot find the product you need?"** → **"Ready to request a quote?"**
  on `/products`. The old wording implied a wider catalogue than the four
  products the company supplies; the new copy invites a quote for what's
  already listed above it.
- **"Fast delivery" / "Premium quality"** → **"Reliable delivery" /
  "Dependable quality"** in `src/content/values.ts` and the home-hero trust
  items. Both `companyValues` entries already described themselves as
  "reliable" and "dependable" — only the titles overclaimed; titles now match
  their own descriptions. The same "premium quality" phrase in
  `about-page-hero.tsx`'s prose became "consistent quality" for the same
  reason.
- **Left alone, flagged instead:** the home-hero H1 — "Premium medical
  supplies you can trust." — still uses "Premium". This is the site's core
  tagline, a bigger creative call than the badge/CTA wording above, so it
  needs an explicit decision rather than a unilateral edit.

## Later

Nothing outstanding. The home-hero H1 ("Premium medical supplies you can
trust.") still uses "Premium" and remains a live open question — flagged
above under "Copy fixes", awaiting an explicit decision from the owner.
