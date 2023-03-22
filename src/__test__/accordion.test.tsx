import { render } from "@testing-library/react";

import { itemList } from "../__mocks__/test-menu";
import { Accordion } from "../accordion";

describe("Accordion component", () => {
  it("should render with default colours", () => {
    const container = render(<Accordion items={itemList} />);
    expect(container).toMatchSnapshot();
  });

  it("should render with red font", () => {
    const container = render(<Accordion items={itemList} color={"red"} />);
    expect(container).toMatchSnapshot();
  });

  it("should render with grey background", () => {
    const container = render(
      <Accordion items={itemList} background={"grey"} />
    );
    expect(container).toMatchSnapshot();
  });

  it("should render with red font on grey background", () => {
    const container = render(
      <Accordion items={itemList} background={"grey"} color={"red"} />
    );
    expect(container).toMatchSnapshot();
  });

  it("should render with red background in the description pop up", () => {
    const container = render(
      <Accordion items={itemList} backgroundDesc={"red"} />
    );
    expect(container).toMatchSnapshot();
  });

  it("should render with yellow text in the description pop up", () => {
    const container = render(
      <Accordion items={itemList} colorDesc={"yellow"} />
    );
    expect(container).toMatchSnapshot();
  });

  it("should render with red background and yellow text in the description pop up", () => {
    const container = render(
      <Accordion items={itemList} backgroundDesc={"red"} colorDesc={"yellow"} />
    );
    expect(container).toMatchSnapshot();
  });

  it("should render custom colours", () => {
    const container = render(
      <Accordion
        items={itemList}
        background={"grey"}
        color={"red"}
        backgroundDesc={"red"}
        colorDesc={"yellow"}
      />
    );
    expect(container).toMatchSnapshot();
  });
});

export const container = (): JSX.Element => <Accordion items={itemList} />;
