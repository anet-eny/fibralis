import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/product-card";
import Reveal from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { sectionTitle } from "@/lib/typography";

const PRODUCTS = [
  {
    tag: "Triple Helix",
    name: "CollaGen-X1",
    description:
      "A recombinant collagen-mimetic peptide engineered for maximal triple-helix stability. Designed for skin reconstruction and wound-healing applications requiring structural integrity.",
  },
  {
    tag: "Bioactive Peptide",
    name: "GFOGER-Pro",
    description:
      "Integrin-binding collagen peptide derived from the GFOGER motif. Promotes cell adhesion and matrix remodelling in dermal and orthopaedic formulations.",
  },
  {
    tag: "Signalling Peptide",
    name: "Pal-KTTKS+",
    description:
      "Palmitoylated collagen-derived signal peptide with enhanced skin penetration. Stimulates collagen and fibronectin synthesis in primary fibroblasts.",
  },
] as const;

export default function Products() {
  return (
    <section id="products" className="border-t border-border bg-bg py-section">
      <div className="container">
        <Reveal>
          <div className="mb-12">
            <SectionLabel variant="sectionCompact" className="mb-4">
              Ingredients
            </SectionLabel>
            <h2 className={`${sectionTitle} mb-0`}>Our Portfolio</h2>
          </div>
        </Reveal>

        <div className="mb-10 grid grid-cols-1 gap-px overflow-hidden rounded border border-border bg-border md:grid-cols-3">
          {PRODUCTS.map((product, index) => (
            <Reveal key={product.name} delayMs={index * 120} className="h-full">
              <ProductCard
                tag={product.tag}
                name={product.name}
                description={product.description}
                className="h-full"
              />
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={PRODUCTS.length * 120}>
          <div className="text-center">
            <Button variant="primary" href="/products">
              View Full Product Portfolio
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
