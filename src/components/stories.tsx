import Image from "next/image";
import SearchButtons from "./search-butons";
import SectionContainer from "./section-container";
import { FC } from "react";

const data = [
  {
    title: " Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nulla!",
  },
  {
    title: " Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nulla!",
  },
  {
    title: " Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nulla!",
  },
  {
    title: " Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nulla!",
  },
  {
    title: " Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nulla!",
  },
  {
    title: " Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nulla!",
  },
];

interface ICardProps {
  title: string;
  description: string;
}

const MembersCard: FC<ICardProps> = ({ title, description }) => {
  return (
    <div className=" shadow-[rgba(99, 99, 99, 0.2)_0px_2px_8px_0px]  overflow-hidden w-full">
      <div className="relative w-full aspect-square">
        <Image
          src={"https://source.unsplash.com/9pw4TKvT3po"}
          alt="hello"
          fill
          objectFit="cover"
        />
      </div>
      <div className="p-4 space-y-2 bg-[#F0FBF7] text-center">
        <div className="font-black uppercase">{title}</div>
        <div className="text-gray-700 text-sm">{description}</div>
      </div>
    </div>
  );
};

const Stories = () => {
  return (
    <SectionContainer parentClass="my-8">
      <>
        <h1 className="text-3xl text-[#006A51] font-bold uppercase text-center">
          our stories
        </h1>{" "}
        <SearchButtons />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((story) => (
            <MembersCard {...story} key={story.title} />
          ))}
        </div>
      </>
    </SectionContainer>
  );
};

export default Stories;
