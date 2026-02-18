import React from "react";
import { GradientButton } from "./Button/GradientButton";
import Image from "next/image";
import { Description } from "@radix-ui/react-dialog";

interface CTASectionProps {
  data: {
    title: string;
    sub_title: string;
    description: string;
    button_text: string;
    button_link: string;
  };
}

export const CTASection = ({ data }: CTASectionProps) => {
  return (
    <div
      className="flex flex-col-reverse lg:flex-row justify-center items-center lg:justify-between   bg-[linear-gradient(90deg,rgba(255,255,255,0.4)_0%,rgba(218,237,255,0.4)_100%)]
     border border-[#0668E1] rounded-[24px]  lg:rounded-[40px] gap-3 md:gap-6 my-6 lg:my-0 py-[14%] lg:py-[5%] px-[5%] lg:px-[5%]"
    >
      <div className="flex flex-col justify-center items-center lg:w-[65%] lg:items-start gap-3 ">
        <h1 className=" font-bold text-[20px] md:text-[24px] lg:text-[30px] xl:text-[38px] 2xl:text-[48px] text-center lg:text-left">
          {data.title}
        </h1>
          <p className="text-[#1B1C17] text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[24px] font-medium  text-center lg:text-left mb-4 ">
{data.description}</p>
        <h2 className=" font-bold text-[16px] md:text-[18px] lg:text-[22px] xl:text-[28px] 2xl:text-[32px]">
          {data.sub_title}
        </h2>
        <GradientButton text={data.button_text} link={data.button_link} />
      </div>
      <div className=" justify-center items-center mb-6 lg:mb-0">
        <Image
          src={"/ec-connect.svg"}
          alt="Ec Connect"
          width={160}
          height={160}
          loading="lazy"
          className="w-[100px] lg:w-[200px] h-[100px] lg:h-[200px]"
        />
      </div>
    </div>
  );
};
