import { FC } from "react";
import SectionContainer from "./section-container";

const aboutData = [
  {
    title: "Lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet tempore suscipit molestias facere dolorem. Dignissimos itaque nemo amet velit earum.",
  },
  {
    title: "Lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet tempore suscipit molestias facere dolorem. Dignissimos itaque nemo amet velit earum.",
  },
  {
    title: "Lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet tempore suscipit molestias facere dolorem. Dignissimos itaque nemo amet velit earum.",
  },
  {
    title: "Lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet tempore suscipit molestias facere dolorem. Dignissimos itaque nemo amet velit earum.",
  },
];

interface CardProps {
  title: string;
  description: string;
}

const AboutCard: FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-[#F0FBF7] flex items-start p-8 gap-4 rounded-md">
      <div className="w-16 aspect-square rounded-full bg-[#006A51] "></div>
      <div className="px-4">
        <div className="font-bold tracking-wide capitalize">{title}</div>
        <div className="text-sm text-gray-600 ">{description}</div>
        <button className="text-xs text-gray-800 font-bold">view more</button>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="max-w-5xl mx-auto my-10">
      <div className="grid grid-cols-2 gap-8">
        {aboutData.map(({ title, description }) => (
          <AboutCard description={description} title={title} key={title} />
        ))}
      </div>
    </div>
  );
};

export default About;
