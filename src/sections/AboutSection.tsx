import PrimaryButton from "components/buttons/PrimaryButton";
import SecondaryButton from "components/buttons/SecondaryButton";

export default function () {
  return (
    <div
      className="h-full w-full flex flex-col justify-center items-center gap-10 mt-96 md:px-0 px-2"
      id="about"
    >
      <div className="flex md:flex-row flex-col w-full max-w-5xl justify-center gap-4">
        <div className="box w-full md:w-2/3 flex-col flex bg-deep-sky rounded-4xl p-8">
          <h1 className="text-3xl md:text-4xl font-bold leading-normal">
            I’m Spencer Sharp. I live in New York City, where I design the
            future.
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
            <PrimaryButton title="Contact Me" />
            <SecondaryButton title="Resume" />
          </div>
        </div>
        <div className="w-full md:w-1/3 flex md:flex-col flex-row md:gap-4 gap-2 justify-evenly">
          <div className="box md:h-1/3 md:w-full w-1/2 rounded-4xl bg-deep-sky flex justify-center flex-col gap-4 text-center md:px-0 px-2 py-4">
            <h1 className="md:text-2xl">Self Learner</h1>
            <img
              src="google.svg"
              alt="book creature named Self Learn"
              className="h-36 md:h-40"
            />
          </div>
          <div className="box md:h-1/3 md:w-full w-1/2 rounded-4xl bg-deep-sky flex justify-center flex-col gap-4 text-center md:px-0 px-2 py-4">
            <h1 className="md:text-2xl">Passionate</h1>
            <img
              src="srce.svg"
              alt="heart creature named Passion"
              className="h-36 md:h-40"
            />
          </div>
          <div className="box md:h-1/3 md:w-full w-1/2 rounded-4xl bg-deep-sky flex justify-center flex-col gap-4 text-center md:px-0 px-2 py-4">
            <h1 className="md:text-2xl">Creativity</h1>
            <img
              src="lampa.svg"
              alt="light bulb creature named Creativity"
              className="h-40 md:h-52 md:pb-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
