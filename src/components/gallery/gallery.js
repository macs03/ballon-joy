import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./styles.css";

import arrowDown from "../../assets/images/icon-arrow-down.svg";

const photos = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3,
    category: "events"
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1,
    category: "events"
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4,
    category: "events"
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4,
    category: "events"
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4,
    category: "events"
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3,
    category: "events"
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4,
    category: "decorations"
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3,
    category: "decorations"
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3,
    category: "decorations"
  },
  {
    src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
    width: 3,
    height: 4,
    category: "decorations"
  },
  {
    src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
    width: 4,
    height: 3,
    category: "decorations"
  },
  {
    src: "https://source.unsplash.com/u9cG4cuJ6bU/4927x1000",
    width: 4927,
    height: 1000,
    category: "bouquets"
  },
  {
    src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
    width: 4,
    height: 3,
    category: "bouquets"
  },
  {
    src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
    width: 4,
    height: 3,
    category: "bouquets"
  },
  {
    src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
    width: 4,
    height: 3,
    category: "bouquets"
  },
  {
    src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
    width: 4,
    height: 3,
    category: "events"
  },
  {
    src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
    width: 4,
    height: 3,
    category: "decorations"
  }
];

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
            className={active === "all" ? "active" : null}
          >
            See all
          </span>
          <span
            onClick={() => onFilterGallery("bouquets")}
            className={active === "bouquets" ? "active" : null}
          >
            Bouquets
          </span>
          <span
            onClick={() => onFilterGallery("decorations")}
            className={active === "decorations" ? "active" : null}
          >
            Decorations
          </span>
          <span
            onClick={() => onFilterGallery("events")}
            className={active === "events" ? "active" : null}
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
