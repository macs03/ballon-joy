import React, { useState } from "react";
import { Link } from "react-scroll";
import { bubble as Menu } from "react-burger-menu";

import { ToastProvider } from "react-toast-notifications";

import FirstSection from "./first-section/first-section";
import Services from "./services/services";
import KidsNight from "./kids-night/kids-night";
import Gallery from "./gallery/gallery";
import Contact from "./contact/contact";
import Footer from "./footer/footer";

import "./styles.css";

const RootComponent = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const handleStateChange = state => {
    setisMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setisMenuOpen(false);
  };

  return (
    <div>
      <div className="menu-container">
        <Menu
          left
          width={"40%"}
          isOpen={isMenuOpen}
          onStateChange={state => handleStateChange(state)}
        >
          <Link
            className="menu-item"
            to="main"
            data-offset="-45"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            className="menu-item"
            to="services"
            data-offset="-45"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Our Services
          </Link>
          <Link
            className="menu-item"
            to="kids-night"
            data-offset="-45"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Kids Zone
          </Link>
          <Link
            className="menu-item"
            to="gallery"
            data-offset="-45"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Gallery
          </Link>
          <Link
            className="menu-item"
            to="contact"
            data-offset="-45"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </Menu>
      </div>
      <div className="menu-container-responsive">
        <Link
          className="menu-item"
          to="main"
          data-offset="-45"
          spy={true}
          smooth={true}
          duration={500}
        >
          Home
        </Link>
        <Link
          className="menu-item"
          to="services"
          data-offset="-45"
          spy={true}
          smooth={true}
          duration={500}
        >
          Our Services
        </Link>
        <Link
          className="menu-item"
          to="kids-night"
          data-offset="-45"
          spy={true}
          smooth={true}
          duration={500}
        >
          Kids Zone
        </Link>
        <Link
          className="menu-item"
          to="gallery"
          data-offset="-45"
          spy={true}
          smooth={true}
          duration={500}
        >
          Gallery
        </Link>
        <Link
          className="menu-item"
          to="contact"
          data-offset="-45"
          spy={true}
          smooth={true}
          duration={500}
        >
          Contact
        </Link>
      </div>
      <FirstSection />
      <Services />
      <KidsNight />
      <Gallery />
      <ToastProvider>
        <Contact />
      </ToastProvider>
      <Footer />
    </div>
  );
};
export default RootComponent;
