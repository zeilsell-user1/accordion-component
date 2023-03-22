
import { AccordionItem, AccordionSubItem } from "../accordion";

const subItem1: AccordionSubItem = {
    key: "subitem1",
    enabled: true,
    title: "First option",
    description: "this is subitem description 1",
    url: "https://www.bbc.co.uk",
  };
  
  const subItem2: AccordionSubItem = {
    key: "subitem2",
    enabled: true,
    title: "Second option",
    description: "this is subitem description 2",
    url: "https://www.bbc.co.uk/sport",
  };
  
  const subItem3: AccordionSubItem = {
    key: "subitem3",
    enabled: true,
    title: "Third option",
    description: "this is subitem description 3",
    url: "https://www.bbc.co.uk/news",
  };
  
  const subItem4: AccordionSubItem = {
    key: "subitem4",
    enabled: true,
    title: "Fourth option to be listed",
    description: "Another bit of text as a description",
    url: "https://www.bbc.co.uk",
  };
  
  const subItem5: AccordionSubItem = {
    key: "subitem5",
    enabled: true,
    title: "Fifth option",
    description: "this is subitem description 5",
    url: "https://www.bbc.co.uk/sport",
  };
  
  const subItem6: AccordionSubItem = {
    key: "subitem6",
    enabled: true,
    title: "Sixth option",
    url: "https://www.bbc.co.uk/news",
  };
  
  const subItemList1: AccordionSubItem[] = [subItem1, subItem2, subItem3];
  const subItemList2: AccordionSubItem[] = [subItem4, subItem5, subItem6];
  
  const item1: AccordionItem = {
    key: "item1",
    enabled: true,
    title: "First Top",
    description: "This is a long description",
    subItems: subItemList1,
  };
  
  const item2: AccordionItem = {
    key: "item2",
    enabled: true,
    title: "Second Top",
    subItems: subItemList2,
    url: "https://www.bbc.co.uk/news",
  };
  
  const item3: AccordionItem = {
    key: "item3",
    enabled: true,
    title: "Third Top",
    description: "not cool stuff",
    url: "https://www.bbc.co.uk/news",
  };
  
  const item4: AccordionItem = {
    key: "item4",
    enabled: false,
    title: "not enabled",
    description: "should not appear",
    url: "https://www.bbc.co.uk/news",
  };

export const itemList: AccordionItem[] = [item1, item2, item3, item4];
