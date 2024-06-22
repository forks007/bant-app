import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import TicketModal from "./ticket-modal";

export interface IEventCardProps {
  image: string;
  name: string;
  date: string;
  time: string;
  countdown: string;
  address: string;
}

const EventCard: FC<IEventCardProps> = ({
  address,
  countdown,
  date,
  image,
  name,
  time,
}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full grid grid-cols-3  p-8 gap-4">
      <div className="relative w-full aspect-square">
        <Image
          src={`https://source.unsplash.com/i5Kx0P8A0d4`}
          alt={name}
          fill
          objectFit="cover"
        />
      </div>
      <div className="col-span-2 flex flex-col justify-between  ">
        <div className="text-2xl font-bold uppercase  text-[#006A51]">
          {name}
        </div>
        <div className="w-full flex justify-between  items-center text-gray-600 tracking-wider">
          <div className="py-4">
            <div className="">{date}</div>
            <div className="">{time}</div>
          </div>
          <div className="">{address}</div>
        </div>
        <div className="text-xl font-semibold uppercase tracking-wider text-[#006A51]">
          {countdown}
        </div>
        <div className="flex gap-8 ">
          <Link href={"events/eventId"}>
            <button className="border-[#006A51] text-[#006A51] border-2 px-4 py-2 capitalize rounded-md text-sm">
              Read More
            </button>
          </Link>
          <button
            onClick={() => setShowModal(true)}
            className="border-[#006A51] text-[#006A51] border-2 px-4 py-2 capitalize rounded-md text-sm"
          >
            Buy Ticket
          </button>
          <TicketModal show={showModal} setShow={setShowModal} />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
