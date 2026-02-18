import { GradientButton } from "@/components/common/Button/GradientButton";
import Image from "next/image";
import React from "react";

export const FeedbackSection = () => {
  return (
    <section className=" flex flex-col-reverse  lg:flex-row items-center px-[5%] lg:px-0 py-[8%] lg:py-[6%]  lg:ml-[8%] lg:-mr-[7%] lg:gap-[4%]  ">
      
      <div className="flex flex-col mb-6 px-0 md:px-[10%] lg:px-0 lg:w-[42%] gap-3 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-9 ">
        <h2 className="leading-[44px] md:leading-14 lg:leading-12 xl:leading-16 2xl:leading-22 text-[34px] md:text-[38px] lg:text-[42px]- xl:text-[56px] 2xl:text-[72px] font-semibold">
          Feedback <span className="block" /> Made Easy!
          <span className="block" /> Get on-time feedback.
        </h2>
        <p className=" text-[14px]  lg:text-[18px] xl:text-[22px] 2xl:text-[28px] lg:w-[90%]">
          Are you tired of hearing{" "}
          <span className="font-bold">
            {" "}
            we'll get back to you, on hold,{" "}
          
          or
           no response</span> after
          attending interviews? 
        </p>
                <p className=" lg:-mt-2 text-[14px]  lg:text-[18px] xl:text-[22px] 2xl:text-[28px]"> Your chance to change the outcome is EASY:
</p>


        <GradientButton text={"Make the Choice Now"} link={"#"} />
      </div>
      <figure className="lg:w-[50%]   pb-14 lg:pb-0  ">
        <Image
          src="/home/interview-feedback-made-easy-candidate-solution.svg"
          alt="A visual demonstrating how Connect EC streamlines interview feedback, creating a seamless experience for candidates."
          width={1080}
          height={1080}
          loading="lazy"
          className="object-contain- w-full  "
        />
      </figure>

      
    </section>
  );
};
