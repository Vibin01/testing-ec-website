
import Image from "next/image";
import { GradientButton } from "@/components/common/Button/GradientButton";

export default function Testimonials() {
  return (
    <section className="relative w-full py-10 lg:py-2">
      <div className=" flex flex-col-reverse lg:flex-row justify-between items-center border md:border-2 border-[#0668E1] rounded-[20px] lg:rounded-[30px] xl:rounded-[40px] p-5 lg:p-7 xl:p-10">
        <div className="lg:pl-10 space-y-5 pb-4 lg:pb-0 lg:w-[60%]">
          <h1 className="text-[32px]  lg:text-[28px] xl:text-[38px] 2xl:text-[48px] font-bold  mb-4">
            Hiring Made EASY!
          </h1>
          <p className=" text-[16px] md:text-[18px] xl:text-[21px] 2xl:text-[24px] font-medium  mb-12">
            EC equips employers to meet hiring targets with actionable insights,
            enhances the candidate experience with on-time feedback, and
            empowers recruiters with predictive tools to reduce no-shows.
          </p>
          <p className="  text-[20px] xl:text-[24px] 2xl:text-[28px] font-bold ">
            Experience the Future of Hiring Today!
          </p>
          <GradientButton text={"Unlock EC for Free"} link={"#"} />
        </div>
        <div className="lg:w-[40%]  ">
          <Image
            src="/home/hiring-made-easy-recruiting-solution.svg"
            alt="Visual representation of a streamlined, easy-to-use recruiting solution that accelerates hiring with Connect EC."
            width={1080}
            height={1080}
            loading="lazy"
            className="object-contain- w-full h-auto max-h-[420px] "
          />
        </div>
      </div>
    </section>
  );
}
