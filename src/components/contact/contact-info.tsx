import Image from "next/image";
import { heroTitle, sectionBody } from "@/lib/typography";

export default function ContactInfo() {
  return (
    <div>
      <h1 className={`mb-8 ${heroTitle}`}>Send Us a Message</h1>

      <div className="relative mb-8 aspect-4/3 overflow-hidden rounded border border-border">
        <Image
          src="/images/fibralis-building.avif"
          alt="Fibralis building in Copenhagen"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 45vw"
        />
      </div>

      <address className={`${sectionBody} mb-8 not-italic`}>
        Fibralis ApS
        <br />
        Blegdamsvej 3B
        <br />
        2200 Copenhagen N
        <br />
        Denmark
      </address>

      <div className={sectionBody}>
        <h2 className="mb-3 text-base font-medium tracking-wide text-cream">
          Contact Us
        </h2>
        <a
          href="mailto:contact@fibralis.com"
          className="text-muted transition-colors hover:text-cream"
        >
          contact@fibralis.com
        </a>
      </div>
    </div>
  );
}
