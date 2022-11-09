import { useCallback, useState } from "react";
import useCounter from "./useCounter";
import useInterval from "./useInterval";

export interface UseCountDownOptions {
  countStart: number;
  intervalMS: number;
  countStop?: number;
  isIncrease?: boolean;
}
const useCountDown = ({
  countStart,
  intervalMS,
  countStop,
  isIncrease = false,
}: UseCountDownOptions) => {
  const [isRunning, setIsRunning] = useState(false);

  const { count, increase, decrease, reset } = useCounter(countStart);

  const startCountDown = useCallback(() => setIsRunning(true), []);
  const stopCountDown = useCallback(() => setIsRunning(false), []);

  const resetCountDown = () => {
    stopCountDown();
    reset();
  };

  const countDownCallback = () => {
    if (count === countStop) {
      stopCountDown();
      return;
    }

    if (isIncrease) {
      increase();
    } else {
      decrease();
    }
  };
  useInterval(countDownCallback, isRunning ? intervalMS : null);

  return { count, startCountDown, resetCountDown };
};

export default useCountDown;
