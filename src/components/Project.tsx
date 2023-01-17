import GrainSvg from "./GrainSvg";
import SecondaryButton from "./buttons/SecondaryButton";

export default function Project({ background }: { background: string }) {
  return (
    <div
      className={`project rounded-3xl ${background} bg-cover bg-center max-w-3xl md:mx-0 mx-5 relative mb-14 flex`}
    >
      <GrainSvg
        frequency={0.8}
        borderRadius="rounded-3xl"
        opacity="opacity-20"
      />
      <div className="rounded-3xl flex sm:flex-row flex-col-reverse relative gap-2">
        <div className="flex flex-col py-6 pl-6">
          <svg
            width="52"
            height="13"
            viewBox="0 0 52 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block"
          >
            <circle cx="6.07108" cy="6.48529" r="6" fill="#1a1a1a" />
            <circle cx="26" cy="6" r="6" fill="#1a1a1a" />
            <path
              d="M52 6.00003C52 9.31373 49.3137 12 46 12C42.6863 12 40 9.31373 40 6.00003C40 2.68632 42.6863 2.51741e-05 46 2.51741e-05C49.3137 2.51741e-05 52 2.68632 52 6.00003Z"
              fill="#1a1a1a"
            />
          </svg>
          <h1 className="text-2xl mt-2">Title</h1>
          <p className="text-base mt-2">
            Lorem ipsum dolor sit amet des kes dir hex adsadd da sd asdaasdasdas
            dasdasdasd dasdsad adasd
          </p>
          <div className="sm:mt-auto mt-4 flex gap-2">
            <SecondaryButton>Live</SecondaryButton>
            <SecondaryButton>Code</SecondaryButton>
            <SecondaryButton>More</SecondaryButton>
          </div>
        </div>
        <img
          src="assets/blurry-gradient-haikei.svg"
          className="thumbnail h-full sm:w-1/2 w-full rounded-3xl"
          alt=""
        />
      </div>
    </div>
  );
}
