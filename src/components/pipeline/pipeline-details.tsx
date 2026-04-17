type PipelineDetailsProps = {
  target: string;
  application: string;
  differentiator: string;
  className?: string;
};

export default function PipelineDetails({
  target,
  application,
  differentiator,
  className,
}: PipelineDetailsProps) {
  const detailsClassName = [
    "border-t border-border/80 bg-surface/85 px-5 py-4 text-sm",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={detailsClassName}>
      <div className="space-y-1">
        <p className="text-xs font-medium uppercase tracking-[0.13em] text-beige">
          Target receptor
        </p>
        <p className="font-light text-cream/85">{target}</p>
      </div>

      <div className="space-y-1">
        <p className="text-xs font-medium uppercase tracking-[0.13em] text-beige">
          Application area
        </p>
        <p className="font-light text-cream/85">{application}</p>
      </div>

      <div className="space-y-1">
        <p className="text-xs font-medium uppercase tracking-[0.13em] text-beige">
          Differentiator
        </p>
        <p className="font-light text-cream/85">{differentiator}</p>
      </div>
    </div>
  );
}
