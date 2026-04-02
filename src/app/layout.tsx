import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "New Project",
  description: "Blank starter for a new production project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-dvh antialiased">
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
