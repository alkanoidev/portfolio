import type { ReactNode } from "react";

export default function IconButton({
  children,
  classes,
  isLink,
  href
}: {
  children: string | ReactNode | ReactNode[];
  classes?: string;
  isLink?: boolean;
  href?: string;
}) {
  if (isLink)
    return (
      <a href={href} className={`p-3 transition text-center rounded-2xl font-semibold ${classes}`}>
        {children}
      </a>
    );
  return (
    <button className={`p-3 transition text-center rounded-2xl font-semibold ${classes}`}>
      {children}
    </button>
  );
}
