import GrainSvg from "components/GrainSvg";
import type { ReactNode } from "react";

export default function ({
  children,
}: {
  children: string | ReactNode | ReactNode[];
}) {
  return (
    <button className="py-3 px-6 transition rounded-lg  text-black font-bold bg-gradient-to-r from-secondary via-primary to-violet hover:ring-secondary hover:ring-2 hover:ring-offset-2 hover:ring-offset-black relative">
      <GrainSvg frequency={0.4} />
      {children}
    </button>
  );
}
