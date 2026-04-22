import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import { headingLightTight, sectionBody, sectionTitle } from "@/lib/typography";

type TeamMember = {
  name: string;
  role: string;
  imageSrc: string;
};

const managementTeam: TeamMember[] = [
  {
    name: "Astrid Møller, PhD, MBA",
    role: "Chief Executive Officer and Founder",
    imageSrc: "/images/employees/astrid-moller.avif",
  },
  {
    name: "Arjun Mehta, MBA",
    role: "Head of Business Development",
    imageSrc: "/images/employees/arjun-mehta.avif",
  },
  {
    name: "Sara Lindqvist, PhD",
    role: "Head of Research & Development",
    imageSrc: "/images/employees/sara-lindqvist.avif",
  },
  {
    name: "Henrik Brandt, PhD",
    role: "Chief Scientific Officer",
    imageSrc: "/images/employees/henrik-brandt.avif",
  },
  {
    name: "Mikkel Dalgaard, PhD",
    role: "Head of Computational Design",
    imageSrc: "/images/employees/mikkel-dalgaard.avif",
  },
  {
    name: "Elena Vasquez, MSc",
    role: "People & Operations Lead",
    imageSrc: "/images/employees/elena-vasquez.avif",
  },
];

function ManagementCard({ member }: { member: TeamMember }) {
  return (
    <article className="overflow-hidden rounded border border-border bg-bg/30">
      <div className="relative mt-4 ml-auto mr-auto w-4/5 aspect-4/5 overflow-hidden rounded border border-border">
        <Image
          src={member.imageSrc}
          alt={member.name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="mx-auto w-4/5 space-y-2 py-5">
        <h3 className={`text-xl ${headingLightTight}`}>{member.name}</h3>
        <p className={`${sectionBody}`}>{member.role}</p>
      </div>
    </article>
  );
}

export default function ManagementTeam() {
  return (
    <section className="border-b border-border bg-surface py-section">
      <div className="container">
        <Reveal>
          <h2 className={`${sectionTitle} mb-12`}>Management Team</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12">
          {managementTeam.map((member, index) => (
            <Reveal key={member.name} delayMs={index * 120} className="h-full">
              <ManagementCard member={member} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
