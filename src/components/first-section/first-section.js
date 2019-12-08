import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-scroll";
import "react-lazy-load-image-component/src/effects/blur.css";

import whiteLogo from "../../assets/images/logo-white_BalloonJoy.png";
import whatsapp from "../../assets/images/icon-whatsapp.png";
import email from "../../assets/images/icon-email.png";

import "./styles.css";

const FirstSection = () => (
  <section id="main" className="main">
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
      <h2>BOOK NOW!!!</h2>
      <div className="sub-title">
        <h4>Do you want a party?</h4>
        <h4>Let me know!</h4>
      </div>
    </div>

    <div className="buttons">
      <Link
        to="contact"
        data-offset="-45"
        spy={true}
        smooth={true}
        duration={500}
      >
        <button className="primary-button">
          <LazyLoadImage
            alt="email"
            height="30%"
            src={email}
            width="30%"
            effect="blur"
          />
          <span className="button-text">Send me a email</span>
        </button>
      </Link>
      <a
        href="https://wa.me/13133352019?text=I'm%20interested%20in%20a%20party%20for%20my%20kids"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="primary-button">
          <LazyLoadImage
            alt="whatsapp"
            height="30%"
            src={whatsapp}
            width="30%"
            effect="blur"
          />
          <span className="button-text">Whatsapp me</span>
        </button>
      </a>
    </div>
  </section>
);

export default FirstSection;
