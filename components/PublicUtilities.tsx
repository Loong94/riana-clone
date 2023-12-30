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
    <>
      <section className="relative h-[20vh] md:h-[30vh] lg:h-[50vh]">
        <Image
          src="/bg_transition.png"
          alt="background color"
          fill
          className="object-fill"
        />
      </section>
      <section className="bg-gradient-to-b from-[#382D2D] via-[#312828] to-[#251E1E]">
        <div className="container mx-auto ">
          <div className="my-5 mx-auto w-11/12 lg:my-16">
            <div className="relative flex flex-row justify-between md:mx-2 lg:mx-5 ">
              <h1 className="text-white regular-24 md:regular-40 text-left w-3/5 ">
                AT YOUR DOORSTEP
              </h1>
              <div className="relative w-2/3 md:w-1/2 lg:w-2/6">
                <Image
                  fill
                  className="object-cover overflow-visible object-bottom "
                  src="/family.png"
                  alt="family"
                  sizes="100vh"
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
        </div>
      </section>
    </>
  );
};

export default PublicUtilities;
