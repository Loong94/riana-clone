import Image from "next/image";
import React from "react";
import Button from "./Button";

const UnitLayout = () => {
  return (
    <section className="bg-[#312828]">
      <div className="container mx-auto w-[95%] lg:w-3/4">
        <div className="flex flex-col mx-2 my-10 gap-y-10 justify-around">
          <div>
            <h1 className="text-white regular-40 text-left mb-3">LAYOUT</h1>
            <hr />
          </div>
          <div className="flex flex-col mx-5 gap-10 lg:flex-row-reverse ">
            <div className="lg:hidden">
              <p className="text-white">
                Unique panoramic forest or city view with a dynamic layout for
                tranquil living or savvy investment.
              </p>
            </div>
            <div>
              <Image
                src="/layout.webp"
                alt="Condominium Unit Layout"
                height={683}
                width={686}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-5 justify-between lg:justify-center">
              <div className="text-white hidden lg:block">
                <p>
                  Unique panoramic forest or city view with a dynamic layout for
                  tranquil living or savvy investment.
                </p>
              </div>
              <div className="text-white">
                <div className="flex flex-row gap-3 my-1">
                  <strong className="font-bold w-1/4">LAYOUT</strong>
                  <p>3 BEDROOMS 2 BATHROOMS</p>
                </div>
                <hr />
                <div className="flex flex-row gap-3 my-1">
                  <strong className="font-bold w-1/4">SIZE</strong>
                  <p>900 sqft</p>
                </div>
                <hr />
                <div className="flex flex-row gap-3 my-1">
                  <strong className="font-bold w-1/4">PRICE</strong>
                  <p>RM650k+-</p>
                </div>
                <hr />
              </div>
              <Button
                type="button"
                title="WHATSAPP US"
                icon="/Digital_Glyph_White.png"
                variant="bg-green-50 px-8 py-2 w-2/3 text-white border-yellow-400 border-[3px] self-center mb-3 sm:mb-0 transition-all hover:bg-[#1DA830]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnitLayout;
