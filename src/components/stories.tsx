import Image from "next/image";
import SearchButtons from "./search-butons";
import SectionContainer from "./section-container";
import { FC, useState } from "react";

// ["cultural", "service", "social", "community", "relief", "health"]
const data = [
  {
    category: "cultural",
    title: " Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nulla!",
  },
  {
    category: "service",
    title: " Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nulla!",
  },
  {
    category: "social",
    title: " Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nulla!",
  },
  {
    category: "community",
    title: " Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nulla!",
  },
  {
    category: "health",
    title: " Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nulla!",
  },
  {
    category: "relief",
    title: " Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nulla!",
  },
  {
    category: "cultural",
    title: " Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nulla!",
  },
  {
    category: "service",
    title: " Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nulla!",
  },
  {
    category: "social",
    title: " Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nulla!",
  },
  {
    category: "community",
    title: " Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nulla!",
  },
  {
    category: "health",
    title: " Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nulla!",
  },
  {
    category: "relief",
    title: " Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nulla!",
  },
];

interface ICardProps {
  title: string;
  description: string;
  category: string;
}

const MembersCard: FC<ICardProps> = ({ title, description, category }) => {
  return (
    <div className=" shadow-[rgba(99, 99, 99, 0.2)_0px_2px_8px_0px]  overflow-hidden w-full">
      <div className="relative w-full aspect-square">
        <Image
          src={"https://source.unsplash.com/9pw4TKvT3po"}
          alt="hello"
          fill
          objectFit="cover"
        />
        <div className="bottom-4 right-2 py-2 px-4 text-xs font-bold bg-black/50 text-white tracking-wider absolute uppercase rounded-lg">
          {category}
        </div>
      </div>
      <div className="p-4 space-y-2 bg-[#F0FBF7] text-center">
        <div className="font-black uppercase">{title}</div>
        <div className="text-gray-700 text-sm">{description}</div>
      </div>
    </div>
  );
};

const Stories = () => {
  const [category, setCategory] = useState("");
  console.log(category);
  return (
    <SectionContainer parentClass="my-8">
      <>
        <h1 className="text-3xl text-[#006A51] font-bold uppercase text-center">
          our stories
        </h1>{" "}
        <SearchButtons setCategory={setCategory} category={category} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {category
            ? data
                .filter((val) => {
                  return val.category === category;
                })
                .map((story) => <MembersCard {...story} key={story.title} />)
            : data.map((story) => <MembersCard {...story} key={story.title} />)}
        </div>
      </>
    </SectionContainer>
  );
};

export default Stories;
