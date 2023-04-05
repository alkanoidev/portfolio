import type { ReactNode, ReactSVG } from "react";
import classNames from "utils/classNames";

export default function PrimaryButton({
  children,
  href,
  icon,
}: {
  children: string | ReactNode | ReactNode[];
  href?: string;
  icon?: ReactNode;
}) {
  if (href) {
    return (
      <a
        href={href}
        className={classNames(
          "w-full bg-zinc-300 text-black hover:ring-2 hover:ring-zinc-300 hover:ring-offset-4 hover:ring-offset-black inline-flex gap-2 justify-center",
          "py-3 px-6 transition text-center rounded-2xl font-semibold",
          "focus:ring-zinc-300 focus:ring-2 focus:ring-offset-4 active:ring-2 active:ring-zinc-300 active:ring-offset-4 focus:ring-offset-black active:offset-black"
        )}
      >
        {children}
        {icon ? icon : null}
      </a>
    );
  }
  return (
    <button
      className={classNames(
        "w-full bg-zinc-300 text-black hover:ring-2 hover:ring-zinc-300 hover:ring-offset-4 hover:ring-offset-black inline-flex gap-2 justify-center",
        "py-3 px-6 transition text-center rounded-2xl font-semibold",
        "focus:ring-zinc-300 focus:ring-2 focus:ring-offset-4 active:ring-2 active:ring-zinc-300 active:ring-offset-4 focus:ring-offset-black active:offset-black"
      )}
    >
      {children}
      {icon ? icon : null}
    </button>
  );
}
