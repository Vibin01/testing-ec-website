"use client";
import React, { useEffect, useRef, useState } from "react";

interface TabWithDescriptionProps {
  data: {
    title: string;
    tabs: {
      tab: string;
      activeImage: string;
      inactiveImage: string;
      heading: string;
      content: string;
      author: string;
    }[];
  };
}

export const TabWithDescription = ({ data }: TabWithDescriptionProps) => {
  const [activeTab, setActiveTab] = useState(data.tabs[0].tab);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { scrollLeft, offsetWidth } = containerRef.current;
      const index = Math.round(scrollLeft / offsetWidth);
      setActiveIndex(index);
    };
    containerRef.current?.addEventListener("scroll", handleScroll);
    return () =>
      containerRef.current?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className=" relative text-[#1B1C17] py-[10%] lg:py-[2%]">
      <div className="  mx-auto text-center">
        <h2 className="text-[20px] md:text-[26px] lg:text-[30px] xl:text-[38px] 2xl:text-[48px] font-bold text-center mb-7 md:mb-24 lg:mb-34  ">
          {data.title}
        </h2>

        <div className="bg-[#FFFFFF1A] md:h-[510px]- lg:h-[600px] xl:h-[580px] 2xl:h-[570px] px-10 py-20 shadow-[0px_0px_10px_0px_#0668E11A] rounded-[40px] hidden md:flex flex-wrap justify-center items-center gap-4 mb-8">
          {/* Active Tab */}
          {data.tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(tab.tab)}
               data-title={tab.tab}
              className={` subpage-tab-section group flex flex-col items-center justify-center gap-2 px-6 py-4  md:w-[180px] lg:w-[210px] xl:w-[240px] 2xl:w-[260px]  shadow-[0px_0px_4px_0px_#0668E14D]  md:h-[110px] xl:h-[120px] 2xl:h-[140px] ${
                activeTab === tab.tab
                  ? "bg-[#0668E1] text-white font-bold"
                  : "text-black font-semibold"
              }  rounded-[20px] text-[14px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] cursor-pointer`}
            >
              {tab.tab} 

              {activeTab === tab.tab ? (
                <img
                  src={tab.activeImage}
                  alt={tab.tab}
                  className="object-contain"
                />
              ) : (
                <img
                  src={tab.inactiveImage}
                  alt={tab.tab}
                  className="object-contain"
                />
              )}
            </div>
          ))}
          {activeTab && (
            <div className="w-full text-center mt-8">
              <p className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] text-[#0668E1] italic font-extrabold my-6 2xl:my-8">
                {data.tabs.find((tab) => tab.tab === activeTab)?.heading}
              </p>
              <p className=" text-[14px] md:text-[16px] lg:text-[18px]  xl:text-[20px] 2xl:text-[22px] font-medium my-6 2xl:my-8 2xl:h-[60px]">
                {data.tabs.find((tab) => tab.tab === activeTab)?.content}
              </p>
              <p className="text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] text-[#1B1C17] italic font-extrabold">
                {data.tabs.find((tab) => tab.tab === activeTab)?.author}
              </p>
            </div>
          )}
        </div>

        <div className="w-full flex md:hidden flex-col">
          <div
            ref={containerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hidden no-scrollbar"
          >
            {data.tabs.map((tab: any, index: number) => (
              <div
                key={index}
                 data-title={tab.tab}
              className="subpage-tab-section group flex-shrink-0 snap-center w-full sm:w-[350px] md:w-[400px] p-3"
              >
                <div className="bg-[#FFFFFF1A] shadow-[0px_0px_10px_0px_#0668E126] rounded-[12px] h-full flex flex-col justify-between p-6">
                  <h3 className="text-[18px] font-bold mb-2">{tab.tab}</h3>
                  <h4 className="text-center text-[#0668E1] text-[16px] font-bold  lg:mb-3">
                    {tab.heading}
                  </h4>
                  {/* <p className="text-center text-[#0668E1] font-semibold mb-3">
                    {tab.subheading}
                  </p> */}
                  <p className="text-center text-[15px] my-5 lg:my-0 lg:mb-4">
                    {tab.content}
                  </p>
                  <p className="text-center text-[15px] font-bold">
                    {tab.author}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* indicator dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {data.tabs.map((_: any, index: number) => (
              <span
                key={index}
                className={` rounded-full transition-colors duration-300 ${
                  activeIndex === index
                    ? "bg-[#0668E1] h-[10px] w-[20px]"
                    : "bg-[#0668E11A] h-[10px] w-[10px]"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
