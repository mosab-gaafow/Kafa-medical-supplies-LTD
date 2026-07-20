---
name: release-check
description: Pre-launch gate for the Kafa Medical site — build, content accuracy, metadata, contact details, assets, accessibility. Use before deploying or when asked whether the site is ready to ship.
---

# Release Check

Verify the site is fit to publish. Read-only: report, do not fix. A single
blocking failure means not ready.

## 1. Build

```bash
npx tsc --noEmit
npm run lint
npm run build
```

All three must pass clean. A failure here is blocking; stop and report.

## 2. Content accuracy

Run the `project-audit` skill and fold its findings in. Specifically confirm:

- Only the four approved products appear anywhere (`docs/PRODUCT_SCOPE.md`)
- No certification, partnership, statistic or endorsement claims
- Kenya-only positioning throughout
- Contact details match `docs/PROJECT_CONTEXT.md` exactly — email, both phone
  formats, full address — everywhere they appear
- No placeholder copy: lorem, TODO, "coming soon", "temporary image"

## 3. Metadata

For every route — `/`, `/products`, `/about`, `/contact`:

- Unique, accurate `title` and `description`
- `alternates.canonical` set
- OpenGraph and Twitter present and consistent with the page
- No stale product terms in any description

Then confirm `src/app/sitemap.ts` lists exactly the live routes — no removed
URLs, none missing — and that any configured redirects resolve to real
destinations with the intended status code.

## 4. Assets

Cross-check `docs/temporary-assets.md`:

- Every image in `public/images/` is either approved or deliberately placeheld
- No unapproved manufacturer branding, packaging copy, trademarks, lot numbers,
  expiry dates or certification marks
- No image is unreferenced without being noted
- All `alt` text accurate

Report any product still on a placeholder — that is an owner decision, not
automatically blocking.

## 5. Contact pipeline

- Validation, rate limiting, honeypot and timing checks all present
- Required environment variables documented by name — never print values
- Failure states surface a usable message to the user

## 6. Accessibility and responsiveness

Spot-check each page at 375px and 1280px: heading order, focus states, target
sizes, contrast, no horizontal body scroll.

## Report

```
READY / NOT READY

Blocking      — must fix before launch
Should fix    — ship-able but wanted
Owner decision — needs a call from the owner
Verified      — what passed
```

Give `file:line` for each finding. Do not commit, push or deploy.
