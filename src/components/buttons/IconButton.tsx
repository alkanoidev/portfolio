import type { ReactElement, ReactNode } from "react";
import classNames from "utils/classNames";

export default function IconButton({
  href,
  title,
  icon,
}: {
  href?: string;
  title: string;
  icon: ReactElement;
}) {
  if (href)
    return (
      <a
        href={href}
        aria-label={title}
        className={classNames(
          "hover:bg-zinc-300 ring-2 ring-zinc-300 rounded-2xl inline-flex gap-2 justify-center group",
          "p-3 transition text-center font-semibold hover:text-dark",
          "focus:bg-zinc-300 focus:text-dark",
          "active:bg-zinc-300 active:text-dark"
        )}
      >
        {icon ? icon : null}
      </a>
    );
  return (
    <button
      id="icon-btn"
      aria-label={title}
      className={classNames(
        "hover:bg-zinc-300 ring-2 ring-zinc-300 rounded-2xl inline-flex gap-2 justify-center group",
        "p-3 transition text-center font-semibold hover:text-dark",
        "focus:bg-zinc-300 focus:text-dark",
        "active:bg-zinc-300 active:text-dark"
      )}
    >
      {icon ? icon : null}
    </button>
  );
}
