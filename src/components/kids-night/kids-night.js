import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ImageGallery from "react-image-gallery";

import party from "../../assets/images/icon-fest.svg";
import calendar from "../../assets/images/icon-calendar.svg";
import slide1 from "../../assets/images/img-slide_prueba.svg";
import slide2 from "../../assets/images/img-slide_eventos.svg";
import slide3 from "../../assets/images/img-slide_prueba.svg";
import slide4 from "../../assets/images/img-slide_ball-twisting.svg";

import "./styles.css";

const images = [
  {
    original: slide1,
    thumbnail: slide1
  },
  {
    original: slide2,
    thumbnail: slide2
  },
  {
    original: slide3,
    thumbnail: slide3
  },
  {
    original: slide4,
    thumbnail: slide4
  }
];

const KidsNight = () => (
  <section id="kids-night" className="kids-night">
    <div className="header-kids">
      <div className="title-kids">
        <span>Preparados para un momento único?</span>
      </div>
      <button className="secondary-button">
        <LazyLoadImage
          alt="email"
          height="30%"
          src={party}
          width="30%"
          effect="blur"
        />
        <span className="secondary-button-text">Make a party</span>
      </button>
    </div>
    <div className="slide-gallery">
      <ImageGallery
        items={images}
        lazyLoad={true}
        showNav={false}
        showPlayButton={false}
        autoPlay={true}
        showBullets={true}
        slideOnThumbnailOver={true}
      />
    </div>
    <div className="footer-kids">
      <button className="secondary-button">
        <LazyLoadImage
          alt="email"
          height="30%"
          src={calendar}
          width="30%"
          effect="blur"
        />
        <span className="secondary-button-text">Schedulme</span>
      </button>
    </div>
  </section>
);

export default KidsNight;
