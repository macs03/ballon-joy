import React from "react";
import { bubble as Menu } from "react-burger-menu";

import FirstSection from "./first-section/first-section";

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
    </div>
  );
};

export default RootComponent;
