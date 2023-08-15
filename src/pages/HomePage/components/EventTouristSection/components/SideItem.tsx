import React from "react";
import "./SideItem.scss";
import { SectionHeader } from "../../../../../components/SectionHeader/SectionHeader";
import { Button } from "../../../../../components/Button/Button";

interface SideItemProps {
  topTitle: string;
  h2Title: string;
  paragraphTitle1: string;
  paragraphTitle2: string;
  paragraphTitle3: string;
}

export const SideItem = (props: SideItemProps) => {
  return (
    <div className="side-item">
      <SectionHeader topTitle={props.topTitle} bottomTitle={props.h2Title} />
      <article>
        <p>{props.paragraphTitle1}</p>
        <p>{props.paragraphTitle2}</p>
        <p>{props.paragraphTitle3}</p>
      </article>
      <Button url={"main"} className={"btn unfill"} name={"подробнее"} />
    </div>
  );
};
