import "./styles.css";

import type { Item } from "./accordion.types";
import { AccordionItem } from "./accordion-item";

interface Props {
  items: Item[];
}

const renderItem = (
  item: Item,
  index: number,
): JSX.Element => {

  if (!item?.enabled) {
    return (<div><p>{index}</p></div>);
  }

  return (
    <div key={item.key}>
      <AccordionItem item={item} />
    </div>
  );
};

export const Accordion = ({
  items,
}: Props): JSX.Element => {
  return (
    <div className="accordion-container">
      {items.map((item, index) => renderItem(item, index))}
    </div>
  );
};
