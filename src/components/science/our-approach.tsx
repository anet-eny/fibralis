import Image from "next/image";
import { ApproachPillar } from "@/components/science/ui/approach-pillar";
import Reveal from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { sectionTitle } from "@/lib/typography";

const pillars = [
  {
    step: 1,
    title: "Active site mapping and motif selection",
    body: (
      <>
        We mine curated structural databases for collagen-derived sequences with
        documented receptor engagement — integrin-binding GFOGER-family motifs,
        DDR-activating sites, signalling peptide cores. These become the
        non-negotiable anchors of each design.
      </>
    ),
  },
  {
    step: 2,
    title: (
      <>
        Sequence optimisation for <em>E. coli</em> expression
      </>
    ),
    body: (
      <>
        Codon optimisation, charge-pair placement for inter-chain stability, and
        strategic substitution of Hyp-dependent positions with (Gly-Pro-Pro)
        <sub>n</sub> repeats or terminal nucleation domains are modelled
        computationally before any synthesis decision is made.
      </>
    ),
  },
  {
    step: 3,
    title: "Design Build Test Learn",
    body: (
      <>
        Experimental readouts — CD spectroscopy, SPR binding data, Sircol and
        ELISA activity assays — are fed back into the design loop. Structural
        and functional data together drive the next round of sequence
        refinement, shortening the path from concept to validated candidate.
      </>
    ),
  },
];

export default function OurApproach() {
  return (
    <section className="border-b border-border bg-bg py-section">
      <div className="container">
        <Reveal>
          <div className="mb-12 grid grid-cols-1 items-end gap-8 lg:mb-16 lg:grid-cols-2 lg:gap-x-20">
            <div className="min-w-0">
              <SectionLabel variant="sectionCompact">Our approach</SectionLabel>
              <h2 className={`${sectionTitle} mb-6`}>
                How we engineer collagen that works
              </h2>
              <p className="text-base font-light leading-[1.8] text-muted">
                Every Fibralis molecule starts not from an existing ingredient
                but from a design brief: a target receptor, a documented active
                site, and a set of production constraints. Using
                structure-prediction tools (AlphaFold2, ESMFold), molecular
                dynamics simulations, and charge-pair interaction modelling, we
                build sequences <em className="italic text-cream/75">de novo</em>{" "}
                — retaining the receptor-binding geometry confirmed in literature
                while introducing modifications that make the molecule
                expressible in <em className="italic text-cream/75">E. coli</em>{" "}
                at useful yield and purity. Rosetta-based fixedbb design and
                ProteinMPNN allow us to explore sequence variants that preserve
                the active site scaffold while optimising surface properties for
                solubility and stability. The outcome is a molecule whose
                bioactivity is anchored in established collagen biology, but
                whose exact sequence is an engineering decision rather than a
                natural accident.
              </p>
            </div>

            <div className="relative aspect-4/3 min-h-0 w-full overflow-hidden rounded border border-border lg:aspect-auto lg:h-[340px]">
              <Image
                src="/images/our-approach-collagen.avif"
                alt="Collagen triple helix and molecular structure"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const isLastOdd =
              pillars.length % 2 === 1 && index === pillars.length - 1;

            return (
              <Reveal key={pillar.step} delayMs={index * 120} className="h-full">
                <ApproachPillar
                  className={
                    isLastOdd ? "sm:col-span-2 lg:col-span-1" : undefined
                  }
                  step={pillar.step}
                  title={pillar.title}
                >
                  {pillar.body}
                </ApproachPillar>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
