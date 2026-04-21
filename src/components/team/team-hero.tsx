import Image from "next/image";
import { HeroEyebrow } from "@/components/ui/hero-eyebrow";
import { heroTitle, sectionBody } from "@/lib/typography";

export default function TeamHero() {
  return (
    <section className="border-b border-border bg-bg pt-38 pb-20 md:pb-24">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <HeroEyebrow>About us</HeroEyebrow>

            <h1 className={`mb-7 ${heroTitle}`}>
              Science-led people building collagen innovation with{" "}
              <em className="not-italic text-pink">purpose</em>
            </h1>

            <p className={sectionBody}>
              Fibralis is a Copenhagen University spin-off developing
              next-generation collagen-derived molecules for cosmetic and
              regenerative applications. We combine computational design,
              receptor-focused biology, and recombinant manufacturing to create
              defined, animal-free ingredients with measurable bioactivity and
              consistent quality at scale.
            </p>
          </div>

          <div className="relative aspect-4/3 overflow-hidden rounded border border-border md:aspect-auto md:h-[360px]">
            <Image
              src="/images/our-team-copenhagen.avif"
              alt="Fibralis team in Copenhagen"
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
