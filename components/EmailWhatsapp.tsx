import Image from "next/image";
import React from "react";
import Button from "./Button";
import greenMarbleBg from "../public/dark_green_marble.jpg";
import SubmitForm from "./SubmitForm";

const EmailWhatsapp = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src={greenMarbleBg}
          alt="background image"
          fill
          placeholder="blur"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-around h-full">
        <h1 className="text-2xl font-serif text-gray-200 md:regular-32 lg:regular-52">
          DOWNLOAD e-BROCHURE
        </h1>
        <SubmitForm
          formVariant="flex flex-col items-center justify-between w-auto"
          btnVariant="btn_green mt-5 transition-all hover:bg-[#1DA830]"
        />
        <div className="grid grid-cols-1 gap-1 justify-between">
          <label className="text-white">
            WHATSAPP US FOR IMMEDIATE RESPONSE
          </label>
          <Button
            type="button"
            title="WHATSAPP US"
            icon="/Digital_Glyph_White.png"
            variant="bg-green-50 border-green-50 px-8 py-2 text-white transition-all hover:bg-[#1DA830]"
            navigate="whatsapp"
            ringColour="ring-yellow-400"
          />
        </div>
      </div>
    </section>
  );
};

export default EmailWhatsapp;
