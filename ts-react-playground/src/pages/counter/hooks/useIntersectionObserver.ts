import { useState, RefObject, useEffect } from "react";

interface IOOptions extends IntersectionObserverInit {}

const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  options?: IOOptions
) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const updateEntry = ([entry]: IntersectionObserverEntry[]) => {
    setEntry(entry);
  };

  useEffect(() => {
    const element = elementRef.current;
    const canUseIO = "IntersectionObserver" in window;
    if (!element || !canUseIO) {
      throw new Error("Can not use IntersectionObserver");
    }

    const observer = new IntersectionObserver(updateEntry, options);
    observer.observe(element);

    return () => observer.disconnect();
  }, [elementRef.current, options]);

  return entry;
};

export default useIntersectionObserver;
