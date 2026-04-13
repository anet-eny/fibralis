import type { ReactNode } from "react";

export type ProductTagProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

const productTagClasses =
  "inline-block rounded-sm border border-pink/30 px-2.5 py-1 text-xs font-medium uppercase tracking-[0.15em] text-pink";

export function ProductTag({ children, className, id }: ProductTagProps) {
  const classes = [productTagClasses, className].filter(Boolean).join(" ");

  return (
    <span className={classes} id={id}>
      {children}
    </span>
  );
}
