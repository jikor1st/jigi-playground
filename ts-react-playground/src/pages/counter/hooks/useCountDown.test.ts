import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderHook, act } from "@testing-library/react-hooks";
import useCountDown from "./useCountDown";

describe("useCountDown", () => {
  it("props옵션 countStart을 테스트합니다.", () => {
    const { result } = renderHook(() =>
      useCountDown({
        countStart: 100,
        intervalMS: 1000,
      })
    );
    expect(result.current.count).toBe(100);
  });

  it("startCountDown 메서드 동작을 확인합니다.", () => {
    jest.useFakeTimers();

    const { result } = renderHook(() =>
      useCountDown({
        countStart: 100,
        intervalMS: 1000,
      })
    );

    act(() => result.current.startCountDown());
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(result.current.count).toBe(98);
  });

  it("props옵션 isIncrease=true, startCountDown 동작을 확인합니다.", () => {
    jest.useFakeTimers();

    const { result } = renderHook(() =>
      useCountDown({
        countStart: 100,
        intervalMS: 1000,
        isIncrease: true,
      })
    );

    act(() => result.current.startCountDown());
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(result.current.count).toBe(102);
  });

  it("props옵션 intervalMS 변경 후 동작을 확인합니다.", () => {
    jest.useFakeTimers();

    const { result } = renderHook(() =>
      useCountDown({
        countStart: 100,
        intervalMS: 100,
      })
    );

    act(() => result.current.startCountDown());
    act(() => {
      jest.advanceTimersByTime(200);
    });
    expect(result.current.count).toBe(98);
  });
});
