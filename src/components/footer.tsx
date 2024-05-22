import Image from "next/image";
import SectionContainer from "./section-container";

const Footer = () => {
  return (
    <>
      <SectionContainer parentClass="bg-[#F0FBF7] py-8 border-b-2 border-[#F1FDF9]">
        <div className="flex justify-between items-center">
          <div className="relative w-40 h-12">
            <Image
              src={"/logo-icon.png"}
              alt="bant-logo"
              fill
              objectFit="contain"
            />
          </div>
          <div className="flex text-sm font-bold text-gray-600  capitalize gap-4">
            <div className="hover:text-black hover:cursor-pointer">link 1</div>
            <div className="hover:text-black hover:cursor-pointer">link 2</div>
            <div className="hover:text-black hover:cursor-pointer">link 3</div>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <div className="w-10 aspect-square rounded-full bg-slate-500"></div>
            <div className="w-10 aspect-square rounded-full bg-slate-500"></div>
            <div className="w-10 aspect-square rounded-full bg-slate-500"></div>
          </div>
        </div>
      </SectionContainer>
      <div className="text-center text-gray-600 text-sm py-2 bg-[#F0FBF7]">
        copywrite by Bant-2024
      </div>
    </>
  );
};

export default Footer;
