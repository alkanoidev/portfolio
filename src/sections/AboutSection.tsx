import SocialLink from "components/SocialLink";
import PrimaryButton from "components/buttons/PrimaryButton";
import SecondaryButton from "components/buttons/SecondaryButton";

export default function () {
  return (
    <div
      className="h-full w-full flex flex-col justify-center items-center mt-96 sm:px-0 px-2"
      id="about-section"
    >
      <div className="flex w-full max-w-5xl justify-center gap-4">
        <div className="w-2/3 bg-deep-primary p-6 rounded-3xl">
          <h1 className="text-4xl font-bold leading-normal">
            I’m Spencer Sharp. I live in New York City, where I design the
            future.
          </h1>
          <p className="text-zinc-400 mt-4">
            I’ve loved making things for as long as I can remember, and wrote my
            first program when I was 6 years old, just two weeks after my mom
            brought home the brand new Macintosh LC 550 that I taught myself to
            type on. <br /> <br />
            The only thing I loved more than computers as a kid was space. When
            I was 8, I climbed the 40-foot oak tree at the back of our yard
            while wearing my older sister’s motorcycle helmet, counted down from
            three, and jumped — hoping the tree was tall enough that with just a
            bit of momentum I’d be able to get to orbit. <br /> <br />I spent
            the next few summers indoors working on a rocket design, while I
            recovered from the multiple surgeries it took to fix my badly broken
            legs. It took nine iterations, but when I was 15 I sent my dad’s
            Blackberry into orbit and was able to transmit a photo back down to
            our family computer from space.
          </p>

          <h2>Technologies</h2>

          <p>Besides web dev i do android</p>
          <div className="flex max-w-fit gap-4">
            <PrimaryButton>Contact Me</PrimaryButton>
            <SecondaryButton>Resume</SecondaryButton>
          </div>
        </div>
        <div className="w-1/3 flex flex-col gap-4">
          <div className="bg-deep-primary h-1/3 w-full rounded-3xl flex flex-col gap-2 p-2 items-center">
            <h1>Self Learner</h1>
            <img
              src="google.svg"
              alt="book with a title of google"
              className="h-44 mx-auto"
            />
          </div>
          <div className="bg-deep-primary h-1/3 w-full rounded-3xl flex flex-col gap-2 p-2 items-center">
            <h1>Passionate</h1>
            <img
              src="srce.svg"
              alt="book with a title of google"
              className="h-40 mx-auto"
            />
          </div>
          <div className="bg-deep-primary h-1/3 w-full rounded-3xl flex flex-col gap-2 p-2 items-center">
            <h1>Creativity</h1>
            <img
              src="lampa.svg"
              alt="book with a title of google"
              className="h-52 mx-auto pb-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
