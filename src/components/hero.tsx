import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-screen flex h-[80vh] items-center">
      <div className="  relative w-full h-full place-self-start">
        <Image src={"/flag-bg.png"} alt="hero" fill objectFit="cover" />
      </div>
      <div className="relative w-full h-1/2 col-span-4">
        <Image src={"/bant-logo.png"} alt="hero" fill objectFit="contain" />
      </div>
    </div>
  );
};

export default Hero;
