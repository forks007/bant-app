import Image from "next/image";
import SearchButtons from "./search-butons";
import SectionContainer from "./section-container";
import { FC } from "react";

const data = [
  {
    name: " Lorem one",
  },
  {
    name: " Lorem one",
  },
  {
    name: " Lorem one",
  },
  {
    name: " Lorem one",
  },
  {
    name: " Lorem one",
  },
  {
    name: " Lorem one",
  },
  {
    name: " Lorem one",
  },
  {
    name: " Lorem one",
  },
];

interface ICardProps {
  name: string;
}

const SponsorsCard: FC<ICardProps> = ({ name }) => {
  return (
    <div className=" shadow-[rgba(99, 99, 99, 0.2)_0px_2px_8px_0px]  overflow-hidden w-full">
      <div className="relative w-full aspect-square">
        <Image
          src={"https://source.unsplash.com/5MlBMYDsGBY"}
          alt="hello"
          fill
          objectFit="cover"
        />
      </div>
      <div className="p-4 space-y-2 bg-[#F0FBF7] text-center">
        <div className="uppercase">{name}</div>
      </div>
    </div>
  );
};

const Sponsors = () => {
  return (
    <SectionContainer parentClass="my-8">
      <>
        <h1 className="text-3xl text-[#006A51] font-bold uppercase text-center my-2">
          our sponsors
        </h1>{" "}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 ">
          {data.map((sponsor) => (
            <SponsorsCard {...sponsor} key={sponsor.name} />
          ))}
        </div>
      </>
    </SectionContainer>
  );
};

export default Sponsors;
