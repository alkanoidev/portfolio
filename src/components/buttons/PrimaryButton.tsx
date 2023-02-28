import type { ReactNode } from "react";
import classNames from "utils/classNames";

export default function ({
  children,
  href,
}: {
  children: string | ReactNode | ReactNode[];
  href?: string;
}) {
  if (href) {
    return (
      <a
        href={href}
        className={classNames(
          "w-full bg-white text-black hover:ring-2 hover:ring-white hover:ring-offset-4 hover:ring-offset-black",
          "py-3 px-6 transition text-center rounded-2xl font-semibold"
        )}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className={classNames(
        "w-full bg-white text-black hover:ring-2 hover:ring-white hover:ring-offset-4 hover:ring-offset-black",
        "py-3 px-6 transition text-center rounded-2xl font-semibold"
      )}
    >
      {children}
    </button>
  );
}
