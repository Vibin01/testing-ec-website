"use client";

import React from "react";

export const GradientButton = ({
  text,
  link,
}: {
  text: string;
  link: string;
}) => {
  return (
    <>
      <button id={text} className="bg-[linear-gradient(90deg,#004AA6_0%,#0668E1_50%,#0072FF_100%)] cursor-pointer font-bold text-white text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[24px] w-[174px] h-[44px] md:w-[200px] md:h-[56px] lg:w-[240px] lg:h-[64px]  2xl:w-[320px] 2xl:h-[80px] rounded-[10px] lg:rounded-[20px] padding-[12px_16px_12px_16px] lg:padding-[25px_40px_25px_40px]">
        {text}
      </button>
    </>
  );
};
