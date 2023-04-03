import Project from "components/Project";
import gsap from "gsap";
import { Fragment, useEffect, useRef, useState } from "react";
import projectsData from "../data/projects.json";
import { Dialog, Transition } from "@headlessui/react";
import classNames from "utils/classNames";
import useIsElementInViewPort from "utils/hooks/useIsElementInViewPort";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const projectsSectionRef = useRef(null);
  const isInViewPort = useIsElementInViewPort(projectsSectionRef);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    const timeline = gsap.timeline({});

    if (isInViewPort) {
      document.body.classList.remove("bg-dark");
      document.body.classList.add("bg-deep-primary");
    } else {
      document.body.classList.remove("bg-deep-primary");
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
        "mt-52 h-full flex flex-col justify-center items-center gap-10",
        isOpen ? "blur-md" : "blur-none"
      )}
    >
      <h1 className="text-5xl font-bold">Projects</h1>
      <p className="text-3xl text-white/80">
        Things I’ve made trying to put my dent in the universe.
      </p>
      <div className="projects w-full flex flex-wrap justify-center gap-10">
        {projectsData.map((project) => (
          <Project
            selected={project.id === selectedProject}
            onClick={() => {
              setSelectedProject(project.id);
              openModal();
            }}
            key={project.title}
            {...project}
          />
        ))}
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <p>check my other projects on github.</p>
    </div>
  );
}
