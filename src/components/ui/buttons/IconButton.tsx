import type { ReactElement, ReactNode } from "react";
import classNames from "utils/classNames";

export default function IconButton({
  href,
  title,
  icon,
  onClick,
}: {
  href?: string;
  title: string;
  icon: ReactElement;
  onClick?: () => void;
}) {
  if (href)
    return (
      <a
        href={href}
        aria-label={title}
        className={classNames(
          "p-3 transition text-center font-semibold focus:outline-none",
          "group rounded-full ring-2",
          "text-primary-light dark:text-primary-dark ring-outline-light dark:ring-outline-dark",
          "inline-flex gap-2 justify-center",
          // hover
          "hover:bg-primary-light dark:hover:bg-primary-dark",
          "hover:bg-opacity-[12%] dark:hover:bg-opacity-[12%]",
          // focus
          "focus:bg-primary-light dark:focus:bg-primary-dark",
          "focus:bg-opacity-[20%] dark:focus:bg-opacity-[20%]"
        )}
      >
        {icon ? icon : null}
      </a>
    );
  return (
    <button
      id="icon-btn"
      onClick={onClick}
      aria-label={title}
      className={classNames(
        "p-3 transition text-center font-semibold focus:outline-none",
        "group rounded-full ring-2",
        "text-primary-light dark:text-primary-dark ring-outline-light dark:ring-outline-dark",
        "inline-flex gap-2 justify-center",
        // hover
        "hover:bg-primary-light dark:hover:bg-primary-dark",
        "hover:bg-opacity-[12%] dark:hover:bg-opacity-[12%]",
        // focus
        "focus:bg-primary-light dark:focus:bg-primary-dark",
        "focus:bg-opacity-[20%] dark:focus:bg-opacity-[20%]"
      )}
    >
      {icon ? icon : null}
    </button>
  );
}
