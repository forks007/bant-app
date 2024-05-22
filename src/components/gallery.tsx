// https://source.unsplash.com/HofDCPpG4RU

import Image from "next/image";
import SectionContainer from "./section-container";
const galleryData = [
  {
    image: "https://source.unsplash.com/i5Kx0P8A0d4",
    title: "Lorem ipsum dolor sit.",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, consequatur!",
  },
  {
    image: "https://source.unsplash.com/i5Kx0P8A0d4",
    title: "Lorem ipsum dolor sit.",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, consequatur!",
  },
  {
    image: "https://source.unsplash.com/i5Kx0P8A0d4",
    title: "Lorem ipsum dolor sit.",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, consequatur!",
  },
  {
    image: "https://source.unsplash.com/i5Kx0P8A0d4",
    title: "Lorem ipsum dolor sit.",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, consequatur!",
  },
];

const Gallery = () => {
  return (
    <SectionContainer>
      <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {galleryData.map(({ about, image, title }) => (
          <div className="relative w-full aspect-square" key={title}>
            <Image src={image} alt="hero" fill objectFit="cover" />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-black/20 to-black p-4 text-white">
              <div className="text-xl font-bold capitalize">{title}</div>
              <div className="text-sm text-gray-600">{about}</div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Gallery;
