import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ProductsHero from "@/components/products/products-hero";
import ProductsTabs from "@/components/products/products-tabs";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Fibralis collagen-derived peptides — CollaGen-X1, GFOGER-Pro, and Pal-KTTKS+ — engineered for formulation, documentation, and scale.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProductsHero />
        <ProductsTabs />
      </main>
      <Footer />
    </>
  );
}
