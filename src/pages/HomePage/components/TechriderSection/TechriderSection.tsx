import React from "react";
import "./TechriderSection.scss";
import { SectionHeader } from "../../../../components/SectionHeader/SectionHeader";
import { DropDownMenu } from "./components/DropDownMenu/DropDownMenu";
import { Icon } from "./components/Icons/Icon";
import djImage1 from "./assets/djImage1.png";
import djImage2 from "./assets/djImage2.png";
import telegramIcon from "./assets/telegramIcon.svg";
import vkIcon from "./assets/vkIcon.svg";

export const TechriderSection = () => {
  return (
    <section id="techrider" className="container">
      <SectionHeader
        topTitle={"Top “Manhattan” party"}
        bottomTitle={"техрайдер"}
      />
      <div className="rider-content">
        <div className="left-side">
          <DropDownMenu name="loudspeakers" content={""} />
          <DropDownMenu name="amplifier" content={""} />
          <DropDownMenu name="foh" content={""} />
          <DropDownMenu name="backline" content={""} />
          <DropDownMenu name="Microphone set" content={""} />
          <DropDownMenu name="DJ equipment" content={""} />
        </div>
        <div className="right-side">
          <h3>
            Звукорежиссеры
            <br />
            клуба МАНХЭТТЕН
          </h3>
          <div className="right-grid">
            <img src={djImage1} className="dj-photo" alt="djImage1" />
            <img src={djImage2} className="dj-photo" alt="djImage2" />
            <span>
              Изотов
              <br />
              Константин
            </span>
            <span>
              Давид
              <br />
              Хозиев
            </span>
            <div className="icons">
              <Icon path={telegramIcon} />
              <Icon path={vkIcon} />
            </div>
            <div className="icons">
              <Icon path={telegramIcon} />
              <Icon path={vkIcon} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
