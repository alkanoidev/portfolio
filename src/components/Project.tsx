import classNames from "utils/classNames";
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";

export default function Project({
  title,
  description,
  githubLink,
  liveDemoLink,
  repoName,
  technologies,
  commingSoon,
  year,
  id,
  selected,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        `project text-start rounded-3xl sm:w-1/3 w-full relative flex p-6 transition`,
        "sm:hover:bg-secondary/20",
        "bg-dark border-4 border-gray-800"
      )}
    >
      <div className={`flex flex-col justify-between h-full gap-3 transition`}>
        <div>
          <h1 className="text-2xl font-semibold capitalize">{title}</h1>
          <h2>{year}</h2>
        </div>
        <p className="text-lg text-white/80">{description}</p>
        <ul className="flex flex-wrap items-center gap-2 pb-4 -translate-x-2">
          {technologies.map((technology) => (
            <li
              className="border-gray-800 border-[3px] text-white/80 py-1 rounded-lg px-2"
              key={technology}
            >
              {technology}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex gap-4">
          <PrimaryButton href={liveDemoLink}>Live View</PrimaryButton>
          <SecondaryButton href={githubLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              className="w-6 h-6 stroke-white group-hover:stroke-black transition"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
          </SecondaryButton>
        </div>
      </div>
    </button>
  );
}

type Props = {
  title: string;
  description: string;
  githubLink: string;
  liveDemoLink: string;
  repoName: string;
  technologies: string[];
  image: string;
  commingSoon?: true;
  year: string;
  reversed?: boolean;
  id?: number;
  selected?: boolean;
  onClick?: () => void;
};
