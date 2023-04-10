import classNames from "utils/classNames";

function CreatureCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactElement;
}) {
  return (
    <div
      className={classNames(
        "box md:h-1/3 md:w-full w-1/2 rounded-3xl md:rounded-5xl flex justify-center flex-col gap-4 text-center md:px-0 px-2 py-4",
        "bg-surface-light dark:bg-surface-dark text-on-surface-light dark:text-on-surface-dark",
        "opacity-0 scale-95"
      )}
    >
      <h1 className="md:text-2xl font-semibold">{title}</h1>
      {children}
    </div>
  );
}

export default CreatureCard;
