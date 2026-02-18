import BlockEasySteps from "@/components/common/BlockEasySteps";
import FAQSection from "@/components/common/FAQSection";
import { HeroTextContainerSection } from "@/components/common/HeroTextContainerSection";
import TabsSection from "@/components/common/TabsSection";
import { CTASection } from "@/components/common/CTASection";
import React from "react";
import {
  HeroData,
  TabsSectionData,
  BlockStepsSectionData,
  CTASectionData,
} from "@/data/RecruitersPageData";
import AnimationEC from "@/components/common/Animation/AnimationEC";
import animationData from "@/public/animation/Employer Candidate and Recruiter Animation.json";

export const RecruitersPage = () => {
  return (
    <>
      <section className="relative ">
        <div className="lg:bg-[url('/background/candidate-bg-1.svg')] bg-cover bg-center">
          <div className=" bg-[url('/background/mobile-employer-candidate-recruiter-bg-part-1.svg')] lg:bg-none bg-cover bg-no-repeat">
            <section className="relative flex flex-col-reverse md:flex-row items-center lg:bg-[#FFFFFF4D] py-[9%] xl:py-[11%] 2xl:py-[13%] px-[4%] md:px-[7%] md-mr-[4%] ">
              <div className="lg:w-[78%] xl:w-[78%] ">
                <HeroTextContainerSection data={HeroData} />
              </div>
              <div className="lg:w-[25%] xl:w-[22%] mx-auto md:-mr-[3%]">
                <AnimationEC animationData={animationData} />
              </div>
            </section>
          </div>
          <div className=" bg-[url('/background/mobile-employer-candidate-recruiter-bg-part-2.svg')] lg:bg-none bg-cover bg-no-repeat">
            <section className="relative py-[5%] px-[3%] md:px-[7%] bg-transparent">
              <TabsSection data={TabsSectionData} />
            </section>
          </div>
        </div>
        <div className="lg:bg-[url('/background/candidate-bg-2.svg')]  bg-cover bg-center">
          <section className="relative px-[5%] md:px-[7%]">
            <BlockEasySteps data={BlockStepsSectionData} />
          </section>
        </div>
        <div className="bg-[url('/background/mobile-employer-candidate-recruiter-bg-cta.svg')] lg:bg-[url('/background/employer-dynamic-3.svg')] bg-cover bg-center">
          <section className="relative lg:bg-[#FFFFFF33] border-b border-[#FFFFFF] py-[5%] px-[7%]">
            <CTASection data={CTASectionData} />
          </section>
        </div>
        <div className="bg-[url('/background/mobile-employer-candidate-recruiter-bg-faq.svg')] lg:bg-[url('/background/candidate-bg-3.svg')] bg-cover bg-center">
          <section className=" relative py-[5%] px-[7%] lg:-bg-[linear-gradient(180deg,_rgba(255,255,255,0.24)_0%,_rgba(255,255,255,0.36)_100%)] ">
            <FAQSection />
          </section>
        </div>
      </section>
    </>
  );
};
