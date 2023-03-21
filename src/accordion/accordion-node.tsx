import "./styles.css";

import { useState } from "react";

import type { AccordionItem, AccordionSubItem } from "./accordion.types";

interface AccordionNodeProps {
  item: AccordionItem;
}

export const AccordionNode = ({ item }: AccordionNodeProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  const renderSubMenu = (subItem: AccordionSubItem): JSX.Element => {
    if (!subItem?.enabled || !subItem?.url) {
      return <div />;
    }

    if (subItem.description === undefined || subItem.description === null) {
      subItem.description = "";
    }

    return (
      <div key={subItem.key} className={"accordion-dropdown-container"}>
        <p className={"accordion-dropdown-text"}></p>
        <p className={"accordion-tropdown-text"}>
          <a href={subItem.url}>{subItem.title.substring(0, 15)}</a>
        </p>
      </div>
    );
  };

  const toggleVisible = (): void => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {item.url ? (
        <div className="accordion-item-container">
          <p className={"accordion-dropdown-text"}>
            <a href={item.url}>{item.title.substring(0, 15)}</a>
          </p>
        </div>
      ) : (
        <div className="accordion-item-container">
          <p className={"accordion-dropdown-text"}>
            {item.title.substring(0, 15)}
          </p>
          <div className={"accordian-button"} onClick={toggleVisible}>
            {isVisible ? "▲" : "▼"}
          </div>
        </div>
      )}
      <div>
        {isVisible && item.subItems && (
          <div>{item.subItems.map((subItem) => renderSubMenu(subItem))}</div>
        )}
      </div>
    </div>
  );
};
