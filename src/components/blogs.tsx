import Image from "next/image";
import SectionContainer from "./section-container";

const Blogs = () => {
  return (
    <SectionContainer parentClass="my-10">
      <div className="flex h-96">
        <div className="w-full h-full flex flex-col gap-4">
          <h1 className="text-2xl font-bold uppercase text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>

          <div className="relative w-full aspect-square">
            <Image
              src={"https://source.unsplash.com/i5Kx0P8A0d4"}
              alt="hello"
              fill
              objectFit="cover"
            />
          </div>
        </div>
        <div className="flex  flex-grow justify-center items-center  p-10">
          <div className="max-w-96 space-y-4">
            <h1 className="text-lg font-bold uppercase tracking-wider">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <div className="text-gray-600 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
              voluptatibus, reprehenderit, tempora nostrum doloremque officiis
              accusantium facilis deleniti pariatur modi quasi minus eaque saepe
              sit.
            </div>
            <button className="text-xs font-bold">see more</button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Blogs;
