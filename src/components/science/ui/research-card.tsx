import type { ReactNode } from "react";
import { ProductTag } from "@/components/ui/product-tag";
import { scienceCardBody } from "@/lib/typography";

export type ResearchCardMetaItem = {
  label: string;
  value: string;
};

export type ResearchCardProps = {
  stage: string;
  title: ReactNode;
  subtitle: string;
  description: ReactNode;
  meta: ResearchCardMetaItem[];
  className?: string;
  stageClassName?: string;
};

export function ResearchCard({
  stage,
  title,
  subtitle,
  description,
  meta,
  className,
  stageClassName,
}: ResearchCardProps) {
  const cardClassName = [
    "flex h-full min-w-0 flex-col bg-surface px-9 pb-11 pt-10 transition-colors duration-300 hover:bg-cream/5",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const tagClassName = ["mb-7 w-fit bg-pink/7", stageClassName]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={cardClassName}>
      <ProductTag className={tagClassName}>{stage}</ProductTag>

      <h3 className="mb-1.5 text-[1.15rem] font-normal leading-[1.3] tracking-[-0.01em] text-cream [&_em]:italic [&_em]:text-cream/75">
        {title}
      </h3>

      <p className="mb-5 text-xs font-medium uppercase tracking-[0.12em] text-beige">
        {subtitle}
      </p>

      <p className={`${scienceCardBody} mb-8 flex-1 [&_em]:text-cream/75`}>
        {description}
      </p>

      <div className="mb-6 h-px bg-border" aria-hidden />

      <div className="flex flex-col gap-2.5">
        {meta.map((item) => (
          <div
            key={item.label}
            className="flex items-baseline justify-between gap-4 text-sm"
          >
            <span className="shrink-0 font-light text-beige">{item.label}</span>
            <span className="text-right font-normal text-cream/75">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}
