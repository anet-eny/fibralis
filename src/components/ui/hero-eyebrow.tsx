import type { ReactNode } from "react";

export type HeroEyebrowProps = {
  children: ReactNode;
  className?: string;
};

const heroEyebrowClasses =
  "mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-pink";

export function HeroEyebrow({ children, className }: HeroEyebrowProps) {
  const classes = [heroEyebrowClasses, className].filter(Boolean).join(" ");

  return (
    <p className={classes}>
      <span className="block h-px w-7 bg-pink opacity-60" aria-hidden />
      {children}
    </p>
  );
}
