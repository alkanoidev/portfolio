import GrainSvg from "./GrainSvg";
import SecondaryButton from "./buttons/SecondaryButton";

export default function Project({
  background,
  title,
  description,
  githubLink,
  liveDemoLink,
  repoName,
  technologies,
  image,
  commingSoon,
}: Props) {
  return (
    <div
      className={`project rounded-3xl ${background} bg-cover bg-center max-w-3xl md:mx-0 mx-5 relative mb-14 flex`}
    >
      <GrainSvg
        frequency={0.01}
        borderRadius="rounded-3xl"
        opacity="opacity-20"
      />
      <div className="rounded-3xl flex sm:flex-row flex-col-reverse relative gap-2">
        <div className="flex flex-col py-6 sm:px-0 sm:pl-6 px-6">
          <svg
            width="52"
            height="13"
            viewBox="0 0 52 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block"
          >
            <circle cx="6.07108" cy="6.48529" r="6" className="fill-primary" />
            <circle cx="26" cy="6" r="6" className="fill-secondary" />
            <path
              d="M52 6.00003C52 9.31373 49.3137 12 46 12C42.6863 12 40 9.31373 40 6.00003C40 2.68632 42.6863 2.51741e-05 46 2.51741e-05C49.3137 2.51741e-05 52 2.68632 52 6.00003Z"
              className="fill-violet"
            />
          </svg>
          <h1 className="text-2xl mt-2">{title}</h1>
          <p className="text-base mt-2">{description}</p>
          <ul className="flex flex-wrap items-center gap-2 mt-2">
            {technologies.map((technology) => (
              <li className="bg-dark/50 py-1 rounded-lg px-2" key={technology}>{technology}</li>
            ))}
          </ul>
          <div className="sm:mt-auto mt-4 flex gap-2">
            <SecondaryButton isLink href={liveDemoLink} classes="ring-2 w-full ring-primary hover:bg-primary/30">Live</SecondaryButton>
            <SecondaryButton isLink href={githubLink} classes="ring-2 w-full ring-secondary hover:bg-secondary/30">Code</SecondaryButton>
            <SecondaryButton isLink classes="ring-2 w-full ring-violet hover:bg-violet/30">More</SecondaryButton>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1671725779305-bff966b40cbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          className="thumbnail h-full sm:w-1/2 w-full rounded-3xl aspect-square object-cover"
          alt={title}
        />
      </div>
    </div>
  );
}

type Props = {
  background: string;
  title: string;
  description: string;
  githubLink: string;
  liveDemoLink: string;
  repoName: string;
  technologies: string[];
  image: string;
  commingSoon?: true;
};
