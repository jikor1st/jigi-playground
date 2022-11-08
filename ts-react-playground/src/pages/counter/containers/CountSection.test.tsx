import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderHook, act } from "@testing-library/react-hooks";
import useCountDown from "../hooks/useCountDown";
import CountSection from "./CountSection";

describe("<CountSection/>", () => {
  it("스냅샷 매칭", () => {
    const utils = render(<CountSection />);
    expect(utils.container).toMatchSnapshot();
  });
  it("시작/리셋 버튼 있는지 확인합니다.", () => {
    const utils = render(<CountSection />);
    utils.getByText("start count down");
    utils.getByText("reset count down");
  });
});

describe("useCountDown", () => {
  it("useCountDown훅의 startCountDown 동작을 확인합니다.", () => {
    jest.useFakeTimers();

    const { result } = renderHook(() =>
      useCountDown({
        countStart: 100,
        countStop: 102,
        intervalMS: 1000,
      })
    );

    act(() => result.current.startCountDown());
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(result.current.count).toBe(102);
  });
});
