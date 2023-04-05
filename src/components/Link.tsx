export default function Link({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <a href={href} className="text-zinc-400 hover:underline font-semibold">
      {children}
    </a>
  );
}
