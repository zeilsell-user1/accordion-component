"use client";

import { useState } from "react";
import { Item, SubItem } from "./accordion.types";
import { AccordionItemContainer, AccordianButton, AccordionSubItemContainer, } from "./accordion.styles";

type AccordionItemProps = {
  item: Item;
  openIcon: string;
  closeIcon?: string;
};

//const GradiantOverlay: CSS.Properties =   {
//  background: 'linear-gradient(180deg, rgba(2, 0, 36, 0) 0%, #000 100%)',
//  border-radius: '15px',
//  height: '100%',
//};

export const AccordionItem = ({
  item,
  openIcon,
  closeIcon,
}: AccordionItemProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  const renderSubMenu = (subItem: SubItem, index: number) => {
    const linkKey = "topM2".concat(item.title);

    if (!subItem || !subItem.enabled || !subItem.url) {
      return "empty" + index;
    }

    if (openIcon === undefined || openIcon === null) {
      openIcon = "";
    }

    if (closeIcon === undefined || closeIcon === null) {
      closeIcon = "";
    }

    return (
      <div key={linkKey}>
        <a href={subItem.url}>
          <span>
            <p>{item.title} </p>
            <p>{item.description} </p>
          </span>
        </a>
      </div>
    );
  };

  const toggleVisible = () => {
    //const toggleVisible = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div style={AccordionItemContainer}>
        <span>
          <p>{item.title} </p>
          <p>
            {item.description}{" "}
            <button style={AccordianButton} onClick={toggleVisible}>
              {isVisible ? (
                <i className="fa fa-arrow-up" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-arrow-down" aria-hidden="true"></i>
              )}
            </button>
          </p>
        </span>
        <div>
          {isVisible && (
            <div style={AccordionSubItemContainer}>
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
