import { GradientButton } from "@/components/common/Button/GradientButton";
import Image from "next/image";
import React from "react";

export const RecruitmentSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center py-[9%] px-[5%] lg:px-0 lg:pr-[5%] lg:gap-[4%] ">
     <figure className="lg:w-[54%]  mb-10 lg:mb-0  ">
        <Image
          src="/home/recruitment-made-easy-hr-solution.svg"
          alt="A graphic showing how Connect EC simplifies recruitment for HR teams through automation and intuitive tools"
          width={1080}
          height={1080}
          loading="lazy"
          className="object-contain- w-full max-h-[620px]  "
        />
      </figure>
      <div className="flex flex-col mt-[8%] mb-4 lg:mb-0 lg:mt-0 px-0 md:px-[10%] lg:px-0 lg:w-[42%] xl:w-[40%] gap-3 md:gap-4 lg:gap-6 xl:gap-7 2xl:gap-8 ">
        <h2 className="leading-[44px] md:leading-14 lg:leading-12 xl:leading-18 2xl:leading-22 text-[34px] md:text-[38px] lg:text-[44px]- xl:text-[56px] 2xl:text-[72px] font-semibold">
          Recruitment <span className="flex md:block lg:flex" /> Made Easy!
          <span className="flex md:block lg:flex" /> Relax and Recruit.
        </h2>
        <p className=" text-[14px]  lg:text-[18px] xl:text-[22px] 2xl:text-[28px]">
          Are you struggling with candidate{" "}
          <span className="font-bold">
            dropout, backout,
        
          or
           no-show</span> after
          scheduling interviews? 
        </p>

        <p className=" lg:-mt-2 text-[14px]  lg:text-[18px] xl:text-[22px] 2xl:text-[28px]"> Your chance to change the outcome is EASY: 
<span className=" text-[16px]  lg:text-[22px] xl:text-[28px] 2xl:text-[36px] text-[#0668E1] block font-bold"></span></p>

        <GradientButton text={"Make the Choice Now"} link={"#"} />
      </div>
      
    </section>
  );
};
