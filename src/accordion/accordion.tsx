import "./styles.css";

import type { AccordionItem } from "./accordion.types";
import { AccordionNode } from "./accordion-node";

interface Props {
  items: AccordionItem[];
}

const renderItem = (item: AccordionItem): JSX.Element => {
  if (!item?.enabled) {
    return <div />;
  }

  return (
    <div key={item.key}>
      <AccordionNode item={item} />
    </div>
  );
};

export const Accordion = ({ items }: Props): JSX.Element => {
  return (
    <div className="accordion-container">
      {items ? items.map((item) => renderItem(item)) : <div />}
    </div>
  );
};
