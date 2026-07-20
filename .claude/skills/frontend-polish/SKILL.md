---
name: frontend-polish
description: Review responsiveness, spacing, accessibility and image handling without changing the design system. Use when asked to polish, tidy or check the UI of a page or section.
---

# Frontend Polish

Improve execution within the existing design. This is not a redesign: the
palette, typography, spacing scale and layout are settled. See
`.claude/rules/frontend.md`.

## Out of bounds

- Changing colours, fonts, border radii or shadow tokens
- Restructuring a layout that already works
- Adding libraries, icon sets or animations
- Touching sections outside the stated scope

If you believe a real design change is needed, describe it and ask. Do not
make it.

## Review checklist

**Responsive** — check 375px, 768px, 1280px. Body never scrolls horizontally.
Wide content (tables, code, diagrams) scrolls in its own `overflow-x: auto`
container. Text stays readable without zoom. Grids collapse sensibly.

**Spacing** — consistent section rhythm (`section-spacing`), consistent card
padding, no doubled or collapsed margins between adjacent sections.

**Accessibility**
- Interactive targets at least 44px tall (`min-h-11`)
- Visible focus state on every focusable element
- One `<h1>`, headings in order, none skipped
- Decorative icons `aria-hidden="true"`; meaningful ones labelled
- Link text meaningful out of context — not "click here"
- Form inputs have associated labels and `aria-invalid` on error
- Text contrast at least 4.5:1
- Colour never the sole carrier of meaning

**Images**
- `next/image`, never a bare `<img>`
- `sizes` present wherever `fill` is used
- `priority` only above the fold
- `alt` describes what is visible and claims nothing more
- Aspect ratios consistent within a grid

**Motion** — respects `prefers-reduced-motion`. No animation that blocks
reading or delays interaction.

**Performance** — no unnecessary `"use client"`; no large client bundle for
static content; no layout shift from unsized media.

## Finishing

```bash
npx tsc --noEmit && npm run lint && npm run build
```

Report what changed and what you deliberately left alone. If you found a
problem that needs a design decision, raise it rather than solving it.
