import Image from "next/image";
import { Dispatch, FC, SetStateAction, useState } from "react";

interface IProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}
const TicketModal: FC<IProps> = ({ show, setShow }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/80 ${
          show ? "scale-100" : "scale-0"
        } transition-all origin-center duration-300`}
        onClick={() => setShow(false)}
      ></div>
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F0FBF7] ${
          show ? "scale-100" : "scale-0"
        } transition-all origin-center duration-300`}
      >
        <h1
          className={`text-xl font-bold py-2 px-4 border-b-2 border-[#006A51] `}
        >
          Buy Ticket
        </h1>
        <div className="grid grid-cols-2 ">
          <div className="relative w-full aspect-square ">
            <Image
              src={`https://source.unsplash.com/i5Kx0P8A0d4`}
              alt="alter"
              fill
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <h1 className="py-2 text-xl font-bold">
              Lorem ipsum dolor sit amet.
            </h1>
            <div className="flex flex-col gap-2">
              <div className="text-3xl text-center font-semibold tracking-wider border-2 rounded border-[#006A51] px-4 py-2">
                12.59$
              </div>
              <div className="text-3xl text-center font-semibold tracking-wider border-2 rounded border-[#006A51] px-4 py-2">
                12.59$
              </div>
              <div className="text-3xl text-center font-semibold tracking-wider border-2 rounded border-[#006A51] px-4 py-2">
                12.59$
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketModal;
