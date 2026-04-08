import Hero from "@/components/hero";
import MeetUs from "@/components/meet-us";
import Navbar from "@/components/navbar";
import OurScience from "@/components/our-science";
import Products from "@/components/products";
import WhyUs from "@/components/why-us";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurScience />
      <Products />
      <WhyUs />
      <MeetUs />
    </>
  );
}
