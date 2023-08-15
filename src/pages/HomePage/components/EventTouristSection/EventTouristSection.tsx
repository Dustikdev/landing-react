import React from "react";
import "./EventTouristSection.scss";
import { SideItem } from "./components/SideItem";
import eventImage from "./assets/eventImage.png";

export const EventTouristSection = () => {
  return (
    <div id="events-tourists" className="container">
      <SideItem
        topTitle={"Top “Manhattan” events"}
        h2Title={"банкеты"}
        paragraphTitle1={`
            Quam massa pretium et venenatis. Fringilla sagittis, arcu massa,
            in sem viverra consequat. Tempus sed est interdum eget nisi, nec
            fames. Eget amet hac varius aliquam. Mattis egestas suspendisse
            convallis eu arcu et aliquet.
          `}
        paragraphTitle2={`
          Porttitor risus sociis vitae nunc id lacus eget felis. Viverra et
          purus nibh ut. Sed ac leo sit posuere vulputate sed morbi. Donec
          gravida at turpis sed pulvinar. A nibh non consectetur morbi in
          arcu, in pellentesque mauris.
        `}
        paragraphTitle3={`
        Eu sodales netus faucibus interdum interdum platea massa egestas.
        Facilisis donec gravida pretium diam semper at id eleifend.
      `}
      />
      <img src={eventImage} alt="eventImage" />
      <SideItem
        topTitle={"Top “Manhattan” tourist"}
        h2Title={"туристы"}
        paragraphTitle1={`
            Quam massa pretium et venenatis. Fringilla sagittis, arcu massa,
            in sem viverra consequat. Tempus sed est interdum eget nisi, nec
            fames. Eget amet hac varius aliquam. Mattis egestas suspendisse
            convallis eu arcu et aliquet.
          `}
        paragraphTitle2={`
          Porttitor risus sociis vitae nunc id lacus eget felis. Viverra et
          purus nibh ut. Sed ac leo sit posuere vulputate sed morbi. Donec
          gravida at turpis sed pulvinar. A nibh non consectetur morbi in
          arcu, in pellentesque mauris.
        `}
        paragraphTitle3={`
        Eu sodales netus faucibus interdum interdum platea massa egestas.
        Facilisis donec gravida pretium diam semper at id eleifend.
      `}
      />
    </div>
  );
};
