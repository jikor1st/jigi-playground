import { useState } from "react";
const useCounter = (initialCount: number) => {
  const [count, setCount] = useState(initialCount);

  const increase = () => setCount((prev) => ++prev);
  const decrease = () => setCount((prev) => --prev);
  const reset = () => setCount(initialCount);

  return {
    count,
    increase,
    decrease,
    reset,
  };
};

export default useCounter;
