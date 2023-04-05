import type { ReactElement, ReactNode } from "react";
import classNames from "utils/classNames";

export default function SecondaryButton({
  children,
  href,
  title,
  icon,
}: {
  children?: string | ReactNode | ReactNode[];
  href?: string;
  title: string;
  icon?: ReactElement;
}) {
  if (href)
    return (
      <a
        href={href}
        aria-label={title}
        className={classNames(
          "hover:bg-zinc-300 ring-2 ring-zinc-300 group rounded-2xl inline-flex gap-2 justify-center",
          "p-3 transition text-center font-semibold hover:text-dark",
          "focus:bg-zinc-300 focus:text-dark",
          "active:bg-zinc-300 active:text-dark"
        )}
      >
        {title}
        {children}
        {icon ? icon : null}
      </a>
    );
  return (
    <button
      id="secondary-btn"
      aria-label={title}
      className={classNames(
        "hover:bg-zinc-300 ring-2 ring-zinc-300 group rounded-2xl inline-flex gap-2 justify-center",
        "p-3 transition text-center font-semibold hover:text-dark",
        "focus:bg-zinc-300 focus:text-dark",
        "active:bg-zinc-300 active:text-dark"
      )}
    >
      {title}
      {children}
      {icon ? icon : null}
    </button>
  );
}
