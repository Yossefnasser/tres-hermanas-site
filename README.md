# TRES HERMANAS — Homepage Demo

Standalone frontend recreation of the TRES HERMANAS homepage from the Stitch export
(`stitch_luxury_jewelry_ecommerce_ui_design (1)/...`), covering **both** the desktop and the
mobile designs. Homepage only — all other routes are placeholders.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the build
```

## Notes

- **No image assets by design.** Every `<img>` slot from the export is a tonal placeholder
  swatch (`src/components/placeholder.js`) with the same footprint/aspect ratio. Swap any
  `placeholder(...)` call for a real `<img>` later.
- **Two layouts, one page.** `data-variant="desktop"` blocks render ≥1024px,
  `data-variant="mobile"` blocks render below. Desktop markup follows
  `tres_hermanas_flagship_homepage`, mobile markup follows `tres_hermanas_flagship_homepage_mobile`.
- **Fonts/icons** load from Google Fonts (EB Garamond, Plus Jakarta Sans, Material Symbols) —
  same families as the export.
- **Interactions:** cart toast (Acquire), consultation modal, category filters, wishlist
  toggles, mobile menu, newsletter confirmations, smooth-scroll CTAs. Unbuilt links are
  inert placeholders.
- The mobile hamburger drawer is a minimal addition (the static export does not include an
  open-menu state).

## Structure

```
index.html                  fonts + Tailwind config (tokens from DESIGN.md) + base styles
src/main.js                 page composition + interactions
src/styles.css              variant switching + scrollbar helpers
src/data/products.js        capsule + icons product copy (verbatim from export)
src/data/sections.js        nav, vitrines, press, trust, footer copy
src/components/*.js         one component per section, desktop + mobile variants
```
