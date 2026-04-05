"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";

const HERO_SUB =
  "AI-designed collagen peptides and bioactive ingredients — engineered for consistency, produced at scale, delivered to the world's leading formulators.";

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number | null>(null);
  const pendingRef = useRef({ x: 0, y: 0, px: 0, py: 0 });

  const [interactive, setInteractive] = useState(false);
  const [spot, setSpot] = useState({ x: 0, y: 0, active: false });
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(pointer: fine)");
    const sync = () => setInteractive(!reduce.matches && fine.matches);
    sync();
    reduce.addEventListener("change", sync);
    fine.addEventListener("change", sync);
    return () => {
      reduce.removeEventListener("change", sync);
      fine.removeEventListener("change", sync);
    };
  }, []);

  const flushPointer = useCallback(() => {
    rafRef.current = null;
    const p = pendingRef.current;
    setSpot({ x: p.x, y: p.y, active: true });
    setParallax({ x: p.px, y: p.py });
  }, []);

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      if (!interactive) return;
      const el = rootRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const px = (e.clientX / window.innerWidth - 0.5) * 14;
      const py = (e.clientY / window.innerHeight - 0.5) * 10;
      pendingRef.current = { x, y, px, py };
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(flushPointer);
      }
    },
    [interactive, flushPointer],
  );

  const onPointerEnter = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      if (!interactive) return;
      const el = rootRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setSpot({
        x: e.clientX - r.left,
        y: e.clientY - r.top,
        active: true,
      });
    },
    [interactive],
  );

  const onPointerLeave = useCallback(() => {
    setSpot((s) => ({ ...s, active: false }));
    setParallax({ x: 0, y: 0 });
  }, []);

  const spotlightMask =
    interactive && spot.active
      ? `radial-gradient(circle clamp(12rem, 36vw, 30rem) at ${spot.x}px ${spot.y}px, black 0%, rgba(0,0,0,0.7) 10%, rgba(0,0,0,0.42) 28%, rgba(0,0,0,0.2) 48%, rgba(0,0,0,0.08) 68%, transparent 92%)`
      : null;

  const maskStyle = spotlightMask
    ? { maskImage: spotlightMask, WebkitMaskImage: spotlightMask }
    : { maskImage: "none", WebkitMaskImage: "none" };

  return (
    <section
      ref={rootRef}
      id="hero"
      className="relative min-h-dvh overflow-hidden bg-bg"
      onPointerMove={onPointerMove}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      {/* One shared transform so bg + fg stay pixel-aligned; mobile: ~45% X anchor, md+: object-right (prototype). */}
      <div
        className="pointer-events-none absolute inset-0 min-h-dvh overflow-hidden"
        aria-hidden
      >
        <div
          className="absolute inset-0 min-h-dvh will-change-transform transition-transform duration-100 ease-out"
          style={{
            transform: `translate(${parallax.x}px, ${parallax.y}px) scale(1.06)`,
          }}
        >
          <div className="absolute inset-0">
            <Image
              src="/images/hero_bg.avif"
              alt=""
              fill
              priority
              className="object-cover object-[45%_center] md:object-right"
              sizes="100vw"
            />
          </div>

          <div
            className={`absolute inset-0 transition-opacity duration-500 ease-out ${
              interactive && spot.active ? "opacity-100" : "opacity-0"
            }`}
            style={maskStyle}
          >
            <div className="absolute inset-0 opacity-90">
              <Image
                src="/images/hero_fg.avif"
                alt=""
                fill
                className="object-cover object-[45%_center] md:object-right"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-1 bg-black/20"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-dvh items-center pt-18">
        <div className="container w-full">
          <div className="max-w-lg">
            <SectionLabel variant="hero">
              Recombinant Collagen Ingredients
            </SectionLabel>
            <h1 className="mb-6 text-4xl font-light leading-tight tracking-tight text-cream md:text-5xl lg:text-6xl">
              <span className="text-pink not-italic">Collagen</span> Without
              Compromise
            </h1>
            <p className="mb-10 max-w-sm text-base font-light leading-relaxed text-muted">
              {HERO_SUB}
            </p>
            <Button variant="primary" href="/products">
              Explore Ingredients
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
