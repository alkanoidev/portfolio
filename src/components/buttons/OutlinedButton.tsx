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
          "py-3 px-6 transition text-center font-semibold",
          "group rounded-full ring-2",
          "text-primary-light dark:text-primary-dark ring-outline-light dark:ring-outline-dark",
          "inline-flex gap-2 justify-center",
          "hover:bg-primary-light dark:hover:bg-primary-dark hover:bg-opacity-[8%] dark:hover:bg-opacity-[8%]",
          "focus:bg-primary-light dark:focus:bg-primary-dark focus:bg-opacity-[12%] dark:focus:bg-opacity-[12%]"
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
        "py-3 px-6 transition text-center font-semibold",
        "group rounded-full ring-2",
        "text-primary-light dark:text-primary-dark ring-outline-light dark:ring-outline-dark",
        "inline-flex gap-2 justify-center",
        "hover:bg-primary-light dark:hover:bg-primary-dark hover:bg-opacity-[8%] dark:hover:bg-opacity-[8%]",
        "focus:bg-primary-light dark:focus:bg-primary-dark focus:bg-opacity-[12%] dark:focus:bg-opacity-[12%]"
      )}
    >
      {title}
      {children}
      {icon ? icon : null}
    </button>
  );
}
