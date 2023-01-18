import Project from "components/Project";
import gsap from "gsap";
import { useEffect, useState } from "react";
import projectsData from "../data/projects.json";

export default function ProjectsSection() {
  const [projects, setProjects] = useState<any[]>(projectsData);
  useEffect(() => {
    const timeline = gsap.timeline({ delay: 0.5 });
    timeline.fromTo(
      ".project",
      {
        opacity: 0,
        x: -50,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".projects",
          scrub: 1,
          start: "-20% center",
          end: "80% center",
        },
        stagger: {
          amount: 1,
        },
      },
      {
        opacity: 1,
        x: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".projects",
          scrub: 1,
          start: "-20% center",
          end: "80% center",
        },
        stagger: {
          amount: 1,
        },
      }
    );
    timeline.fromTo(
      ".thumbnail",
      {
        opacity: 0,
        x: -60,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".projects",
          scrub: 1,
          start: "-20% center",
          end: "80% center",
        },
        stagger: {
          amount: 1,
        },
      },
      {
        opacity: 1,
        x: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".projects",
          scrub: 1,
          start: "-20% center",
          end: "80% center",
        },
        stagger: {
          amount: 1,
        },
      }
    );
    return () => {
      timeline.clear();
    };
  }, []);

  return (
    <div
      id="projects-section"
      className="mt-52 h-full flex flex-col justify-center items-center gap-10"
    >
      <h1 className="text-5xl font-bold z-0">Projects</h1>
      <div className="projects w-full flex flex-wrap justify-center">
        {projectsData.map((project) => (
          <Project background="bg-off-dark" key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
