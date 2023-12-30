import Image from "next/image";
import React from "react";

const Facilities = () => {
  return (
    <section className="bg-[#2d1e29]">
      <div className="mx-5 my-5 lg:my-20">
        <div className="container mx-auto">
          <div className="flex flex-col gap-y-10 items-center justify-around">
            <h1 className="text-white text-center mx-7 leading-none regular-32 lg:regular-52 lg:mx-[50vw]">
              RESIDENCE FACILITIES
            </h1>
            <div className="relative flex flex-col items-center justify-between gap-14 lg:flex-row lg:gap-0">
              <div>
                <Image
                  src="/facilities.webp"
                  alt="Condo Facility"
                  height={492}
                  width={1300}
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-5 text-white">
                <ul>
                  <h4 className="bold-16 underline mb-5">
                    Facilities on level 5
                  </h4>
                  <li>
                    <span className="rounded-full px-1.5 text-black font-bold bg-yellow-400">
                      1
                    </span>{" "}
                    Swimming Pool
                  </li>
                  <li>
                    <span className="rounded-full px-1.5 text-black font-bold bg-yellow-400">
                      2
                    </span>{" "}
                    Lounge Pool
                  </li>
                  <li>
                    <span className="rounded-full px-1.5 text-black font-bold bg-yellow-400">
                      3
                    </span>{" "}
                    Jacuzzi
                  </li>
                  <li>
                    <span className="rounded-full px-1.5 text-black font-bold bg-yellow-400">
                      4
                    </span>{" "}
                    Wading Pool
                  </li>
                  <li>
                    <span className="rounded-full px-1.5 text-black font-bold bg-yellow-400">
                      5
                    </span>{" "}
                    Barbeque Terrace
                  </li>
                  <li>
                    <span className="rounded-full px-1.5 text-black font-bold bg-yellow-400">
                      6
                    </span>{" "}
                    Toilet / Changing Room
                  </li>
                  <li>
                    <span className="rounded-full px-1.5 text-black font-bold bg-yellow-400">
                      7
                    </span>{" "}
                    Gymnasium
                  </li>
                  <li>
                    <span className="rounded-full px-1.5 text-black font-bold bg-yellow-400">
                      8
                    </span>{" "}
                    Playground
                  </li>
                  <li>
                    <span className="rounded-full px-1.5 text-black font-bold bg-yellow-400">
                      9
                    </span>{" "}
                    Play Lawn
                  </li>
                  <li>
                    <span className="rounded-full px-1 text-black font-bold bg-yellow-400">
                      10
                    </span>{" "}
                    Herbs Garden
                  </li>
                  <li>
                    <span className="rounded-full px-1 text-black font-bold bg-yellow-400">
                      11
                    </span>{" "}
                    Reflexology Path
                  </li>
                  <li>
                    <span className="rounded-full px-1 text-black font-bold bg-yellow-400">
                      12
                    </span>{" "}
                    Yoga Deck
                  </li>
                  <li>
                    <span className="rounded-full px-1 text-black font-bold bg-yellow-400">
                      13
                    </span>{" "}
                    Open Terrace
                  </li>
                  <li>
                    <span className="rounded-full px-1 text-black font-bold bg-yellow-400">
                      14
                    </span>{" "}
                    Co-work Area (Open)
                  </li>
                  <li>
                    <span className="rounded-full px-1 text-black font-bold bg-yellow-400">
                      15
                    </span>{" "}
                    Indoor Kids Playzone
                  </li>
                  <li>
                    <span className="rounded-full px-1 text-black font-bold bg-yellow-400">
                      16
                    </span>{" "}
                    Co-work Area (Enclosed)
                  </li>
                </ul>
                <ul className="list-disc">
                  <h4 className="bold-16 underline mb-5">Other area</h4>
                  <li>Main Entrance Lobby</li>
                  <li>Management Office</li>
                  <li>Car Wash Area</li>
                  <li>Half-Basketball Court</li>
                  <li>Forest Park</li>
                  <li>Walking & Jogging Path</li>
                  <li>Adventure Playground (Ground Floor)</li>
                  <li>Community Park</li>
                  <li>Nursery</li>
                  <li>Surau </li>
                  <li>Multipurpose Hall</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
