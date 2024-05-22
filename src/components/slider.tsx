import Image from "next/image";
import SectionContainer from "./section-container";

const Slider = () => {
  return (
    <SectionContainer parentClass="my-8">
      <div className="bg-[#006A51] py-10 px-20 ">
        <div className="flex justify-center items-center gap-20 bg-[#F0FBF7] p-10 ">
          <div className="max-w-96">
            <h1 className="text-xl font-bold">Lorem ipsum dolor sit amet.</h1>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              fuga distinctio aut facere aliquid architecto, doloremque
              accusantium nobis eaque accusamus?
            </p>
          </div>
          <div className="relative w-56 aspect-square">
            <Image
              src={"https://source.unsplash.com/i5Kx0P8A0d4"}
              alt="hello"
              fill
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Slider;
