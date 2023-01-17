import type { ReactNode } from "react";

export default function NavButton({
  children,
}: {
  children: string | ReactNode | ReactNode[];
}) {
  return (
    <button className="py-3 px-6 transition rounded-lg  hover:bg-off-dark hover:ring-2 hover:ring-off-dark hover:ring-offset-2 hover:ring-offset-transparent">
      {children}
    </button>
  );
}
