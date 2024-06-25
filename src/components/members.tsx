import Image from "next/image";
import { FC } from "react";
import SectionContainer from "./section-container";
import Link from "next/link";

const data = [
  {
    name: "ABdur Rahman",
    designation: "Manager",
  },
  {
    name: "ABdur Rahman",
    designation: "Manager",
  },
  {
    name: "ABdur Rahman",
    designation: "Manager",
  },
  {
    name: "ABdur Rahman",
    designation: "Manager",
  },
  {
    name: "ABdur Rahman",
    designation: "Manager",
  },
  {
    name: "ABdur Rahman",
    designation: "Manager",
  },
  {
    name: "ABdur Rahman",
    designation: "Manager",
  },
  {
    name: "ABdur Rahman",
    designation: "Manager",
  },
  {
    name: "ABdur Rahman",
    designation: "Manager",
  },
];
interface ICardProps {
  name: string;
  designation: string;
}

const MembersCard: FC<ICardProps> = ({ designation, name }) => {
  return (
    <Link href={"/about-us/:id"}>
      <div className=" shadow-[rgba(99, 99, 99, 0.2)_0px_2px_8px_0px]  overflow-hidden w-full">
        <div className="relative w-full aspect-square">
          <Image
            src={"https://source.unsplash.com/2LowviVHZ-E"}
            alt="hello"
            fill
            objectFit="cover"
          />
        </div>
        <div className="p-4 space-y-2 bg-[#F0FBF7] text-center">
          <div className="font-black uppercase">Abdur Rahman</div>
          <div className="text-gray-700 text-sm">Director</div>
        </div>
      </div>
    </Link>
  );
};

const Members: FC = () => {
  return (
    <SectionContainer parentClass="p-4">
      <>
        <div className=" flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold capitalize py-4">
            Executive members
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {data.map((person) => (
              <MembersCard {...person} key={person.name} />
            ))}
          </div>
        </div>
      </>
    </SectionContainer>
  );
};

export default Members;
