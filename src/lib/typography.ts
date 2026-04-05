export const sectionTitle =
  "mb-6 text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-tight tracking-tight text-cream";

export const sectionBody =
  "mb-6 text-base font-light leading-loose text-muted last:mb-0";

export const sectionLabelClasses = {
  hero: "mb-6 text-xs font-medium uppercase tracking-widest text-pink",
  sectionMuted:
    "mb-6 text-base font-light uppercase tracking-widest leading-loose text-muted",
  sectionCompact:
    "mb-5 text-xs font-medium uppercase tracking-widest text-beige",
} as const;

export type SectionLabelVariant = keyof typeof sectionLabelClasses;
