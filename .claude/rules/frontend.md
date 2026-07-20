# Frontend Rules

## Preserve the existing design

The visual design is settled. Preserve the logo, colour palette, typography,
spacing scale, layout direction and overall look.

- Do not redesign sections you were not asked to change
- Do not swap fonts, adjust the palette, or restyle shared components as a side
  effect of a content change
- Do not introduce a UI library, icon set or animation library — the project
  has `lucide-react` and `motion`

When a task only changes copy or data, the rendered layout should be
indistinguishable apart from the words.

## Use existing tokens

Tailwind v4, configured CSS-first in `src/app/globals.css`. Use the defined
tokens — `brand-*`, `ink-*`, `text-strong`, `text-muted`, `surface-sunken`,
`border-default`, `rounded-hero`, `rounded-card`, `rounded-button`,
`shadow-card`, `shadow-lifted`. No raw hex values, no arbitrary values where a
token exists.

Follow the established className style: arrays joined with `" "` for long lists,
matching the surrounding file.

## Components

Server components by default. Add `"use client"` only when a component needs
state, effects or event handlers — currently the contact form, mobile
navigation and motion providers.

Match the conventions of the file you are editing: named exports, a props type
declared directly above the component, `aria-hidden="true"` on decorative
icons.

## Images

- Always `next/image` — never a bare `<img>`
- Always a meaningful `alt` that describes what is visible and claims nothing
  beyond it
- Always `sizes` when using `fill`
- `priority` only for above-the-fold hero images

Image content rules are in `docs/PRODUCT_SCOPE.md` and `docs/temporary-assets.md`.

## Accessibility

- Interactive targets at least 44px tall (`min-h-11`)
- Visible focus states — never remove an outline without replacing it
- One `<h1>` per page, headings in order
- Decorative elements `aria-hidden`, meaningful ones labelled
- Colour is never the only carrier of meaning

## Responsiveness and performance

Mobile-first. Verify at 375px, 768px and 1280px. The page body must never
scroll horizontally; wide content scrolls inside its own container.

Keep the site fast: no blocking third-party scripts, no large client bundles
for static content, no client component where a server component works.
