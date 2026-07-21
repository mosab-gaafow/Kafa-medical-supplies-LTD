# Tech Stack

## This is NOT the Next.js you know

This project runs **Next.js 16.2.10**. It has breaking changes — APIs,
conventions and file structure may all differ from your training data.

**Read the relevant guide in `node_modules/next/dist/docs/` before writing any
framework code.** Heed deprecation notices. This is not optional and it is not
a formality: it has already caught at least one real difference in this
project (see the `redirects` note below).

Docs live at `node_modules/next/dist/docs/`:

- `01-app/` — App Router (this project uses App Router exclusively)
- `01-app/03-api-reference/05-config/01-next-config-js/` — `next.config.ts` options
- `index.md` — table of contents

## Versions

| Package | Version |
|---|---|
| next | 16.2.10 |
| react / react-dom | 19.2.4 |
| tailwindcss | 4.x (via `@tailwindcss/postcss`) |
| zod | 4.4.3 |
| react-hook-form | 7.82.0 |
| @hookform/resolvers | 5.4.0 |
| motion | 12.42.2 |
| lucide-react | 1.25.0 |
| nodemailer | 9.0.3 |
| typescript | 5.x |

Tailwind is v4 — configuration is CSS-first in `src/app/globals.css`, not a
`tailwind.config.js`. Brand tokens (`brand-*`, `ink-*`, `text-strong`,
`surface-sunken`, `rounded-hero`, `shadow-card`, `shadow-lifted`) are defined
there. Use existing tokens; do not introduce raw hex values.

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Dev server — **never start, stop or restart it yourself** |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | Type check |

## Verified framework notes

Notes confirmed against the installed version, not assumed. Add to this list
whenever you verify something non-obvious.

**`redirects` — use `statusCode`, not `permanent`, for a true 301.**
`permanent: true` emits **308**, not 301. For an exact 301, use
`statusCode: 301`. The two properties are mutually exclusive at the type level:
`node_modules/next/dist/lib/load-custom-routes.d.ts:30-42` defines `Redirect`
as a union where the `permanent` branch declares `statusCode?: never`.
Confirmed in `01-app/03-api-reference/05-config/01-next-config-js/redirects.md:351`.

## Structure

```
src/
  app/          Routes, layout, metadata, sitemap, contact API route
  components/
    layout/     Header, footer, navigation
    sections/   Page sections (home-hero, about-*, etc.)
    products/   Product cards
    forms/      Contact form
    ui/         Button
    shared/     Container
    motions/    Reveal, MotionProvider
  content/      Editable copy and data
  lib/          site-config, email, validation, rate limiting
  types/        Shared types
```

Path alias `@/*` maps to `src/*`.
