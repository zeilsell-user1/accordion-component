import "./styles.css";

import type { AccordionItem } from "./accordion.types";
import { AccordionNode } from "./accordion-node";

interface Props {
  items: AccordionItem[];
  background?: string;
  color?: string;
  backgroundDesc?: string;
  colorDesc?: string;
}

export const Accordion = ({
  items,
  background,
  color,
  backgroundDesc,
  colorDesc,
}: Props): JSX.Element => {
  const renderItem = (item: AccordionItem): JSX.Element => {
    if (!item?.enabled) {
      return <div key={item.key} />;
    }

    return (
      <div key={item.key}>
        <AccordionNode
          item={item}
          backgroundDesc={backgroundDesc}
          colorDesc={colorDesc}
        />
      </div>
    );
  };

  return (
    <div
      className="accordion-container"
      style={{ background: background, color: color }}
    >
      {items ? items.map((item) => renderItem(item)) : <div />}
    </div>
  );
};
