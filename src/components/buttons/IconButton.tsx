import type { ReactNode } from "react";
import classNames from "utils/classNames";

export default function IconButton({
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
          "p-3 transition text-center rounded-2xl font-semibold ",
          "bg-white/80 hover:ring-2 hover:ring-white/80 hover:ring-offset-4 hover:ring-offset-black"
        )}
      >
        {children}
      </a>
    );
  return (
    <button
      className={classNames(
        "p-3 transition text-center rounded-2xl font-semibold",
        "bg-white/80 hover:ring-2 hover:ring-white/80 hover:ring-offset-4 hover:ring-offset-black"
      )}
    >
      {children}
    </button>
  );
}
