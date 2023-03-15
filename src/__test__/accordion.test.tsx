import { render } from "@testing-library/react";

import { itemList } from "../__mocks__/test-menu";
import { Accordion } from "../accordion";

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
