import Image from "next/image";
import { HeroEyebrow } from "@/components/ui/hero-eyebrow";
import { sectionBody } from "@/lib/typography";

export default function PipelineHero() {
  return (
    <section className="border-b border-border bg-bg pt-38 pb-20 md:pb-24">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <HeroEyebrow>Pipeline</HeroEyebrow>

            <h1 className="mb-7 text-[clamp(2rem,3.2vw,3.2rem)] font-light leading-tight tracking-tight text-cream">
              Expanding the collagen sequence space
            </h1>

            <p className={sectionBody}>
              Fibralis maintains a focused pipeline of collagen-derived molecules
              {" "}from validated portfolio assets to early-stage discovery
              programmes targeting receptor interactions and signalling pathways
              largely unexplored in therapeutic and cosmetic contexts. Each
              candidate is designed <em className="italic text-cream/75">de novo</em>
              {" "}from a target receptor and a documented active site, not
              extracted from natural collagen.
            </p>
          </div>

          <div className="relative aspect-4/3 overflow-hidden rounded border border-border md:aspect-auto md:h-[360px]">
            <Image
              src="/images/pipeline-collagen.avif"
              alt="Collagen molecular structure visualisation"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
