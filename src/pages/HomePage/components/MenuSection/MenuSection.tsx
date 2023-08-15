import React from "react";
import "./MenuSection.scss";
import { Button } from "../../../../components/Button/Button";
import { SectionHeader } from "../../../../components/SectionHeader/SectionHeader";
import { MenuItem } from "./components/MenuItem/MenuItem";
import mock from "./mock";
import sliderLeft from "./assets/slider-left.svg";
import sliderRight from "./assets/slider-right.svg";

export const MenuSection = () => {
  return (
    <section id="menu" className="container">
      <SectionHeader topTitle={"Top “Manhattan” menu"} bottomTitle={"кухня"} />
      <div className="slider-menu-container">
        <div className="slider slider-left desktop-only">
          <img src={sliderLeft} alt="sliderLeft" />
        </div>
        <div className="slider slider-right desktop-only">
          <img src={sliderRight} alt="sliderRight" />
        </div>
        <div className="menu-container">
          <div className="menu-grid">
            {mock.map((item, index) => (
              <MenuItem
                key={index}
                image={item.imgSource}
                dishName={item.dishName}
                price={item.price}
                wight={item.weight}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="section-footer">
        <Button url={"main"} className={"btn fill"} name={"все меню"} />
      </div>
    </section>
  );
};
