export default function Link({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <a href={href} className="text-violet underline font-semibold">
      {children}
    </a>
  );
}
