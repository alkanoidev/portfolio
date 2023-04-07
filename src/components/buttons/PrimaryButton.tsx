import type { ReactElement, ReactNode } from "react";
import classNames from "utils/classNames";

export default function PrimaryButton({
  children,
  href,
  icon,
  title,
  type,
}: {
  children?: string | ReactNode | ReactNode[];
  href?: string;
  icon?: ReactElement;
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
}) {
  if (href) {
    return (
      <a
        aria-label={title}
        href={href}
        className={classNames(
          "w-full bg-zinc-300 text-black inline-flex gap-2 justify-center",
          "hover:ring-2 hover:ring-zinc-300 hover:ring-offset-4 hover:ring-offset-black",
          "py-3 px-6 transition text-center rounded-2xl font-semibold",
          "focus:ring-zinc-300 focus:ring-2 focus:ring-offset-4 focus:ring-offset-black"
        )}
      >
        {title}
        {children}
        {icon ? icon : null}
      </a>
    );
  }
  return (
    <button
      id={title}
      aria-label={title}
      type={type ? type : "button"}
      className={classNames(
        "w-full bg-zinc-300 text-black inline-flex gap-2 justify-center",
        "hover:ring-2 hover:ring-zinc-300 hover:ring-offset-4 hover:ring-offset-black",
        "py-3 px-6 transition text-center rounded-2xl font-semibold",
        "focus:ring-zinc-300 focus:ring-2 focus:ring-offset-4 focus:ring-offset-black"
      )}
    >
      {title}
      {children}
      {icon ? icon : null}
    </button>
  );
}
