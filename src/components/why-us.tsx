import Image from "next/image";
import { SectionLabel } from "@/components/ui/section-label";
import { sectionBody, sectionTitle } from "@/lib/typography";

const STATS = [
  { value: "99.2%", label: "Sequence purity across batches" },
  { value: "100%", label: "Animal-free, recombinant origin" },
  { value: "AI", label: "Sequence design & optimisation" },
  { value: "ISO 9001", label: "Compliant production pipeline" },
] as const;

export default function WhyUs() {
  return (
    <section id="why" className="border-t border-border bg-surface py-section">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionLabel variant="sectionMuted">Why Fibralis</SectionLabel>
            <h2 className={`${sectionTitle} mb-6`}>
              Engineered for
              <br />
              Demanding Formulators
            </h2>
            <div className="mb-6 h-px w-10 bg-pink/40" aria-hidden />

            <div className="space-y-6">
              <p className={sectionBody}>
                Fibralis was founded on a simple premise: the ingredients that
                go into tomorrow&apos;s regenerative products deserve the same
                precision as the products themselves. We combine computational
                sequence design with scalable{" "}
                <em className="italic text-cream/75">E. coli</em> expression to
                deliver recombinant collagen peptides with documented
                bioactivity, defined composition, and zero animal-derived
                material.
              </p>
              <p className={sectionBody}>
                Our B2B partners gain access to a stable, audit-ready supply
                chain — and a scientific team ready to co-develop custom
                sequences for specific application needs.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {STATS.map((stat) => (
                <div key={stat.label} className="border-l border-pink/30 pl-5">
                  <div className="mb-1 text-3xl leading-none font-light tracking-tight text-pink">
                    {stat.value}
                  </div>
                  <div className="text-xs font-normal tracking-wide text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded border border-border aspect-4/3 lg:aspect-auto lg:h-[420px]">
            <Image
              src="/images/why-us-collagen.avif"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
