import GrainSvg from "./GrainSvg";
import Link from "./Link";
import IconButton from "./buttons/IconButton";
import SecondaryButton from "./buttons/SecondaryButton";

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
}: Props) {
  return (
    <div
      className={`project bg-deep-violet rounded-3xl bg-cover bg-center max-w-4xl md:mx-0 mx-5 relative mb-14 flex`}
    >
      <GrainSvg
        frequency={0.1}
        borderRadius="rounded-3xl"
        opacity="opacity-20"
      />
      <div
        className={`rounded-3xl flex ${
          reversed ? "sm:flex-row-reverse" : "sm:flex-row"
        } flex-col-reverse relative z-0`}
      >
        <div className={`flex flex-col gap-3 p-6 transition`}>
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
            <SecondaryButton
              isLink
              href={liveDemoLink}
              classes="w-full bg-white text-black hover:ring-2 hover:ring-white hover:ring-offset-4 hover:ring-offset-black"
            >
              Live View
            </SecondaryButton>
            <IconButton
              isLink
              href={githubLink}
              classes="bg-white/80 hover:ring-2 hover:ring-white/80 hover:ring-offset-4 hover:ring-offset-black"
            >
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
          className={`thumbnail transition cursor-pointer h-full sm:w-1/2 ${
            reversed ? "rounded-l-3xl" : "rounded-r-3xl"
          } w-full aspect-square object-cover hover:scale-150 hover:rounded-xl hover:shadow hover:z-10`}
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
};
