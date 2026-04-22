import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Logo from "@/components/logo";

const socialLinkClass =
  "inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border text-muted transition-colors hover:text-cream";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-14">
      <div className="container grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <Logo className="h-9 w-auto shrink-0 text-cream" />
          <a
            href="mailto:contact@fibralis.com"
            className="mt-4 block text-sm font-light text-muted transition-colors hover:text-cream"
          >
            contact@fibralis.com
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            aria-label="LinkedIn"
            className={socialLinkClass}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn className="size-4" />
          </a>
          <a
            href="#"
            aria-label="X / Twitter"
            className={socialLinkClass}
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
