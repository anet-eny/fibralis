@AGENTS.md

## Stack

Next.js 16 · TypeScript · Tailwind v4 · App Router

## Core rules

- One component per file
- Simple readable code over production patterns
- No unnecessary abstraction

## Tailwind v4

- Tokens live in `@theme {}` inside `globals.css` — NOT in `tailwind.config`
- Custom tokens use `--color-*` naming so Tailwind picks them up automatically
- All colors defined in `@theme` — use token classes (`bg-bg`, `text-cream`), never arbitrary hex values
- `@theme` is for design tokens; component variants go in the component itself

## globals.css structure

```css
@import "tailwindcss";

@theme {
  --font-sans: "Outfit", sans-serif;

  --color-bg: oklch(0.203 0.01 341.3);
  --color-surface: oklch(0.168 0.009 307.9);
  --color-pink: oklch(0.814 0.073 9.2);
  --color-beige: oklch(0.747 0.061 75.1);
  --color-cream: oklch(0.95 0.013 63.9);
  --color-muted: oklch(0.95 0.013 63.9 / 55%);
  --color-border: oklch(0.95 0.013 63.9 / 10%);
}
```

## Naming conventions

- Files: `kebab-case.tsx`
- Components: `PascalCase`
- CSS tokens: `--color-*`, `--font-*`
- Tailwind classes: use token names (`bg-bg`, `text-cream`, `border-border`)

## Spacing

- Section vertical padding: always `py-section` — never hardcode `py-28` or similar

## Component pattern

```tsx
// components/section-name.tsx
export default function SectionName() {
  return (
    <section className="bg-bg py-section">
      <div className="container">{/* content */}</div>
    </section>
  );
}
```

## Container

Define once in `globals.css`:

```css
@layer utilities {
  .container {
    width: 100%;
    max-width: 1280px;
    margin-inline: auto;
    padding-inline: clamp(1.5rem, 5vw, 3rem);
  }
}
```

## Navbar

```tsx
<nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/70 backdrop-blur-lg">
```

## Fonts (layout.tsx)

```tsx
import { Outfit } from "next/font/google";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});
```

## Reveal animation (reusable hook)

```tsx
// hooks/use-reveal.ts
import { useEffect, useRef, useState } from "react";
export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}
```

Usage: `className={visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} + transition-all duration-700`

## Images

- Hero parallax: two `<Image>` layers with `mix-blend-mode: lighten`, mousemove via CSS custom properties `--mx`/`--my`
- All images in `/public/images/`
- Use `next/image` with explicit `width` + `height` or `fill` + `sizes`

## Do not

- Use `@apply` — write Tailwind classes directly in JSX
- Use `:root` for design tokens — always `@theme`
- Skip `rm -rf .next` when tokens aren't resolving
