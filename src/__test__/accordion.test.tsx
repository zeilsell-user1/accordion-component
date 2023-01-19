import { render } from "@testing-library/react";
import { Accordion, Item, SubItem } from "../accordion";

describe("Accordion component", () => {
  it("should render", () => {
    const subItem1: SubItem = {
      enabled: true,
      title: "First option",
      description: "this is second level description 1",
      url: "https://www.bbc.co.uk",
    };

    const subItem2: SubItem = {
      enabled: true,
      title: "Second option",
      description: "this is second level description 2",
      url: "https://www.bbc.co.uk/sport",
    };

    const subItem3: SubItem = {
      enabled: true,
      title: "Third option",
      description: "this is second level description 3",
      url: "https://www.bbc.co.uk/news",
    };

    const subItem4: SubItem = {
      enabled: true,
      title: "Fourth option",
      description: "this is second level description 4",
      url: "https://www.bbc.co.uk",
    };

    const subItem5: SubItem = {
      enabled: true,
      title: "Fifth option",
      description: "this is second level description 5",
      url: "https://www.bbc.co.uk/sport",
    };

    const subItem6: SubItem = {
      enabled: true,
      title: "Sixth option",
      description: "this is second level description 6",
      url: "https://www.bbc.co.uk/news",
    };

    const subItemList1: SubItem[] = [subItem1, subItem2, subItem3];
    const subItemList2: SubItem[] = [subItem4, subItem5, subItem6];

    const item1: Item = {
      enabled: true,
      title: "First Top Level",
      subItems: subItemList1,
    };

    const item2: Item = {
      enabled: true,
      title: "Second Top Level",
      description: "This is the second of the top level options",
      subItems: subItemList2,
    };

    const itemList: Item[] = [item1, item2];

    const container = render(
      <Accordion
        items={itemList}
        openIcon="./assets/open.svg"
        closeIcon="./assets/closed.svg"
      />
    );

    expect(container).toMatchSnapshot();
  });
});
