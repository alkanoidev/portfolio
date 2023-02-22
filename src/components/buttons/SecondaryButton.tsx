import type { ReactNode } from "react";

export default function SecondaryButton({
  children,
  classes,
  isLink,
  href,
}: {
  children: string | ReactNode | ReactNode[];
  classes?: string;
  isLink?: boolean;
  href?: string;
}) {
  if (isLink)
    return (
      <a
        href={href}
        className={`py-3 px-6 transition text-center rounded-2xl font-semibold ${classes}`}
      >
        {children}
      </a>
    );
  return (
    <button
      className={`py-3 px-6 transition rounded-2xl font-semibold ${classes}`}
    >
      {children}
    </button>
  );
}
