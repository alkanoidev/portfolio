import classNames from "utils/classNames";
import GrainSvg from "./GrainSvg";
import Link from "./Link";
import IconButton from "./buttons/IconButton";
import PrimaryButton from "./buttons/PrimaryButton";

export default function Project({
  title,
  description,
  githubLink,
  liveDemoLink,
  repoName,
  technologies,
  image,
  commingSoon,
  year,
  reversed,
  id,
}: Props) {
  return (
    <div
      id={id}
      className={`project ${
        reversed ? "sm:bg-gradient-to-l " : "sm:bg-gradient-to-r"
      } bg-deep-secondary border-secondary/20 border-2 rounded-3xl bg-cover bg-center max-w-5xl md:mx-0 mx-5 relative flex`}
    >
      <GrainSvg
        frequency={0.4}
        borderRadius="rounded-3xl"
        opacity="opacity-20"
      />
      <div
        className={`rounded-3xl flex ${
          reversed ? "sm:flex-row-reverse" : "sm:flex-row"
        } flex-col-reverse relative z-0 gap-3 p-6`}
      >
        <div className={`flex flex-col gap-3 transition`}>
          <div>
            <h1 className="text-2xl">{title}</h1>
            <h2>{year}</h2>
          </div>
          <p className="text-base">
            {description}
            <br />
            <Link href="#">View More...</Link>
          </p>
          <ul className="flex flex-wrap items-center gap-2">
            {technologies.map((technology) => (
              <li className="bg-dark/50 py-1 rounded-lg px-2" key={technology}>
                {technology}
              </li>
            ))}
          </ul>
          <div className="sm:mt-auto mt-4 flex gap-4">
            <PrimaryButton href={liveDemoLink}>Live View</PrimaryButton>
            <IconButton href={githubLink}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                className="w-6 h-6 stroke-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
            </IconButton>
          </div>
        </div>
        <img
          src={image}
          className={classNames(
            `thumbnail transition cursor-pointer h-full sm:w-1/2 rounded-xl w-full aspect-square object-cover sm:hover:scale-150 hover:z-10 hover:rounded-xl`
          )}
          alt={title}
        />
      </div>
    </div>
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
  id?: string;
};
