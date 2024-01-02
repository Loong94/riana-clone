import Image from "next/image";
import React from "react";

const PublicUtilities = () => {
  const data = [
    {
      image: "/nexus.jpg",
      title: "RETAILS / CONVENIENCE",
      bp1: "Nexus - Bangsar South",
      bp2: "Mid Valley Megamall & The Gardens",
    },
    {
      image: "/healthcare.jpeg",
      title: "HEALTHCARE",
      bp1: "LifeCare Diagnostic Medical Centre",
      bp2: "University Malaya Medical Centre",
    },
    {
      image: "/cbd.jpg",
      title: "CENTRAL BUSINESS DISTRICT",
      bp1: "Vertical Corporate Tower",
      bp2: "UOA Corporate Tower",
    },
  ];
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/pubUtil_bg.webp"
          alt="background color"
          fill
          className="object-fill"
        />
      </div>
      <div className="container mx-auto my-10 w-[95%] overflow-hidden">
        <div className="relative flex flex-row justify-between h-[25vh] md:h-[30vh] lg:h-[45vh] xl:h-[50vh]">
          <h1 className="text-white regular-24 md:regular-40 text-left self-end w-3/5 ">
            AT YOUR DOORSTEP
          </h1>
          <div className="relative w-3/5">
            <Image
              fill
              className="object-fill object-bottom overflow-visible"
              src="/family.png"
              alt="family"
            />
          </div>
        </div>
        <hr />
        <div className="flex flex-col items-center justify-between mt-10 gap-10 lg:flex-row lg:mt-20 ">
          {data.map((x) => {
            return (
              <React.Fragment key={x.title}>
                <article className="grid place-items-center w-full gap-y-3 lg:gap-y-9 ">
                  <div className="relative grid-element w-[95%] h-[25vh] md:h-[33vh] ">
                    <Image
                      fill
                      className="object-fill"
                      src={x.image}
                      alt={x.title}
                    />
                  </div>
                  <h2 className="text-center text-white bold-14 sm:regular-16 md:bold-20 lg:bold-24">
                    {x.title}
                  </h2>
                  <ul className="w-5/6 list-disc text-white ">
                    <li>{x.bp1}</li>
                    <li>{x.bp2}</li>
                  </ul>
                </article>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PublicUtilities;
