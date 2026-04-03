import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink";

/** Shared by `primary` and `compact`: pink fill CTA (navbar / solid buttons). */
const solidPinkCta = [
  "inline-block cursor-pointer bg-pink text-bg no-underline",
  focusRing,
].join(" ");

const primaryExtra = [
  "text-sm font-medium uppercase tracking-widest",
  "px-8 py-3.5 rounded-sm",
  "transition-[opacity,transform] duration-200",
  "hover:opacity-90 hover:-translate-y-px",
].join(" ");

const compactExtra = [
  "px-5 py-2 text-xs font-medium tracking-wider rounded-sm",
  "transition-opacity duration-200 hover:opacity-90",
].join(" ");

const ghostClasses = [
  "inline-flex cursor-pointer items-center gap-2",
  "text-sm font-normal tracking-wider text-beige",
  "transition-colors duration-200 hover:text-cream",
  "no-underline",
  focusRing,
].join(" ");

function classNameForVariant(variant: "primary" | "compact" | "ghost"): string {
  if (variant === "ghost") return ghostClasses;
  return `${solidPinkCta} ${variant === "primary" ? primaryExtra : compactExtra}`;
}

export type ButtonProps = {
  children: ReactNode;
  variant?: "compact" | "primary" | "ghost";
  showArrow?: boolean;
} & (
  | { href: string; onClick?: MouseEventHandler<HTMLAnchorElement> }
  | { href?: undefined; onClick?: MouseEventHandler<HTMLButtonElement> }
);

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  showArrow = true,
}: ButtonProps) {
  const className = classNameForVariant(variant);

  const content =
    variant === "ghost" && showArrow ? (
      <>
        {children}
        <span aria-hidden className="shrink-0">
          →
        </span>
      </>
    ) : (
      children
    );

  if (href !== undefined) {
    return (
      <Link href={href} onClick={onClick} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  );
}
