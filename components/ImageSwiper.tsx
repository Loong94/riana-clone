"use client";

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperTypes } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ImageSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperTypes | null>(null);

  const images = [
    {
      src: "/gallery_1.webp",
      alt: "Property gallery 1",
    },
    {
      src: "/gallery_2.webp",
      alt: "Property gallery 2",
    },
    {
      src: "/gallery_3.webp",
      alt: "Property gallery 3",
    },
    {
      src: "/gallery_4.webp",
      alt: "Property gallery 4",
    },
    {
      src: "/gallery_5.webp",
      alt: "Property gallery 5",
    },
    {
      src: "/gallery_6.webp",
      alt: "Property gallery 6",
    },
    {
      src: "/gallery_7.webp",
      alt: "Property gallery 7",
    },
    {
      src: "/gallery_8.webp",
      alt: "Property gallery 8",
    },
  ];

  return (
    <section className="my-10">
      <div className="container">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="h-96 w-full rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative flex h-full w-full items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="block h-full w-full object-fill"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={5}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumbs mt-3 h-32 w-full rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <button className="relative flex h-full w-full items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="block h-full w-full object-cover"
                  sizes="25vw"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ImageSwiper;
