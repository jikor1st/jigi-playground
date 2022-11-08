import { useEffect, useLayoutEffect, useRef } from "react";

/**
 *
 * @param callback 콜백 함수를 지정해줍니다.
 * @param intervalMS 타이머 인터벌을 지정해줍니다.
 */
const useInterval = (callback: () => void, intervalMS: number | null) => {
  const savedCallback = useRef(callback);

  useLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!intervalMS) return;

    const intervalId = setInterval(() => {
      savedCallback.current();
    }, intervalMS);

    return () => clearTimeout(intervalId);
  }, [intervalMS]);
};

export default useInterval;
