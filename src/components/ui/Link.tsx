export default function Link({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <a
      href={href}
      aria-label={href}
      className="font-semibold text-on-primary-box-light hover:underline focus:underline focus:outline-none dark:text-on-primary-box-dark"
    >
      {children}
    </a>
  );
}
