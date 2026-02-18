"use client"
import React from "react";
import dynamic from "next/dynamic";


const HomeDestopAboutSection=dynamic(() => import("@/components/common/HomeDestopAboutSection"), {
  ssr: false,
});
const HomeMobileAboutSection=dynamic(() => import("@/components/common/HomeMobileAboutSection"), {
  ssr: false,
});
const AboutConnectSection = () => {

  return (
    <section className="flex flex-col justify-center items-center py-[6%] lg:pl-[8%] ">
      <HomeDestopAboutSection/>
<HomeMobileAboutSection/>
      
    </section>
  );
};

export default AboutConnectSection;


