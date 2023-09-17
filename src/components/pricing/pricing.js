import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-scroll";
import "react-lazy-load-image-component/src/effects/blur.css";

import email from "../../assets/images/icon-email.png";

import "./styles.css";

const Pricing = props => (
  <div className="pricing">
    <p className="happy">We are happy you let us be part of your event!</p>
    <span className="service-modal">
      Face Painting, Balloon Twisting and Glitter Tattoos:
    </span>
    <p>
      <br />
      Face Painting/ Balloon Twisting and/or Glitter Tattoo (1 ARTIST) $150 per
      hour. 3 hours or more $120 Plus travel fee. <br />
      <br />
      All our booking process is by text messages{" "}
      <span role="img" aria-label="smile">
        😃
      </span>{" "}
      please send us text messages to{" "}
      <a href="sms:+13133352019">(313)3352019</a>.
      <br />
      <br />
      More services: <br />
      <br />- Balloon Decoration
      <br />- Face Gems ($5 per girl)
      <br />- Henna $150 per hour
      <br />- Clown costume ($50 extra)
      <br />- Fluorescent tattoos
      <br />- Flower / gift boxes
      <br />- Surprise breakfast.
      <br />
    </p>
    {/* <p>
      <span className="title-item">Important: </span> <br />- Please note that
      price are only for 1 artist. <br />- We travel no more than 40 miles from
      Dearborn. <br />- Travel fee depending on your address ($25-$50). <br />-
      It is an additional $50 for the artist to come dressed in little Clown{" "}
      <br />- To book we request 100% in advance (Venmo, cash app, zelle,
      Paypal).
    </p> */}
    <span className="service-modal">Balloon Decoration / Bouquets:</span>
    <p>
      To facilitate your quote please send us pictures{" "}
      <span role="img" aria-label="camera">
        📸
      </span>{" "}
      similar about what you would like to book.
    </p>
    <span className="service-modal">
      <span role="img" aria-label="calendar">
        🗓️
      </span>{" "}
      Date and address
    </span>
    <p>
      All our booking process is by text messages{" "}
      <span role="img" aria-label="smile">
        😃
      </span>{" "}
      please send us text messages to{" "}
      <a href="sms:+13133352019">(313)3352019</a>.
    </p>
    <Link
      to="contact"
      data-offset="-45"
      spy={true}
      smooth={true}
      duration={500}
      onClick={() => {
        props.closeModal();
      }}
    >
      <button className="primary-button button-to-book">
        <LazyLoadImage
          alt="email"
          height="30%"
          src={email}
          width="30%"
          effect="blur"
        />
        <span className="button-text contact-us">Contact us</span>
      </button>
    </Link>
  </div>
);

export default Pricing;
