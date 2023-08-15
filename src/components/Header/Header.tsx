import React from "react";
import headerLogo from "./assets/headerLogo.svg";
import burgerMenu from './assets/BurgerMenu.svg'
import "./Header.scss";
import { NavigationLink } from "../NavigationLink/NavigationLink";
import { Button } from "../Button/Button";

export const Header = () => {
  return (
    <header>
      <img src={headerLogo} alt="headerLogo" className="header-img" />
      <nav>
        <NavigationLink
          url={"main"}
          name={"Главная"}
          className={"header-refs"}
        />
        <NavigationLink url={"menu"} name={"Меню"} className={"header-refs"} />
        <NavigationLink
          url={"afisha"}
          name={"Афиша"}
          className={"header-refs"}
        />
        <NavigationLink
          url={"sotr"}
          name={"Сотрудничество"}
          className={"header-refs"}
        />
        <NavigationLink
          url={"gallery"}
          name={"Галерея"}
          className={"header-refs"}
        />
        <NavigationLink
          url={"news"}
          name={"Новости"}
          className={"header-refs"}
        />
      </nav>
      <Button url={"bron"} className={"btn unfill"} name={"Бронирование"} />
      <img src={burgerMenu} alt="burgerMenu" className="mobile-only icon-button" />
    </header>
  );
};
