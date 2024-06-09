import Image from "next/image";
import SectionContainer from "./section-container";

const YouthCard = () => {
  return (
    <div className="max-w-2xl grid grid-cols-2 mx-auto bg-[#F0FBF7] rounded-md">
      <div className="relative w-full aspect-square ">
        <Image
          src={`https://source.unsplash.com/2LowviVHZ-E`}
          alt="alter"
          fill
          objectFit="cover"
        />
      </div>
      <div className="p-8">
        <div className="text-xl uppercase tracking-wide font-bold">
          Ahsan Ullah
        </div>
        <div className="text-xs text-gray-500 uppercase ">Student at BUET</div>
        <div className="text-sm text-gray-600 font-semibold py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit delectus
          in dolores? Dolor enim veniam quis dolorem, delectus vero quae!
        </div>
      </div>
    </div>
  );
};
const YouthList = () => {
  return (
    <SectionContainer parentClass="my-8">
      <div className="">
        <h1 className="text-3xl text-[#006A51] font-bold uppercase text-center">
          our Youths
        </h1>
        <div className="space-y-8 p-4">
          {[1, 2, 3, 4, 5, 6, 7, 7, 7].map((item) => (
            <YouthCard key={item} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default YouthList;
