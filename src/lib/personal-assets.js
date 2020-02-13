// assets for web
import image19 from "../assets/ballonJommy/4c5a8bb3-e306-4ab6-a0f8-8f75bb73c48f.JPG";
import image23 from "../assets/ballonJommy/5b6c55bf-d56d-4026-8db0-63dadec9b85c.JPG";
import image24 from "../assets/ballonJommy/e3c01776-516a-4ab7-b062-8522ccc2ef11.JPG";
import image26 from "../assets/ballonJommy/e50bca2f-9dc6-4798-a8a7-29d428d3994b.JPG";

import image29 from "../assets/ballonJommy/YIQB8506.JPG";
import image30 from "../assets/ballonJommy/OGAA5806.JPG";

// assets for gallery

let width;

if (window.matchMedia("(min-width: 500px)").matches) {
  width = 4;
} else {
  width = 2;
}

const photos = [
  // {
  //   src: image19,
  //   width,
  //   height: 3,
  //   category: "bouquets"
  // }
];

export const anotherImages = {
  services: [image19, image24, image23, image26, image29, image30],
  slider: []
};

export default photos;
