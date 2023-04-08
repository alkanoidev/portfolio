import classNames from "utils/classNames";
import IconButton from "./buttons/IconButton";
import FilledButton from "./buttons/FilledButton";

export default function ProjectCard({
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
        `project bg-[#0C2737] text-start rounded-3xl w-full md:w-80 lg:w-96 flex p-6 transition`,
        " hover:ring-sky-800 hover:ring-4 focus:ring-sky-800 focus:ring-4 focus:outline-none"
      )}
    >
      <div className={`flex flex-col justify-between h-full gap-3 transition`}>
        <div>
          <h1 className="text-2xl font-semibold capitalize">{title}</h1>
          <h2>{year}</h2>
        </div>
        <p className="text-lg text-white/80">{description}</p>
        <ul className="flex flex-wrap items-center gap-2 pb-4">
          {technologies.map((technology) => (
            <li className="text-sky-700 font-semibold" key={technology}>
              {technology}
            </li>
          ))}
        </ul>
        <div className="mt-10 md:mt-auto flex gap-4">
          <FilledButton
            href={liveDemoLink}
            title="Live View"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 stroke-on-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            }
          />
          <IconButton
            href={githubLink}
            title={githubLink}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                className="w-6 h-6 stroke-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
            }
          />
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
