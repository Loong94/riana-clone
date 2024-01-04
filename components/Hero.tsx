import Image from "next/image";
import React from "react";
import Button from "./Button";
import forest from "../public/bosque-nuboso.webp";

const Hero = () => {
  return (
    <section className="relative w-screen h-dvh">
      <Image
        src={forest}
        alt="forest"
        fill
        className="object-cover object-bottom"
        placeholder="blur"
      />
      <div className="relative h-screen z-10 flex flex-col items-center justify-around lg:flex-row lg:justify-center">
        <div className="relative w-[95vw] h-[18vh] lg:w-1/2 lg:right-[25vw] lg:mt-32">
          <Image
            src="/main_title1.webp"
            alt="title"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative flex flex-col items-center lg:flex-row lg:absolute lg:h-full lg:justify-between lg:w-[65vw] lg:bottom-0 lg:left-[35vw]">
          <div className="relative w-[97vw] h-[40vh] lg:w-[30vw] lg:h-[60vh] lg:self-end">
            <Image
              src="/asian_men1.png"
              alt="title"
              fill
              className="object-contain lg:object-cover lg:overflow-visible object-bottom"
            />
          </div>
          <div className="relative flex flex-col gap-3 w-[65vw] lg:w-2/5 lg:mr-5 lg:mt-[50vh] xl:mr-10 xl:w-5/12">
            <Button
              type="button"
              title="LEARN MORE >"
              navigate="#fancy-desc-section"
              variant="btn_wood"
            />
            <Button
              type="button"
              title="GET e-Brochure"
              icon="/Digital_Glyph_White.png"
              variant="btn_whatapps_green"
              navigate="whatsapp"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
