import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Accordion, SubItem } from "../components/accordion";

export default {
  title: "Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

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

export const MainWithSub: ComponentStory<typeof Accordion> = () => (
  <Accordion  
    title="top-option"
    description="This is a top level description"
    subItems={subItemList}
  />
);

