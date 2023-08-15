import React from "react";
import "./Footer.scss";
import footerMap from "./assets/footerMap.png";
import { SectionHeader } from "../SectionHeader/SectionHeader";

export const Footer = () => {
  return (
    <footer>
      <SectionHeader
        topTitle={"Top “Manhattan” place"}
        bottomTitle={"контакты"}
      />
      <div className="footer-content">
        <div className="left-side">
          <div className="top-content">
            <h4>Адрес</h4>
            <div className="text">
              Набережная реки Фонтанки, 90 (вход в арке с белыми колоннами)
            </div>
            <h4>телефон</h4>
            <div className="text">+7 (812) 713-1945</div>
            <h4>режим работы</h4>
            <div className="text">Ежедневно с 12:00 до 06:00</div>
          </div>
          <div className="dividing-line"></div>
          <div className="bottom-content">
            <h4>директор</h4>
            <div className="text">Лидия Эмильевна, +7(921) 963-55-50</div>
            <h4>арт-директор</h4>
            <div className="text">Илиния Ионашко, +7(981) 989-43-30</div>
          </div>
        </div>
        <img src={footerMap} className="desktop-only" alt="footerMap" />
      </div>
      <div className="dividing-line"></div>
      <div className="underline-text">
        <span>Copyright © 2022. Все права защищены.</span>
        <span>Разработано d-e-n.ru</span>
      </div>
    </footer>
  );
};
