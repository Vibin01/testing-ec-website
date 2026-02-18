
import React from "react";
import Testimonials from "./Testimonials";
import { HeroSection } from "./HeroSection";
import { RecruitmentSection } from "./RecruitmentSection";
import { FeedbackSection } from "./FeedbackSection";
import { HiringPlatformSection } from "./HiringPlatformSection";
import dynamic from "next/dynamic";

const AboutConnectSection = dynamic(() => import("./AboutConnectSection"), {
  loading: () => <p>Loading...</p>,
});

export const HomePage = () => {
  return (
    <>
      <main>
        <div className=" lg:bg-[url('/background/homepage-bg-1.svg')] bg-cover bg-no-repeat">
          <div className=" bg-[url('/background/mobile-homepage-part-1.svg')] lg:bg-none bg-cover bg-no-repeat">
            <HeroSection />
          </div>

          <div className="bg-[url('/background/mobile-homepage-part-2.svg')] lg:bg-none  bg-cover bg-no-repeat">
            <RecruitmentSection />
          </div>
        </div>
        <div className="lg:bg-[url('/background/homepage-bg-2.svg')] bg-cover bg-no-repeat">
          <div className=" overflow-x-hidden bg-[url('/background/mobile-homepage-part-3.svg')] lg:bg-none  bg-cover bg-no-repeat">
            <FeedbackSection />
          </div>
          <div className="bg-[url('/background/mobile-homepage-part-4.svg')] lg:bg-none  bg-cover bg-no-repeat">
            <AboutConnectSection />
            <HiringPlatformSection />
          </div>
        </div>
        <div className="bg-[url('/background/mobile-homepage-part-5.svg')] lg:bg-[url('/background/homepage-bg-3.svg')] bg-cover bg-no-repeat">
          <section className="flex flex-col justify-center items-center py-[6%] mx-[5%] lg:mx-[8%]  2xl:mx-[10%] ">
            <Testimonials />
          </section>
        </div>
      </main>
    </>
  );
};
