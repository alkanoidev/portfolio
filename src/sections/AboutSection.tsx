import PrimaryButton from "components/buttons/PrimaryButton";
import SecondaryButton from "components/buttons/SecondaryButton";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import classNames from "utils/classNames";

export default function AboutSection() {
  const container = useRef<HTMLDivElement>(null);
  const timeline = gsap.timeline({
    delay: 0.5,
    scrollTrigger: {
      trigger: "#about",
      start: "top top",
    },
  });

  useEffect(() => {
    let ctx = gsap.context(() => {
      timeline.to(".box", {
        scale: 1,
        opacity: 1,
        ease: "power2.easeOut",
        duration: 0.25,
        stagger: {
          amount: 0.3,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="h-full w-full flex flex-col justify-center items-center gap-10 mt-96 md:px-0 px-2"
      ref={container}
      id="about"
    >
      <div className="flex md:flex-row flex-col w-full max-w-5xl justify-center gap-4">
        <div
          className={classNames(
            "box w-full md:w-2/3 flex-col flex bg-deep-sky rounded-5xl p-8",
            "opacity-0 scale-95"
          )}
        >
          <h1 className="text-sky-700 text-3xl md:text-4xl font-bold">
            I’m Filip, a passionate and creative individual who thrives on
            self-learning and exploring new ideas.
          </h1>
          <div className="mt-6 space-y-7 text-lg md:px-2">
            <p className="text-zinc-400">
              I’ve loved making things for as long as I can remember, and wrote
              my first program when I was 6 years old, just two weeks after my
              mom brought home the brand new Macintosh LC 550 that I taught
              myself to type on.
            </p>
            <p className="text-zinc-400">
              The only thing I loved more than computers as a kid was space.
              When I was 8, I climbed the 40-foot oak tree at the back of our
              yard while wearing my older sister’s motorcycle helmet, counted
              down from three, and jumped — hoping the tree was tall enough that
              with just a bit of momentum I’d be able to get to orbit.
            </p>
            <p className="text-zinc-400">
              I spent the next few summers indoors working on a rocket design,
              while I recovered from the multiple surgeries it took to fix my
              badly broken legs. It took nine iterations, but when I was 15 I
              sent my dad’s Blackberry into orbit and was able to transmit a
              photo back down to our family computer from space.
            </p>
          </div>

          <h2>Technologies</h2>

          <p>Besides web dev i do android</p>
          <div className="flex max-w-fit gap-4 mt-auto">
            <PrimaryButton
              title="Contact Me"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 stroke-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                  />
                </svg>
              }
            />
            <SecondaryButton
              title="Resume"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 stroke-white group-hover:stroke-black group-focus:stroke-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>
              }
            />
          </div>
        </div>
        <div className="w-full md:w-1/3 flex md:flex-col flex-row md:gap-4 gap-2 justify-evenly">
          <CreatureCard title="Self-Learner">
            <img
              src="google.svg"
              alt="book creature named Self Learn"
              className="h-36 md:h-40"
            />
          </CreatureCard>
          <CreatureCard title="Passionate">
            <img
              src="srce.svg"
              alt="heart creature named Passion"
              className="h-36 md:h-40"
            />
          </CreatureCard>
          <CreatureCard title="Creative">
            <img
              src="lampa.svg"
              alt="light bulb creature named Creativity"
              className="h-36 md:h-40 md:pb-4"
            />
          </CreatureCard>
        </div>
      </div>
    </div>
  );
}

function CreatureCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactElement;
}) {
  return (
    <div
      className={classNames(
        "box md:h-1/3 md:w-full w-1/2 rounded-4xl md:rounded-5xl bg-deep-sky flex justify-center flex-col gap-4 text-center md:px-0 px-2 py-4",
        "opacity-0 scale-95"
      )}
    >
      <h1 className="md:text-2xl">{title}</h1>
      {children}
    </div>
  );
}
