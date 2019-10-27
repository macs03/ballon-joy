import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import party from "../../assets/images/img-fiesta.svg";
import decoration from "../../assets/images/img-decoracion.svg";
import bouquets from "../../assets/images/img-bouquets.svg";
import events from "../../assets/images/img-eventos.svg";

import "./styles.css";

const Services = () => (
  <section id="services" className="services">
    <div className="title-service">
      <span>NUESTROS SERVICIOS</span>
      <h4>A divertirnos!</h4>
    </div>
    <div className="services-container">
      <div className="service-item">
        <LazyLoadImage
          alt="party"
          height="40%"
          src={party}
          width="90%"
          effect="blur"
        />
        <div className="service-description">
          <span className="title-item">FIESTA POR HORAS</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <span className="price">from $180</span>
        </div>
      </div>
      <div className="service-item">
        <LazyLoadImage
          alt="decoration"
          height="40%"
          src={decoration}
          width="90%"
          effect="blur"
        />
        <div className="service-description">
          <span className="title-item">FIESTA POR HORAS</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <span className="price">from $180</span>
        </div>
      </div>
      <div className="service-item">
        <LazyLoadImage
          alt="bouquets"
          height="40%"
          src={bouquets}
          width="90%"
          effect="blur"
        />
        <div className="service-description">
          <span className="title-item">FIESTA POR HORAS</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <span className="price">from $180</span>
        </div>
      </div>
      <div className="service-item">
        <LazyLoadImage
          alt="events"
          height="40%"
          src={events}
          width="90%"
          effect="blur"
        />
        <div className="service-description">
          <span className="title-item">FIESTA POR HORAS</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <span className="price">from $180</span>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
