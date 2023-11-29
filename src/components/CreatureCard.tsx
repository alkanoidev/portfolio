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
        "flex w-1/2 flex-col justify-center gap-4 rounded-3xl px-2 py-4 text-center md:h-1/3 md:w-full md:rounded-5xl md:px-0",
        "bg-surface-light text-on-surface-light dark:bg-surface-dark dark:text-on-surface-dark",
        "box scale-95 opacity-0",
      )}
    >
      <h1 className="text-xl font-semibold md:text-2xl">{title}</h1>
      {children}
    </div>
  );
}

export default CreatureCard;
