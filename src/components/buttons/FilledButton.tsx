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
          "py-3 px-6 transition text-center rounded-full font-semibold whitespace-nowrap",
          "inline-flex gap-2 justify-center",
          "dark:bg-primary-dark dark:text-on-primary-dark bg-primary-light text-on-primary-light",
          "dark:hover:bg-[#62b2f2] hover:bg-[#005786]",
          "dark:focus:bg-[#4397d6] focus:bg-[#004b74] focus:outline-none",
          fullWidth ? "w-full" : "w-fit"
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
        "py-3 px-6 transition text-center rounded-full font-semibold whitespace-nowrap",
        "inline-flex gap-2 justify-center",
        "dark:bg-primary-dark dark:text-on-primary-dark bg-primary-light text-on-primary-light",
        "dark:hover:bg-[#62b2f2] hover:bg-[#005786]",
        "dark:focus:bg-[#4397d6] focus:bg-[#004b74] focus:outline-none",
        fullWidth ? "w-full" : "w-fit"
      )}
    >
      {title}
      {children}
      {icon ? icon : null}
    </button>
  );
}
