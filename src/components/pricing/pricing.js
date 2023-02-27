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
      Rates 1 or 2 services
      <br />
      <br />
      (Face Painting and/or Balloon Twisting / 1 artist): $150 for the 1st hour.
      $120 per additional hour. <br />
      <br />
      Additional services (extra charge): <br />
      <br />- Face Gems/ glitter tattoos
      <br />- Henna $150 per hour
      <br />- Clown costume: $40 extra <br />
    </p>
    <p>
      <span className="title-item">Important: </span> <br />- Please note that
      price are only for 1 artist. <br />- We travel no more than 40 miles from
      Dearborn. <br />- Travel fee depending on your address ($25-$50). <br />-
      It is an additional $50 for the artist to come dressed in little Clown{" "}
      <br />- To book we request 100% in advance (Venmo, cash app, zelle,
      Paypal).
    </p>
    <span className="service-modal">
      Balloon Decoration and Balloon Bouquets:
    </span>
    <p>
      Quotes based on designs and measurements. (100% is required to book, not
      refundable)
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
