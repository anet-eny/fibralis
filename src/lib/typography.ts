export const sectionTitle =
  "text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-tight tracking-tight text-cream";

export const sectionBody =
  "mb-6 text-base font-light leading-loose text-muted last:mb-0";

export const sectionLabelClasses = {
  hero: "mb-6 text-xs font-medium uppercase tracking-[0.2em] text-pink",
  sectionMuted:
    "mb-6 text-base font-light uppercase tracking-[0.2em] leading-loose text-muted",
  sectionCompact:
    "mb-5 text-xs font-medium uppercase tracking-[0.2em] text-beige",
} as const;

export type SectionLabelVariant = keyof typeof sectionLabelClasses;

/** Body copy for compact science cards (Our Approach pillars, Advantages, …). */
export const scienceCardBody =
  "text-sm font-light leading-[1.75] text-muted [&_em]:italic";
