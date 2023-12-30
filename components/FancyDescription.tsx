import Image from "next/image";
import React from "react";

const FancyDescription = () => {
  return (
    <section className="relative h-screen bg-black">
      <div className="h-screen flex flex-col items-center justify-evenly lg:flex-row">
        <div className="grid grid-cols-1 justify-between items-center gap-10 w-[75vw] lg:w-1/3">
          <h1 className="text-2xl font-serif text-gray-200 text-left regular-24 md:regular-32 lg:regular-52 ">
            EPITOME OF ELEGANCE AND NATURE
          </h1>
          <p className="text-white text-left md:regular-18 lg:regular-24">
            Sitting atop a gentle hillside, TREES RESIDENCE is an urban paradise
            created to enhance the quality of life. Its elevated location is
            ideal for harnessing the ﬂowing positive energy from all sides of an
            excellent living environment.
          </p>
        </div>
        <div className="w-full h-[45vh] grid grid-cols-2 gap-4 items-center relative lg:w-1/2 lg:h-[66vh] ">
          <div className="absolute h-[45vh] w-[42.5vw] ml-[5vw] lg:w-1/2 lg:h-[66vh] lg:ml-0 ">
            <Image
              src="/wood.webp"
              alt="wood"
              fill
              className="h-auto w-1/2 object-contain "
            />
          </div>
          <div className="absolute h-[45vh] w-[42.5vw] ml-[52.5vw] lg:w-1/2 lg:h-[66vh] lg:ml-[27.5vw]">
            <Image
              src="/leaves.webp"
              alt="leaves"
              fill
              className="h-auto w-1/2 object-contain "
            />
          </div>
        </div>
        {/* <div className="w-80 h-60 rounded-md overflow-hidden relative">
          <div className="w-full h-full absolute flex transition-all duration-300">
            <div className="relative shrink-0 w-full h-full">
              <Image alt="random image" fill src="/leaves.webp" />
            </div>
            <div className="relative shrink-0 w-full h-full">
              <Image alt="random image" fill src="/wood.webp" />
            </div>
          </div>
        </div> */}
        {/* <div className="relative overflow-hidden w-[75vw] h-1/2 flex flex-row items-start gap-5 border-2 border-red-600 lg:gap-10 lg:w-1/2 lg:h-5/6">
          <Image src="/wood.webp" alt="wood" fill className="object-contain" />
          <Image
            src="/leaves.webp"
            alt="leaves"
            fill
            className="object-contain"
          />
        </div> */}
      </div>
    </section>
  );
};

export default FancyDescription;
