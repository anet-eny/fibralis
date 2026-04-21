import { Button } from "@/components/ui/button";
import { sectionBody, sectionTitle } from "@/lib/typography";

export default function TeamCta() {
  return (
    <section className="border-b border-border bg-bg py-section">
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h2 className={`${sectionTitle} mb-6`}>Want to join us?</h2>
          <p className={`${sectionBody} mb-10`}>
            We are building the next generation of collagen science at the
            intersection of biology, computation, and manufacturing. If you are
            excited to create real-world impact, we would love to hear from
            you.
          </p>
          <Button variant="primary" href="/contact">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
