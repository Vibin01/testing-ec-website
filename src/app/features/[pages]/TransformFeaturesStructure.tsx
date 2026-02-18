import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import React, { useState } from "react";

interface FeaturesSectionData {
  data:
    | {
        tab: boolean;
        title: string;
        featuresData: {
          tabname: string;
          title: string;
          tabdata: {
            image_url: string;
            image_alt: string;
            title: string;
            content_highlight: string;
            content: string;
          }[];
        }[];
      }
    | {
        tab: boolean;
        title: string;
        featuresData: {
          image_url: string;
          image_alt: string;
          title: string;
          content_highlight: string;
          content: string;
        }[];
      };
  setTab: React.Dispatch<React.SetStateAction<string>>;
}

export const TransformFeaturesStructure = ({
  data,
  setTab,
}: FeaturesSectionData) => {
  return (
    <>
      <section className="mx-auto  lg:px-10 py-6 ">
        {data.tab ? (
          <div className="mb-10 ">
            <Tabs
              defaultValue={
                (
                  data.featuresData as {
                    tabname: string;
                    tabdata: {
                      image_url: string;
                      image_alt: string;
                      title: string;
                      content_highlight: string;
                      content: string;
                    }[];
                  }[]
                )[0].tabname
              }
            >
              <TabsList className="flex justify-center items-center w-fit gap-2 p-2 lg:p-0 bg-white/50 lg:bg-transparent rounded-[8px] lg:rounded-0 lg:border-b-2 lg:border-[#3A92FF] lg:rounded-none lg:h-auto mx-auto mb-8 lg:mb-16 ">
                {(
                  data.featuresData as {
                    tabname: string;
                    tabdata: {
                      image_url: string;
                      image_alt: string;
                      title: string;
                      content_highlight: string;
                      content: string;
                    }[];
                  }[]
                ).map((tab) => (
                  <TabsTrigger
                    key={tab.tabname}
                    value={tab.tabname}
                    onClick={() => setTab(tab.tabname)}
                    className=" font-bold h-[30px] md:h-[40px] lg:h-[55px] xl:h-[90px]  w-[130px] md:w-[160px]  lg:w-[220px] xl:w-[260px] 2xl:w-[300px] rounded-[6px] lg:rounded-[0px]

                     data-[state=active]:text-white lg:data-[state=active]:text-[#0668E1]  
                     data-[state=active]:bg-[#0668E1] lg:data-[state=active]:bg-transparent  
                     data-[state=active]:lg:border-b-[6px] data-[state=active]:xl:border-b-[8px] data-[state=active]:2xl:border-b-[10px] data-[state=active]:lg:border-[#3A92FF] 
                      data-[state=active]:border-[#3A92FF] border lg:border-0 lg:border-b-[6px] xl:border-b-[8px] 2xl:border-b-[10px] border-[#F1F1F1]  lg:border-transparent
bg-white lg:bg-transparent
                      md:text-[18px] lg:text-[20px] xl:text-[26px] 2xl:text-[32px] cursor-pointer"
                  >
                    {tab.tabname}
                  </TabsTrigger>
                ))}
              </TabsList>

              {(
                data.featuresData as {
                  tabname: string;
                  title: string;
                  tabdata: {
                    image_url: string;
                    image_alt: string;
                    title: string;
                    content_highlight: string;
                    content: string;
                  }[];
                }[]
              ).map((tab) => (
                <TabsContent key={tab.tabname} value={tab.tabname}>
                  <h2 className="text-[20px] md:text-[26px] lg:text-[30px] xl:text-[38px] 2xl:text-[48px] font-bold text-center mb-6 lg:mb-20">
                    {tab.title}
                  </h2>
                  <div className="relative  grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 lg:bg-[#FFFFFF99] lg:rounded-[40px] lg:shadow-[0px_0px_10px_0px_#0668E10D] w-full ">
                    <Image
                      src={
                        "/features/connect-ec-connect-employer-candidate-recruiter-easy.svg"
                      }
                      alt={
                        "Infographic outlining Connect EC’s ethical ecosystem connecting Employers, Candidates, and Recruiters seamlessly."
                      }
                      width={300}
                      height={300}
                      className=" md:col-span-2 translate-x-1/2 md:w-[50%]  lg:absolute z-30 top-1/2 left-1/2  bottom-1/2 right-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-[200px] lg:h-[200px] xl:w-[250px] xl:h-[250px] 2xl:w-[300px] 2xl:h-[300px] "
                    />
                    <hr className="hidden lg:block absolute z-10 top-0  left-1/2 h-full w-[1px] border-none bg-[linear-gradient(180deg,_#FFFFFF_0%,_#D2D2D2_50%,_#FFFFFF_100%)]" />
                    <hr className="hidden lg:block absolute z-20 left-0 top-1/2 w-full h-[1px] border-none bg-[linear-gradient(90deg,#FFFFFF_0%,#D2D2D2_50%,#FFFFFF_100%)]" />

                    {tab.tabdata.map((feature, idx) => (
                      <div
                        key={idx}
                        className={`relative p-1 lg:p-6 xl:p-12 lg:mb-5 lg:h-fit flex flex-col lg:justify-center lg:items-start
                          shadow-[0px_0px_6px_0px_#0000000D,_0px_2px_10px_0px_#0000001A] lg:shadow-none
                          bg-[#FFFFFF33] lg:bg-transparent
                          rounded-[12px] lg:rounded-0
                          `}
                      >
                        <div className="relative p-2 md:p-3 lg:p-0 gap-4 lg:gap-6 flex flex-col lg:items-center lg:text-center">
                          <div className="flex flex-row lg:flex-col gap-4 lg:gap-6 items-center">
                            <Image
                              src={"/features/EC-connect-App-icon.svg"}
                              alt={"EC-connect-app-icon"}
                              width={100}
                              height={100}
                              className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px] 2xl:w-[60px] 2xl:h-[60px] "
                            />
                            <h3 className=" text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] text-[#0668E1] font-bold ">
                              {feature.title}
                            </h3>
                          </div>

                          <p className="text-[14px]  lg:text-[16px] xl:text-[18px] 2xl:text-[22px] font-medium ">
                            <span className="font-semibold lg:font-extrabold lg:italic">
                              {feature.content_highlight}
                            </span>
                            {feature.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        ) : (
          <div className="mb-10">
            <h2 className="pb-4 lg:pb-18 text-[20px] md:text-[26px] lg:text-[30px] xl:text-[38px] 2xl:text-[48px] font-bold text-center mb-8 ">
              {data.title}
            </h2>{" "}
            <div className="relative flex flex-col justify-center items-center sm:grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 lg:bg-[#FFFFFF99] lg:rounded-[40px] lg:shadow-[0px_0px_10px_0px_#0668E10D] w-full ">
              <Image
                src={
                  "/features/connect-ec-connect-employer-candidate-recruiter-easy.svg"
                }
                alt={
                  "Infographic outlining Connect EC’s ethical ecosystem connecting Employers, Candidates, and Recruiters seamlessly."
                }
                width={300}
                height={300}
                className=" md:col-span-2 sm:translate-x-1/2 md:w-[50%] lg:absolute z-30 top-1/2 left-1/2  bottom-1/2 right-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-[200px] lg:h-[200px] xl:w-[250px] xl:h-[250px] 2xl:w-[300px] 2xl:h-[300px] "
              />
              <hr className="hidden lg:block absolute z-10 top-0  left-1/2 h-full w-[1px] border-none bg-[linear-gradient(180deg,_#FFFFFF_0%,_#D2D2D2_50%,_#FFFFFF_100%)]" />
              <hr className="hidden lg:block absolute z-20 left-0 top-1/2 w-full h-[1px] border-none bg-[linear-gradient(90deg,#FFFFFF_0%,#D2D2D2_50%,#FFFFFF_100%)]" />

              {(
                data.featuresData as {
                  image_url: string;
                  image_alt: string;
                  title: string;
                  content_highlight: string;
                  content: string;
                }[]
              ).map((feature, idx) => {
                return (
                  <div
                    key={idx}
                    className={`relative p-1 lg:p-6 xl:p-12 lg:mb-5  flex flex-col lg:justify-center lg:items-center
                          shadow-[0px_0px_6px_0px_#0000000D,_0px_2px_10px_0px_#0000001A] lg:shadow-none
                          bg-[#FFFFFF33] lg:bg-transparent
                          rounded-[12px] lg:rounded-0
                          `}
                  >
                    <div className="relative p-2 md:p-3 lg:p-0 gap-4 lg:gap-6 flex flex-col lg:items-center lg:text-center">
                      <div className="flex flex-row lg:flex-col gap-4 lg:gap-6  items-center">
                        <Image
                          src={"/features/EC-connect-App-icon.svg"}
                          alt={"EC-connect-app-icon"}
                          width={100}
                          height={100}
                          className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px] 2xl:w-[60px] 2xl:h-[60px] "
                        />
                        <h3 className=" text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] text-[#0668E1] font-bold ">
                          {feature.title}
                        </h3>
                      </div>

                      <p className="text-[14px]  lg:text-[16px] xl:text-[18px] 2xl:text-[22px] font-medium ">
                        <span className="font-semibold lg:font-extrabold lg:italic">
                          {feature.content_highlight}
                        </span>
                        {feature.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </>
  );
};
