import Image from "next/image";
import Link from "next/link";
import React from "react";


const items = [
  {
    text: "Is it a Predictive Interview Scheduling Platform?",
      href: "/home/predictive-interview-scheduling-platform",

  },
  {
    text: "Is it a Reliable Employer Review Platform?",
    href: "/home/employer-reviews",
  },
  {
    text: "Is it a Recruiter Motivation System?",
    href: "/home/recruiter-motivation",
  },
  {
    text: "Is it a Job Search Exhilaration Platform?",
    href: "/home/job-search",
  },
];
const HomeDestopAboutSection = () => {
  return (
    <div className="hidden lg:flex lg:gap-10 xl:gap-0 w-full relative justify-center  items-center   ">
      <div className="w-[50%] flex justify-start items-center">
        <Image
          src="/home/connect-ec-hiring-platform-overview-definition.svg"
          alt="Foundational image defining Connect EC as an innovative, behavioral science–powered hiring ecosystem."
          width={1080}
          height={1080}
          loading="lazy"
          className="object-contain- h-full lg:max-h-[450px] xl:max-h-[550px] w-auto ml-16"
        />
      </div>

      <div className="flex flex-col gap-14  w-[50%]">
        {items.map((item, index) => (
          <Link href={item.href} key={index} className="group relative">
            <div
              className={`
          ${index === 0 || index === 3 ? "-ml-[18%]" : ""}
          ${index === 1 && "-ml-[2%]"}
          ${index === 2 && "ml-[12%]"}
           ${
             index === 0 || index === 1
               ? "rounded-[0px_20px_20px_20px] xl:rounded-[0px_40px_40px_40px]"
               : "rounded-[20px_20px_20px_0px] xl:rounded-[40px_40px_40px_0px]"
           }
          relative xl:py-6 py-3 px-8 xl:px-12 w-auto lg:max-w-[340px] xl:max-w-[500px] 2xl:max-w-[540px]
          bg-white font-semibold lg:text-[18px] xl:text-[24px] 2xl:text-[28px] text-center
          shadow-[0px_4px_6px_0px_#0000000D]
          transition-all 
          duration-100
          group-hover:shadow-[0px_4px_6px_0px_#0000000D,_0px_10px_15px_0px_#0000001A]
          group-hover:text-[#0668E1]
        `}
            >
              {/* corner shape */}
              <div
                className={`
            ${
              index === 0 || index === 1
                ? "top-0 -left-4 rounded-tl-[10px]"
                : "bottom-0 -left-4 rotate-90 rounded-br-[10px]"
            }
            absolute w-[40px] h-[40px] bg-white
            [clip-path:polygon(100%_0,0_0,100%_100%)]
            shadow-[0px_4px_6px_0px_#0000000D]-
          `}
              ></div>

              {item.text}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeDestopAboutSection;
