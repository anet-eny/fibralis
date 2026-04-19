"use client";

import type { ProductTab } from "./product-tabs-data";

type ProductTabsBarProps = {
  products: readonly ProductTab[];
  activeIndex: number;
  baseId: string;
  onSelect: (index: number) => void;
};

export function ProductTabsBar({
  products,
  activeIndex,
  baseId,
  onSelect,
}: ProductTabsBarProps) {
  return (
    <div
      role="tablist"
      aria-label="Product portfolio"
      className="flex flex-wrap gap-1 border-b border-border"
    >
      {products.map((p, i) => {
        const selected = i === activeIndex;
        return (
          <button
            key={p.id}
            type="button"
            role="tab"
            id={`${baseId}-tab-${p.id}`}
            aria-selected={selected}
            aria-controls={`${baseId}-panel-${p.id}`}
            tabIndex={selected ? 0 : -1}
            onClick={() => onSelect(i)}
            className={[
              "cursor-pointer -mb-px border border-b-0 px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.14em] transition-colors sm:px-5",
              selected
                ? "rounded-t border-border bg-bg text-cream"
                : "rounded-t border-transparent text-muted hover:border-border/60 hover:text-beige",
            ].join(" ")}
          >
            {p.name}
          </button>
        );
      })}
    </div>
  );
}
