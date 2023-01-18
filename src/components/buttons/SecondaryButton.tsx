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
      <a href={href} className={`py-3 px-6 transition rounded-lg ${classes} text-center`}>
        {children}
      </a>
    );
  return (
    <button className={`py-3 px-6 transition rounded-lg ${classes}`}>
      {children}
    </button>
  );
}
