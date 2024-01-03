"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import first from "../public/gallery_1.webp";
import second from "../public/gallery_2.webp";
import third from "../public/gallery_3.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const ImageAutoplay = () => {
  return (
    <div className="w-full h-full">
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div className="relative flex h-full w-full items-center justify-center">
            <Image
              src={first}
              alt="Gallery"
              fill
              className="-z-10 block h-full w-full object-fill blur-[1px]"
              sizes="70vw"
              placeholder="blur"
            />
            <div className="text-white flex flex-col gap-5 items-center justify-start">
              <h1 className="bold-52 md:bold-64">3R2B</h1>
              <h1 className="bold-52 md:bold-64">RM650k</h1>
              <h2 className="bold-20 md:bold-32">@ BANGSAR SOUTH</h2>
              <button
                type="button"
                className="rounded-full p-2 border-2 border-white"
              >
                VISIT NOW
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex h-full w-full items-center justify-center">
            <Image
              src={second}
              alt="Gallery"
              fill
              className="-z-10 block h-full w-full object-fill blur-[1px]"
              sizes="70vw"
              placeholder="blur"
            />
            <div className="text-white text-left flex flex-col gap-5 items-center justify-start">
              <h1 className="bold-20 md:bold-32">BANGSAR SOUTH</h1>
              <h1 className="bold-40 md:bold-52 leading-none w-2/3 md:w-full">
                RESIDENTIAL TITLE
              </h1>
              <button
                type="button"
                className="rounded-full p-2 border-2 border-white"
              >
                VISIT NOW
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex h-full w-full items-center justify-center">
            <Image
              src={third}
              alt="Gallery"
              fill
              className="-z-10 block h-full w-full object-fill blur-[1px]"
              sizes="70vw"
              placeholder="blur"
            />
            <div className="text-white flex flex-col gap-5 items-center justify-start">
              <h1 className="bold-20 md:bold-32">BANGSAR SOUTH</h1>
              <h1 className="bold-40 md:bold-52">LOW DENSITY</h1>
              <button
                type="button"
                className="rounded-full p-2 border-2 border-white"
              >
                VISIT NOW
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default ImageAutoplay;
