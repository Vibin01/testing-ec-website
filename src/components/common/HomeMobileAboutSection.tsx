"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const HomeMobileAboutSection = () => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState(0); // 👉 0 = first slide, 1 = second slide

  const options = [
    {
    text: "Is it a Predictive Interview Scheduling Platform?",
      path: "/home/predictive-interview-scheduling-platform",
    },
    {
      text: "Is it a Reliable Employer Review Platform?",
      path: "/home/employer-reviews",
    },
    {
      text: "Is it a Recruiter Motivation Platform?",
      path: "/home/recruiter-motivation",
    },
    {
      text: "Is it a Job Search Exhilaration Platform?",
      path: "/home/job-search",
    },
  ];

  
  useEffect(() => {
    const div = containerRef.current;
    if (!div) return;

    const handleScroll = () => {
      const index = Math.round(div.scrollLeft / div.clientWidth);
      setActiveTab(index);
    };

    div.addEventListener("scroll", handleScroll);
    return () => div.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="lg:hidden relative w-full mx-auto overflow-hidden">
      {/* Slides Wrapper */}
      <div
        ref={containerRef}
        className="relative flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hidden no-scrollbar"
      >
        {/* SLIDE 1 */}
        <div className="min-w-full flex justify-center items-center gap-6 snap-center p-6">
          <div className="relative cursor-pointer w-[350px] h-[350px]">
            <Image
              src="/home/connect-ec-hiring-platform-overview-definition.svg"
              alt="Foundational Image"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* SLIDE 2 */}
        <div className="min-w-full flex flex-col justify-center items-center gap-8 snap-center p-6">
          {options.map((opt, i) => (
            <button
              key={i}
              onClick={() => router.push(opt.path)}
              className={`
                p-4 font-semibold text-[12px] md:text-[14px] text-center shadow-md bg-white
                hover:bg-[#0668E1] hover:text-white cursor-pointer w-3/4
                ${i === 0 || i === 3 ? "" : "ml-12"}
                ${
                  i === 0 || i === 2
                    ? "rounded-[20px_20px_20px_0px]"
                    : "rounded-[0px_20px_20px_20px]"
                }
              `}
            >
              {opt.text}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        <span
          className={`block h-3 rounded-full transition-all duration-300 ${
            activeTab === 0 ? "bg-[#0668E1] w-8" : "bg-white w-5"
          }`}
        />
        <span
          className={`block h-3 rounded-full transition-all duration-300 ${
            activeTab === 1 ? "bg-[#0668E1] w-8" : "bg-white w-5"
          }`}
        />
      </div>
    </div>
  );
};

export default HomeMobileAboutSection;
