import FilledButton from "./buttons/FilledButton";
import OutlinedButton from "./buttons/OutlinedButton";

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
}: Props) {
  return (
    <article className="project bg-[#94ccff] dark:bg-[#0C2737] text-start rounded-3xl w-full md:w-80 lg:w-96 flex p-6 px-4 transition">
      <div className={`flex flex-col justify-between h-full gap-3 transition`}>
        <div>
          <h1 className="text-2xl font-semibold capitalize">{title}</h1>
          <h2 className="font-semibold">{year}</h2>
        </div>
        <div>
          <p className="text-lg text-zinc-800 dark:text-zinc-300">
            {description}
          </p>
        </div>
        <ul className="flex flex-wrap items-center gap-2 pb-4">
          {technologies.map((technology) => (
            <li
              className="text-primary-light dark:text-primary-dark font-semibold"
              key={technology}
            >
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
                className="w-6 h-6 stroke-on-primary-light dark:stroke-on-primary-dark"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            }
          />
          <OutlinedButton
            href={githubLink}
            title="Source"
            full
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                className="w-6 h-6 stroke-primary-light dark:stroke-primary-dark"
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
    </article>
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
