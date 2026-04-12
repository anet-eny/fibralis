import type { ReactNode } from "react";
import { scienceCardBody } from "@/lib/typography";

export type ApproachPillarProps = {
  step: number;
  title: ReactNode;
  children: ReactNode;
  className?: string;
};

export function ApproachPillar({
  step,
  title,
  children,
  className,
}: ApproachPillarProps) {
  const stepLabel = String(step).padStart(2, "0");

  const articleClassName = [
    "min-w-0 h-full bg-bg px-9 pb-12 pt-10 transition-colors duration-300 hover:bg-cream/5",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={articleClassName}>
      <div className="mb-7 flex items-center gap-3">
        <span className="text-xs font-medium tracking-[0.18em] text-pink/70">
          {stepLabel}
        </span>
        <span className="h-px min-w-0 flex-1 bg-pink/20" aria-hidden />
      </div>
      <h3 className="mb-4 text-[1.05rem] font-normal leading-snug text-cream [&_em]:italic [&_em]:text-cream/75">
        {title}
      </h3>
      <p className={`${scienceCardBody} [&_em]:text-cream/70`}>{children}</p>
    </article>
  );
}
