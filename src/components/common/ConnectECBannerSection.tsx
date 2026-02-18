
interface BannerSectionProps {
  data: {
    title: string;
    content: string;
  };
}
export default function ConnectECSection({ data }: BannerSectionProps) {
  return (
    <section className="relative  bg-[#FFFFFF1A] pt-10 lg:pt-0">
      <div className=" mx-auto px-[1%] md:px-[3%] ">
        <div className="bg-[#FFFFFF33] md:bg-[#FFFFFF1A] rounded-[16px] md:rounded-[30px] lg:rounded-[40px] shadow-[0px_0px_6px_0px_#0668E11A] md:shadow-[0px_0px_4px_0px_#0668E14D]   p-4 md:p-6 xl:p-10  text-center relative">
          <div className=" absolute  -top-3 md:-top-3 lg:-top-6 xl:-top-8 left-1/2 -translate-x-1/2 min-w-[300px]">
            <span className="bg-[#FFFFFF] rounded-[40px]  border  px-14  xl:px-20 py-2 lg:py-4 text-[20px] lg:text-[26px] xl:text-[32px] 2xl:text-[40px] font-extrabold text-[#0668E1] shadow-[0px_2px_4px_0px_#0668E14D]">
              Connect EC
            </span>
          </div>
          

          {/* Subheading */}
          <h3 className=" text-[18px] md:text-[18px] lg:text-[22px] xl:text-[24px] 2xl:text-[32px] italic font-[#1B1C17] font-extrabold my-8">
            {data.title}{" "}
          </h3>

          {/* Description */}
          <p className="text-[#1B1C17] text-[15px] md:text-[16px] xl:text-[20px] 2xl:text-[24px] font-medium   mb-5">
            {data.content}
          </p>
        </div>
      </div>
    </section>
  );
}
