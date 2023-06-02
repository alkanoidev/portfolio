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
      className="text-on-primary-box-light dark:text-on-primary-box-dark hover:underline focus:outline-none focus:underline font-semibold"
    >
      {children}
    </a>
  );
}
