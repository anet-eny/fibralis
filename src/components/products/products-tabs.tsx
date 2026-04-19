"use client";

import { useId, useState } from "react";
import { ProductTabPanel } from "./product-tab-panel";
import { PRODUCTS } from "./product-tabs-data";
import { ProductTabsBar } from "./product-tabs-bar";

export default function ProductsTabs() {
  const baseId = useId();
  const [active, setActive] = useState(0);
  const product = PRODUCTS[active];

  return (
    <section className="border-t border-border bg-surface py-section">
      <div className="container">
        <ProductTabsBar
          products={PRODUCTS}
          activeIndex={active}
          baseId={baseId}
          onSelect={setActive}
        />
        <ProductTabPanel product={product} baseId={baseId} />
      </div>
    </section>
  );
}
