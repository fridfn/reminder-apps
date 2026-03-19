import { useEffect, useRef } from "react";
import AOS from "aos";

export const useAOS = ({ duration = 1000, delay = 0 }) => {
  const scrollableDivRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration,
      delay,
      mirror: true
    });

    const handleScroll = () => {
      AOS.refresh();
    };

    const scrollableDiv = scrollableDivRef.current;

    if (scrollableDiv) {
      scrollableDiv.addEventListener("scroll", handleScroll);
    }

    return () => {
      scrollableDiv?.removeEventListener("scroll", handleScroll);
    };
  }, [duration, delay]);

  return scrollableDivRef;
};