import type { ReactElement, ReactNode } from "react";
import classNames from "utils/classNames";

export default function OutlinedButton({
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
          "text-primary group rounded-full ring-2 ring-outline",
          "inline-flex gap-2 justify-center",
          "py-3 px-6 transition text-center font-semibold",
          "hover:bg-primary hover:bg-opacity-[8%]",
          "focus:bg-primary focus:bg-opacity-[12%]"
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
        "text-primary group rounded-full ring-2 ring-outline",
        "inline-flex gap-2 justify-center",
        "py-3 px-6 transition text-center font-semibold",
        "hover:bg-primary hover:bg-opacity-[8%]",
        "focus:bg-primary focus:bg-opacity-[12%]"
      )}
    >
      {title}
      {children}
      {icon ? icon : null}
    </button>
  );
}
