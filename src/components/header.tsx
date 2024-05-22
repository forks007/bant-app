import Image from "next/image";
import SectionContainer from "./section-container";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <SectionContainer parentClass="bg-[#F0FBF7] py-2 border-b-2 border-[#F1FDF9]">
        <div className="flex justify-end gap-4 text-sm ">
          <div>Sign in</div>
          <div>Sign up</div>
        </div>
      </SectionContainer>
      <SectionContainer parentClass=" bg-[#F0FBF7] py-4">
        <div className="flex max-w-7xl mx-auto items-center justify-between text-sm font-bold">
          <div className="relative w-40 h-12">
            <Image
              src={"/logo-icon.png"}
              alt="bant-logo"
              fill
              objectFit="contain"
            />
          </div>
          <nav className="flex justify-between gap-4">
            <div className="capitalize hover:cursor-pointer text-gray-800 hover:text-black p-4">
              <Link href={"/about-us"}>celebrate our story</Link>
            </div>
            <div className="capitalize hover:cursor-pointer text-gray-800 hover:text-black p-4">
              executive members
            </div>
            <div className="capitalize hover:cursor-pointer text-gray-800 hover:text-black p-4">
              youth empowerment
            </div>
            <div className="capitalize hover:cursor-pointer text-gray-800 hover:text-black p-4">
              upcoming celebrations
            </div>
          </nav>
          <button className="bg-[#006A51] px-4 py-2 text-white capitalize rounded-md text-sm">
            Join the bant community
          </button>
        </div>
      </SectionContainer>
    </>
  );
};

export default Header;
