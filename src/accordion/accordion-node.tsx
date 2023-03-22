import "./styles.css";

import { useState } from "react";
import Popup from "reactjs-popup";

import type { AccordionItem, AccordionSubItem } from "./accordion.types";

interface AccordionNodeProps {
  item: AccordionItem;
  backgroundDesc?: string;
  colorDesc?: string;
}

export const AccordionNode = ({
  item,
  backgroundDesc,
  colorDesc,
}: AccordionNodeProps): JSX.Element => {
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
        {subItem?.description ? (
          <Popup
            trigger={<div className={"accordian-button"}>🛈</div>}
            position="bottom center"
            nested
          >
            <div
              className={"info-open"}
              style={{ background: backgroundDesc, color: colorDesc }}
            >
              {subItem?.description}
            </div>
          </Popup>
        ) : (
          <div />
        )}
      </div>
    );
  };

  const toggleVisible = (): void => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className={"accordion-item-container"}>
        <p className={"accordion-dropdown-text"}>
          {item.url ? (
            <a href={item.url}>{item.title.substring(0, 15)}</a>
          ) : (
            <a>{item.title.substring(0, 15)}</a>
          )}
        </p>
        {item?.description ? (
          <Popup
            trigger={<div className={"accordian-button"}>🛈</div>}
            position="bottom center"
            nested
          >
            <div
              className={"info-open"}
              style={{ background: backgroundDesc, color: colorDesc }}
            >
              {item?.description}
            </div>
          </Popup>
        ) : (
          <div />
        )}
        {item?.subItems ? (
          <div className={"accordian-button"} onClick={toggleVisible}>
            {isVisible ? "▲" : "▼"}
          </div>
        ) : (
          <div />
        )}
      </div>
      <div>
        {isVisible && item.subItems && (
          <div>{item.subItems.map((subItem) => renderSubMenu(subItem))}</div>
        )}
      </div>
    </div>
  );
};
