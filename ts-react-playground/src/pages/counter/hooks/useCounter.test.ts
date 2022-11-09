import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderHook, act } from "@testing-library/react-hooks";
import useCounter from "./useCounter";

describe("useCounter", () => {
  it("useCounter hook의 initialCount 값을 테스트합니다.", () => {
    const { result } = renderHook(() => useCounter(100));

    expect(result.current.count).toBe(100);
  });

  it("useCounter hook의 increase 메서드를 테스트합니다.", () => {
    const { result } = renderHook(() => useCounter(100));

    act(() => result.current.increase());

    expect(result.current.count).toBe(101);
  });

  it("useCounter hook의 decrease 메서드를 테스트합니다.", () => {
    const { result } = renderHook(() => useCounter(100));

    act(() => result.current.decrease());

    expect(result.current.count).toBe(99);
  });

  it("useCounter hook의 reset 메서드를 테스트합니다.", () => {
    const { result } = renderHook(() => useCounter(100));

    act(() => {
      result.current.increase();
      result.current.increase();
      result.current.reset();
    });

    expect(result.current.count).toBe(100);
  });
});
