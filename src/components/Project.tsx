import SecondaryButton from "./buttons/SecondaryButton";

export default function Project({ background }: { background: string }) {
  return (
    <div
      className={`rounded-3xl ${background} bg-cover bg-center max-w-3xl relative mb-8`}
    >
      <svg className="pointer-events-none isolate opacity-70 mix-blend-soft-light w-full h-full absolute top-0 left-0 rounded-3xl">
        <filter id="pedroduarteisalegend">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="4"
            stitchTiles="stitch"
          ></feTurbulence>
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#pedroduarteisalegend)"
        ></rect>
      </svg>
      <div className="p-6 rounded-3xl flex sm:flex-row flex-col-reverse relative gap-2">
        <div className="flex flex-col">
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
          <div className="mt-auto flex gap-2">
            <SecondaryButton>Live</SecondaryButton>
            <SecondaryButton>Code</SecondaryButton>
            <SecondaryButton>More</SecondaryButton>
          </div>
        </div>
        <img
          src="assets/blurry-gradient-haikei.svg"
          className="h-full sm:w-1/2 w-full rounded-xl"
          alt=""
        />
      </div>
    </div>
  );
}

// content: "";
//     margin-bottom: 1rem;
//     display: block;
//     height: 0.75rem;
//     width: 0.75rem;
//     border-radius: 9999px;
//     opacity: .3;
//     box-shadow: 1.4em 0, 2.8em 0, 4.2em 0;
