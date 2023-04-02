import type { ReactNode } from "react";
import classNames from "utils/classNames";

export default function SecondaryButton({
  children,
  href,
  rounded,
}: {
  children: string | ReactNode | ReactNode[];
  href?: string;
  rounded?: boolean;
}) {
  if (href)
    return (
      <a
        href={href}
        className={classNames(
          "hover:bg-zinc-200 ring-2 hover:ring-4 ring-white group",
          "p-3 transition text-center font-semibold hover:text-dark",
          rounded ? "rounded-full" : "rounded-2xl",
          "focus:bg-zinc-200 focus:text-dark focus:ring-2 focus:ring-white focus:ring-offset-dark focus:ring-offset-4",
          "active:bg-zinc-200 active:text-dark active:ring-2 active:ring-white active:ring-offset-dark active:ring-offset-4"
        )}
      >
        {children}
      </a>
    );
  return (
    <button
      className={classNames(
        "hover:bg-zinc-200 ring-2 hover:ring-4 ring-white group",
        "p-3 transition text-center font-semibold hover:text-dark",
        rounded ? "rounded-full" : "rounded-2xl",
        "focus:bg-zinc-200 focus:text-dark focus:ring-2 focus:ring-white focus:ring-offset-dark focus:ring-offset-4",
        "active:bg-zinc-200 active:text-dark active:ring-2 active:ring-white active:ring-offset-dark active:ring-offset-4"
      )}
    >
      {children}
    </button>
  );
}
