import Project from "components/Project";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import projectsData from "../data/projects.json";
import classNames from "utils/classNames";
import useIsElementInViewPort from "utils/hooks/useIsElementInViewPort";
import Link from "components/Link";

export default function ProjectsSection() {
  const projectsSectionRef = useRef(null);
  const isInViewPort = useIsElementInViewPort(projectsSectionRef);

  useEffect(() => {
    const timeline = gsap.timeline({});

    if (isInViewPort) {
      document.body.classList.remove("bg-dark");
      document.body.classList.add("bg-deep-sky");
    } else {
      document.body.classList.remove("bg-deep-sky");
      document.body.classList.add("bg-dark");
    }

    timeline.fromTo(
      ".project",
      {
        scale: 0.9,
        opacity: 0,
        ease: "power1.inOut",
      },
      {
        scale: 1,
        opacity: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".project",
          scrub: 1,
          start: "top 90%",
          end: "top 90%",
          // markers: true,
        },
        stagger: {
          amount: 1,
          repeat: 0,
        },
      }
    );
    return () => {
      timeline.clear();
    };
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
      <p className="text-2xl sm:text-3xl text-white/80">
        Things I’ve made trying to put my dent in the universe.
      </p>
      <div className="projects w-full flex sm:flex-nowrap flex-wrap justify-center gap-10">
        {projectsData.map((project) => (
          <Project key={project.title} {...project} />
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
