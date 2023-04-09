import { useEffect, useRef } from "react";
import ProjectCard from "components/ProjectCard";
import projectsData from "../data/projects.json";
import classNames from "utils/classNames";
import useIsElementInViewPort from "utils/hooks/useIsElementInViewPort";
import Link from "components/Link";

export default function ProjectsSection() {
  const projectsSectionRef = useRef(null);
  const isInViewPort = useIsElementInViewPort(projectsSectionRef);

  useEffect(() => {
    if (isInViewPort) {
      document.body.classList.remove("bg-light");
      document.body.classList.remove("dark:bg-dark");
      document.body.classList.add("bg-deep-sky");
    } else {
      document.body.classList.remove("bg-deep-sky");
      document.body.classList.add("bg-light");
      document.body.classList.add("dark:bg-dark");
    }
  }, [isInViewPort]);

  return (
    <div
      id="projects"
      ref={projectsSectionRef}
      className={classNames(
        "mt-52 h-full flex flex-col justify-center items-center gap-10 sm:px-0 px-2"
      )}
    >
      <h1 className="text-4xl sm:text-5xl font-bold">Projects</h1>
      <p className="text-2xl sm:text-3xl text-white/80 text-center">
        Things I’ve made trying to put my dent in the universe.
      </p>
      <div className="projects w-full flex sm:flex-nowrap flex-wrap justify-center gap-10">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <p>
        <Link href="https://github.com/alkanoidev">
          check out my other projects on github.
        </Link>
      </p>
    </div>
  );
}
