import type { ReactElement, ReactNode } from "react";
import classNames from "utils/classNames";

export default function FilledButton({
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
          "w-full bg-primary text-black inline-flex gap-2 justify-center",
          "py-3 px-6 transition text-center rounded-full font-semibold",
          " hover:bg-[#62b2f2]",
          "focus:bg-[#4397d6]"
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
        "w-full bg-primary text-black inline-flex gap-2 justify-center",
        "py-3 px-6 transition text-center rounded-full font-semibold",
        " hover:bg-[#62b2f2]",
        "focus:bg-[#4397d6]"
      )}
    >
      {title}
      {children}
      {icon ? icon : null}
    </button>
  );
}
