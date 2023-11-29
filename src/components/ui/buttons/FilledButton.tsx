import type { ReactElement, ReactNode } from "react";
import classNames from "utils/classNames";

export default function FilledButton({
  children,
  href,
  icon,
  title,
  type,
  fullWidth,
  onClick,
}: {
  children?: string | ReactNode | ReactNode[];
  href?: string;
  icon?: ReactElement;
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  onClick?: () => void;
}) {
  if (href) {
    return (
      <a
        aria-label={title}
        href={href}
        className={classNames(
          "whitespace-nowrap rounded-full px-6 py-3 text-center font-semibold transition",
          "inline-flex justify-center gap-2",
          "bg-primary-light text-on-primary-light dark:bg-primary-dark dark:text-on-primary-dark",
          "hover:bg-[#005786] dark:hover:bg-[#62b2f2]",
          "focus:bg-[#004b74] focus:outline-none dark:focus:bg-[#4397d6]",
          fullWidth ? "w-full" : "w-fit",
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
      onClick={onClick}
      aria-label={title}
      type={type ? type : "button"}
      className={classNames(
        "whitespace-nowrap rounded-full px-6 py-3 text-center font-semibold transition",
        "inline-flex justify-center gap-2",
        "bg-primary-light text-on-primary-light dark:bg-primary-dark dark:text-on-primary-dark",
        "hover:bg-[#005786] dark:hover:bg-[#62b2f2]",
        "focus:bg-[#004b74] focus:outline-none dark:focus:bg-[#4397d6]",
        fullWidth ? "w-full" : "w-fit",
      )}
    >
      {title}
      {children}
      {icon ? icon : null}
    </button>
  );
}
