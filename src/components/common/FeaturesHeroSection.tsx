import React from "react";
import { GradientButton } from "./Button/GradientButton";

interface HeroTextContainerSectionProps {
  data: {
    heading: string;
    title: string;
    title_highlight: string;
    sub_title: string;
    button_text: string;
    button_link: string;
    image?: string;
    image_alt?: string;
    content: string;
    content_highlight: string;
  };
}
export const FeaturesHeroSection = ({
  data,
}: HeroTextContainerSectionProps) => {
  return (
    <>
      <div className="flex flex-col gap-1 lg:gap-3  pb-4 lg:pb-0">
        <h1 className="text-[12px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px]  font-bold">
          {data.heading}
        </h1>
        <h2 className="-mt-1 lg:-mt-2 text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px]">
          {data.title}
          <span className="font-bold text-[#0668E1]">
            {data.title_highlight}
          </span>
        </h2>
        <h2 className="-mt-2 lg:-mt-3  text-[34px] md:text-[38px] lg:text-[40px] xl:text-[54px] 2xl:text-[72px]  font-bold">
          {data.sub_title}
        </h2>
        <p className="mb-6 xl:mb-8 font-medium text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px]">
          <span className="font-bold">{data.content_highlight} </span>
          {data.content}
        </p>
        <GradientButton text={data.button_text} link={data.button_link} />
      </div>
    </>
  );
};
