export type CharacterisationSection = {
  title: string;
  items: readonly string[];
};

export type ProductTab = {
  id: string;
  name: string;
  tag: string;
  summary: string;
  sections: readonly CharacterisationSection[];
  chainLengthAa: number;
  molecularWeightKda: string;
  buffer: string;
  imageSrc: string;
  imageAlt: string;
};

export const PRODUCTS: readonly ProductTab[] = [
  {
    id: "collagen-x1",
    name: "CollaGen-X1",
    tag: "Matrix Support",
    summary:
      "Recombinant collagen-mimetic peptide engineered for high triple-helical stability and structural integrity. Designed for formulations where matrix support and collagen-like architecture are required.",
    sections: [
      {
        title: "Core benefits",
        items: [
          "High-stability triple-helix architecture inspired by native collagen domains.",
          "Supports fibroblast attachment and extracellular matrix organisation.",
          "Suitable for matrix-supporting and skin-repair formulations.",
        ],
      },
      {
        title: "Potential applications",
        items: [
          "Advanced skincare actives.",
          "Regenerative matrices and hydrogel systems.",
          "Wound-healing and tissue-repair research.",
        ],
      },
    ],
    chainLengthAa: 32,
    molecularWeightKda: "~3.5",
    buffer: "10 mM sodium phosphate, 150 mM NaCl, pH 7.2",
    imageSrc: "/images/CollaGen-X1.avif",
    imageAlt: "CollaGen-X1 peptide visualisation",
  },
  {
    id: "gfoger-pro",
    name: "GFOGER-Pro",
    tag: "Cell Adhesion",
    summary:
      "Integrin-binding collagen peptide inspired by the GFOGER motif. Developed to enhance cell adhesion, receptor engagement and matrix remodelling responses.",
    sections: [
      {
        title: "Core benefits",
        items: [
          "Targets collagen-recognising integrin pathways involved in adhesion signalling.",
          "Promotes fibroblast attachment and surface colonisation.",
          "Supports matrix remodelling and tissue-interface responses.",
        ],
      },
      {
        title: "Potential applications",
        items: [
          "Tissue engineering surfaces.",
          "Implant coating research.",
          "Cell culture substrates and dermal regeneration systems.",
        ],
      },
    ],
    chainLengthAa: 44,
    molecularWeightKda: "~4.8",
    buffer: "10 mM sodium phosphate, 150 mM NaCl, pH 7.2",
    imageSrc: "/images/GFOGER-Pro.avif",
    imageAlt: "GFOGER-Pro peptide visualisation",
  },
  {
    id: "pal-kttks",
    name: "Pal-KTTKS+",
    tag: "Skin Renewal",
    summary:
      "Palmitoylated collagen-derived signalling peptide designed for improved skin delivery and pro-matrix activity. Focused on cosmetic and dermal rejuvenation applications.",
    sections: [
      {
        title: "Core benefits",
        items: [
          "Stimulates collagen-associated gene expression in fibroblasts.",
          "Supports fibronectin and extracellular matrix renewal pathways.",
          "Lipidated design improves compatibility with topical formulations.",
        ],
      },
      {
        title: "Potential applications",
        items: [
          "Anti-ageing skincare.",
          "Barrier recovery formulations.",
          "Firming serums and premium cosmetic actives.",
        ],
      },
    ],
    chainLengthAa: 36,
    molecularWeightKda: "~3.9",
    buffer: "10 mM sodium phosphate, 150 mM NaCl, 5% glycerol, pH 7.2",
    imageSrc: "/images/Pal-KTTKS+.avif",
    imageAlt: "Pal-KTTKS+ peptide visualisation",
  },
] as const;
