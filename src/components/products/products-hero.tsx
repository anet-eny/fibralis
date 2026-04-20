import Image from "next/image";
import { headingLightTight, sectionBody } from "@/lib/typography";

export default function ProductsHero() {
  return (
    <section className="border-b border-border bg-bg pt-38 pb-20 md:pb-24">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-pink">
              <span className="block h-px w-7 bg-pink opacity-60" aria-hidden />
              Products
            </p>

            <h1
              className={`mb-7 text-[clamp(2rem,3.2vw,3.2rem)] leading-tight ${headingLightTight}`}
            >
              Ingredients built for{" "}
              <em className="not-italic text-pink">formulation</em>
            </h1>

            <p className={sectionBody}>
              Three collagen-derived peptides — each with a clear mechanistic
              story, defined manufacturing, and documentation you can take
              straight into development. Pick the profile that matches your
              matrix, claims, and regulatory path.
            </p>
          </div>

          <div className="relative aspect-4/3 overflow-hidden rounded border border-border md:aspect-auto md:h-[360px]">
            <Image
              src="/images/products.avif"
              alt="Fibralis peptide portfolio visualisation"
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
