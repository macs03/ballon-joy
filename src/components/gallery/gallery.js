import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import photos from "../../lib/personal-assets.js";

import "./styles.css";

import arrowDown from "../../assets/images/icon-arrow-down.svg";

const GallerySection = () => {
  const [active, setActive] = useState("all");
  const [realPhotos, setRealPhotos] = useState(photos);

  const onFilterGallery = category => {
    const filteredPhotos = photos.filter(photo => photo.category === category);

    setRealPhotos(category === "all" ? photos : filteredPhotos);

    setActive(category);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="title-service">
        <span>We share joys</span>
        <h4>GALLERY</h4>
      </div>
      <div className="gallery-container">
        <div className="filters">
          <span
            onClick={() => onFilterGallery("all")}
            className={active === "all" ? "active-filter" : null}
          >
            See all
          </span>
          <span
            onClick={() => onFilterGallery("bouquets")}
            className={active === "bouquets" ? "active-filter" : null}
          >
            Bouquets
          </span>
          <span
            onClick={() => onFilterGallery("decorations")}
            className={active === "decorations" ? "active-filter" : null}
          >
            Decorations
          </span>
          <span
            onClick={() => onFilterGallery("twisting")}
            className={active === "twisting" ? "active-filter" : null}
          >
            Twisting
          </span>
          <span
            onClick={() => onFilterGallery("painting")}
            className={active === "painting" ? "active-filter" : null}
          >
            Face Painting
          </span>
          <span
            onClick={() => onFilterGallery("tattoos")}
            className={active === "tattoos" ? "active-filter" : null}
          >
            Glitter Tattoos
          </span>
        </div>
        <div className="gallery-comp">
          <Gallery photos={realPhotos} />
        </div>
        <div className="gradient">
          <a
            href="https://instagram.com/balloonjoymi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LazyLoadImage
              alt="arrow-down"
              height="25px"
              src={arrowDown}
              width="20px"
              effect="blur"
            />
            <span className="more-text">See more photos</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
