import type { ReactNode } from "react";
import {
  sectionLabelClasses,
  type SectionLabelVariant,
} from "@/lib/typography";

export type { SectionLabelVariant };

export type SectionLabelProps = {
  variant: SectionLabelVariant;
  children: ReactNode;
  className?: string;
  id?: string;
};

export function SectionLabel({
  variant,
  children,
  className,
  id,
}: SectionLabelProps) {
  const classes = [sectionLabelClasses[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <p className={classes} id={id}>
      {children}
    </p>
  );
}
