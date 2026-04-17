import { ProductTag } from "@/components/ui/product-tag";
import PipelineDetails from "@/components/pipeline/pipeline-details";

type DesktopPipelineRowProps = {
  molecule: string;
  subtitle: string;
  stage: string;
  target: string;
  application: string;
  differentiator: string;
  stages: readonly string[];
  stageTagClassName: string;
  fillClassName: string;
  fillWidth: string;
  isExpanded: boolean;
  onToggle: () => void;
};

export default function DesktopPipelineRow({
  molecule,
  subtitle,
  stage,
  target,
  application,
  differentiator,
  stages,
  stageTagClassName,
  fillClassName,
  fillWidth,
  isExpanded,
  onToggle,
}: DesktopPipelineRowProps) {
  return (
    <article className="border-b border-border/80 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isExpanded}
        className="grid w-full cursor-pointer grid-cols-[300px_1fr] items-center text-left transition-colors duration-200 hover:bg-cream/5"
      >
        <div className="px-6 py-6">
          <ProductTag className={`mb-4 ${stageTagClassName}`}>{stage}</ProductTag>
          <h3 className="text-lg font-normal leading-snug tracking-[-0.01em] text-cream">
            {molecule}
          </h3>
          <p className="mt-1.5 text-sm font-light text-muted">{subtitle}</p>
          <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-beige">
            Details {isExpanded ? "−" : "+"}
          </p>
        </div>

        <div className="relative px-6 py-7">
          <div className="grid grid-cols-4">
            {stages.map((currentStage) => (
              <div
                key={currentStage}
                className="h-14 border-l border-dashed border-border"
                aria-hidden
              />
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-6 right-6 flex items-center">
            <div className="h-14 w-full rounded-full bg-border/35 p-1">
              <div
                className={`h-full rounded-full ${fillClassName}`}
                style={{ width: fillWidth }}
              />
            </div>
          </div>
        </div>
      </button>

      {isExpanded ? (
        <PipelineDetails
          className="grid grid-cols-3 gap-4 px-6"
          target={target}
          application={application}
          differentiator={differentiator}
        />
      ) : null}
    </article>
  );
}
