import React from "react";
import "./PresentationSection.scss";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";
import presentationImage from "./assets/presentationImage.png";

export const PresentationSection = () => {
  return (
    <section id="presentation" className="container">
      <div className="left-side desktop-only">
        <img src={presentationImage} alt="presentationImage" />
        <div className="letter">
          <div className="div-since">since 1996</div>
          <span>
            True. Fontanka.
            <br />
            Underground.
          </span>
        </div>
      </div>
      <div>
        <div className="tabs">
          <div className="tab pressed-tab">ближайшие</div>
          <div className="tab unpressed-tab">скоро</div>
        </div>
        <div className="tab-images">
          <div className="images visible-images">
            <img src={image1} alt="image1" />
            <img src={image2} alt="image2" />
            <img src={image3} alt="image3" />
            <img src={image4} alt="image4" />
          </div>
          <div className="images invisible-images">
            <img src={image1} alt="image1" />
            <img src={image2} alt="image2" />
            <img src={image3} alt="image3" />
            <img src={image4} alt="image4" />
          </div>
        </div>
      </div>
    </section>
  );
};
