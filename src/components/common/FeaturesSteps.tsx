"use client";
import Image from "next/image";
import React from "react";

type SingleTabData = {
  heading: string;
  steps: { id: number; title: string; description: string }[];
  image_url_1: string;
  image_alt_1: string;
  image_url_2: string;
  image_alt_2: string;
  tabs?: undefined;
};

type MultiTabData = {
  image_url_1?: string;
  image_alt_1?: string;
  image_url_2?: string;
  image_alt_2?: string;
  tabs: {
    heading: string;
    image_url_1: string;
    image_alt_1: string;
    image_url_2: string;
    image_alt_2: string;
    tabname: string;
    steps: { id: number; title: string; description: string }[];
  }[];
  heading?: undefined;
  steps?: undefined;
};

interface FeaturesStepsProps {
  data: SingleTabData | MultiTabData;
  tab: string;
}

export const FeaturesStepsSection = ({ data, tab }: FeaturesStepsProps) => {
  const activeTabData = data.tabs?.find((item) => item.tabname === tab);

  return (
    <>
      <section className=" lg:bg-[url('/background/features-bg-2.svg')] bg-cover  ">
        <div className="py-10 lg:py-20 lg:px-[9%] ">
          <h2 className=" pt-5 text-[20px] md:text-[26px] lg:text-[30px] xl:text-[38px] 2xl:text-[48px] font-bold text-center mb-10 md:mb-18  lg:mb-26">
            {data.tabs ? activeTabData?.heading : data.heading}
          </h2>

          <div className="flex flex-col-reverse lg:flex-row justify-between gap-12 items-center lg:mb-20">
            <div className="space-y-10 lg:w-[55%]">
              {(data.tabs
                ? activeTabData?.steps?.slice(0, 4)
                : data?.steps?.slice(0, 4)
              )?.map((step, idx) => (
                <div key={step.id} className="flex items-start gap-5">
                  <span className="flex-shrink-0 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] w-[30px] h-[30px] md:w-[38px] md:h-[38px] lg:w-[45px] lg:h-[45px] xl:w-[50px] xl:h-[50px] flex items-center justify-center rounded-full bg-[#0668E1] text-white font-bold">
                    {String(step.id).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="mb-2 lg:mb-4 text-[15px] md:text-[17px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-bold">
                      {step.title}
                    </h3>
                    <p className="text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-end items-center h-full sm:w-[60%] md:w-[45%]">
              <Image
                src={data.tabs ? activeTabData!.image_url_1 : data.image_url_1}
                alt={data.tabs ? activeTabData!.image_alt_1 : data.image_alt_1}
                width={1080}
                height={1080}
                className="max-h-[85%] max-w-[85%]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className=" lg:bg-[url('/background/features-bg-3.svg')] bg-cover ">
        <div className="py-10 lg:px-[9%] ">
          <h2 className=" mt-8 hidden lg:block py-4  text-[20px] md:text-[26px] lg:text-[30px] xl:text-[38px] 2xl:text-[48px] font-bold text-center mb-4  md:mb-16  lg:mb-26">
            {data.tabs ? activeTabData?.heading : data.heading}
          </h2>

          <div className="flex flex-col lg:flex-row justify-between gap-12 items-center mb-10 lg:mb-24">
            <div className="flex justify-center lg:justify-start items-center h-full sm:w-[60%] md:w-[45%] order-1">
              <Image
                src={data.tabs ? activeTabData!.image_url_2 : data.image_url_2}
                alt={data.tabs ? activeTabData!.image_alt_2 : data.image_alt_2}
                width={1080}
                height={1080}
                className="max-h-[85%]  max-w-[85%]"
              />
            </div>

            <div className="space-y-10 lg:w-[55%] order-2">
              {(data.tabs ? activeTabData?.steps : data.steps)
                ?.slice(4, 8)
                ?.map((step, idx) => (
                  <div key={step.id} className="flex items-start gap-5">
                    <span className="flex-shrink-0 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] w-[30px] h-[30px] md:w-[38px] md:h-[38px] lg:w-[45px] lg:h-[45px] xl:w-[50px] xl:h-[50px] flex items-center justify-center rounded-full bg-[#0668E1] text-white font-bold">
                      {String(step.id).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="mb-2 lg:mb-4 text-[15px] md:text-[17px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-bold">
                        {step.title}
                      </h3>
                      <p className="text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] font-medium">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
