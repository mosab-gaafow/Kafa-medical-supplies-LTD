# Quality Rules

## Verify before declaring done

Run all three, in this order, and report the real result:

```bash
npx tsc --noEmit
npm run lint
npm run build
```

Take a baseline before starting substantial work so you can distinguish errors
you introduced from ones that were already there. Report them separately.

Never say a change is complete when a check has not run or has failed. If a
check fails, show the output rather than describing it.

For structural work, type-check between steps rather than only at the end — it
localises the break to the step that caused it.

## Match the surrounding code

Read the file before changing it and follow what is already there: naming,
export style, comment density, formatting, import order. The project uses
narrow line widths and a distinctive className-array style — match it rather
than reformatting.

Do not reformat, reorganise imports, or "tidy" code you were not asked to
touch. Unrelated churn makes review harder and hides the real change.

## Types

No `any`. No non-null assertions to silence the compiler. If a type is
genuinely unknown, use `unknown` and narrow it.

Shared types belong in `src/types/`. Content data belongs in `src/content/`,
typed against those shared types.

## Dead code

When a change makes something unused, remove it in the same pass — unused
exports, now-orphaned components, types with no referents. Grep to prove
nothing references it first (see `.claude/rules/safety.md`).

Leave no commented-out code behind.

## Content changes

Copy lives in `src/content/` and page metadata files. When product-facing copy
changes, check whether the same claim appears in:

- `src/content/` data files
- Page `metadata` exports — title, description, OpenGraph, Twitter
- `src/lib/site-config.ts`
- `src/app/sitemap.ts`
- Section components with hardcoded strings

A phrase removed from one place but left in a meta description is still live.
