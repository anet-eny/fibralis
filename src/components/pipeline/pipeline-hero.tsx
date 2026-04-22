import Image from "next/image";
import { HeroEyebrow } from "@/components/ui/hero-eyebrow";
import { heroTitle, sectionBody } from "@/lib/typography";

export default function PipelineHero() {
  return (
    <section className="border-b border-border bg-bg pt-38 pb-20 md:pb-24">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <HeroEyebrow className="hero-fade-up hero-fade-up-1">
              Pipeline
            </HeroEyebrow>

            <h1 className={`hero-fade-up hero-fade-up-2 mb-7 ${heroTitle}`}>
              Expanding the collagen{" "}
              <em className="not-italic text-pink">sequence space</em>
            </h1>

            <p className={`hero-fade-up hero-fade-up-3 ${sectionBody}`}>
              Fibralis maintains a focused pipeline of collagen-derived
              molecules from validated portfolio assets to early-stage discovery
              programmes targeting receptor interactions and signalling pathways
              largely unexplored in therapeutic and cosmetic contexts. Each
              candidate is designed{" "}
              <em className="italic text-cream/75">de novo</em> from a target
              receptor and a documented active site, not extracted from natural
              collagen.
            </p>
          </div>

          <div className="hero-fade-up hero-fade-up-4 relative aspect-4/3 overflow-hidden rounded border border-border md:aspect-auto md:h-[360px]">
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
