import { HeroData } from "@/data/ResourcesPageData";
import Image from "next/image";
import React from "react";
import { getAllBlogs } from "@/lib/mdx";
import ChroniclesPage from "./ChroniclesPage";
import { BlogSection } from "./BlogSection";
import dynamic from "next/dynamic";

const VideoSection =dynamic(()=>import('./VideoSection'),{
  loading:()=><p>loading...</p>
})

export const ResourcesPage = () => {
  const blogs = getAllBlogs();

  return (
    <>
      <section className="relative ">
        <div className="lg:bg-[url('/background/resources-bg.svg')] bg-cover ">
          <div className=" bg-[url('/background/mobile-resources-part-1.svg')] lg:bg-none bg-cover bg-no-repeat">
            <section className="relative flex flex-col lg:flex-row justify-between items-center lg:bg-[#FFFFFF4D]  py-[9%] xl:py-[11%] 2xl:py-[13%] px-[7%] lg-mr-[4%] ">
              <div className="md:w-[60%] lg:w-[42%]  mx-auto mb-5 lg:mb-0">
                <Image
                  src={HeroData.image_url}
                  alt={HeroData.image_alt || "Hero Image"}
                  width={1080}
                  height={1080}
                  className="w-full h-auto"
                />
              </div>
              <div className="lg:w-[48%] mt-5 lg:mt-0 ">
                <div className="flex flex-col gap-3  ">
                  <h1 className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px]  font-bold">
                    {HeroData.heading}
                  </h1>
                  <h2 className="-mt-2 text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px]">
                    {HeroData.title}
                    <span className="font-bold text-[#0668E1]">
                      {HeroData.title_highlight}
                    </span>
                  </h2>
                  <h2 className="xl:mb-2 text-[32px] -mt-4 md:text-[38px] lg:text-[56px]- xl:text-[58px] 2xl:text-[72px] font-bold">
                    {HeroData.sub_title}
                  </h2>
                  <p className="mb-3 xl:mb-8 font-medium text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px]">
                    {HeroData.content}
                  </p>
                </div>
              </div>
            </section>
          </div>
          <div className=" bg-[url('/background/mobile-resources-part-2.svg')] lg:bg-none bg-cover bg-no-repeat">
            <section className="relative py-[5%] px-[4%] md:px-[7%] bg-transparent">
              <VideoSection />
            </section>
          </div>
          <div className=" bg-[url('/background/mobile-resources-part-3.svg')] lg:bg-none bg-cover bg-no-repeat">
            <section className="relative overflow-hidden- px-[4%] md:px-[7%]">
              <ChroniclesPage />
            </section>
            <BlogSection blogs={blogs} />
          </div>
        </div>
      </section>
    </>
  );
};
