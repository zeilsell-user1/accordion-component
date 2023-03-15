import { render } from "@testing-library/react";
import { Accordion } from "../accordion";
import { itemList } from "../__mocks__/test-menu";

describe("Accordion component", () => {
  it("should render", () => {
    const container = render(
      <Accordion
        items={itemList}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
