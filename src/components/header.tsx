import Image from "next/image";
import SectionContainer from "./section-container";
import Link from "next/link";

const Header = () => {
  return (
    <>
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
          {/* <div className="">Menu</div> */}
          <nav className=" flex justify-between gap-4">
            <div className="capitalize hover:cursor-pointer text-gray-800 hover:text-black p-4">
              <Link href={"/our-stories"}>celebrate our story</Link>
            </div>
            <div className="capitalize hover:cursor-pointer text-gray-800 hover:text-black p-4">
              <Link href={"/about-us"}>executive members</Link>
            </div>
            <div className="capitalize hover:cursor-pointer text-gray-800 hover:text-black p-4">
              <Link href={"/youth-empowerment"}>youth empowerment</Link>
            </div>
            <div className="capitalize hover:cursor-pointer text-gray-800 hover:text-black p-4">
              <Link href={"/events"}>upcoming celebrations</Link>
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
