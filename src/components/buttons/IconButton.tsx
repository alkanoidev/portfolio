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
          "bg-zinc-300 text-black inline-flex gap-2 justify-center",
          "p-3 transition text-center rounded-full font-semibold",
          "hover:scale-110 focus:scale-110 active:scale-110"
        )}
      >
        {children}
      </a>
    );
  return (
    <button
      className={classNames(
        "bg-zinc-300 text-black inline-flex gap-2 justify-center",
        "p-3 transition text-center rounded-full font-semibold",
        "hover:scale-110 focus:scale-110 active:scale-110"
      )}
    >
      {children}
    </button>
  );
}
