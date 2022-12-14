import { useState } from "react";

interface LottieOptions {
  isStopped: boolean;
  isPaused: boolean;
  speed: number;
  direction: number;
}

type LottieOptionsSignature = {
  [K in keyof LottieOptions]: LottieOptions[K];
};

const DEFAULT_OPTIONS: LottieOptions = {
  isStopped: false,
  isPaused: false,
  speed: 1,
  direction: 1,
};

const useLottieOptions = (initialOptions?: Partial<LottieOptions>) => {
  const [lottieOptions, setLottieOptionsState] = useState({
    ...DEFAULT_OPTIONS,
    ...initialOptions,
  });

  const setLottieOptions = (options: Partial<LottieOptionsSignature>) =>
    setLottieOptionsState((prevState) => ({
      ...prevState,
      ...options,
    }));

  return { lottieOptions, setLottieOptions };
};

export default useLottieOptions;
