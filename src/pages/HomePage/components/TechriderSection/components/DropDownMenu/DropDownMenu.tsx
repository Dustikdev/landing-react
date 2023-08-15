import React from "react";
import "./DropDownMenu.scss";
import dropdownArrow from "./assets/dropdownArrow.svg";

interface DropDownMenuProps {
  content: string;
  name: string;
}

export const DropDownMenu = (props: DropDownMenuProps) => {
  return (
    <div className="dropdown-menu">
      <div className="top-lane">
        {props.name}
        <img src={dropdownArrow} alt="dropdownArrow"/>
      </div>
      <div className="content">{props.content}</div>
    </div>
  );
};
