import React from "react";
import "./SectionHeader.scss";

interface SectionHeaderProps {
  topTitle: string;
  bottomTitle: string;
}

export const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div className="section-header">
      <div className="top-title">{props.topTitle}</div>
      <h2>{props.bottomTitle}</h2>
    </div>
  );
};
