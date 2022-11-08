import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderHook } from "@testing-library/react-hooks";
import useCountDown from "../hooks/useCountDown";

import CountSection from "./CountSection";
describe("<CountSection/>", () => {
  it("스냅샷 매칭", () => {
    const utils = render(<CountSection />);
    expect(utils.container).toMatchSnapshot();
  });
  it("", () => {});
});
