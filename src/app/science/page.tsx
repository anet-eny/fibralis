import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Challenge from "@/components/science/challenge";
import OurApproach from "@/components/science/our-approach";
import ScienceHero from "@/components/science/science-hero";

export const metadata: Metadata = {
  title: "Our Science",
  description:
    "Fibralis develops precisely defined collagen proteins and bioactive peptides produced in recombinant E. coli — fully animal-free, with controlled triple-helical structure and scalable manufacturing.",
};

export default function SciencePage() {
  return (
    <>
      <Navbar />
      <main>
        <ScienceHero />
        <Challenge />
        <OurApproach />
        {/* TODO: Research */}
        {/* TODO: PortfolioTeaser */}
        {/* TODO: Advantages */}
        {/* TODO: CtaSection */}
      </main>
      <Footer />
    </>
  );
}
