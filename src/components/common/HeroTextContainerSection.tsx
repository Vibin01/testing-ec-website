import React, { JSX } from "react";
import { GradientButton } from "./Button/GradientButton";

interface HeroTextContainerSectionProps {
  data: {
    title: string;
    title_highlight: string;
    sub_title: string | JSX.Element;
    button_text: string;
    button_link: string;
    image?: string;
    image_alt?: string;
    content: string;
    content_highlight: string;
  };
}


export const HeroTextContainerSection =  ({
  data,
}: HeroTextContainerSectionProps) => {
  return (
    <>
      <div className="flex flex-col gap-1 pb-14 lg:pb-0 ">
        <h1 className=" xl:mb-3 xl:leading-6 2xl:leading-8 text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px]">
          {data.title}{" "}
          <span className="block md:inline-block font-bold text-[#0668E1]">
            {data.title_highlight}
          </span>
        </h1>
        <h2 className=" inline mb-3 lg:mb-6 leading-12 xl:leading-18 2xl:leading-22 text-[34px] md:text-[38px] lg:text-[40px] xl:text-[54px] 2xl:text-[72px] font-bold">
          {data.sub_title}

        </h2>
        <p className="mb-6 xl:mb-8 font-medium text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] md:w-[85%]">
          <span className="font-bold">{data.content_highlight} </span>
          {data.content}
          
        </p>
        <GradientButton text={data.button_text} link={data.button_link} />
      </div>
    </>
  );
};
