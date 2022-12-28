import React from "react";
import { render, screen } from "@testing-library/react";
import { Accordion, SubItem } from "../components/accordion";

describe("CrossSellTile component", () => {
  it("should render", () => {
    const subItem1:SubItem = {
      rank:1,
      title:"first option",
      description:"this is second level description 1",
      url:"https://www.bbc.co.uk"
    };

    const subItem2:SubItem = {
      rank:3,
      title:"third option",
      description:"this is second level description 3",
      url:"https://www.bbc.co.uk/sport"
    };

    const subItem3:SubItem = {
      rank:2,
      title:"second option",
      description:"this is second level description 2",
      url:"https://www.bbc.co.uk/news"
    }

    const subItemList:SubItem[] = [subItem1, subItem2, subItem3];

    const container = render(<Accordion  
      title="top-option"
      description="This is a top level description"
      subItems={subItemList}
    />);
    
    expect(container).toMatchSnapshot();
  });
});
