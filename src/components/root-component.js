import React from "react";
import { bubble as Menu } from "react-burger-menu";

import FirstSection from "./first-section/first-section";
import Services from "./services/services";
import KidsNight from "./kids-night/kids-night";
import Gallery from "./gallery/gallery";
import Contact from "./contact/contact";
import Footer from "./footer/footer";

import "./styles.css";

const RootComponent = () => {
  return (
    <div>
      <div className="menu-container">
        <Menu left width={"40%"}>
          <a className="menu-item" href="#contact">
            Book
          </a>
          <a className="menu-item" href="#services">
            Our Services
          </a>
          <a className="menu-item" href="#kids-night">
            Kids Night
          </a>
          <a className="menu-item" href="#gallery">
            Gallery
          </a>
          <a className="menu-item" href="#contact">
            Contact
          </a>
        </Menu>
      </div>
      <FirstSection />
      <Services />
      <KidsNight />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default RootComponent;
