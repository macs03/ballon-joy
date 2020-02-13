import image19 from "../assets/ballonJommy/4c5a8bb3-e306-4ab6-a0f8-8f75bb73c48f.JPG";
import image20 from "../assets/ballonJommy/d3a5285c-afff-432a-a296-0b48f8dbebbb.JPG";
import image21 from "../assets/ballonJommy/59d1b7c1-ef47-4d94-b908-f3de66be16f2.JPG";

import image23 from "../assets/ballonJommy/5b6c55bf-d56d-4026-8db0-63dadec9b85c.JPG";
import image24 from "../assets/ballonJommy/e3c01776-516a-4ab7-b062-8522ccc2ef11.JPG";
import image25 from "../assets/ballonJommy/5f526caa-ac01-41ee-aa00-4c931cb39ebf.JPG";
import image26 from "../assets/ballonJommy/e50bca2f-9dc6-4798-a8a7-29d428d3994b.JPG";

import image28 from "../assets/ballonJommy/fea18bfa-6bfb-4543-99ec-2eba050b7047.JPG";
import image29 from "../assets/ballonJommy/YIQB8506.JPG";
import image30 from "../assets/ballonJommy/OGAA5806.JPG";

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
  slider: [image20, image21, image25, image28]
};

export default photos;
