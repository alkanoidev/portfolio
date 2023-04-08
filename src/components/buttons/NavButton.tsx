import type { ReactNode } from "react";
import classNames from "utils/classNames";

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
      className={classNames(
        "py-3 px-6 transition rounded-full",
        "hover:bg-off-dark hover:ring-2 hover:ring-off-dark hover:ring-offset-2 hover:ring-offset-transparent hover:cursor-pointer",
        "focus:outline-none focus:bg-off-dark focus:ring-2 focus:ring-off-dark focus:ring-offset-2 focus:ring-offset-transparent"
      )}
    >
      {children}
    </a>
  );
}
