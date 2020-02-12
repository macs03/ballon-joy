import image1 from "../assets/ballonJommy/004c8972-c6f1-4d65-933b-1692dc7288bc.JPG";
import image2 from "../assets/ballonJommy/722b5ac0-3fc7-4bf4-bf96-dadc828f1f4f.JPG";
import image3 from "../assets/ballonJommy/0de037ed-6294-4837-aec0-5bf3cdc1fbe4.JPG";
import image4 from "../assets/ballonJommy/79783b18-040c-4e62-8730-4110a9c007eb.JPG";
import image5 from "../assets/ballonJommy/2a87fce2-011e-4c05-b47b-e8f01a559d1b.JPG";
import image6 from "../assets/ballonJommy/82f951b1-495a-4331-9a71-0c9fece1aa95.JPG";
import image7 from "../assets/ballonJommy/318e319d-2751-414a-9a82-e314f66d746b.JPG";
import image8 from "../assets/ballonJommy/85d812be-c5ce-4a36-8a4b-6230545d3b24.JPG";
import image9 from "../assets/ballonJommy/32f5fb44-31af-4e0a-8044-6b6d92f47818.JPG";
import image10 from "../assets/ballonJommy/8780c35b-855c-43fd-9d52-582de2d2db24.JPG";
import image11 from "../assets/ballonJommy/35210957-651a-4109-923c-afd799811c16.JPG";
import image12 from "../assets/ballonJommy/9d7ff2e1-4793-47a3-a196-ef3a6ab0bb75.JPG";
import image14 from "../assets/ballonJommy/a3d29a45-cd3f-416e-b669-2ce50bf05c22.JPG";
import image15 from "../assets/ballonJommy/3b7802e4-0ce2-4c7e-9ff3-5a648b230187.JPG";
import image16 from "../assets/ballonJommy/a895e552-9cf1-448f-978a-0539a98cbec3.JPG";
import image17 from "../assets/ballonJommy/3f72f0d4-c14c-4460-820a-089d0948dc19.JPG";
import image18 from "../assets/ballonJommy/c30ded5a-88de-4c62-a103-e6db9f7bf858.JPG";
import image19 from "../assets/ballonJommy/4c5a8bb3-e306-4ab6-a0f8-8f75bb73c48f.JPG";
import image20 from "../assets/ballonJommy/d3a5285c-afff-432a-a296-0b48f8dbebbb.JPG";
import image21 from "../assets/ballonJommy/59d1b7c1-ef47-4d94-b908-f3de66be16f2.JPG";
import image22 from "../assets/ballonJommy/dd1d84f7-0e78-43b0-8c44-cc4d18a8d874.JPG";
import image23 from "../assets/ballonJommy/5b6c55bf-d56d-4026-8db0-63dadec9b85c.JPG";
import image24 from "../assets/ballonJommy/e3c01776-516a-4ab7-b062-8522ccc2ef11.JPG";
import image25 from "../assets/ballonJommy/5f526caa-ac01-41ee-aa00-4c931cb39ebf.JPG";
import image26 from "../assets/ballonJommy/e50bca2f-9dc6-4798-a8a7-29d428d3994b.JPG";
import image27 from "../assets/ballonJommy/622178fe-1c00-4052-9218-dd3e48a91707.JPG";
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
  {
    src: image1,
    width,
    height: 3,
    category: "bouquets"
  },
  {
    src: image2,
    width,
    height: 3,
    category: "events"
  },
  {
    src: image3,
    width,
    height: 3,
    category: "events"
  },
  {
    src: image4,
    width,
    height: 3,
    category: "bouquets"
  },
  {
    src: image5,
    width,
    height: 3,
    category: "events"
  },
  {
    src: image6,
    width,
    height: 3,
    category: "events"
  },
  {
    src: image7,
    width,
    height: 3,
    category: "decorations"
  },
  {
    src: image8,
    width,
    height: 3,
    category: "decorations"
  },
  {
    src: image9,
    width,
    height: 3,
    category: "decorations"
  },
  {
    src: image10,
    width,
    height: 3,
    category: "decorations"
  },
  {
    src: image11,
    width,
    height: 3,
    category: "events"
  },
  {
    src: image12,
    width,
    height: 3,
    category: "decorations"
  },
  {
    src: image14,
    width,
    height: 3,
    category: "events"
  },
  {
    src: image15,
    width,
    height: 3,
    category: "events"
  },
  {
    src: image16,
    width,
    height: 3,
    category: "decorations"
  },
  {
    src: image17,
    width,
    height: 3,
    category: "bouquets"
  },
  {
    src: image18,
    width,
    height: 3,
    category: "bouquets"
  },
  {
    src: image27,
    width,
    height: 3,
    category: "events"
  },
  {
    src: image22,
    width,
    height: 3,
    category: "decorations"
  },
  {
    src: image21,
    width,
    height: 3,
    category: "bouquets"
  },
  {
    src: image25,
    width,
    height: 3,
    category: "bouquets"
  },
  {
    src: image28,
    width,
    height: 3,
    category: "bouquets"
  }
];

export const anotherImages = {
  services: [image19, image24, image23, image26, image29, image30],
  slider: [image20, image21, image25, image28]
};

export default photos;
