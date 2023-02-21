import { useEffect, useState } from "react";
import GrainSvg from "./GrainSvg";
import IconButton from "./buttons/IconButton";
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
  year,
}: Props) {
  const [thumbnailHovered, setThumbnailHovered] = useState(false);

  return (
    <div
      className={`project rounded-3xl ${background} bg-cover bg-center max-w-4xl md:mx-0 mx-5 relative mb-14 flex`}
    >
      <GrainSvg
        frequency={0.01}
        borderRadius="rounded-3xl"
        opacity="opacity-20"
      />
      <div className="rounded-3xl flex sm:flex-row flex-col-reverse relative z-0">
        <div className={`flex flex-col p-6 transition ${thumbnailHovered && "blur-md"}`}>
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
          <h2>{year}</h2>
          <p className="text-base mt-2">
            {description}
            <br />
            <a href="" className="text-violet underline font-semibold">
              View More...
            </a>
          </p>
          <ul className="flex flex-wrap items-center gap-2 mt-2">
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
            className="thumbnail transition cursor-pointer h-full sm:w-1/2 w-full rounded-r-3xl aspect-square object-cover hover:scale-150 hover:rounded-xl hover:shadow hover:z-10"
            alt={title}
            onMouseEnter={() => {
              setThumbnailHovered(true)
            }}
            onMouseLeave={() => {
              setThumbnailHovered(false)
            }}
            onFocus={() => {
              setThumbnailHovered(true)
            }}
            onBlur={() => {
              setThumbnailHovered(false)
            }}
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
  year: string;
};
