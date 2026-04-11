import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

const siteTitle = "Fibralis — Recombinant collagen peptides";
const siteDescription =
  "Supplying formulators and researchers with defined-sequence recombinant collagen peptides for cosmetic, cosmeceutical, and medical innovation.";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | Fibralis",
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" data-scroll-behavior="smooth" className={`${outfit.variable} min-h-dvh antialiased`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
