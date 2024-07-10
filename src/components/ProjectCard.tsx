import classNames from "utils/classNames";
import FilledButton from "./ui/buttons/FilledButton";
import OutlinedButton from "./ui/buttons/OutlinedButton";
import TextButton from "./ui/buttons/TextButton";

export default function ProjectCard({
  id,
  slug,
  title,
  description,
  githubLink,
  liveDemoLink,
  technologies,
  year,
  image,
  logo,
}: Props) {
  return (
    <div
      id={slug}
      className={classNames(
        "flex w-full flex-col justify-center gap-5 sm:gap-16",
        id % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse",
      )}
    >
      <article className="project flex w-full min-w-[22.5rem] rounded-3xl bg-[#94ccff] p-6 px-4 text-start transition lg:w-[26rem] dark:bg-[#0C2737]">
        <div
          className={`flex h-full flex-col justify-between gap-3 transition`}
        >
          <div className="flex items-end gap-2 md:flex-wrap">
            <img src={logo} alt={title + " Logo"} width={40} />
            <h1 className="text-2xl font-semibold capitalize text-on-primary-box-light dark:text-on-primary-box-dark">
              {title}
            </h1>
            <h2 className="font-semibold text-on-primary-box-light opacity-70 dark:text-on-primary-box-dark">
              {year}
            </h2>
          </div>
          <div>
            <p className="text-base text-on-primary-box-light md:text-lg dark:text-on-primary-box-dark">
              {description}
            </p>
            <div className="-ml-3 max-w-fit">
              <TextButton href={"/project/" + slug} title="Read More" />
            </div>
          </div>
          <ul className="flex flex-wrap items-center gap-3">
            {technologies.map((technology) => (
              <li
                className={classNames(
                  "text-sm text-on-primary-box-light dark:text-on-primary-box-dark",
                  "ring-2 ring-primary-light ring-opacity-70 dark:ring-primary-dark dark:ring-opacity-70",
                  "rounded-full px-2 py-1",
                )}
                key={technology}
              >
                {technology}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-4 md:ml-auto md:mt-auto md:max-w-max lg:ml-0 lg:max-w-full">
            <FilledButton
              href={liveDemoLink}
              title="Live View"
              fullWidth
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 stroke-on-primary-light dark:stroke-on-primary-dark"
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
              fullWidth
              isBlueTheme
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  className="h-6 w-6 stroke-primary-light dark:stroke-primary-dark"
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
      <div
        className={classNames(
          "relative z-0 sm:min-w-[38rem] lg:w-1/3",
          "before:absolute before:-z-10",
          "dark:before:h-[70%] dark:before:w-[70%]",
          "before:h-[90%] before:w-[90%]",
          "before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2",
          "before:bg-on-primary-dark dark:before:bg-primary-light",
          "before:blur-[38px] md:before:blur-[52px]",
          "md:darK:before:blur-[52px] dark:before:blur-[32px]",
        )}
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full rounded-3xl"
        />
        {/* 1024x720px */}
      </div>
    </div>
  );
}

type Props = {
  id: number;
  slug: string;
  title: string;
  description: string;
  githubLink: string;
  liveDemoLink: string;
  technologies: string[];
  year: string;
  image: string;
  readMoreLink?: string;
  logo?: string;
  onClick?: () => void;
};
