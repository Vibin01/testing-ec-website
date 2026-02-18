import { FeaturesHeroSection } from "@/components/common/FeaturesHeroSection";
import Image from "next/image";
import React from "react";
import {
  featuresPageData,
  FeaturesSteps,
  CTASectionData,
} from "@/data/FeaturesPageData";
import { FeaturesStepsSection } from "@/components/common/FeaturesSteps";
import { CTASection } from "@/components/common/CTASection";
import FAQSection from "@/components/common/FAQSection";
import dynamic from "next/dynamic";

const TransformFeaturesSection = dynamic(() => import("./TransformFeatures"), {
  loading: () => <p>Loading...</p>,
});

export const FeaturesPage = () => {
  return (
    <>
      <section className="relative ">
        <div className="overflow-x-hidden lg:bg-[url('/background/features-bg-1.svg')] bg-cover bg-no-repeat">
          <div className=" bg-[url('/background/mobile-features-part-1.svg')] lg:bg-none bg-cover bg-no-repeat">
            <section className="relative flex flex-col-reverse md:flex-row  items-center bg-[#FFFFFF4D] py-[9%] xl:py-[11%]- 2xl:py-[10%] px-[4%] md:px-[7%] lg:-mr-[4.3%]">
              <div className="lg:w-[50%]">
                <FeaturesHeroSection data={featuresPageData} />
              </div>
              <div className="lg:w-[50%] mx-auto relative mb-14 lg:mb-0">
                <Image
                  src={featuresPageData.image_url}
                  alt={featuresPageData.image_alt}
                  width={1080}
                  height={1080}
                  className="  py-5 md:-my-[11%] "
                />
              </div>
            </section>
          </div>
          <div className=" bg-[url('/background/mobile-features-part-2.svg')] lg:bg-none bg-cover bg-no-repeat">
            <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
              <TransformFeaturesSection />
            </section>
          </div>
        </div>
        <div className=" bg-[url('/background/mobile-features-part-3.svg')] lg:bg-none bg-cover bg-no-repeat">
          <section className="relative px-[5%] lg:-mx-[3%] md:px-10">
            <FeaturesStepsSection data={FeaturesSteps} tab="" />
          </section>
        </div>
        <div className=" bg-[url('/background/mobile-features-cta.svg')] lg:bg-[url('/background/features-bg-4.svg')] bg-cover bg-center">
          <section className="relative bg-[#FFFFFF33] border-b border-[#FFFFFF] py-[5%] px-[7%]">
            <CTASection data={CTASectionData} />
          </section>
        </div>
        <div className=" bg-[url('/background/mobile-features-faq.svg')] lg:bg-[url('/background/features-bg-5.svg')] bg-cover ">
          <section className=" relative py-[5%] px-[7%] lg:-bg-[linear-gradient(180deg,_rgba(255,255,255,0.24)_0%,_rgba(255,255,255,0.36)_100%)] ">
            <FAQSection />
          </section>
        </div>
      </section>
    </>
  );
};
