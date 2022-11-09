import { useState, RefObject, useEffect } from "react";

export interface IOOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = "0%",
    freezeOnceVisible = false,
  }: IOOptions
) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: IntersectionObserverEntry[]) => {
    setEntry(entry);
  };

  useEffect(() => {
    const element = elementRef.current;
    const canUseIO = "IntersectionObserver" in window;

    if (!canUseIO) throw new Error("Can not use IntersectionObserver");
    if (!element || frozen) return;

    const options = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, options);
    observer.observe(element);

    return () => observer.disconnect();
  }, [elementRef.current, threshold, root, rootMargin, frozen]);

  return entry;
};

export default useIntersectionObserver;
