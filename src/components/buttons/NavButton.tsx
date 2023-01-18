import type { ReactNode } from "react";

export default function NavButton({
  children,
  href
}: {
  children: string | ReactNode | ReactNode[];
  href?: string;
}) {
  return (
    <a href={href} className="py-3 px-6 transition rounded-lg hover:bg-off-dark hover:ring-2 hover:ring-off-dark hover:ring-offset-2 hover:ring-offset-transparent hover:cursor-pointer">
      {children}
    </a>
  );
}
