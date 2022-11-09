import { useEffect, useRef } from "react";
import useCountDown from "../hooks/useCountDown";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
const CountIntersection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { count, startCountDown, resetCountDown } = useCountDown({
    countStart: 100,
    countStop: 102,
    intervalMS: 1000,
  });

  const entry = useIntersectionObserver(containerRef);
  useEffect(() => {
    console.log(entry?.isIntersecting);
  }, [entry?.isIntersecting]);
  return <div ref={containerRef}></div>;
};

export default CountIntersection;
