"use client";
import { GradientButton } from "@/components/common/Button/GradientButton";
import React, { useState } from "react";
import { TransformFeaturesStructure } from "./TransformFeaturesStructure";
import { FeaturesStepsSection } from "@/components/common/FeaturesSteps";
import { CTASection } from "@/components/common/CTASection";
import { subFeaturesPagesData } from "@/data/FeaturesSubPagesData";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export const FeaturesSubPage = ({ pages }: { pages: string }) => {
  const [tab, setTab] = useState("Interview");
  const {
    heroSectiondata,
    CTASectionData,
    featuresSteps,
    subFeaturesSectionData,
  } = subFeaturesPagesData.filter((item) => item.path === pages)[0];

  return (
    <section className="relative ">
      <div className="lg:bg-[url('/background/features-sub-page-1.svg')] bg-cover bg-center">
        <div className=" bg-[url('/background/mobile-features-subpage-part-1.svg')] lg:bg-none bg-cover bg-no-repeat">
          <section className="relative flex flex-col-reverse lg:flex-row items-center lg:bg-[#FFFFFF4D] py-[9%] xl:py-[11%]- 2xl:py-[10%] px-[4%] md:px-[7%] lg:-mr-[3%]  ">
            <div className="lg:w-[55%]  mb-5 lg:mb-0">
              <div className="flex flex-col gap-3  ">
                <h1 className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px]  font-bold">
                  {heroSectiondata.heading}
                </h1>
                <h2 className="-mt-2 text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px]">
                  {heroSectiondata.title}
                  <span className="font-bold text-[#0668E1]">
                    {heroSectiondata.title_highlight}
                  </span>
                </h2>
                <h2 className="-mt-3  text-[28px] md:text-[30px] lg:text-[40px] xl:text-[54px] 2xl:text-[72px]  font-bold">
                  {heroSectiondata.sub_title}
                </h2>
                <p className="mb-6 xl:mb-8 font-medium text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px]">
                  <span className="font-bold">
                    {heroSectiondata.content_highlight}{" "}
                  </span>
                  {heroSectiondata.content}
                </p>
                <GradientButton
                  text={heroSectiondata.button_text}
                  link={heroSectiondata.button_link}
                />
              </div>
            </div>
            <div className="pb-8 lg:pb-0 md:w-[60%] lg:w-[45%] mx-auto relative ">
              <Lottie
                animationData={heroSectiondata.animationData}
                loop={false}
                autoplay={true}
                className=" lg:-my-[18%] lg:-mx-[8%]  "
              />
            </div>
          </section>
        </div>
        <div className=" bg-[url('/background/mobile-features-subpage-part-2.svg')] lg:bg-none bg-cover bg-no-repeat">
          <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
            <TransformFeaturesStructure
              data={subFeaturesSectionData}
              setTab={setTab}
            />
          </section>
        </div>
      </div>
      <div className=" bg-[url('/background/mobile-features-subpage-part-3.svg')] lg:bg-none bg-cover bg-no-repeat">
        <section className="relative px-[5%] lg:-mx-[5%] md:px-10">
          <FeaturesStepsSection data={featuresSteps} tab={tab} />
        </section>
      </div>
      <div className="bg-[url('/background/mobile-features-subpage-cta.svg')] lg:bg-[url('/background/features-sub-page-4.svg')] bg-cover bg-center">
        <section className="relative lg:bg-[#FFFFFF33] border-b border-[#FFFFFF] py-[5%] px-[7%]">
          <CTASection data={CTASectionData} />
        </section>
      </div>
    </section>
  );
};
