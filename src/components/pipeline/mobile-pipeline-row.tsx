import { useEffect, useRef, useState } from "react";
import { ProductTag } from "@/components/ui/product-tag";
import PipelineDetails from "@/components/pipeline/pipeline-details";

type MobilePipelineRowProps = {
  molecule: string;
  subtitle: string;
  stage: string;
  target: string;
  application: string;
  differentiator: string;
  stageTagClassName: string;
  fillClassName: string;
  fillWidth: string;
  isExpanded: boolean;
  onToggle: () => void;
};

export default function MobilePipelineRow({
  molecule,
  subtitle,
  stage,
  target,
  application,
  differentiator,
  stageTagClassName,
  fillClassName,
  fillWidth,
  isExpanded,
  onToggle,
}: MobilePipelineRowProps) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const rowRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const rowElement = rowRef.current;
    if (!rowElement || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setHasAnimated(true);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(rowElement);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <article ref={rowRef} className="border-b border-border/80 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isExpanded}
        className="w-full cursor-pointer px-5 py-5 text-left transition-colors duration-200 hover:bg-cream/5"
      >
        <div className="mb-3 flex items-center justify-between gap-3">
          <ProductTag className={stageTagClassName}>{stage}</ProductTag>
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-beige">
            {isExpanded ? "Hide details −" : "Show details +"}
          </span>
        </div>

        <p className="text-[1.05rem] font-normal leading-snug tracking-[-0.01em] text-cream">
          LEADS · {molecule}
        </p>
        <p className="mt-1 text-[1.05rem] font-normal leading-snug tracking-[-0.01em] text-cream">
          INDICATIONS · {application}
        </p>
        <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.13em] text-beige">
          {subtitle}
        </p>

        <div className="mt-4">
          <div className="h-10 w-[68%] rounded-full bg-border/35 p-1">
            <div
              className={`h-full rounded-full transition-[width] duration-900 ease-out motion-reduce:transition-none ${fillClassName}`}
              style={{
                width: hasAnimated ? fillWidth : "0%",
              }}
            />
          </div>
        </div>
      </button>

      {isExpanded ? (
        <PipelineDetails
          className="space-y-3 md:grid md:grid-cols-2 md:gap-4 md:space-y-0"
          target={target}
          application={application}
          differentiator={differentiator}
        />
      ) : null}
    </article>
  );
}
