import useCountDown from "../hooks/useCountDown";
const CountSection = () => {
  const { count, startCountDown, resetCountDown } = useCountDown({
    countStart: 100,
    countStop: 102,
    intervalMS: 1000,
  });
  return (
    <div>
      <strong>{count}</strong>
      <button onClick={startCountDown}>start count down</button>
      <button onClick={resetCountDown}>reset count down</button>
    </div>
  );
};

export default CountSection;
