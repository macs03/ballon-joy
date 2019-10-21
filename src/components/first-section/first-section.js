import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import whiteLogo from "../../assets/images/logo-white_BalloonJoy.png";

import "./styles.css";

const FirstSection = () => (
  <section className="main">
    <div className="logo">
      <LazyLoadImage
        alt="ballon-joy"
        height={"70px"}
        src={whiteLogo}
        width="70px"
        effect="blur"
      />
    </div>
    <div className="title"></div>
    <div className="sub-title"></div>
    <div className="buttons"></div>
  </section>
);

export default FirstSection;
