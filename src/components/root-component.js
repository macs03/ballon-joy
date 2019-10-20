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
        <Menu right width={"40%"}>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
          <a onClick={showSettings} className="menu-item--small" href="/">
            Settings
          </a>
        </Menu>
      </div>
      <FirstSection />
    </div>
  );
};

export default RootComponent;
