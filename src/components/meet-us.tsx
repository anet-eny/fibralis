import Image from "next/image";
import { SectionLabel } from "@/components/ui/section-label";
import { sectionTitle } from "@/lib/typography";

const EVENTS = [
  {
    date: "14-16 May 2026",
    name: "in-cosmetics Global",
    location: "Amsterdam, Netherlands",
    imageSrc: "/images/amsterdam.avif",
  },
  {
    date: "8-10 September 2026",
    name: "Biomaterials Congress Europe",
    location: "Vienna, Austria",
    imageSrc: "/images/vienna.avif",
  },
  {
    date: "21-23 October 2026",
    name: "SCC Annual Scientific Meeting",
    location: "New York City, USA",
    imageSrc: "/images/new-york.avif",
  },
] as const;

type EventItem = (typeof EVENTS)[number];

function MeetUsCard({ event }: { event: EventItem }) {
  return (
    <article className="bg-bg transition-colors duration-300 hover:bg-cream/5">
      <div className="relative aspect-video border-b border-border">
        <Image
          src={event.imageSrc}
          alt={event.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="px-8 py-7">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-beige">
          {event.date}
        </p>
        <h3 className="mb-2 text-base font-normal leading-snug tracking-tight text-cream">
          {event.name}
        </h3>
        <p className="flex items-center gap-2 text-sm font-light text-muted">
          <span aria-hidden className="h-1 w-1 rounded-full bg-pink" />
          {event.location}
        </p>
      </div>
    </article>
  );
}

export default function MeetUs() {
  return (
    <section id="meet" className="border-t border-border bg-bg py-section">
      <div className="container">
        <SectionLabel variant="sectionCompact" className="mb-4">
          Meet Us
        </SectionLabel>
        <h2 className={`${sectionTitle} mb-0`}>
          Find Us at
          <br />
          These Events
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded border border-border bg-border md:grid-cols-3">
          {EVENTS.map((event) => (
            <MeetUsCard key={event.name} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
