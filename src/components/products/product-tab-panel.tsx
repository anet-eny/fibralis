"use client";

import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { ProductTag } from "@/components/ui/product-tag";
import { scienceCardBody } from "@/lib/typography";
import type { ProductTab } from "./product-tabs-data";

type ProductTabPanelProps = {
  product: ProductTab;
  baseId: string;
};

export function ProductTabPanel({ product, baseId }: ProductTabPanelProps) {
  return (
    <div
      role="tabpanel"
      id={`${baseId}-panel-${product.id}`}
      aria-labelledby={`${baseId}-tab-${product.id}`}
      className="border border-t-0 border-border bg-bg px-5 py-10 sm:px-8 sm:py-12"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:items-start lg:gap-14 xl:grid-cols-[minmax(0,320px)_1fr]">
        <div className="mx-auto w-full max-w-[min(100%,20rem)] lg:mx-0">
          <div className="relative aspect-4/5 overflow-hidden rounded border border-border">
            <Image
              src={product.imageSrc}
              alt={product.imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 320px"
            />
          </div>
        </div>

        <div>
          <ProductTag className="mb-5">{product.tag}</ProductTag>
          <h2 className="mb-6 text-2xl font-light tracking-tight text-cream md:text-[1.65rem]">
            {product.name}
          </h2>
          <p className={`${scienceCardBody} mb-10`}>{product.summary}</p>

          <div className="mb-10 space-y-10">
            {product.sections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-beige">
                  {section.title}
                </h3>
                <ul className="space-y-2.5 text-sm font-light leading-relaxed text-muted">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 pl-0.5">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-pink/70"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <dl className="mb-10 grid gap-4 border-t border-border pt-8 text-sm font-light sm:grid-cols-2">
            <div>
              <dt className="mb-1 text-xs font-medium uppercase tracking-[0.12em] text-beige">
                Chain length
              </dt>
              <dd className="text-muted">
                {product.chainLengthAa} amino acids (~{product.molecularWeightKda} kDa)
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="mb-1 text-xs font-medium uppercase tracking-[0.12em] text-beige">
                Typical dissolution buffer
              </dt>
              <dd className="text-muted">{product.buffer}</dd>
            </div>
          </dl>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="self-center sm:self-auto">
              <Button variant="ghost" showArrow={false}>
                <span className="inline-flex items-center gap-2">
                  <FiDownload aria-hidden className="size-4" />
                  Download Technical Information
                </span>
              </Button>
            </div>
            <Button variant="primary" showArrow={false}>
              Request Sample
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
