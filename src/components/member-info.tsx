import SectionContainer from "@/components/section-container";
import Image from "next/image";

const MemberInfo = () => {
  return (
    <SectionContainer>
      <div className="grid grid-cols-12">
        <div className="relative w-full aspect-[9/16] col-span-4">
          <Image
            src={"https://source.unsplash.com/2LowviVHZ-E"}
            alt="hello"
            fill
            objectFit="cover"
          />
        </div>
        <div className="col-span-8 p-8 bg-[] space-y-4">
          <h1 className="uppercase text-2xl font-bold">Abdur Rahman</h1>
          <div className="text-xs text-gray-600 uppercase ">
            Assistant Director
          </div>
          <div className="text-sm text-gray-800 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            voluptate aut, enim consequuntur incidunt libero ab rerum quidem
            perspiciatis voluptates natus optio voluptas possimus quae commodi
            quos, earum recusandae iste vitae, blanditiis eum! Dignissimos quo
            perspiciatis adipisci magnam sit, natus quidem dolor? Consequuntur
            quibusdam deserunt itaque necessitatibus eaque commodi maiores!
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default MemberInfo;
