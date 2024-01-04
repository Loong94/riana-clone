import Image from "next/image";
import React from "react";
import Button from "./Button";
import greenMarbleBg from "../public/dark_green_marble.jpg";

const MapIntro = () => {
  return (
    // <section className="relative w-screen h-screen">
    //   <Image
    //     src={greenMarbleBg}
    //     alt="green marble background"
    //     fill
    //     className="object-fill opacity-90"
    //     placeholder="blur"
    //   />
    //   <div className="relative h-screen z-10 flex flex-col justify-evenly mx-5 lg:flex-row lg:items-center">
    //     <div className="relative w-full h-2/5 lg:h-4/5 lg:w-1/2">
    //       <Image
    //         src="/map_info.webp"
    //         alt="map"
    //         fill
    //         className="object-fill lg:object-contain"
    //       />
    //     </div>
    //     <div className="text-white flex flex-col gap-5 sm:gap-7 justify-between lg:w-[33vw]">
    //       <h1 className="bold-32">ALL AT ONCE</h1>
    //       <p className="regular-14 sm:regular-16 lg:regular-20">
    //         Behold. Bangsar Souths latest jewel, Pantai Sentral Park is the next
    //         masterplan to propel a brand new definition of nature integrated
    //         township.
    //       </p>
    //       <p className="regular-14 sm:regular-16 lg:regular-20">
    //         Green pedestrian walkways carefully twist around multi-tiered
    //         streets to provide a unique sense of cohabitation experience. A
    //         bypass tunnel connecting the township and NPE highway is the gateway
    //         to all it matters in the city.
    //       </p>
    //       <p className="regular-14 sm:regular-16 lg:regular-20">
    //         As the townships last residential project, Trees Residence is set to
    //         drive huge investment opportunities whilst invoking peace and
    //         tranquility among its dwellers.
    //       </p>
    //       <Button
    //         type="button"
    //         title="WHATSAPP US"
    //         icon="/Digital_Glyph_White.png"
    //         variant="bg-green-50 px-8 py-2 w-2/3 text-white border-yellow-400 border-[3px] self-center mb-3 sm:mb-0 transition-all hover:bg-[#1DA830]"
    //       />
    //     </div>
    //   </div>
    // </section>

    <section className="relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src={greenMarbleBg}
          alt="green marble background"
          fill
          className="object-fill"
        />
      </div>
      <div className="container mx-auto my-10 w-[95%]">
        <div className="relative h-screen z-10 flex flex-col justify-evenly mx-5 lg:flex-row lg:items-center">
          <div className="relative w-full h-2/5 lg:h-4/5 lg:w-1/2">
            <Image
              src="/map_info.webp"
              alt="map"
              fill
              className="object-fill lg:object-contain"
            />
          </div>
          <div className="text-white flex flex-col gap-5 sm:gap-7 justify-between lg:w-[33vw]">
            <h1 className="bold-32">ALL AT ONCE</h1>
            <p className="regular-14 sm:regular-16 lg:regular-20">
              Behold. Bangsar Souths latest jewel, Pantai Sentral Park is the
              next masterplan to propel a brand new definition of nature
              integrated township.
            </p>
            <p className="regular-14 sm:regular-16 lg:regular-20">
              Green pedestrian walkways carefully twist around multi-tiered
              streets to provide a unique sense of cohabitation experience. A
              bypass tunnel connecting the township and NPE highway is the
              gateway to all it matters in the city.
            </p>
            <p className="regular-14 sm:regular-16 lg:regular-20">
              As the townships last residential project, Trees Residence is set
              to drive huge investment opportunities whilst invoking peace and
              tranquility among its dwellers.
            </p>
            <Button
              type="button"
              title="WHATSAPP US"
              icon="/Digital_Glyph_White.png"
              variant="bg-green-50 border-green-50 px-8 py-2 w-2/3 text-white self-center mb-3 sm:mb-0 transition-all hover:bg-[#1DA830]"
              navigate="whatsapp"
              ringColour="ring-yellow-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapIntro;
