"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface TabsSectionData {
  data: {
    title: string;
    tabData: {
      id: string;
      title: string;
      author: string;
      highlight: string;
      description: string;
      footer: string;
      icon: string;
    }[];
  };
}

export default function TabsSection({ data }: TabsSectionData) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
    <section className="py-8 w-full flex flex-col items-center justify-center xl:px-[6%] 2xl:px-[7%] ">
      {/* Heading */}
      <h2 className="text-[20px] md:text-[24px] lg:text-[30px] xl:text-[38px] 2xl:text-[48px] font-bold md:text-center mb-12 md:mb-20 lg:mb-30  ">
         <span className="flex justify-between items-center gap-2">
         <span className="md:hidden">
         <Image
                src={'/EC_Brain.svg'}
                alt="Icon"
                width={50}
                height={50}
                className="w-14 h-14 "
              />
              </span>
              <span className="w-[78%] md:w-full">
              
               {data.title}
               </span>
               </span>
      </h2>

      {/* Tabs */}
      <Tabs
        defaultValue={data.tabData[0].id}
        className="hidden md:flex w-full mb-8"
      >
        <TabsList className="md:grid grid-cols-4   flex items-center justify-center gap-2 w-full md:border-b-2 border-[#3A92FF] rounded-none h-auto">
          {data?.tabData?.map((items) => (
            <TabsTrigger
              key={items.id}
              value={items.id}
              data-title={items.title}
              className="tab-section group md:block pb-4 w-full h-[80px]  cursor-pointer font-bold  md:border-b-[10px] border-transparent  data-[state=active]:border-[#3A92FF] text-center"
            >
              <span className="text-[#0668E1] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                {items.title}
              </span>
              <span className="block font-semibold md:text-[11px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px]">
                {items.author}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        {data.tabData.map((items) => (
          <TabsContent key={items.id} value={items.id}>
            <div className="mt-14 md:h-[450px]  xl:h-[500px] rounded-[12px] md:rounded-[30px] xl:rounded-[40px] bg-[#FFFFFF1A] md:bg-[#FFFFFF66] shadow-[0px_0px_10px_0px_#0668E126] md:shadow-none md:border-[2px] border-white ">
              <div className="flex flex-col items-center justify-between text-center space-y-6 px-5 md:px-[3%] py-8">
                {/* Center Icon */}
                <div className="w-[120px] h-[120px] hidden md:flex items-center justify-center ">
                  <Image
                    src={items.icon}
                    alt="Icon"
                    width={200}
                    height={200}
                    className="w-full h-full"
                  />
                </div>

                <p className=" border-[linear-gradient(90deg,_#FFFFFF_0%,_#C8C8C8_50%,_#FFFFFF_100%)] flex md:hidden mt-3 font-bold  text-[18px]">
                  {items.title}
                </p>
                <hr className="block md:hidden -mt-4 w-full h-[1px] border-none bg-[linear-gradient(90deg,#FFFFFF_0%,#D2D2D2_50%,#FFFFFF_100%)]" />

                {/* Highlight */}
                <p className=" md:h-[78px] flex  items-center text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] text-[#0668E1] md:italic font-bold md:font-extrabold">
                  {items.highlight}
                </p>

                {/* Description */}
                <p className=" mt-2 text-center font-medium text-[15px] lg:text-[16px] xl:text-[19px] 2xl:text-[22px]">
                  {items.description}
                </p>
                {/* Footer */}
                <p className="mt-3 font-bold md:font-extrabold md:italic text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]">
                  {items.footer}
                </p>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
      {/* Mobile View */}
      <div className="w-full flex md:hidden flex-col px-[2%]">
        {/* <div className="w-full flex md:hidden justify-center gap-3">
          {data.tabData.map((items: any, index: number) => (
            <div
              key={index}
              className={`${
                activeIndex === index ? "scale-125" : "scale-100"
              } md:hidden flex justify-center items-center rounded-[8px] w-[32px] h-[32px] bg-[radial-gradient(54.17%_54.17%_at_50%_50%,_rgba(255,255,255,0.06)_0%,_rgba(255,255,255,0.6)_100%)] border-[0.53px_solid_#FFFFF] shadow-[0px_0px_4px_0px_#0668E126] cursor-pointer    `}
            >
              <Image
                src={items.icon}
                alt="Icon"
                width={20}
                height={20}
                className="w-7 h-7 p-0.5"
              />
            </div>
          ))}
        </div> */}
        <div
          ref={containerRef}
          className=" flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hidden no-scrollbar"
        >
          {data.tabData.map((items) => (
            <div
              key={items.id}
              
              data-title={items.title}
              className="tab-section group flex-shrink-0 snap-center w-full sm:w-[350px] md:w-[400px] p-2"
            >
              <div className="bg-[#FFFFFF1A] shadow-[0px_0px_10px_0px_#0668E126] rounded-[12px] h-full flex flex-col items-center justify-between p-6">
                <div>
                  <p className=" border-[linear-gradient(90deg,_#FFFFFF_0%,_#C8C8C8_50%,_#FFFFFF_100%)] flex md:hidden mt-3 font-bold  text-[18px]">
                    {items.title}
                  </p>
                  <hr className="mt-1.5 mb-3 block md:hidden  w-full h-[1px] border-none bg-[linear-gradient(90deg,#FFFFFF_0%,#D2D2D2_50%,#FFFFFF_100%)]" />
                </div>
                {/* Highlight */}
                <p className=" md:h-[78px] mb-3  text-center text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] text-[#0668E1] md:italic font-bold md:font-extrabold">
                  {items.highlight}
                </p>

                {/* Description */}
                <p className=" mt-2 text-center mb-3 font-medium text-[15px] lg:text-[16px] xl:text-[19px] 2xl:text-[22px]">
                  {items.description}
                </p>
                {/* Footer */}
                <p className="mt-3 mb-3 text-center font-bold md:font-extrabold md:italic text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]">
                  {items.footer}
                </p>
              </div>
            </div>
          ))}
        </div>
         {/* indicator dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {data.tabData.map((_: any, index: number) => (
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
    </section>
  );
}
