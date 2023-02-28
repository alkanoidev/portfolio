import type { ReactNode } from "react";
import classNames from "utils/classNames";

export default function SecondaryButton({
  children,
  href,
}: {
  children: string | ReactNode | ReactNode[];
  href?: string;
}) {
  if (href)
    return (
      <a
        href={href}
        className={classNames(
          `bg-white/80 hover:ring-2 hover:ring-white/80 hover:ring-offset-4 hover:ring-offset-black`,
          "p-3 transition text-center rounded-2xl font-semibold"
        )}
      >
        {children}
      </a>
    );
  return (
    <button
      className={classNames(
        `bg-white/80 hover:ring-2 hover:ring-white/80 hover:ring-offset-4 hover:ring-offset-black`,
        "p-3 transition text-center rounded-2xl font-semibold"
      )}
    >
      {children}
    </button>
  );
}
