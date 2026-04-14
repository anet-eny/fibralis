import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import { scienceCardBody } from "@/lib/typography";

export type CharacterisationCardProps = {
  icon: IconType;
  title: string;
  description: ReactNode;
  className?: string;
};

export function CharacterisationCard({
  icon: Icon,
  title,
  description,
  className,
}: CharacterisationCardProps) {
  const articleClassName = [
    "min-w-0 h-full bg-surface px-8 pb-10 pt-9 transition-colors duration-300 hover:bg-cream/5",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={articleClassName}>
      <div className="mb-6 flex h-8 w-8 items-center justify-center rounded-sm border border-pink/25">
        <Icon className="size-3.5 text-pink" aria-hidden />
      </div>
      <h3 className="mb-2.5 text-sm font-medium leading-snug text-cream">{title}</h3>
      <p className={scienceCardBody}>{description}</p>
    </article>
  );
}
