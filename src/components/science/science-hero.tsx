import Image from "next/image";
import { HeroEyebrow } from "@/components/ui/hero-eyebrow";
import { heroTitle, sectionBody } from "@/lib/typography";

export default function ScienceHero() {
  return (
    <section className="border-b border-border bg-bg pt-38 pb-20 md:pb-24">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <HeroEyebrow className="hero-fade-up hero-fade-up-1">
              Our Science
            </HeroEyebrow>

            <h1 className={`hero-fade-up hero-fade-up-2 mb-7 ${heroTitle}`}>
              Precision collagen, engineered from sequence to{" "}
              <em className="not-italic text-pink">function</em>
            </h1>

            <p className={`hero-fade-up hero-fade-up-3 ${sectionBody}`}>
              Fibralis develops precisely defined collagen proteins and
              bioactive peptides produced in recombinant{" "}
              <em className="italic text-cream/75">E. coli</em> — fully
              animal-free, with controlled triple-helical structure and scalable
              manufacturing.
            </p>
          </div>

          <div className="hero-fade-up hero-fade-up-4 relative aspect-4/3 overflow-hidden rounded border border-border md:aspect-auto md:h-[360px]">
            <Image
              src="/images/DNA.avif"
              alt="DNA double helix structure"
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
