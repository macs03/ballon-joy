import React from "react";
import { bubble as Menu } from "react-burger-menu";

import FirstSection from "./first-section/first-section";
import Services from "./services/services";
import KidsNight from "./kids-night/kids-night";

import "./styles.css";

const RootComponent = () => {
  const showSettings = event => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="menu-container">
        <Menu left width={"40%"}>
          <a id="home" className="menu-item" href="/">
            Reserva
          </a>
          <a id="about" className="menu-item" href="/about">
            Nuestros Servicios
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Kids Night
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Galeria
          </a>
          <a onClick={showSettings} className="menu-item--small" href="/">
            Contact
          </a>
        </Menu>
      </div>
      <FirstSection />
      <Services />
      <KidsNight />
    </div>
  );
};

export default RootComponent;
