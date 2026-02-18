import { HeroTextContainerSection } from "@/components/common/HeroTextContainerSection";
import Image from "next/image";
import React from "react";

interface HeroSectionProps {
  HeroData: {
    title: string;
    title_highlight: string;
    sub_title: string;
    content_highlight: string;
    image: string;
    image_alt: string;
    content: string;
    button_text: string;
    button_link: string;
  };
}

export const HeroSection = ({ HeroData }: HeroSectionProps) => {
  return (
    <>
      <div className="lg:w-[68%] xl:w-[60%]  ">
        <HeroTextContainerSection data={HeroData} />
      </div>
      <div className="lg:w-[40%] lg:-mr-10 relative py-10 lg:py-0 px-5 lg:px-0  ">
        <Image
          src={HeroData?.image}
          alt={HeroData?.image_alt}
          width={1080}
          height={1080}
          priority
          className="w-full h-auto"
        />
      </div>
    </>
  );
};
