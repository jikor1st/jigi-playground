import {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  Dispatch,
  useMemo,
} from "react";
import useCounter from "../counter/hooks/useCounter";

type Action = {
  increase(): void;
  decrease(): void;
};

const CounterValueContext = createContext<number | null>(null);
const CounterActionsContext = createContext<Action | null>(null);
const CounterProvider = ({ children }: PropsWithChildren) => {
  const [counter, setCounter] = useState(1);
  const actions = useMemo(
    () => ({
      increase() {
        setCounter((prev) => prev + 1);
      },
      decrease() {
        setCounter((prev) => prev - 1);
      },
    }),
    []
  );
  return (
    <CounterActionsContext.Provider value={actions}>
      <CounterValueContext.Provider value={counter}>
        {children}
      </CounterValueContext.Provider>
    </CounterActionsContext.Provider>
  );
};
const useCounterValue = () => {
  const value = useContext(CounterValueContext);
  if (value === undefined) {
    throw new Error("useCounterState should be used within CounterProvider");
  }
  return value;
};
const useCounterActions = () => {
  const value = useContext(CounterActionsContext);
  if (value === undefined) {
    throw new Error("useCounterState should be used within CounterProvider");
  }
  return value;
};

/**
 * context 커스텀 hook 사용
 * @returns useContext(MyContext)
 */
// const useMyContext = () => {
//   // 기본 값을 보여주지 않고 오류를 띄워서 개발자가 고치도록 명시
//   const value = useContext(MyContext);
//   if (value === undefined || value === null) {
//     throw new Error("useMyContext should be used within MyContext.Provider");
//   }
//   return value;
// };
const ContextApiPage = () => {
  return (
    /**
     *  Context 객체 안에는 provider라는 컴포넌트가 들어있습니다.
     * 컴포넌트간에 공유하고자 하는 값을 value라는 Props로 설정
     */
    <CounterProvider>
      <Value />
      <Buttons />
    </CounterProvider>
  );
};

const Value = () => {
  const counter = useCounterValue();
  return <h1>{counter}</h1>;
};
const Buttons = () => {
  const actions = useCounterActions();

  return (
    <div>
      <button onClick={actions?.increase}>+</button>
      <button onClick={actions?.decrease}>-</button>
    </div>
  );
};

export default ContextApiPage;
