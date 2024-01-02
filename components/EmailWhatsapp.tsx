import Image from "next/image";
import React from "react";
import LabelInput from "./LabelInput";
import Button from "./Button";
import greenMarbleBg from "../public/dark_green_marble.jpg";

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
        <div className="flex flex-col items-center justify-between w-auto">
          <LabelInput label="Name" type="text" />
          <LabelInput
            label="Email*"
            placeholder="john.doe@company.com"
            type="email"
          />
          <LabelInput label="Phone" type="tel" />
          <Button
            type="button"
            title="SUBMIT"
            variant="btn_green mt-5 transition-all hover:bg-[#1DA830]"
          />
        </div>
        <div className="grid grid-cols-1 gap-1 justify-between">
          <label className="text-white">
            WHATSAPP US FOR IMMEDIATE RESPONSE
          </label>
          <Button
            type="button"
            title="WHATSAPP US"
            icon="/Digital_Glyph_White.png"
            variant="bg-green-50 px-8 py-2 text-white border-yellow-400 border-[3px] transition-all hover:bg-[#1DA830]"
          />
        </div>
      </div>
    </section>
  );
};

export default EmailWhatsapp;
