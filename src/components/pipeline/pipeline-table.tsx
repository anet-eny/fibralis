"use client";

import { useState } from "react";
import DesktopPipelineRow from "@/components/pipeline/desktop-pipeline-row";
import MobilePipelineRow from "@/components/pipeline/mobile-pipeline-row";
import Reveal from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { sectionTitle } from "@/lib/typography";

const stages = [
  "Discovery",
  "Lead Optimisation",
  "Validation",
  "Active Portfolio",
] as const;

type PipelineStage = (typeof stages)[number];

type PipelineItem = {
  molecule: string;
  subtitle: string;
  stage: PipelineStage;
  target: string;
  application: string;
  differentiator: string;
};

const pipelineItems: PipelineItem[] = [
  {
    molecule: "GPOGPSGPR",
    subtitle: "Collagen III DDR1 mimic",
    stage: "Discovery",
    target: "DDR1",
    application: "Anti-ageing · skin elasticity",
    differentiator: "Only COL3A1-derived cosmetic peptide",
  },
  {
    molecule: "GPOGES",
    subtitle: "First COL1A2-derived peptide",
    stage: "Discovery",
    target: "Integrin α1β1",
    application: "Anti-inflammatory · precision cosmetics",
    differentiator: "First peptide derived from COL1A2",
  },
  {
    molecule: "NTx-derived pro-angiogenic peptide",
    subtitle: "Telopeptide-origin integrin programme",
    stage: "Discovery",
    target: "Integrin αvβ3",
    application: "Wound care · skin vascularisation",
    differentiator: "Novel αvβ3 activity from telopeptide",
  },
  {
    molecule: "GLOGER/GAOGER integrin mimic",
    subtitle: "Lead programme",
    stage: "Lead Optimisation",
    target: "Integrin α1β1",
    application: "Anti-scarring · wound healing",
    differentiator: "First α1β1-selective collagen peptide",
  },
  {
    molecule: "CollaGen-X1",
    subtitle: "Triple Helix",
    stage: "Active Portfolio",
    target: "Structural",
    application: "Skin reconstruction · wound healing",
    differentiator: "Maximal triple-helix stability",
  },
  {
    molecule: "GFOGER-Pro",
    subtitle: "Bioactive Peptide",
    stage: "Active Portfolio",
    target: "Integrin α2β1",
    application: "Dermal · orthopaedic formulations",
    differentiator: "Integrin-binding, matrix remodelling",
  },
  {
    molecule: "Pal-KTTKS+",
    subtitle: "Signalling Peptide",
    stage: "Active Portfolio",
    target: "Fibroblast signalling",
    application: "Anti-ageing · skin penetration",
    differentiator: "Enhanced penetration, collagen synthesis",
  },
];

const stageStyleByStage: Record<PipelineStage, string> = {
  Discovery: "bg-pink/14 text-pink border-pink/35",
  "Lead Optimisation": "bg-beige/14 text-beige border-beige/35",
  Validation: "bg-cream/12 text-cream/80 border-cream/25",
  "Active Portfolio": "bg-cream/18 text-cream border-cream/30",
};

const fillStyleByStage: Record<PipelineStage, string> = {
  Discovery: "bg-pink/75",
  "Lead Optimisation": "bg-pink/75",
  Validation: "bg-pink/75",
  "Active Portfolio": "bg-pink/75",
};

function getStageFillWidth(stage: PipelineStage) {
  const stageIndex = stages.indexOf(stage);
  return `${((stageIndex + 1) / stages.length) * 100}%`;
}

export default function PipelineTable() {
  const [expandedMolecule, setExpandedMolecule] = useState<string | null>(null);

  function toggleExpanded(molecule: string) {
    setExpandedMolecule((current) => (current === molecule ? null : molecule));
  }

  return (
    <section className="border-b border-border bg-surface py-section">
      <div className="container">
        <Reveal>
          <div className="mb-12 lg:mb-16">
            <div>
              <SectionLabel variant="sectionMuted">Pipeline</SectionLabel>
              <h2 className={sectionTitle}>
                Developing a new generation of collagen-derived molecules
              </h2>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="hidden rounded-sm border border-border bg-bg/25 lg:block">
            <div>
              <div className="grid grid-cols-[300px_1fr] border-b border-border">
                <div className="px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-beige">
                  Molecule
                </div>
                <div className="grid grid-cols-4">
                  {stages.map((stage) => (
                    <div
                      key={stage}
                      className="border-l border-dashed border-border px-4 py-4 text-center text-xs font-medium uppercase tracking-[0.18em] text-beige"
                    >
                      {stage}
                    </div>
                  ))}
                </div>
              </div>

              {pipelineItems.map((item) => (
                <DesktopPipelineRow
                  key={item.molecule}
                  molecule={item.molecule}
                  subtitle={item.subtitle}
                  stage={item.stage}
                  target={item.target}
                  application={item.application}
                  differentiator={item.differentiator}
                  stages={stages}
                  stageTagClassName={stageStyleByStage[item.stage]}
                  fillClassName={fillStyleByStage[item.stage]}
                  fillWidth={getStageFillWidth(item.stage)}
                  isExpanded={expandedMolecule === item.molecule}
                  onToggle={() => toggleExpanded(item.molecule)}
                />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={180}>
          <div className="rounded-sm border border-border bg-bg/25 lg:hidden">
            {pipelineItems.map((item) => (
              <MobilePipelineRow
                key={item.molecule}
                molecule={item.molecule}
                subtitle={item.subtitle}
                stage={item.stage}
                target={item.target}
                application={item.application}
                differentiator={item.differentiator}
                stageTagClassName={stageStyleByStage[item.stage]}
                fillClassName={fillStyleByStage[item.stage]}
                fillWidth={getStageFillWidth(item.stage)}
                isExpanded={expandedMolecule === item.molecule}
                onToggle={() => toggleExpanded(item.molecule)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
