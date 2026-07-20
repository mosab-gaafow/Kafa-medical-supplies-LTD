---
name: project-audit
description: Audit the Kafa Medical site for scope drift — out-of-scope product mentions, unverifiable claims, dead links, unreferenced images, stale metadata. Use before a release, after a scope change, or when asked to check the site is consistent.
---

# Project Audit

Read-only. Report findings; do not fix anything unless asked.

## 1. Out-of-scope product mentions

The approved scope is the four products in `docs/PRODUCT_SCOPE.md`.

```bash
grep -rniE "laborator|\bppe\b|protective wear|diagnostic device|blood pressure" src
```

Check every hit against the scope doc. Tailwind classes and unrelated words
will appear — read each in context rather than trusting the count.

## 2. Unverifiable claims

```bash
grep -rniE "certif|accredit|iso |\bce\b|approved by|partner|distributor|award|trusted by|[0-9]+\+ " src
```

Flag anything asserting certification, partnership, or a statistic. See
`.claude/rules/security.md`.

## 3. Geographic scope

```bash
grep -rniE "east africa|region|countries|worldwide|international" src
```

Kenya only.

## 4. Contact details

Confirm every occurrence matches `docs/PROJECT_CONTEXT.md` exactly — email,
both phone formats, full address. Check `src/content/company.ts`,
`src/lib/site-config.ts`, footer, contact page, email template.

## 5. Dead and unreferenced

Images — for each file in `public/images/`, grep for its filename in `src`.
Report anything with zero references.

Routes — every internal `href` should resolve to a real route. Watch for links
to removed pages.

Exports — flag exports from `src/content/` and `src/types/` with no importer.

## 6. Metadata and sitemap

Check each page's `metadata` export (title, description, OpenGraph, Twitter)
against current scope. Confirm `src/app/sitemap.ts` lists exactly the live
routes — no removed URLs, no missing ones.

## 7. Placeholders left in production copy

```bash
grep -rniE "lorem|TODO|FIXME|temporary image|coming soon|add source url" src docs
```

## Report

Group findings by severity:

- **Blocking** — false claims, wrong contact details, broken links, out-of-scope products
- **Should fix** — stale metadata, unreferenced images, dead exports
- **Note** — cosmetic or low-impact

Give `file:line` for each. State plainly if a category came back clean.
