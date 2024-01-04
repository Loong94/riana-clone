import AutoplayIntro from "@/components/AutoplayIntro";
import EmailWhatsapp from "@/components/EmailWhatsapp";
import Facilities from "@/components/Facilities";
import FancyDescription from "@/components/FancyDescription";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LearnMore from "@/components/LearnMore";
import MapIntro from "@/components/MapIntro";
import PropertyGalleries from "@/components/PropertyGalleries";
import PublicUtilities from "@/components/PublicUtilities";
import SellingPoint from "@/components/SellingPoint";
import TowerImage from "@/components/TowerImage";
import UnitLayout from "@/components/UnitLayout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <button
        type="button"
        className="fixed z-50 bottom-5 right-2 md:right-5 rounded-full animate-bounce"
      >
        <Link href="https://www.whatsapp.com/" target="_blank">
          <Image
            src="/whatsapp_icon.png"
            alt="Whatsapp Icon"
            height={80}
            width={80}
            className="object-contain"
          />
        </Link>
      </button>
      <div className="flex flex-col">
        <Hero />
        <TowerImage />
        <EmailWhatsapp />
        <FancyDescription />
        <Features />
        <MapIntro />
        <PublicUtilities />
        <SellingPoint />
        <AutoplayIntro />
        <Facilities />
        <UnitLayout />
        <PropertyGalleries />
        <LearnMore />
      </div>
    </>
  );
}
