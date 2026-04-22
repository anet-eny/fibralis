import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import Reveal from "@/components/ui/reveal";

export default function ContactContent() {
  return (
    <section className="border-b border-border bg-bg pt-38 pb-section">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <ContactInfo />
          </Reveal>
          <Reveal delayMs={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
