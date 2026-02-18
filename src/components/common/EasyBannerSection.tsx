import React from "react";

interface BannerSectionProps {
  data: {
    title: string;
    content: string;
  };
}

export const EasyBannerSection = ({ data }: BannerSectionProps) => {
  return (
    <>
      <div className=" mt-10 lg:mt-0 lg:w-full flex flex-col items-center justify-center md:border-white bg-white  md:bg-[#FFFFFF66] rounded-[12px] md:rounded-[20px] lg:rounded-[30px] xl:rounded-[40px] shadow-[0px_0px_6px_0px_#0668E11A] md:shadow-none md:border-[2px] padding-[60px_40px_60px_40px] py-[8%] px-[5%] md:p-[5%]">
        <h1 className="md:flex md:gap-6 items-center text-[20px] md:text-[24px] lg:text-[30px] xl:text-[38px] 2xl:text-[48px] font-bold mb-6 lg:mb-14 ">
          {data.title}
          <span className="flex justify-center mt-2 md:mt-0 text-center   space-x-1.5 md:space-x-3  ">
            {["E", "A", "S", "Y", "!"].map((word, index) => (
              <span
                key={index}
                className="flex justify-center items-center w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[48px] lg:h-[48px] xl:w-[56px] xl:h-[56px] 2xl:w-[64px] 2xl:h-[64px] text-[20px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[42px] font-extrabold italic border rounded-[8px] md:rounded-[10px] lg:rounded-[16px] border-white  shadow-[0px_0px_20px_0px_#FFFFFF,_0px_0px_10px_0px_#0668E126] text-[#0668E1] bg-[radial-gradient(54.17%_54.17%_at_50%_50%,rgba(255,255,255,0.06)0%,rgba(255,255,255,0.6)_100%)]"
              >
                {word}
              </span>
            ))}
          </span>
        </h1>
        <p className="font-medium text-[14px] lg:text-[16px] xl:text-[22px] 2xl:text-[24px] text-center  mx-auto">
          {data.content}
        </p>
      </div>
    </>
  );
};
