import React from "react";
import "./Button.scss";

interface ButtonProps {
  url: string;
  className: string;
  name: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <a href={props.url} className={props.className}>
      {props.name}
    </a>
  );
};
