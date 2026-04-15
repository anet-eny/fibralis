import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Characterisation from "@/components/science/characterisation";
import Challenge from "@/components/science/challenge";
import CtaSection from "@/components/science/cta-section";
import OurApproach from "@/components/science/our-approach";
import PortfolioTeaser from "@/components/science/portfolio-teaser";
import Research from "@/components/science/research";
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
        <Research />
        <PortfolioTeaser />
        <Characterisation />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
