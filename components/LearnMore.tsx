import Image from "next/image";
import React from "react";
import Button from "./Button";
import greenMarbleBg from "../public/dark_green_marble.jpg";
import SubmitForm from "./SubmitForm";

const LearnMore = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <Image
        src={greenMarbleBg}
        alt="background image"
        fill
        className="object-fill -z-10"
        placeholder="blur"
        quality={10}
      />
      <div className="container mx-auto my-10">
        <div className="text-white mx-2 flex flex-col gap-10 md:mx-[10%] lg:mx-[20%] justify-between ">
          <div>
            <h1 className="regular-40 lg:regular-52">LEARN MORE</h1>
            <p className="bold-16 leading-none">
              The wait is over. Sign up and get entitled for exclusive launching
              price.
            </p>
          </div>
          <SubmitForm
            formVariant="flex flex-col gap-4 justify-between w-3/4"
            btnVariant="btn_green my-3 w-3/4 md:w-1/2 transition-all hover:bg-[#1DA830]"
          />
          <div className="flex flex-col gap-3 w-3/4 md:w-1/2 justify-between">
            <Button
              type="button"
              title="WHATSAPP US"
              icon="/Digital_Glyph_White.png"
              variant="bg-green-50 border-green-50 px-8 py-2 w-3/4 text-white transition-all hover:bg-[#1DA830]"
              navigate="whatsapp"
              ringColour="ring-yellow-400"
            />
            <label className="text-white leading-none w-3/4 text-center">
              WHATSAPP US FOR IMMEDIATE RESPONSE
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
