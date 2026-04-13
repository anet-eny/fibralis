import { Button } from "@/components/ui/button";
import { ProductTag } from "@/components/ui/product-tag";
import { SectionLabel } from "@/components/ui/section-label";
import { scienceCardBody } from "@/lib/typography";

const MOLECULE_TAGS = [
  "CollaGen-X1 — triple helix",
  "GFOGER-Pro — bioactive peptide",
  "Pal-KTTKS+ — signalling peptide",
] as const;

export default function PortfolioTeaser() {
  return (
    <section className="border-b border-border bg-bg py-section">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-8 rounded-sm border border-border bg-pink/2 px-8 py-12 lg:grid-cols-[1fr_auto] lg:gap-12 lg:px-14 lg:py-12">
          <div className="min-w-0">
            <SectionLabel variant="sectionCompact" className="mb-3.5">
              Current portfolio
            </SectionLabel>
            <h2 className="mb-3 text-[1.4rem] font-light leading-snug tracking-tight text-cream">
              Three molecules available now
            </h2>
            <p
              className={`${scienceCardBody} mb-6 max-w-lg [&_em]:text-cream/70`}
            >
              All produced in <em>E. coli</em>, animal-free, and supplied with
              full analytical characterisation. Available for research and
              cosmetic applications.
            </p>
            <div className="flex flex-wrap gap-2">
              {MOLECULE_TAGS.map((label) => (
                <ProductTag
                  key={label}
                  className="bg-pink/5 px-3 py-1 tracking-widest"
                >
                  {label}
                </ProductTag>
              ))}
            </div>
          </div>
          <div className="shrink-0 lg:justify-self-end">
            <Button variant="primary" href="/products">
              View products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
