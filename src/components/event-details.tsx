import Image from "next/image";
import EventCard, { IEventCardProps } from "./event-card";
import SectionContainer from "./section-container";

const EventDetails = () => {
  return (
    <SectionContainer parentClass="my-8">
      <div className="shadow-lg p-8">
        <h1 className="text-3xl text-[#006A51] font-bold uppercase text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          aperiam.
        </h1>
        <div className=" grid grid-cols-3 p-8">
          <div className="relative w-full aspect-square ">
            <Image
              src={`https://source.unsplash.com/i5Kx0P8A0d4`}
              alt="alter"
              fill
              objectFit="cover"
            />
          </div>
          <div className="divide-y-2 col-span-2 p-8">
            <div className="">
              <h1 className="py-2 text-xl uppercase font-bold">
                Lorem ipsum dolor sit amet.
              </h1>
              <div className="text-sm font-bold text-gray-600 py-8 space-y-4">
                <div>Lorem ipsum dolor sit amet.</div>
                <div>at 30th june,2022</div>
                <div>address: 2022/B ,Baker Street, London</div>
              </div>
              <div className="py-8 text-lg font-semibold uppercase ">
                3 hours 45 minutes
              </div>
            </div>
            <div className=" py-8">
              <button className="border-[#006A51] text-[#006A51] border-2 px-4 py-2 capitalize rounded-md text-sm">
                Sponsor Event
              </button>
            </div>
            <div className="py-8">
              <h1 className="text-lg font-bold uppercase">About event</h1>
              <div className="text-xs text-gray-600 tracking-wider">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus fugit consectetur numquam beatae facere voluptate
                provident officiis praesentium quo quasi.
              </div>
            </div>
            <div className="py-8">
              <h1 className="text-lg font-bold uppercase">contact:</h1>
              <div className="tracking-widest font-extrabold text-xs">
                +880123456789
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default EventDetails;
