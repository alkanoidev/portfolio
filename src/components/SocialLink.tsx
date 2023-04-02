import type React from "react";

export default function SocialLink({
  icon,
  title,
  href,
}: {
  icon: React.ReactElement;
  title: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center text-sm font-medium rounded-lg p-2"
    >
      {icon}
      <span className="ml-4 text-zinc-400 group-hover:text-white transition">
        {title}
      </span>
    </a>
  );
}
