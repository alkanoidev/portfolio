import { useState, useEffect } from "react";

function useIsElementInViewPort(ref: React.RefObject<HTMLElement>) {
  const [isInViewPort, setIsInViewPort] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elementTop = ref.current!.offsetTop;
      const elementBottom = elementTop + ref.current!.clientHeight;

      const isElementInViewPort =
        elementTop < window.pageYOffset + window.innerHeight &&
        elementBottom > window.pageYOffset;

      setIsInViewPort(isElementInViewPort);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return isInViewPort;
}

export default useIsElementInViewPort;
