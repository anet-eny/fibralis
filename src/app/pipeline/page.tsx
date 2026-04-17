import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PipelineHero from "@/components/pipeline/pipeline-hero";
import PipelineTable from "@/components/pipeline/pipeline-table";

export const metadata: Metadata = {
  title: "Pipeline",
  description:
    "Fibralis maintains a focused pipeline of collagen-derived molecules, from validated portfolio assets to early-stage discovery programmes.",
};

export default function PipelinePage() {
  return (
    <>
      <Navbar />
      <main>
        <PipelineHero />
        <PipelineTable />
      </main>
      <Footer />
    </>
  );
}
