import { render } from "@testing-library/react";
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
