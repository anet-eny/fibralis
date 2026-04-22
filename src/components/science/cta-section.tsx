import { Button } from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";
import { sectionBody, sectionTitle } from "@/lib/typography";

export default function CtaSection() {
  return (
    <section className="border-b border-border bg-bg py-section">
      <div className="container">
        <Reveal>
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto] md:gap-20">
            <div className="min-w-0">
              <h2 className={`${sectionTitle} mb-6`}>
                Partner with <em className="not-italic text-pink">Fibralis</em>
              </h2>
              <p className={`${sectionBody} max-w-[500px]`}>
                We welcome enquiries from academic groups, biotech companies, and
                cosmetic formulators interested in research supply, custom
                molecule design, or regenerative medicine development
                partnerships.
              </p>
            </div>

            <div className="shrink-0">
              <Button variant="primary" href="/contact">
                Contact us
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
