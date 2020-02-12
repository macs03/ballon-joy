import React from "react";

import "./styles.css";

const Pricing = () => (
  <div className="pricing">
    <p className="happy">We are happy you let us be part of your event!</p>
    <span className="service-modal">
      Face Painting, Balloon Twisting and Glitter Tattoos:
    </span>
    <p>
      Per 1 artist: $100 / hr of balloon twisting or one of the other services.
      $120 for two services if you booked only for one hour (depending upon
      amount of children).
    </p>
    <p>
      <span className="title-item">Important: </span> <br />- Please note that
      price are only for 1 artist. <br />- We travel no more than 40 miles from
      Dearborn. <br />- Sometimes transportation fee applies. <br />- It is an
      additional $25 for the artist to come dressed in little Clown <br />- To
      book we request 30% in advance (Venmo, cash app, zelle, Paypal).
    </p>
    <span className="service-modal">Henna Tattoo:</span>
    <p>$100 per hour.</p>
    <p> This service is performed by an exclusive artist.</p>
    <span className="service-modal">
      Balloon Decoration and Balloon Bouquets:
    </span>
    <p>
      Quotes based on designs and measurements. (50% is required to book, not
      refundable)
    </p>
  </div>
);

export default Pricing;