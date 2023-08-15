import React from "react";
import "./Icon.scss";

interface IconProp {
  path: string;
}

export const Icon = (props: IconProp) => {
  return (
    <a href="main" target="_blank" className="icon">
      <img src={props.path} alt="icon" />
    </a>
  );
};
