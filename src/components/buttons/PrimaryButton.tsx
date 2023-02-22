import GrainSvg from "components/GrainSvg";
import type { ReactNode } from "react";

export default function ({
  children,
  href,
}: {
  children: string | ReactNode | ReactNode[];
  href?: string;
}) {
  if (href) {
    return (
      <a
        href={href}
        className="py-3 px-6 transition rounded-lg text-dark font-bold bg-gradient-to-bl from-secondary via-primary to-violet hover:ring-white hover:ring-2 hover:ring-offset-2 hover:ring-offset-black relative"
      >
        <GrainSvg frequency={0.4} />
        {children}
      </a>
    );
  }
  return (
    <button className="py-3 px-6 transition rounded-lg text-dark font-bold bg-gradient-to-bl from-secondary via-primary to-violet hover:ring-white hover:ring-2 hover:ring-offset-2 hover:ring-offset-black relative">
      <GrainSvg frequency={0.4} />
      {children}
    </button>
  );
}
