import SecondaryButton from "./buttons/SecondaryButton";

export default function Project({bgGradientName} : {bgGradientName: string}) {
  
  return (
    <div className="flex items-center w-full">
        <div className={`rounded-3xl bg-[url('${bgGradientName}')] bg-cover bg-center p-8 max-w-sm relative`}>
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet des kes dir hex adsadd da sd asdaasdasdas
            dasdasdasd dasdsad adasd
          </p>
          <SecondaryButton>Live</SecondaryButton>
          <SecondaryButton>Code</SecondaryButton>
          <SecondaryButton>More</SecondaryButton>
        </div>
    </div>
  );
}
