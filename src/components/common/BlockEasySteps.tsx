"use client";

import Image from "next/image";
import { EasyBannerSection } from "./EasyBannerSection";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ConnectECSection from "./ConnectECBannerSection";

interface BlockEasyStepsProps {
  data: {
    title: string;
    steps: {
      title: string;
      icon: string;
      button_text?: string;
      button_link?: string;
      letter: string;
      description: string;
    }[];
    easyBannerData: {
      title: string;
      content: string;
    };
  };
}

export default function BlockEasySteps({ data }: BlockEasyStepsProps) {
  const pathname = usePathname();

  return (
    <>
      <div className=" -mx-[6%] md:-mx-[8%] px-[6%] md:px-[7%] bg-[url('/background/mobile-homesubpage-part-3.svg')] lg:bg-none bg-cover bg-no-repeat">
        <section className="w-full  px-[2%] xl:px-[6%] 2xl:px-[8%] mx-auto pt-16 lg:pt-24 ">
          <h2 className=" px-5 text-[20px] md:text-[24px] lg:text-[30px] xl:text-[38px] 2xl:text-[48px] font-bold text-center mb-4 md:mb-22 xl:mb-28 ">
            {data.title}{" "}
          </h2>
          <div className="hidden md:flex flex-col gap-6 pt-10 ">
            {data.steps.map((step, index) => (
              <div key={index} className=" flex w-full">
                <div
                  className={`w-3/12 flex flex-col ${
                    data.steps[index].icon ? "items-center" : "items-end"
                  } `}
                >
                  <h3 className="font-bold md:text-[18px] lg:text-[22px] xl:text-[24px] 2xl:text-[32px] mb-6">
                    {step.title}
                  </h3>
                  {data.steps[index].button_text ? (
                    <Link
                      href={step.button_link || ""}
                      className="mt-2 lg:mt-5 md:py-2 xl:py-3 md:px-4 xl:px-6 2xl:py-4 2xl:px-10 text-white rounded-[40px] cursor-pointer bg-[linear-gradient(90deg,_#0668E1_0%,_#004CAA_100%)] border-[2px]  border-[#59A3FF] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-semibold "
                    >
                      Learn more
                    </Link>
                  ) : (
                    <div className="mt-3 md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] xl:w-[100px] xl:h-[100px] 2xl:w-[120px] 2xl:h-[120px] md:px-4 md:py-3 xl:px-6 xl:py-4 2xl:px-8 2xl:py-6 flex items-center justify-center md:rounded-[20px] xl:rounded-[25px] 2xl:rounded-[30px] bg-[#FFFFFF33]  shadow-[2px_4px_8px_-2px_#00000026,_-2px_-2px_0px_2px_#FFFFFF33,_0px_0px_10px_0px_#0668E126]">
                      <Image
                        src={step.icon}
                        alt={`${step.title} icon`}
                        width={1280}
                        height={1280}
                        className="object-contain w-auto h-auto min-w-[40px] min-h-[40px]  2xl:min-w-[60px] 2xl:min-h-[60px] p-1"
                      />
                    </div>
                  )}
                </div>

                <div className="w-2/12 relative flex flex-col gap-4 items-center ">
                  <div className="w-[60px] h-[60px] rounded-[16px] opacity-[50%] border border-white text-[#0668E11A] flex items-center justify-center font-bold text-[26px] italic z-10 shadow-[0px_0px_20px_0px_#FFFFFF,_0px_0px_10px_0px_#0668E126] bg-[radial-gradient(54.17%_54.17%_at_50%_50%,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.6)_100%)]">
                    {step.letter}
                  </div>
                  {![
                    "empower-hiring-teams",
                    "explore-hiring-trends",
                    "engage-talent",
                    "exceed-hiring-targets",
                    "interview-scheduling-prediction-platform",
                    "employer-reviews",
                    "recruiter-motivation",
                    "job-search",
                  ].some((path) => pathname.includes(path)) &&
                    index !== data.steps.length - 1 && (
                      <Image
                        src="/easy-line.svg"
                        alt="Vertical Line"
                        width={10}
                        height={250}
                        className="md:w-[10px] lg:w-[12px] xl:w-[20px] h-auto xl:h-[230px] 2xl:h-[280px]"
                      />
                    )}
                </div>

                <div className="w-7/12 pb-26  ml-10 ">
                  <p className="lg:text-[16px] xl:text-[18px] 2xl:text-[22px] font-medium md:max-w-[90%]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className=" flex md:hidden flex-col gap-6 pt-10 ">
            {data.steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col w-full lg:border-none ${
                  data.steps.length - 1 === index ? "" : "border-b-[1.5px]"
                } border-white mb-3`}
              >
                <div className="flex  items-center gap-4 mb-6">
                  {" "}
                  {step.icon && (
                    <div className=" w-[24px] h-[24px] p-1 flex justify-center items-center rounded-[6px]  bg-[#FFFFFF] shadow-[0.4px_0.8px_1.6px_-0.4px_#00000026,_-0.4px_-0.4px_0px_0.4px_#FFFFFF33,_0px_0px_2px_0px_#0668E126]">
                      <Image
                        src={step.icon}
                        alt={`${step.title} icon`}
                        width={1280}
                        height={1280}
                        className="object-contain w-auto h-auto max-w-[18px] max-h-[18px]  "
                      />
                    </div>
                  )}
                  <h3 className="font-bold text-[18px] lg:text-[22px] xl:text-[26px] 2xl:text-[32px] ">
                    {step.title}
                  </h3>
                </div>

                <div className=" pb-6   ">
                  <p className="text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-medium ">
                    {step.description}
                  </p>
                </div>
                <div className="w-full flex justify-end pb-10">
                  {data.steps[index].button_text && (
                    <Link
                      href={step.button_link || ""}
                      className=" text-left cursor-pointer  text-[#0668E1] text-[15px] font-medium flex-col-reverse"
                    >
                      Learn more
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className=" -mx-[6%] md:-mx-[8%] px-[5%] md:px-[7%] bg-[url('/background/mobile-homesubpage-part-4.svg')] lg:bg-none bg-cover bg-no-repeat">
        <section className="w-full px-[2%] xl:px-[6%] 2xl:px-[8%] mx-auto pb-12 ">
          <div className="py-[8%] ">
            {![
              "predictive-interview-scheduling-platform",
              "employer-reviews",
              "recruiter-motivation",
              "job-search",
            ].some((path) => pathname.includes(path)) ? (
              <EasyBannerSection data={data.easyBannerData} />
            ) : (
              <ConnectECSection data={data.easyBannerData} />
            )}
          </div>
        </section>
      </div>
    </>
  );
}
