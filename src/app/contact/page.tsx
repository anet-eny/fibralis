import type { Metadata } from "next";
import ContactContent from "@/components/contact/contact-content";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Fibralis in Copenhagen for public, scientific, media, and sample-related inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
