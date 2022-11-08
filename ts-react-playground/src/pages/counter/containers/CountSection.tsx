import useCountDown from "../hooks/useCountDown";
const CountSection = () => {
  const { count, startCountDown, resetCountDown } = useCountDown({
    countStart: 100,
    countStop: 102,
    intervalMS: 1000,
  });
  return (
    <div>
      <strong data-testid="test-count">{count}</strong>
      <button onClick={startCountDown}>start count down</button>
      <button onClick={resetCountDown}>reset count down</button>
      <p>test</p>
    </div>
  );
};

export default CountSection;
