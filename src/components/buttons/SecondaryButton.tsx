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
          "hover:bg-white ring-2 hover:ring-4 ring-white group",
          "p-3 transition text-center font-semibold",
          rounded ? "rounded-full" : "rounded-2xl"
        )}
      >
        {children}
      </a>
    );
  return (
    <button
      className={classNames(
        "hover:bg-white/80 ring-2 ring-white/80",
        "p-3 transition text-center font-semibold",
        rounded ? "rounded-full" : "rounded-2xl"
      )}
    >
      {children}
    </button>
  );
}
