import Image from "next/image";
import React from "react";
import wood from "../public/wood.webp";
import leaves from "../public/leaves.webp";

const FancyDescription = () => {
  return (
    <section className="relative h-screen bg-black" id="fancy-desc-section">
      <div className="h-screen flex flex-col items-center justify-evenly lg:flex-row">
        <div className="grid grid-cols-1 justify-between items-center gap-y-5 md:gap-y-10 w-[75vw] lg:w-1/3">
          <h1 className="leading-none font-serif text-gray-200 text-left regular-32 md:regular-40 lg:regular-52 ">
            EPITOME OF ELEGANCE AND NATURE
          </h1>
          <p className="text-white text-left regular-16 md:regular-18 lg:regular-24">
            Sitting atop a gentle hillside, TREES RESIDENCE is an urban paradise
            created to enhance the quality of life. Its elevated location is
            ideal for harnessing the ﬂowing positive energy from all sides of an
            excellent living environment.
          </p>
        </div>
        <div className="relative w-4/5 h-1/2 gap-x-5 flex flex-row justify-start lg:w-1/2 lg:h-4/5 ">
          <div className="relative w-1/2 md:w-2/5 lg:w-1/2 ">
            <Image
              src={wood}
              alt="wood"
              fill
              className="object-contain object-left"
              sizes="50vw"
            />
          </div>
          <div className="relative w-1/2 md:w-2/5 lg:w-1/2 ">
            <Image
              src={leaves}
              alt="leaves"
              fill
              className="object-contain object-left"
              sizes="50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FancyDescription;
