import { ProductTag } from "@/components/ui/product-tag";

export type ProductCardProps = {
  tag: string;
  name: string;
  description: string;
  className?: string;
};

const baseCardClasses = [
  "group bg-bg p-8 transition-colors duration-300",
  "hover:bg-cream/5",
].join(" ");

export function ProductCard({
  tag,
  name,
  description,
  className,
}: ProductCardProps) {
  const classes = [baseCardClasses, className].filter(Boolean).join(" ");

  return (
    <article className={classes}>
      <ProductTag>{tag}</ProductTag>
      <h3 className="mb-3 text-xl font-normal tracking-tight text-cream transition-colors duration-200 group-hover:text-pink">
        {name}
      </h3>
      <p className="text-sm font-light leading-relaxed text-muted">{description}</p>
    </article>
  );
}
