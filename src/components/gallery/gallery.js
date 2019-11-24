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
        <span>GALLERY</span>
        <h4>We share joys</h4>
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
            onClick={() => onFilterGallery("events")}
            className={active === "events" ? "active-filter" : null}
          >
            Events
          </span>
        </div>
        <div className="gallery-comp">
          <Gallery photos={realPhotos} />
        </div>
        <div className="gradient">
          <LazyLoadImage
            alt="arrow-down"
            height="25px"
            src={arrowDown}
            width="20px"
            effect="blur"
          />
          <span className="more-text">See more photos</span>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
