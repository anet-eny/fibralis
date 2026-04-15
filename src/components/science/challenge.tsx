import { SectionLabel } from "@/components/ui/section-label";
import { sectionBody, sectionTitle } from "@/lib/typography";

export default function Challenge() {
  return (
    <section className="border-b border-border bg-surface py-section">
      <div className="container grid grid-cols-1 items-start gap-10 md:grid-cols-[280px_1fr] md:gap-24">
        <div className="pt-1">
          <SectionLabel variant="sectionMuted">The challenge</SectionLabel>
          <h2 className={sectionTitle}>
            From literature to molecule — the engineering gap in
            collagen-derived bioactives
          </h2>
        </div>

        <div className="space-y-6">
          <p className={sectionBody}>
            Collagen is the most studied structural protein in human biology,
            yet translating its receptor-level activity into scalable,
            animal-free ingredients remains genuinely difficult. The challenge
            is not a single technical bottleneck — it is the distance between
            what the literature describes and what can actually be produced.
            Thousands of bioactive sequences have been identified across
            collagen type I and type III: integrin-binding motifs, receptor
            tyrosine kinase ligands, signalling peptide cores with documented
            fibroblast activity. The biological evidence exists. What has been
            missing is a systematic way to take those sequences — most of which
            were characterised in the context of native, animal-derived collagen
            — and re-engineer them into molecules that can be produced
            recombinantly, at defined purity, without batch-to-batch variability
            and without animal sourcing.
          </p>
          <p className={sectionBody}>
            Fibralis approaches this through AI-assisted sequence design
            integrated into the full DBTL cycle. Starting from
            literature-confirmed active sites — GFOGER-family integrin-binding
            motifs, DDR-activating sequences from COL3A1, signalling peptide
            cores derived from collagen propeptides — we construct molecules
            that are not simple copies of natural sequences but engineered
            variants: compositions optimised for{" "}
            <em className="italic text-cream/75">E. coli</em> expression,
            stability, and preserved receptor engagement.
            Hydroxyproline-dependent positions are handled at the design stage
            rather than through enzymatic co-expression; structural constraints
            specific to each molecule class — whether triple-helix nucleation,
            β-turn conformation, or palmitoylation geometry — are addressed in
            silico before synthesis. The result is a pipeline of defined,
            reproducible molecules whose bioactivity is grounded in the same
            receptor biology that the broader field has spent decades
            characterising.
          </p>
        </div>
      </div>
    </section>
  );
}
