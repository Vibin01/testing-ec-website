"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimationEC = dynamic(
  () => import("@/components/common/Animation/AnimationEC"),
  {
    loading: () => <p>Loading...</p>,
  }
);

export const HiringPlatformSection = () => {
  const [animationData, setAnimationData] = React.useState();
  React.useEffect(() => {
    fetch("/animation/home-page.json")
      .then((res) => res.json())
      .then(setAnimationData);
  }, []);

  return (
    <div className=" py-[6%] flex flex-col-reverse lg:flex-row justify-around  items-center mx-[5%]  ">
      <div className="lg:px-[4%] flex flex-col  lg:w-[60%] xl:w-[55%] lg:gap-3  ">
        <h2 className="lg:leading-4 xl:leading-6 2xl:leading-8  text-[20px] md:text-[26px] lg:text-[32px] xl:text-[38px] 2xl:text-[50px]">
          World’s <span className=" font-bold text-[#0668E1]">First</span>
        </h2>
        <h3 className="mb-5 leading-[44px] lg:leading-12 xl:leading-16 2xl:leading-20 text-[34px] md:text-[38px] lg:text-[44px] xl:text-[56px] 2xl:text-[72px] font-semibold">
          Gamified Ethical
          <span className="block" />
          Hiring Platform
        </h3>{" "}
        <p className="mb-8 lg:mb-2 text-[14px]  lg:text-[18px] xl:text-[22px] 2xl:text-[28px]">
          Connect EC is where{" "}
          <span className="font-semibold">
            AI meets Ethics, Game Design, and Behavioral Science
          </span>{" "}
          to create Information Symmetry. EC empowers employers, candidates, and
          recruiters with transparent processes and game dynamics, delivering an
          efficient, ethical, and exhilarating hiring experience. From sourcing
          to scheduling, job search to feedback, and offers to onboarding -{" "}
          <span className="font-extrabold italic text-[#0668E1] uppercase whitespace-nowrap">EC makes hiring EASY.</span>
        </p>
      </div>
      <figure className=" flex justify-center items-center  lg:w-[35%] xl:w-[40%]   ">
        <AnimationEC animationData={animationData} />
      </figure>
    </div>
  );
};
