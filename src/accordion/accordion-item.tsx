"use client";

import "./styles.css";

import { useState } from "react";

import type { Item, SubItem } from "./accordion.types";

interface AccordionItemProps {
  item: Item;
}

//const GradiantOverlay: CSS.Properties =   {
//  background: 'linear-gradient(180deg, rgba(2, 0, 36, 0) 0%, #000 100%)',
//  border-radius: '15px',
//  height: '100%',
//};

export const AccordionItem = ({
  item,
}: AccordionItemProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  const renderSubMenu = (subItem: SubItem, index: number): JSX.Element => {
    
    if (!subItem?.enabled || !subItem?.url) {
      return (<div><p>{index}</p></div>);
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
        <p className={"accordion-dropdown-text"}>
          {subItem.description.substring(0, 30)}
        </p>
      </div>
    );
  };

  const toggleVisible = ():void => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div>
        {item.url ? (
          <div className="accordion-item-container">
            <p className={"accordion-dropdown-text"}>
              <a href={item.url}>{item.title.substring(0, 15)}</a>
            </p>
            <p className={"accordion-dropdown-text"}>
              {item.description?.substring(0, 30)}
            </p>
          </div>
        ) : (
          <div className="accordion-item-container">
            <p className={"accordion-dropdown-text"}>{item.title.substring(0, 15)}</p>
            <p className={"accordion-dropdown-text"}>
              {item.description?.substring(0, 30)}
            </p>
            <div className={"accordian-button"} onClick={toggleVisible}>
              {isVisible ? "▲" : "▼"}
            </div>
          </div>
        )}
        <div>
          {isVisible && item.subItems && (
            <div>
              {item.subItems.map((subItem, index) =>
                renderSubMenu(subItem, index)
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
