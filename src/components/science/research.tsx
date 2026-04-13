import { ResearchCard } from "@/components/science/ui/research-card";
import { SectionLabel } from "@/components/ui/section-label";
import { sectionTitle } from "@/lib/typography";

const researchItems = [
  {
    stage: "Lead optimisation",
    title: "GLOGER/GAOGER integrin mimic",
    subtitle: "α1β1-selective · COL1A1-derived",
    description: (
      <>
        De novo collagen-mimetic peptides built on the GLOGER and GAOGER
        scaffolds — high-affinity sites within the α1 chain of collagen I.
        Unlike GFOGER, which preferentially engages α2β1, these sequences show
        selectivity for the α1β1 integrin subtype, expressed predominantly on
        fibroblasts in inflammatory and fibrotic states. A selective α1β1
        agonist opens a mechanistic route to anti-scarring formulations not
        accessible through existing integrin-targeting peptides.
      </>
    ),
    meta: [
      { label: "Target receptor", value: "Integrin α1β1" },
      { label: "Application area", value: "Anti-scarring · wound healing" },
      {
        label: "Differentiator",
        value: "First α1β1-selective collagen peptide",
      },
    ],
  },
  {
    stage: "Discovery",
    title: "NTx-derived pro-angiogenic peptide",
    subtitle: "αvβ3-targeting · N-telopeptide origin",
    description: (
      <>
        A bioactive peptide derived from the N-telopeptide region of collagen I,
        engineered to engage αvβ3 integrin — expressed on endothelial cells and
        regulating angiogenesis and neovascularisation. While NTx fragments are
        established bone resorption biomarkers, their activity at αvβ3 has not
        been exploited therapeutically. A de novo αvβ3-targeting collagen
        peptide addresses pro-angiogenic signalling in wound care and skin
        nutrition, complementing the existing portfolio without overlap.
      </>
    ),
    meta: [
      { label: "Target receptor", value: "Integrin αvβ3" },
      {
        label: "Application area",
        value: "Wound care · skin vascularisation",
      },
      {
        label: "Differentiator",
        value: "Novel αvβ3 activity from telopeptide",
      },
    ],
  },
  {
    stage: "Discovery",
    title: "GPOGES — first COL1A2-derived peptide",
    subtitle: "α1β1-selective · COL1A2 α2 chain",
    description: (
      <>
        The vast majority of commercial collagen peptides are derived
        exclusively from the COL1A1 α1 chain. GPOGES is the functional
        equivalent of GFOGER in the COL1A2 α2 chain — with a distinct integrin
        binding profile favouring α1β1 over α2β1. As a selective modulator of
        fibroblast activation in inflammatory contexts, GPOGES represents an
        underexplored source of patentable peptide chemistry and a differentiated
        claim for anti-inflammatory skin formulations.
      </>
    ),
    meta: [
      { label: "Target receptor", value: "Integrin α1β1" },
      {
        label: "Application area",
        value: "Anti-inflammatory · precision cosmetics",
      },
      { label: "Differentiator", value: "First peptide derived from COL1A2" },
    ],
  },
  {
    stage: "Discovery",
    title: "GPOGPSGPR — collagen III DDR1 mimic",
    subtitle: "DDR1-activating · COL3A1-derived",
    description: (
      <>
        Collagen type III is the predominant collagen of foetal and juvenile
        skin — the molecular basis of its elasticity and resilience. As the
        COL1:COL3 ratio shifts with age, skin loses pliability. GPOGPSGPR is a
        sequence motif from the COL3A1 helix activating DDR1, a receptor
        tyrosine kinase expressed on epithelial cells regulating the basement
        membrane. A peptide stimulating COL3A1-associated signalling carries a
        substantiated "restore juvenescent collagen profile" claim — currently
        absent from the market.
      </>
    ),
    meta: [
      { label: "Target receptor", value: "DDR1" },
      { label: "Application area", value: "Anti-ageing · skin elasticity" },
      {
        label: "Differentiator",
        value: "Only COL3A1-derived cosmetic peptide",
      },
    ],
  },
];

export default function Research() {
  return (
    <section className="border-b border-border bg-surface py-section">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-end gap-8 lg:mb-16 lg:grid-cols-[280px_1fr] lg:gap-24">
          <div>
            <SectionLabel variant="sectionCompact">Research</SectionLabel>
            <h2 className={sectionTitle}>Expanding the collagen sequence space</h2>
          </div>

          <p className="text-base font-light leading-[1.8] text-muted">
            Beyond our current portfolio, Fibralis is developing a new generation
            of collagen-derived molecules targeting receptor interactions and
            signalling pathways that remain largely unexplored in therapeutic and
            cosmetic contexts. Our discovery programme draws on systematic
            mapping of bioactive motifs across collagen type I and type III
            sequences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          {researchItems.map((item) => (
            <ResearchCard
              key={item.title}
              stage={item.stage}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              meta={item.meta}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
