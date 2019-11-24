import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ImageGallery from "react-image-gallery";

import { anotherImages } from "../../lib/personal-assets.js";

import party from "../../assets/images/icon-fest.svg";
import calendar from "../../assets/images/icon-calendar.svg";
import slide1 from "../../assets/images/img-slide_prueba.svg";

import "./styles.css";

const images = [
  {
    original: slide1,
    thumbnail: slide1
  },
  {
    original: anotherImages.slider[0],
    thumbnail: anotherImages.slider[0]
  },
  {
    original: anotherImages.slider[1],
    thumbnail: anotherImages.slider[1]
  },
  {
    original: anotherImages.slider[2],
    thumbnail: anotherImages.slider[2]
  },
  {
    original: anotherImages.slider[3],
    thumbnail: anotherImages.slider[3]
  },
  {
    original: anotherImages.slider[4],
    thumbnail: anotherImages.slider[4]
  },
  {
    original: anotherImages.slider[5],
    thumbnail: anotherImages.slider[5]
  },
  {
    original: anotherImages.slider[6],
    thumbnail: anotherImages.slider[6]
  },
  {
    original: anotherImages.slider[7],
    thumbnail: anotherImages.slider[7]
  },
  {
    original: anotherImages.slider[8],
    thumbnail: anotherImages.slider[8]
  },
  {
    original: anotherImages.slider[9],
    thumbnail: anotherImages.slider[9]
  }
];

const KidsNight = () => (
  <section id="kids-night" className="kids-night">
    <div className="header-kids">
      <div className="title-kids">
        <span>Are you prepare for a unique momment?</span>
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
