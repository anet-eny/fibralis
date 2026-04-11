import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

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
        {/* TODO: ScienceHero */}
        {/* TODO: Challenge */}
        {/* TODO: Pillars */}
        {/* TODO: Research */}
        {/* TODO: PortfolioTeaser */}
        {/* TODO: Advantages */}
        {/* TODO: CtaSection */}
      </main>
      <Footer />
    </>
  );
}
