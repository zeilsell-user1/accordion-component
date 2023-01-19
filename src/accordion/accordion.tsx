import { AccordionItem } from "./accordion-item";
import { Item } from "./accordion.types";
import { AccordionContainer } from "./accordion.styles";

type Props = {
  items: Item[];
  openIcon: string;
  closeIcon?: string;
};

const renderItem = (
  item: Item,
  index: number,
  openIcon: string,
  closeIcon?: string
) => {
  const linkKey = "topM3".concat(index.toString());

  if (!item || !item.enabled) {
    return "empty" + index;
  }

  return (
    <div key={linkKey}>
      <AccordionItem item={item} openIcon={openIcon} closeIcon={closeIcon} />
    </div>
  );
};

export const Accordion = ({
  items,
  openIcon,
  closeIcon,
}: Props): JSX.Element => {
  return (
    <>
      <div style={AccordionContainer}>
        {items.map((item, index) =>
          renderItem(item, index, openIcon, closeIcon)
        )}
      </div>
    </>
  );
};
