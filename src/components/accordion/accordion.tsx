import React from "react";
import { SubItem } from "./accordion.types";

type Props = {
  title:string;
  description?:string;
  subItems:SubItem[];
  openIcon?:string;
  closeIcon?:string;
};

export const Accordion = ({
  title,
  description,
  subItems,
  openIcon,
  closeIcon,
  }: Props): JSX.Element => {

  return (
      <>
      </>
  )
}

