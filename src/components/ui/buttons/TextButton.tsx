import type { ReactElement, ReactNode } from "react";
import classNames from "utils/classNames";

export default function TextButton({
  children,
  href,
  title,
  icon,
  full,
  onClick,
}: {
  children?: string | ReactNode | ReactNode[];
  href?: string;
  title: string;
  icon?: ReactElement;
  full?: boolean;

  onClick?: () => void;
}) {
  if (href)
    return (
      <a
        href={href}
        aria-label={title}
        className={classNames(
          "flex items-center justify-center rounded-full px-3 py-2 font-semibold transition focus:outline-none",
          "text-primary-light dark:text-primary-dark",
          // hover
          "hover:bg-primary-light dark:hover:bg-primary-dark",
          "hover:bg-opacity-[12%] dark:hover:bg-opacity-[12%]",
          "hover:ring-primary-light dark:hover:ring-primary-dark",
          "hover:ring-opacity-[12%] dark:hover:ring-opacity-[12%]",
          // focus
          "focus:bg-primary-light dark:focus:bg-primary-dark",
          "focus:bg-opacity-[20%] dark:focus:bg-opacity-[20%]",
          "focus:ring-primary-light dark:focus:ring-primary-dark",
          "focus:ring-opacity-[20%] dark:focus:ring-opacity-[20%]",
          full ? "w-full" : "",
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
      onClick={onClick}
      aria-label={title}
      className={classNames(
        "flex items-center justify-center rounded-full px-3 py-2 font-semibold transition focus:outline-none",
        "text-primary-light dark:text-primary-dark",
        // hover
        "hover:bg-primary-light dark:hover:bg-primary-dark",
        "hover:bg-opacity-[12%] dark:hover:bg-opacity-[12%]",
        "hover:ring-primary-light dark:hover:ring-primary-dark",
        "hover:ring-opacity-[12%] dark:hover:ring-opacity-[12%]",
        // focus
        "focus:bg-primary-light dark:focus:bg-primary-dark",
        "focus:bg-opacity-[20%] dark:focus:bg-opacity-[20%]",
        "focus:ring-primary-light dark:focus:ring-primary-dark",
        "focus:ring-opacity-[20%] dark:focus:ring-opacity-[20%]",
        full ? "w-full" : "",
      )}
    >
      {title}
      {children}
      {icon ? icon : null}
    </button>
  );
}
