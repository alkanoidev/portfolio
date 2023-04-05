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
        aria-label={href}
        className={classNames(
          "hover:bg-zinc-300 ring-2 ring-zinc-300 group rounded-2xl",
          "p-3 transition text-center font-semibold hover:text-dark",
          "focus:bg-zinc-300 focus:text-dark",
          "active:bg-zinc-300 active:text-dark"
        )}
      >
        {children}
      </a>
    );
  return (
    <button
      id="secondary-btn"
      aria-label="Secondary button"
      className={classNames(
        "hover:bg-zinc-300 ring-2 ring-zinc-300 group rounded-2xl",
        "p-3 transition text-center font-semibold hover:text-dark",
        "focus:bg-zinc-300 focus:text-dark",
        "active:bg-zinc-300 active:text-dark"
      )}
    >
      {children}
    </button>
  );
}
