import React from "react";
import { ChroniclesData } from "@/data/ResourcesPageData";
import Image from "next/image";
import Link from "next/link";
const ChroniclesPage = () => {
  return (
    <>
      <section className="py-14 lg:py-[5%] flex flex-col md:items-center">
        <h2 className="text-[20px] md:text-[26px] lg:text-[30px] xl:text-[38px] 2xl:text-[48px] font-bold text-center mb-6 md:mb-8 ">
          Curated content Tailored to your role
        </h2>
        <p className="text-center mb-5 md:mb-0 md:px-[20%] text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] font-medium">
          Behind-the-scenes stories of the challenges that sparked EC. Honest
          problems. Honest solutions. One platform built to transform hiring and
          make it EASY.
        </p>
        <div className="mt-[7%] grid md:grid-cols-2  !justify-center lg:grid-cols-3 mx-auto gap-3 md:gap-2 ">
          {ChroniclesData.map((item, index) => (
            <Link
              key={index}
              href={`/resources/${item.path}`}
              className={`h-full w-full mx-auto ${
                index === 2 &&
                "md:mt-6 lg:mt-0 md:col-span-2 md:max-w-[440px] lg:max-w-max lg:col-span-1 "
              }`}
            >
              <div className="flex flex-col h-full px-1 cursor-pointer">
                <h3 className="mb-2 lg:mb-5 text-[18px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-semibold">
                  {item.role}
                </h3>

                {/* Card content */}
                <div data-card-role={item.role} className="solution-card group flex p-3 xl:p-4  bg-[#FFFFFF] rounded-[12px] hover:shadow-[0px_4px_6px_-3px_#0000000D,_0px_10px_15px_-3px_#0000000D] shadow-[0px_4px_6px_-3px_#0000000D] h-full">
                  <div className="w-[26%] flex items-center mr-3">
                    <Image
                      src={item.icon}
                      alt={item.icon_alt || "icons"}
                      width={1080}
                      height={1080}
                      className="w-auto h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </div>
                  <div className="w-[74%] flex flex-col justify-center">
                    <h4 className= "mb-2 lg:mb-3 text-[#0668E1] text-[13px] md:text-[14px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] font-bold">
                      {item.title}
                    </h4>

                    <p className="text-start text-[12px] md:text-[13px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default ChroniclesPage;
