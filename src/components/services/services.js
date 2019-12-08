import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { anotherImages } from "../../lib/personal-assets.js";

import party from "../../assets/images/img-fiesta.png";
import decoration from "../../assets/images/img-decoracion.png";
import bouquets from "../../assets/images/img-bouquets.png";

import "./styles.css";

const Services = () => (
  <section id="services" className="services">
    <div className="title-service">
      <span>OUR SERVICES</span>
      <h4>Let's fun!</h4>
    </div>
    <div className="services-container">
      <div className="service-item">
        <LazyLoadImage
          alt="party"
          height="100%"
          src={party}
          width="90%"
          effect="blur"
        />
        <div className="service-description">
          <span className="title-item">PARTY PER HOURS</span>
          <p>
            Per 1 artist: $120 for two services if you booked only for one hour
            (depending upon amount of children).
          </p>
          <p>
            <span className="title-item">Important: </span> <br />- Please note
            that price are only for 1 artist. <br />- We travel no more than 40
            miles from Dearborn. <br />- Sometimes transportation fee applies.{" "}
            <br />- It is an additional $25 for the artist to come dressed in
            little Clown <br />- To book we request 30% in advance (Venmo, cash
            app, zelle, Paypal).
          </p>
          <span className="price">from $100/hr</span>
        </div>
      </div>
      <div className="service-item">
        <LazyLoadImage
          alt="decoration"
          height="100%"
          src={decoration}
          width="90%"
          effect="blur"
        />
        <div className="service-description">
          <span className="title-item">BALLOON DECORATION</span>
          <p>Quotes based on designs and measurements.</p>

          <span className="price">
            (50% is required to book, not refundable)
          </span>
        </div>
      </div>
      <div className="service-item">
        <LazyLoadImage
          alt="bouquets"
          height="100%"
          src={bouquets}
          width="90%"
          effect="blur"
        />
        <div className="service-description">
          <span className="title-item">BALLOON BOUQUETS</span>
          <p>Quotes based on designs and measurements.</p>
          <span className="price">
            (50% is required to book, not refundable)
          </span>
        </div>
      </div>
      <div className="service-item">
        <LazyLoadImage
          alt="events"
          height="100%"
          src={anotherImages.services[0]}
          width="90%"
          effect="blur"
        />
        <div className="service-description">
          <span className="title-item">FACE PAINTING</span>
          <p>
            Per 1 artist: $120 for two services if you booked only for one hour
            (depending upon amount of children).
          </p>
          <p>
            <span className="title-item">Important: </span> <br />- Please note
            that price are only for 1 artist. <br />- We travel no more than 40
            miles from Dearborn. <br />- Sometimes transportation fee applies.{" "}
            <br />- It is an additional $25 for the artist to come dressed in
            little Clown <br />- To book we request 30% in advance (Venmo, cash
            app, zelle, Paypal).
          </p>
          <span className="price">from $100/hr</span>
        </div>
      </div>
      <div className="service-item">
        <LazyLoadImage
          alt="events"
          height="100%"
          src={anotherImages.services[0]}
          width="90%"
          effect="blur"
        />
        <div className="service-description">
          <span className="title-item">BALLOON TWISTING</span>
          <p>
            Per 1 artist: $120 for two services if you booked only for one hour
            (depending upon amount of children).
          </p>
          <p>
            <span className="title-item">Important: </span> <br />- Please note
            that price are only for 1 artist. <br />- We travel no more than 40
            miles from Dearborn. <br />- Sometimes transportation fee applies.{" "}
            <br />- It is an additional $25 for the artist to come dressed in
            little Clown <br />- To book we request 30% in advance (Venmo, cash
            app, zelle, Paypal).
          </p>
          <span className="price">from $100/hr</span>
        </div>
      </div>
      <div className="service-item">
        <LazyLoadImage
          alt="events"
          height="100%"
          src={anotherImages.services[0]}
          width="90%"
          effect="blur"
        />
        <div className="service-description">
          <span className="title-item">GLITTER TATOOS</span>
          <p>
            Per 1 artist: $120 for two services if you booked only for one hour
            (depending upon amount of children).
          </p>
          <p>
            <span className="title-item">Important: </span> <br />- Please note
            that price are only for 1 artist. <br />- We travel no more than 40
            miles from Dearborn. <br />- Sometimes transportation fee applies.{" "}
            <br />- It is an additional $25 for the artist to come dressed in
            little Clown <br />- To book we request 30% in advance (Venmo, cash
            app, zelle, Paypal).
          </p>
          <span className="price">from $100/hr</span>
        </div>
      </div>
      <div className="service-item">
        <LazyLoadImage
          alt="events"
          height="100%"
          src={anotherImages.services[0]}
          width="90%"
          effect="blur"
        />
        <div className="service-description">
          <span className="title-item">HENNA</span>
          <p>This service is performed by an exclusive artist.</p>
          <span className="price">from $100/hr</span>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
