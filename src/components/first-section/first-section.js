import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import whiteLogo from "../../assets/images/logo-white_BalloonJoy.png";

import "./styles.css";

const FirstSection = () => (
  <section className="main">
    <div className="logo">
      <LazyLoadImage
        alt="ballon-joy"
        height="100%"
        src={whiteLogo}
        width="100%"
        effect="blur"
      />
    </div>
    <div className="title">
      <h2>RESERVA AHORA!!!</h2>
    </div>
    <div className="sub-title">
      <h4>Quieres Organizar tu fiesta?</h4>
      <h4>hazmelo saber!</h4>
    </div>
    <div className="buttons">
      <button>Escribe un correo</button>
      <button>Escribe a whatsapp</button>
    </div>
  </section>
);

export default FirstSection;
