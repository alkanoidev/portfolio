import type { ReactNode } from "react";

export default function SecondaryButton({
  children,
}: {
  children: string | ReactNode | ReactNode[];
}) {
  return (
    <button className="py-3 px-6 transition rounded-lg bg-off-dark hover:bg-dark hover:ring-2 hover:ring-dark hover:ring-offset-2 hover:ring-offset-transparent">
      {children}
    </button>
  );
}
