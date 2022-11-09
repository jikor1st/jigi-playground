import { useEffect } from "react";
import useCountDown, { UseCountDownOptions } from "../hooks/useCountDown";
interface CountProps extends UseCountDownOptions {
  start: boolean;
}
const CountNumber = ({
  start,
  countStart,
  intervalMS,
  countStop,
  isIncrease,
}: CountProps) => {
  const countDownOptions = { countStart, intervalMS, countStop, isIncrease };
  const { count, startCountDown, resetCountDown } =
    useCountDown(countDownOptions);

  useEffect(() => {
    if (start) {
      startCountDown();
    } else {
      resetCountDown();
    }

    return () => resetCountDown();
  }, [start]);

  return <>{count}</>;
};

export default CountNumber;
