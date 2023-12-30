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

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TowerImage />
      <EmailWhatsapp />
      <FancyDescription />
      <Features />
      <MapIntro />
      <PublicUtilities />
      <SellingPoint />
      <Facilities />
      <UnitLayout />
      <LearnMore />
    </div>
  );
}
