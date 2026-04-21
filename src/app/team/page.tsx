import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import TeamCta from "@/components/team/team-cta";
import ManagementTeam from "@/components/team/management-team";
import TeamHero from "@/components/team/team-hero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the Fibralis leadership team. Fibralis is a Copenhagen University spin-off advancing collagen-derived molecules through computational design and recombinant manufacturing.",
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main>
        <TeamHero />
        <ManagementTeam />
        <TeamCta />
      </main>
      <Footer />
    </>
  );
}
