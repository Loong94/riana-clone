import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ImageSwiper from "./ImageSwiper";

const PropertyGalleries = () => {
  return (
    <section className="bg-gradient-to-b from-[#312828] via-[#312828] to-[#251E1E]">
      <div className="container mx-auto w-[95%] lg:w-3/4">
        <ImageSwiper />
      </div>
    </section>
  );
};

export default PropertyGalleries;
