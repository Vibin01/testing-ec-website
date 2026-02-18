"use client";
import { TransformSectionData } from "@/data/FeaturesPageData";
import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";
import { useRouter } from "next/navigation";

export default function TransformFeaturesSection() {
  const router = useRouter();
  return (
    <section className=" mx-auto xl:px-6">
      <h2 className=" text-[22px] md:text-[26px] lg:text-[30px] xl:text-[38px] 2xl:text-[48px] font-bold text-center pt-5 lg:pt-0 mb-10 md:mb-14 lg:mb-18  xl:mb-22">
        Find Features That Transform
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4   mb-16">
        {TransformSectionData.map((feature) => {
          const containerRef = useRef<HTMLDivElement | null>(null);
          const animRef = useRef<AnimationItem | null>(null);

          useEffect(() => {
            if (containerRef.current) {
              animRef.current = lottie.loadAnimation({
                container: containerRef.current,
                renderer: "svg",
                loop: false,
                autoplay: false,
                animationData: feature.animationData,
              });
            }

            return () => {
              animRef.current?.destroy();
            };
          }, []);

          const handleMouseEnter = () => {
            if (animRef.current) {
              animRef.current.setSpeed(2);
              animRef.current.setDirection(1);
              animRef.current.play();
            }
          };

          const handleMouseLeave = () => {
            if (animRef.current) {
              animRef.current.setSpeed(1.5);
              animRef.current.setDirection(-1);
              animRef.current.play();
            }
          };

          return (
            <div
              key={feature.title}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() =>
                router.push(
                  `/features/${feature.title
                    .toLowerCase()
                    .replace(/[\s.]+/g, "-")}`
                )
              }
              data-title={feature.title}
               className="features_sub_page group cursor-pointer flex md:flex-col flex-row gap-4 p-3 md:p-4 xl:p-6 rounded-[12px] md:rounded-[16px] xl:rounded-[20px] bg-[#FFFFFF] md:bg-transparent md:bg-[linear-gradient(180deg,rgba(255,_255,_255,_0)_0%,rgba(255,_255,_255,_0)100%)] md:hover:bg-[linear-gradient(180deg,_rgba(255,255,255,0.6)_0%,_rgba(255,255,255,0.24)_100%)] shadow-[0px_4px_6px_0px_#0000000D] md:hover:shadow-[0px_4px_6px_0px_#0000000D,_0px_10px_15px_0px_#0000001A] md:shadow-none hover:shadow-[2px_2px_10px_6px_#0668E11A] transition ease-in-out duration-300"
            >
              <div
                ref={containerRef}
                className="flex-shrink-0 w-[40px] h-[40px] md:w-[60px] md:h-[60px]  xl:w-[80px] xl:h-[80px] 2xl:w-[100px] 2xl:h-[100px]  "
              />
              <div className="flex flex-col justify-center gap-2 md:gap-4">
                <h3 className="text-[16px] md:text-[20px]  lg:text-[22px] xl:text-[28px] 2xl:text-[32px] font-semibold ">
                  {feature.title}
                </h3>
                <p className="text-[14px] md:text-[15px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] font-medium">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
