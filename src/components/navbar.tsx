"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";

const navLinks: { label: string; href: string }[] = [
  { label: "Our Science", href: "/science" },
  { label: "Pipeline", href: "/pipeline" },
  { label: "Products", href: "/products" },
  { label: "Our Team", href: "/team" },
];

const linkClass =
  "text-base font-normal tracking-wider text-muted transition-colors hover:text-cream whitespace-nowrap md:text-sm";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 min-h-18 border-b border-border bg-bg/70 backdrop-blur-lg"
      aria-label="Main"
    >
      <div className="container relative flex min-h-18 items-center justify-between">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Fibralis home"
          onClick={() => setOpen(false)}
        >
          <Logo className="h-9 w-auto shrink-0 text-cream" />
        </Link>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-1 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-5.5 bg-cream transition-[transform,opacity] duration-300" />
          <span className="block h-0.5 w-5.5 bg-cream transition-[transform,opacity] duration-300" />
          <span className="block h-0.5 w-5.5 bg-cream transition-[transform,opacity] duration-300" />
        </button>

        <ul
          id="primary-navigation"
          className={[
            "absolute left-0 right-0 top-full z-40 flex flex-col gap-0 border-b border-border bg-surface/95 p-6 backdrop-blur-lg",
            "md:static md:z-auto md:min-h-0 md:flex-row md:items-center md:gap-10 md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none",
            open ? "flex" : "hidden md:flex",
          ].join(" ")}
        >
          {navLinks.map(({ label, href }) => (
            <li
              key={href}
              className="w-full border-b border-border md:w-auto md:border-0"
            >
              <Link
                href={href}
                className={`${linkClass} block py-3.5 md:inline-block md:py-0`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="mt-4 w-full border-0 md:mt-0 md:w-auto">
            <Button
              variant="compact"
              href="/contact"
              onClick={() => setOpen(false)}
            >
              Contact
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
