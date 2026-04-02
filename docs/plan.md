# Fibralis — Project Plan

## Overview

B2B biotech landing site for a fictional recombinant collagen peptide ingredient supplier.
Stack: Next.js 15 · TypeScript · Tailwind v4 · App Router · Outfit font

## Pages

- `/` — Landing page
- `/science` — Our Science (detail)
- `/products` — Full product portfolio
- `/pipeline` — Pipeline overview
- `/team` — Our Team
- `/contact` — Contact form

## src structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout, font, metadata
│   ├── globals.css          # @theme tokens, container utility
│   ├── page.tsx             # Landing page — imports all sections
│   ├── science/
│   │   └── page.tsx
│   ├── products/
│   │   └── page.tsx
│   ├── pipeline/
│   │   └── page.tsx
│   ├── team/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── hero.tsx             # Parallax hero, mousemove effect
│   ├── our-science.tsx      # Short blurb + link to /science
│   ├── products.tsx         # 3 product cards + View more
│   ├── why-us.tsx           # Text + stats + image
│   ├── meet-us.tsx          # 3 event cards grid
│   └── ui/
│       ├── button.tsx
│       └── section-label.tsx
├── hooks/
│   └── use-reveal.ts        # IntersectionObserver reveal
└── public/
    └── images/
        ├── hero-bg.avif
        ├── hero-fg.avif     # transparent background for parallax foreground layer
        └── logo.svg
```

## Landing page sections (in order)

1. `Navbar` — fixed, blur, logo left / links right
2. `Hero` — full viewport, parallax bg image, text left
3. `OurScience` — short paragraph + Explore the Science link → /science
4. `Products` — 3 cards grid + View Full Portfolio → /products
5. `WhyUs` — text + 4 stats + image placeholder
6. `MeetUs` — 3 event cards (name, date, city)
7. `Footer` — logo, email, socials (LinkedIn, X)

## Color tokens (globals.css)

```css
--color-bg: oklch(0.203 0.01 341.3);
--color-surface: oklch(0.168 0.009 307.9);
--color-pink: oklch(0.814 0.073 9.2);
--color-beige: oklch(0.747 0.061 75.1);
--color-cream: oklch(0.95 0.013 63.9);
--color-muted: oklch(0.95 0.013 63.9 / 55%);
--color-border: oklch(0.95 0.013 63.9 / 10%);
```

## Section backgrounds (alternating)

| Section     | Background |
| ----------- | ---------- |
| Hero        | `bg`       |
| Our Science | `surface`  |
| Products    | `bg`       |
| Why Us      | `surface`  |
| Meet Us     | `bg`       |
| Footer      | `surface`  |

## Design notes

- Hero: `mix-blend-mode: lighten` on bg image, mousemove parallax via JS
- Sections reveal on scroll via `useReveal` hook
- Pink (`--color-pink`) — primary accent: buttons, tags, hover states, stat numbers
- Beige (`--color-beige`) — secondary accent: section labels, ghost links, event dates
- All borders: `--color-border` (cream at 10% opacity)
- Navbar: `bg-bg/70 backdrop-blur-lg border-b border-border`
