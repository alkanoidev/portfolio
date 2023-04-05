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
          "hover:bg-zinc-300 ring-2 ring-zinc-300 group rounded-2xl",
          "p-3 transition text-center font-semibold hover:text-dark",
          "focus:bg-zinc-300 focus:text-dark focus:ring-2 focus:ring-zinc-300 focus:ring-offset-dark focus:ring-offset-4",
          "active:bg-zinc-300 active:text-dark active:ring-2 active:ring-zinc-300 active:ring-offset-dark active:ring-offset-4"
        )}
      >
        {children}
      </a>
    );
  return (
    <button
      className={classNames(
        "hover:bg-zinc-300 ring-2 ring-zinc-300 group rounded-2xl",
        "p-3 transition text-center font-semibold hover:text-dark",
        "focus:bg-zinc-300 focus:text-dark focus:ring-2 focus:ring-zinc-300 focus:ring-offset-dark focus:ring-offset-4",
        "active:bg-zinc-300 active:text-dark active:ring-2 active:ring-zinc-300 active:ring-offset-dark active:ring-offset-4"
      )}
    >
      {children}
    </button>
  );
}
