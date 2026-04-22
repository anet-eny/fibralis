"use client";

import type { CSSProperties, ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  threshold?: number;
};

export default function Reveal({
  children,
  className,
  delayMs = 0,
  threshold,
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold });
  const style =
    delayMs > 0
      ? ({ "--reveal-delay": `${delayMs}ms` } as CSSProperties)
      : undefined;

  return (
    <div
      ref={ref}
      style={style}
      className={[
        className,
        "reveal-base",
        visible ? "reveal-visible" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
