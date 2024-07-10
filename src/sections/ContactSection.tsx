import IconButton from "components/ui/buttons/IconButton";
import OutlinedButton from "components/ui/buttons/OutlinedButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import classNames from "utils/classNames";
import FilledButton from "components/ui/buttons/FilledButton";
import DialogBasic from "components/ui/DialogBasic";

export default function ContactSection() {
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(e.target as HTMLFormElement);

    const urlSearchParams = new URLSearchParams(
      [...formData].map(([key, value]) => [key, value as string]),
    );

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: urlSearchParams.toString(),
    })
      .then(() => {
        setIsOpen(true);
        form.reset();
      })
      .catch((error) => {});
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      gsap.to(".box", {
        scale: 1,
        opacity: 1,
        ease: "power1.easeIn",
        duration: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        stagger: {
          amount: 1,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="mb-4 mt-8 flex h-full flex-col items-center justify-center px-2 md:px-0"
      id="contact"
      ref={container}
    >
      <DialogBasic
        title="Message Sent!"
        body="Thanks for reaching out to me. I'll get back to you as soon as possible."
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mx-auto h-8 w-8 stroke-secondary-light dark:stroke-secondary-dark"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        }
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className="w-full max-w-5xl">
        <div
          className={classNames(
            "box w-full scale-95 space-y-4 rounded-4xl p-6 opacity-0 md:rounded-5xl md:p-8",
            "bg-surface-light text-on-surface-light dark:bg-surface-dark dark:text-on-surface-dark",
          )}
        >
          <h1 className="text-3xl font-bold md:text-4xl">
            <span className="font-pilowlava">G</span>et In Touch
          </h1>
          <p className="text-xl md:text-2xl">
            I would love to hear from you and discuss any potential
            opportunities or collaborations.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-10">
            <IconButton
              href="https://www.linkedin.com/in/filip-ivanovic-60ab98242"
              title="LinkedIn"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-primary-light dark:fill-primary-dark"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              }
            />
            <IconButton
              href="https://github.com/alkanoidev"
              title="GitHub"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-primary-light dark:fill-primary-dark"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              }
            />
            <div className="hidden sm:block">
              <OutlinedButton
                href="mailto:alkanoidev@gmail.com"
                title="alkanoidev@gmail.com"
              />
            </div>
            <div className="block sm:hidden">
              <IconButton
                href="mailto:alkanoidev@gmail.com"
                title="alkanoidev@gmail.com"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 fill-primary-light dark:fill-primary-dark"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
        <form name="contact" method="POST" data-netlify="true" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>
        <form
          name="contact"
          onSubmit={handleSubmit}
          data-netlify="true"
          className="w-full space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="block w-full space-x-0 space-y-6 sm:inline-flex sm:space-x-4 sm:space-y-0">
            <input
              className={classNames(
                "w-full rounded-3xl p-6 text-lg transition md:rounded-4xl md:p-8",
                "bg-surface-light text-on-surface-light dark:bg-surface-dark dark:text-on-surface-dark",
                "border-2 border-outline-light dark:border-outline-dark",
                "focus:border-2 focus:border-primary-light focus:outline-none focus:placeholder:text-transparent dark:focus:border-primary-dark",
                "box scale-95 opacity-0 duration-[0ms]",
              )}
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              className={classNames(
                "w-full rounded-3xl p-6 text-lg transition md:rounded-4xl md:p-8",
                "bg-surface-light text-on-surface-light dark:bg-surface-dark dark:text-on-surface-dark",
                "border-2 border-outline-light dark:border-outline-dark",
                "focus:border-2 focus:border-primary-light focus:outline-none focus:placeholder:text-transparent dark:focus:border-primary-dark",
                "box scale-95 opacity-0 duration-[0ms]",
              )}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div
            className={classNames(
              "relative z-0 w-full rounded-4xl pb-20 transition md:rounded-5xl",
              "bg-surface-light dark:bg-surface-dark",
              isTextareaFocused
                ? "border-2 border-primary-light outline-none dark:border-primary-dark"
                : "border-2 border-outline-light dark:border-outline-dark",
              "box scale-95 opacity-0 duration-[0ms]",
            )}
          >
            <textarea
              className={classNames(
                "mb-1 w-full resize-none rounded-4xl p-6 text-lg transition md:rounded-5xl md:p-8",
                "bg-surface-light text-on-surface-light dark:bg-surface-dark dark:text-on-surface-dark",
                "focus:outline-none focus:placeholder:text-transparent",
              )}
              name="message"
              placeholder="Message"
              onFocus={() => setIsTextareaFocused(true)}
              onBlur={() => setIsTextareaFocused(false)}
              rows={6}
              required
            />
            <div
              className={classNames(
                "absolute -bottom-[2px] -right-[2px] z-10 rounded-tl-4xl bg-light p-4 transition md:rounded-tl-3xl dark:bg-dark",
                isTextareaFocused
                  ? "border-b-2 border-l-2 border-r-2 border-t-2 border-b-light border-l-primary-light border-r-light border-t-primary-light dark:border-b-dark dark:border-l-primary-dark dark:border-r-dark dark:border-t-primary-dark"
                  : "border-b-2 border-l-2 border-r-2 border-t-2 border-b-light border-l-outline-light border-r-light border-t-outline-light dark:border-b-dark dark:border-l-outline-dark dark:border-r-dark dark:border-t-outline-dark",
              )}
            >
              <FilledButton
                title="Send"
                type="submit"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className="h-6 w-6 stroke-on-primary-light dark:stroke-on-primary-dark"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
