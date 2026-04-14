import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";
import { sectionBody, sectionTitle } from "@/lib/typography";

export default function OurScience() {
  return (
    <section
      id="science"
      className="border-t border-border bg-surface py-section"
    >
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionLabel variant="sectionMuted">Our Science</SectionLabel>
            <h2 className={`${sectionTitle} mb-6`}>
              A New Generation
              <br />
              of Collagen
            </h2>
            <div className="mb-6 h-px w-10 bg-pink/40" aria-hidden />
            <p className={sectionBody}>
              Fibralis combines AI-assisted sequence design with precision
              biomanufacturing to produce recombinant collagen peptides of
              defined composition and consistent bioactivity. Unlike
              animal-derived sources, our ingredients are free from biological
              variability, pathogen risk, and batch-to-batch inconsistency.
            </p>
            <p className={sectionBody}>
              Expressed in <em className="italic text-cream/75">E. coli</em> and
              rigorously characterised, our peptides deliver documented
              functionality — enabling formulators to build with confidence.
            </p>
            <div className="mt-2">
              <Button variant="ghost" href="/science">
                Explore the Science
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded border border-border aspect-4/3 lg:aspect-auto lg:h-[380px]">
            <Image
              src="/images/vials.avif"
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
