// components/ComparisonTable.tsx
"use client";

import React from "react";
import { comparisonData } from "@/data/PricingPageData"; 
import Image from "next/image";
import check from "@/public/tick-icon.svg";
import dash from "@/public/dash-icon.svg";


export default function ComparisonTable(): React.JSX.Element {
       const renderCheckOrDash = (value: boolean): React.JSX.Element => {
    if (value) {
      return <Image
                            src={check}
                            width={40}
                            height={40}
                            alt="connect-ec-tick-icon"
                            className="w-5 h-5 xl:w-8 xl:h-8 stroke-3 text-[#0668E1]"
                          />
    }
    return  <Image
                            src={dash}
                            width={40}
                            height={40}
                            alt="connect-ec-dash-icon"
                            className="w-5 h-5 xl:w-8 xl:h-8 stroke-3 text-[#606060]"
                          />;
  };
  return (
    <div className="">
      <h2 className="text-[20px] md:text-[26px] lg:text-[30px] xl:text-[38px] 2xl:text-[48px] font-bold text-center pt-6 lg:pt-0 mb-5 lg:mb-28">
        Plan Comparision
      </h2>

      {/* Desktop View */}

     <div className="px-[4%] lg:px-0 hidden lg:block ">
      <div className=" mx-auto">
        <div className="flex justify-evenly gap-6">
          {/* Column 1: Features */}
          <div className="w-[29%] bg-[#FFFFFF33] rounded-[30px] border border-[#0668E1] p-6 ">
            <h2 className="mb-6 pt-2 pb-6  text-center border-b-2 border-[#E4E4E4] lg:text-[18px] xl:text-[22px] 2xl:text-[26px] font-bold">
              Features/Benefits
            </h2>
            
            <div className="space-y-6 flex flex-col justify-center">
              {comparisonData.map((section) => (
                <div key={section.id} className={section.id > 1 ? "pt-10 border-t border-[#E4E4E4] " : ""}>
                  {section.service_heading && (
                    <h3 className={`lg:text-[16px] xl:text-[20px] 2xl:text-[24px] font-bold text-[#0668E1]  ${section.services ? "mb-[32px]":" mb-2 "}`}>
                      {section.service_heading}
                    </h3>
                  )}
                  
                  {section.services ? (
                    <div className="space-y-1 ">
                      {section.services.map((item, idx) => (
                        <div key={idx} className=""> 
                          <div className={`h-8 xl:h-10  flex text-[16px] xl:text-[20px] ${'service_highlight' in item ? "font-semibold" : "font-medium"}`}>
                            {'service_highlight' in item ? item.service_highlight : item.service} 
                          </div>
                          {'service_highlight' in item && (
                            <div className="font-medium text-[15px] xl:text-[18px] -mt-2 xl:-mt-3 xl:mb-[18px]">{item.service} </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="h-0"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Tier 1 (Free Forever) */}
          <div className=" w-[21%] bg-[#FFFFFF33] rounded-[30px] border border-[#0668E1] p-6">
            <h2 className="mb-6 pt-2 pb-6 text-center border-b-2 border-[#E4E4E4] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] font-bold">
              Tier 1 (Free Forever)
            </h2>
            
            <div className="space-y-6">
              {comparisonData.map((section) => (
                <div key={section.id} className={section.id > 1 ? " pt-10 border-t border-[#E4E4E4]" : ""}>
                  {section.service_heading && (
                    <div className={` ${section.services ? "h-[20px] xl:h-[40px] 2xl:h-[50px]  mb-6":"  "} text-[22px] font-bold text-[#0668E1] `}></div>
                  )}
                  
                  {section.services ? (
                    <div className="space-y-1">
                      {section.services.map((item, idx) => (
                        <div key={idx}>
                          <div className="h-8 xl:h-10 flex justify-center items-center">
                            {renderCheckOrDash(item.tiers[0])}
                          </div>
                          {'service_highlight' in item && (
                            <div className="h-[28px] "></div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="h-6 xl:h-10 flex justify-center items-center">
                      {renderCheckOrDash(section.tiers[0])}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Tier 2 (Standard) */}
          <div className="w-[21%] bg-[#FFFFFF33] rounded-[30px] border border-[#0668E1] p-6">
            <h2 className="mb-6 pt-2 pb-6 text-center border-b-2 border-[#E4E4E4] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] font-bold">
              Tier 2 (Standard)
            </h2>
            
            <div className="space-y-6">
              {comparisonData.map((section) => (
                <div key={section.id} className={section.id > 1 ? " pt-10 border-t border-[#E4E4E4]" : ""}>

                  {section.service_heading && (
                    <div className={` ${section.services ? "h-[20px] xl:h-[40px] 2xl:h-[50px] mb-6":"  "} text-[22px] font-bold text-[#0668E1] `}></div>

                  )}
                  
                  {section.services ? (
                    <div className="space-y-1">
                      {section.services.map((item, idx) => (
                        <div key={idx}>
                          <div className="h-8 xl:h-10 flex justify-center items-center">

                            {renderCheckOrDash(item.tiers[1])}
                          </div>
                          {'service_highlight' in item  && (
                            <div className="h-[28px]"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="h-6 xl:h-10 flex justify-center items-center">
                      {renderCheckOrDash(section.tiers[1])}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Tier 3 (Premium) */}
<div className="w-[21%] rounded-[30px]  bg-[#9CC8FF] p-[8px]">
          <div className=" bg-[#FFFFFF] rounded-[30px] border border-[#0668E1]  p-5">
            <h2 className="mb-6 pt-2 pb-6 text-center border-b-2 border-[#0668E1] text-[#0668E1] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] font-bold">
              Tier 3 (Premium)
            </h2>
            
            <div className="space-y-6">
              {comparisonData.map((section) => (
                <div key={section.id} className={section.id > 1 ? "pt-10 border-t border-[E4E4E4]" : ""}>
                  {section.service_heading && (
                                     <div className={` ${section.services ? "h-[20px] xl:h-[40px] 2xl:h-[50px]   mb-6":"  "} text-[22px] font-bold text-[#0668E1] `}></div>

                  )}
                  
                  {section.services ? (
                    <div className="space-y-1">
                      {section.services.map((item, idx) => (
                        <div key={idx}>
                          <div className="h-8 xl:h-10 flex justify-center items-center">

                            {renderCheckOrDash(item.tiers[2])}
                          </div>
                          {'service_highlight' in item  && (
                                                        <div className="h-[28px] "></div>

                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="h-6 xl:h-10 flex justify-center items-center">

                      {renderCheckOrDash(section.tiers[2])}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>

      {/* Mobile View */}

      <div className="lg:hidden pb-10">
  <table className="w-full">
    <thead className="border-b border-[#E4E4E4] text-[14px] md:text-[16px] font-semibold">
      <tr>
        <th className="p-3 font-semibold md:text-left">Services</th>
        <th className="p-3 font-semibold">T-1</th>
        <th className="p-3 font-semibold">T-2</th>
        <th className="p-3 font-semibold">T-3</th>
      </tr>
    </thead>

    {comparisonData.map((section, sectionIndex) => (
      <tbody
        key={section.id}
        className={`border-b border-[#E4E4E4] ${
          sectionIndex === comparisonData.length - 1 ? "border-b-0" : ""
        }`}
      >
        {/* Section Heading */}
        {section.service_heading && (
          <tr>
            <td
              colSpan={4}
              className="py-3 text-[#0668E1] font-bold text-[15px] md:text-[16px]"
            >
              {section.service_heading}
            </td>
          </tr>
        )}

        {/* Section WITH services */}
        {section.services &&
          section.services.map((item, i) => (
            <tr key={i}>
              <td className="py-3 text-[12px] md:text-[14px]">
                {item.service}
              </td>

              {item.tiers.map((tier, tierIndex) => (
                <td key={tierIndex} className="p-2 text-center">
                  {renderCheckOrDash(tier)}
                </td>
              ))}
            </tr>
          ))}

        {/* Section WITHOUT services (single row tiers) */}
        {!section.services && section.tiers && (
          <tr>
            <td className="py-3 text-[12px] md:text-[14px]">
              {section.service_heading}
            </td>

            {section.tiers.map((tier, tierIndex) => (
              <td key={tierIndex} className="p-2 text-center">
                {renderCheckOrDash(tier)}
              </td>
            ))}
          </tr>
        )}
      </tbody>
    ))}
  </table>
</div>

    </div>
  );
}
