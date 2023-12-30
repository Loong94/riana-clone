import React from "react";
import Button from "./Button";
import Image from "next/image";

const SellingPoint = () => {
  return (
    <section className="w-screen h-screen bg-black">
      <div className="h-screen flex flex-col items-center justify-around ">
        <h1 className="text-white text-center regular-32 md:regular-40 ">
          MINUTES TO EVERYWHERE
        </h1>
        <div className="relative w-11/12 md:w-4/5 h-2/5 lg:h-3/5 ">
          <Image
            src="/car_area.gif"
            alt="Popular City"
            fill
            className="object-fill"
          />
        </div>
        <Button
          type="button"
          title="GET EXACT LOCATION"
          icon="/Digital_Glyph_White.png"
          variant="bg-green-50 px-8 py-2 w-[70vw] lg:w-1/3 text-white border-yellow-400 border-[3px] self-center mb-3 sm:mb-0 transition-all hover:bg-[#1DA830]"
        />
      </div>
    </section>
  );
};

export default SellingPoint;
