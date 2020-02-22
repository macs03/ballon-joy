import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-scroll";
import "react-lazy-load-image-component/src/effects/blur.css";

import whiteLogo from "../../assets/images/logo-white_BalloonJoy.png";

import email from "../../assets/images/icon-email.png";

import "./styles.css";

const FirstSection = () => (
  <section id="main" className="main">
    <div className="logo-responsive">
      <h1>Balloon joy mi</h1>
      <LazyLoadImage
        alt="ballon-joy"
        height="100%"
        src={whiteLogo}
        width="90%"
        effect="blur"
      />
    </div>

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
        <h4>Do you want us to be at your party?</h4>
        <h4>Let's have fun!</h4>
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
        <button className="primary-button first-button">
          <LazyLoadImage
            alt="email"
            height="30%"
            src={email}
            width="30%"
            effect="blur"
          />
          <span className="button-text first-button-text ">Book Now!!!</span>
        </button>
      </Link>
      {/* <a
        href="https://wa.me/13133352019?text=I'm%20interested%20in%20a%20party%20for%20my%20kids"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="primary-button whatsapp">
          <LazyLoadImage
            alt="whatsapp"
            height="30%"
            src={whatsapp}
            width="30%"
            effect="blur"
          />
          <span className="button-text">Text me</span>
        </button>
      </a> */}
    </div>
  </section>
);

export default FirstSection;
