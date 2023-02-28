export default function GrainSvg({
  frequency,
  opacity,
  borderRadius,
}: {
  frequency: number;
  opacity?: string;
  borderRadius?: string;
}) {
  return (
    <svg
      className={`pointer-events-none isolate 
      ${opacity !== "" ? opacity : "opacity-70"}  
      ${borderRadius}
      mix-blend-soft-light w-full h-full absolute top-0 left-0`}
    >
      <filter id="filter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency={frequency}
          numOctaves="4"
          stitchTiles="stitch"
        ></feTurbulence>
      </filter>
      <rect width="100%" height="100%" filter="url(#filter)"></rect>
    </svg>
  );
}
