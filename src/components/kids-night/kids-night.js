import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-scroll";
import "react-lazy-load-image-component/src/effects/blur.css";
import ImageGallery from "react-image-gallery";

import party from "../../assets/images/icon-fest.svg";
import calendar from "../../assets/images/icon-calendar.svg";
import slide1 from "../../assets/images/img-slide_prueba.png";
import slide2 from "../../assets/images/img-slide_eventos.png";
import slide3 from "../../assets/images/img-slide_ball-twisting.png";
import slide4 from "../../assets/images/kids-zone-4.png";
import slide5 from "../../assets/images/kids-zone-5.png";
import slide6 from "../../assets/images/kids-zone-6.png";

import "./styles.css";

const images = [
  {
    original: slide1,
    thumbnail: slide1
  },
  {
    original: slide4,
    thumbnail: slide4
  },
  {
    original: slide2,
    thumbnail: slide2
  },
  {
    original: slide5,
    thumbnail: slide5
  },
  {
    original: slide3,
    thumbnail: slide3
  },
  {
    original: slide6,
    thumbnail: slide6
  }
];

const KidsNight = () => (
  <section id="kids-night" className="kids-night">
    <div className="header-kids">
      <div className="title-kids">
        <span>Let's make memories together</span>
      </div>
      <Link
        to="contact"
        data-offset="-45"
        spy={true}
        smooth={true}
        duration={500}
      >
        <button className="secondary-button">
          <LazyLoadImage
            alt="email"
            height="30%"
            src={party}
            width="30%"
            effect="blur"
          />
          <span className="secondary-button-text">Book now!!!</span>
        </button>
      </Link>
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
        showFullscreenButton={false}
      />
    </div>
    <div className="footer-kids">
      <Link
        to="contact"
        data-offset="-45"
        spy={true}
        smooth={true}
        duration={500}
      >
        <button className="secondary-button">
          <LazyLoadImage
            alt="email"
            height="30%"
            src={calendar}
            width="30%"
            effect="blur"
          />
          <span className="secondary-button-text">Schedule me</span>
        </button>
      </Link>
    </div>
  </section>
);

export default KidsNight;
