import GrainSvg from "./GrainSvg";
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
}: Props) {
  return (
    <div
      id={id}
      className={`project bg-deep-secondary border-secondary/20 border-2 rounded-3xl bg-cover bg-center w-1/3 md:mx-0 mx-5 relative flex p-6`}
    >
      <GrainSvg
        frequency={0.3}
        borderRadius="rounded-3xl"
        opacity="opacity-100"
      />
      <div className={`flex flex-col gap-3 transition`}>
        <div>
          <h1 className="text-2xl font-semibold">{title}</h1>
          <h2>{year}</h2>
        </div>
        <p className="text-base text-white/80 ml-2">{description}</p>
        <ul className="flex flex-wrap items-center pb-4 -translate-x-2">
          {technologies.map((technology) => (
            <li
              className="bg-dark border-white/20 border py-1 rounded-lg px-2"
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
