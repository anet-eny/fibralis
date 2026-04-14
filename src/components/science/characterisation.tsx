import { LuLink2, LuNetwork } from "react-icons/lu";
import { TbCell, TbRulerMeasure } from "react-icons/tb";
import { CharacterisationCard } from "@/components/science/ui/characterisation-card";
import { SectionLabel } from "@/components/ui/section-label";
import { sectionTitle } from "@/lib/typography";

const characterisationItems = [
  {
    icon: TbRulerMeasure,
    title: "Structural characterisation",
    description:
      "CD spectroscopy confirms secondary structure integrity; DSF thermostability profiling provides Tm.",
  },
  {
    icon: LuLink2,
    title: "Receptor binding",
    description:
      "SPR quantifies binding affinity against integrin I-domains and relevant collagen receptors under near-physiological conditions.",
  },
  {
    icon: TbCell,
    title: "Cellular activity",
    description:
      "Dose-response assays in human adult dermal fibroblasts; collagen secretion by Sircol assay and proCollagen I ELISA; gene expression of COL1A1, COL1A2 and fibronectin by RT-qPCR with protein-level verification.",
  },
  {
    icon: LuNetwork,
    title: "Signalling",
    description:
      "Downstream pathway activation confirmed by Western blot: pSmad2/3 and pERK1/2 as readouts for TGF-β and MAPK engagement.",
  },
] as const;

export default function Characterisation() {
  return (
    <section className="border-b border-border bg-surface py-section">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-end gap-8 lg:mb-16 lg:grid-cols-[280px_1fr] lg:gap-24">
          <div>
            <SectionLabel variant="sectionCompact">
              Activity & Characterisation
            </SectionLabel>
            <h2 className={sectionTitle}>Validated at every level</h2>
          </div>

          <p className="text-base font-light leading-[1.8] text-muted">
            No biological claim is made without passing a full characterisation
            cascade. Each molecule is tested across four independent layers of
            evidence, following the best-practice framework.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 xl:grid-cols-4">
          {characterisationItems.map((item) => (
            <CharacterisationCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
