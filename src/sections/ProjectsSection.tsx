import Project from "components/Project";
import gsap from "gsap";
import { useEffect, useState } from "react";
import projectsData from "../data/projects.json";
import classNames from "utils/classNames";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(0);

  useEffect(() => {
    const timeline = gsap.timeline({});
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
  }, []);

  return (
    <div
      id="projects"
      className="mt-52 h-full flex flex-col justify-center items-center gap-10"
    >
      <h1 className="text-5xl font-bold">Projects</h1>
      <p className="text-3xl text-white/80">
        Things I’ve made trying to put my dent in the universe.
      </p>
      <div className="projects w-full flex justify-center gap-10">
        {projectsData.map((project) => (
          <Project
            selected={project.id === selectedProject}
            key={project.title}
            {...project}
          />
        ))}
      </div>
      <div className="flex w-full h-24 gap-6">
        <button
          onClick={() => {
            setSelectedProject((prev) => (prev !== 0 ? --prev : 2));
            console.log(selectedProject);
          }}
          className={classNames(
            "bg-deep-secondary border-secondary/20 border-2 rounded-3xl flex w-full justify-center items-center",
            "hover:bg-secondary/20 hover:border-secondary transition arrows"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.2}
            className="w-20 h-20 stroke-zinc-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
        </button>
        <button
          onClick={() => {
            setSelectedProject((prev) => (prev !== 2 ? ++prev : 0));
            console.log(selectedProject);
          }}
          className={classNames(
            "bg-deep-secondary border-secondary/20 border-2 rounded-3xl flex w-full justify-center items-center",
            "hover:bg-secondary/20 hover:border-secondary transition arrows"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.2}
            className="w-20 h-20 stroke-zinc-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
      <p>check my other projects on github.</p>
    </div>
  );
}
