import type { ReactNode } from "react";
import classNames from "utils/classNames";

export default function PrimaryButton({
  children,
  href,
}: {
  children: string | ReactNode | ReactNode[];
  href?: string;
}) {
  if (href) {
    return (
      <a
        href={href}
        className={classNames(
          "w-full bg-zinc-300 text-black hover:ring-2 hover:ring-zinc-300 hover:ring-offset-4 hover:ring-offset-black",
          "py-3 px-6 transition text-center rounded-2xl font-semibold",
          "focus:ring-zinc-300 focus:ring-2 focus:ring-offset-4 active:ring-2 active:ring-zinc-300 active:ring-offset-4 focus:ring-offset-black active:offset-black"
        )}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className={classNames(
        "w-full bg-zinc-300 text-black hover:ring-2 hover:ring-zinc-300 hover:ring-offset-4 hover:ring-offset-black",
        "py-3 px-6 transition text-center rounded-2xl font-semibold",
        "focus:ring-zinc-300 focus:ring-2 focus:ring-offset-4 active:ring-2 active:ring-zinc-300 active:ring-offset-4 focus:ring-offset-black active:offset-black"
      )}
    >
      {children}
    </button>
  );
}
