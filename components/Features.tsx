import Image from "next/image";
import React from "react";
import forest from "../public/bosque-nuboso.webp";

const Features = () => {
  const data = [
    {
      image: "/low_dense.webp",
      title: "LOW DENSITY",
      desc: "336 exclusive units resting on a 3.36 acre private land",
    },
    {
      image: "/residential_title.webp",
      title: "RESIDENTIAL TITLE",
      desc: "A design philosophy dedicated for a private life",
    },
    {
      image: "/forest park.webp",
      title: "NEXT TO 200 ACRES FOREST PARK",
      desc: "A close-knit relationship with the lushness of nature",
    },
    {
      image: "/balcony.webp",
      title: "ALL UNITS WITH BALCONY",
      desc: "Liberate your soul in scenic sights and soothing sound from the heart of your enclave",
    },
    {
      image: "/award_winning.webp",
      title: "AWARD-WINNING TOWNSHIP",
      desc: "Get social with a prestigious MNC township curated for a fulfilling lifestyle",
    },
    {
      image: "/class_a_developer.webp",
      title: "CLASS A DEVELOPER",
      desc: "Quality and Workmanship assured. Brought to you by Malaysia's Top Developer",
    },
  ];
  return (
    <section className="relative">
      <div className="container mx-auto w-[95%] lg:w-3/4 my-10">
        <Image
          src={forest}
          alt="forest"
          fill
          className="-z-10 blur-[2px]"
          sizes="50vw"
          placeholder="blur"
        />
        <div className="z-10 gap-10 flex flex-col items-center justify-evenly">
          <div className="text-white">
            <h1 className="text-center mb-3 regular-24 md:regular-32 lg:regular-52">
              UNIQUE FEATURES
            </h1>
            <p className="text-center regular-16 md:regular-18 lg:regular-24">
              THE INTRICATE DETAILS THAT CRAFT OUT PERFECTION
            </p>
          </div>
          <div className="grid gap-2 grid-cols-2 sm:gap-5 md:gap-y-10 lg:grid-cols-3 lg:gap-y-16">
            {data.map((x) => {
              return (
                <React.Fragment key={x.title}>
                  <article className="relative grid place-items-center transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl">
                    <div className="relative rounded-2xl grid-element w-1/3 h-[10vh] lg:h-[16vh] lg:w-[20vw]">
                      <Image
                        fill
                        className="rounded-2xl object-contain transition-transform duration-300 transform group-hover:scale-105"
                        src={x.image}
                        alt=""
                        sizes="50vw"
                      />
                    </div>
                    <h2 className="text-center text-white bold-14 sm:regular-16 md:bold-20 lg:bold-24">
                      {x.title}
                    </h2>
                    <p className="text-center text-white regular-14 sm:regular-16 md:regular-18 lg:regular-24">
                      {x.desc}
                    </p>
                  </article>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
