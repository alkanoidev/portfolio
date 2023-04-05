import type { ReactNode } from "react";

export default function NavButton({
  children,
  href,
}: {
  children: string | ReactNode | ReactNode[];
  href?: string;
}) {
  return (
    <a
      href={href}
      aria-label={href}
      className="py-3 px-6 transition rounded-lg hover:bg-zinc-700 hover:ring-2 hover:ring-zinc-700 hover:ring-offset-2 hover:ring-offset-transparent hover:cursor-pointer"
    >
      {children}
    </a>
  );
}
