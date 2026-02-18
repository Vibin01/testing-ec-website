"use client";
import { pricingPlans } from "@/data/PricingPageData";
import PricingCard from "./PricingCard";
import { useState } from "react";
import PlanComparision from "./PlanComparision";
import FAQSection from "@/components/common/FAQSection";

export default function PricingPage() {
  const [yearlyPlan, setYearlyPlan] = useState(false);
  return (
    <main className=" flex flex-col items-center justify-center ">
      <div className="lg:bg-[url('/background/pricing-bg-1.svg')] bg-cover ">
        <div className=" bg-[url('/background/mobile-pricing-part-1.svg')] pb-8 lg:pb-0 lg:bg-none bg-cover bg-no-repeat">
          <div className="px-[7%] py-[3%] w-full lg:bg-[#FFFFFF4D] ">
            <h1 className="py-14 xl:py-16 2xl:py-20 text-center text-[34px] md:text-[38px] lg:text-[40px] xl:text-[54px] 2xl:text-[72px] font-bold">
              Start For Free. Hire Stress-Free.
            </h1>
            <h2 className="mb-4 lg:mb-7 text-[20px] md:text-[26px] lg:text-[30px] xl:text-[38px] 2xl:text-[48px] font-bold text-center ">
              Choose Your Right Plan!
            </h2>
            <p className="mb-8 lg:mb-12 text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-medium text-center  mx-auto md:max-w-[70%]">
              Subscribe to transform your hiring team and process to
              consistently attract top talent with innovative tools and
              strategies, redefining the candidate experience.
            </p>

            {/* <div className=" flex items-center justify-center  ">
              <div className=" bg-white rounded-[40px]  flex flex-row gap-3 lg:gap-5 p-1.5 md:p-2 lg:p-3 ">
                
                <button
                  onClick={() => setYearlyPlan(false)}
                  className={`w-[110px] md:w-[200px] lg:w-[230px] xl:w-[280px] 2xl:w-[300px] lg:h-[48px] xl:h-[56px] text-[12px] md:text-[16px] lg:text-[18px] xl:text-[20px]  py-2 rounded-[30px] font-semibold transition-all ${
                    !yearlyPlan
                      ? "bg-[#0668E1] text-white"
                      : " hover:bg-gray-100"
                  }`}
                >
                  Quarterly
                </button>

                
                <button
                  onClick={() => setYearlyPlan(true)}
                  className={`w-[110px] md:w-[200px] lg:w-[230px] xl:w-[280px] 2xl:w-[300px] lg:h-[48px] xl:h-[56px] text-[12px] md:text-[16px] lg:text-[18px] xl:text-[20px]  py-2 rounded-[30px] font-semibold transition-all ${
                    yearlyPlan
                      ? "bg-[#0668E1] text-white"
                      : " hover:bg-gray-100"
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div> */}
          </div>
        </div>
        <div className=" bg-[url('/background/mobile-pricing-part-2.svg')] lg:bg-none bg-cover bg-no-repeat">
          <div className="px-[7%] py-[10%] lg:py-[4%] w-full lg:bg-[#FFFFFF4D]">
            <div className=" lg:-mx-[4%] xl:-mx-0 flex flex-col gap-4 lg:gap-px lg:flex-row items-center lg:items-stretch lg:justify-around  ">
              {pricingPlans.map((plan) => (
                <PricingCard key={plan.id} {...plan} yearlyPlan={yearlyPlan} features={plan.features.filter((f) => f !== undefined)} />
              ))}
            </div>
            <p className="mt-6 mb-10 text-right text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]">
              "Pricing is for employers only; 

              <span className="block"/>
                candidates and recruiters can 
                <span className="font-bold text-[#0668E1]">
                  {" "}
                  download EC for free"
                
                
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-[url('/background/mobile-pricing-part-3.svg')] lg:bg-[url('/background/pricing-bg-2.svg')] bg-cover ">
        <div className="px-[6%] py-[6%] w-full">
          <PlanComparision />
        </div>
      </div>
      <div className="w-full bg-[url('/background/mobile-pricing-faq.svg')] lg:bg-[url('/background/pricing-bg-3.svg')] bg-cover ">
        <div className=" w-full px-[7%] py-[4%] lg:-bg-[#FFFFFF00]">
          <FAQSection />
        </div>
      </div>
    </main>
  );
}
