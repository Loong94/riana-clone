import Image from "next/image";
import React from "react";

const TowerImage = () => {
  return (
    <section className="relative w-full h-[640px] md:h-[768px] lg:h-[1024px] xl:h-[1280px] 2xl:h-[1536px]">
      <Image
        src="/perks-living-exclusive-image.png"
        alt="tower"
        fill
        sizes="100vw"
      />
    </section>
  );
};

export default TowerImage;
