# accordion-component

this is a simple accordion component to be used in react/next projects

The component is invoked with an array of Item. Each Item is a top level menu item. Each menu have an optional link, and an optional list of Subitems.

`<Accordion items={itemList} background={"grey"} color={"red"} backgroundDesc={"red"} colorDesc={"yellow"} />`

background is the colour to be applied to the accordion div. If it is not included then it inherits from the parent.

color is the color to be applied to text int he accordion. If it is not inlcuded then it inherits from the parent.

backgroundDesc and colorDesc are the background and font colour for the pop up description. If not inlcuded then #5d637d and #cac5d4 are used.

The item list types are below - key is a unique value for each element

```
interface AccordionSubItem {
  key: string;
  enabled: boolean;
  title: string;
  description?: string;
  url: string;
}

interface AccordionItem {
  key: string;
  enabled: boolean;
  title: string;
  description?: string;
  subItems?: AccordionSubItem[];
  url?: string;
}
```

The component used rollup to create the library. A banner of 'use client' is added to be compatible with the latest nextjs release.
