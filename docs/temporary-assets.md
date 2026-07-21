# Website Image Assets

Status of every image in `public/images/`. Update this file whenever an image
is added, approved or removed.

The site must never ship an image showing manufacturer branding, packaging
copy, trademarks, model numbers, lot numbers, expiry dates or certification
marks — unless the owner has explicitly approved that specific file.

## Approved

| Image | Used for | Why it is acceptable |
|---|---|---|
| `products/blood-glucose-meters_1.webp` | URIT-82 product card, About page hero, home about preview | **Owner-approved exception.** Shows "URIT-82" on the device. Approved for this one file only — it is not a precedent for any other branded or generated image. |
| `products/blood-glucose-meters.webp` | Home hero collage | Unbranded generic meter, no packaging |
| `products/iv-infusion.webp` | IV Drips product card, home hero collage | Unbranded, no text |
| `products/syringes-needles.webp` | Injection Supplies product card, home hero collage (lead tile) | Unbranded, graduation markings only |
| `products/medica-gloves1.webp` | Medical Gloves product card | Owner-supplied. Unbranded pair of gloves, no packaging, no text, no certification marks |
| `brand/kafa_logo.png` | Header, footer | The real company logo |
| `brand/kafa-og-image.png` | Social share image (`openGraph`/`twitter` on every page) | Generated locally via `sharp` — the real logo composited onto a 1200×630 canvas filled with the brand gradient (`brand-700` → `brand-600`, the site's own tokens). No new artwork, text or claims; just the existing approved logo resized onto the standard social-card aspect ratio |

These seven are the only images referenced anywhere in `src/`. The five product
photos were converted from PNG to WebP (quality 82, via `sharp`, already a
project dependency) — sizes dropped 93–99% (790KB–1.14MB each down to
8–30KB) with no visible quality loss. The logo was left as PNG; it's already
small (20–54KB) and touching it wasn't part of this pass.

## Deleted in Phase 1 ✅

All four were removed after a zero-reference grep on their exact paths.

| Image | Reason |
|---|---|
| `products/medical-gloves.png` | Generated packaging with invented box copy |
| `products/surgical-cloves.png` | Fabricated certification marks — "ISO 13485", "CE 0123" |
| `products/URIT-G80.png` | Manufacturer trademark, fabricated lot number `G80S2405001` and expiry dates. Also the wrong product — the company supplies the URIT-82 |
| `products/blood-met.png` | Blood pressure monitor; no such product in scope |

Two visuals were repointed as part of this: the home hero's lead tile moved
from `medical-gloves.png` to `syringes-needles.webp`, and the home about
preview moved from `URIT-G80.png` to `blood-glucose-meters_1.webp` (both now
WebP after the compression pass below).

## Placeholder — resolved

**Medical Gloves** previously had no approved image and shipped on a branded
placeholder (`brand-gradient` surface, `Stethoscope` outline, "Kafa Medical").
The owner supplied `products/medica-gloves1.webp` (converted from the
originally supplied PNG) and it is now wired into `src/content/products.ts`;
the placeholder branch in `ProductCard` is unused for this product going
forward but was left in the component, since it's still the correct fallback
if `imageSrc` is ever unset for a future product.

Every "Temporary image" badge has been removed from the site.

`products/surgical-cloves.png` reappeared in the folder after being deleted in
Phase 1, was flagged, and the owner deleted it again directly. Gone for good
this time — same reason as the first deletion (fabricated certification
marks, "ISO 13485", "CE 0123").

## Unreferenced

None. `brand/kafa-logo.png` (the unused duplicate) was deleted by the owner
directly.

## Before launch

- ~~Confirm licensing for every remaining image~~ — done: the owner has
  confirmed the current images are okay to use
- ~~Compress final images~~ — done: the five product photos are WebP now
- Check all alt text describes the image accurately and claims nothing extra
- Confirm no private patient information is visible in any image
