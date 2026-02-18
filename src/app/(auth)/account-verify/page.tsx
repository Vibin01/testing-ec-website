import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="bg-[url('/background/register-bg.svg')] min-h-screen bg-cover ">
      <div className="flex flex-col lg:flex-row h-screen items-center justify-center mt-20 lg:mt-0  px-[3%] lg:px-[7%] lg:gap-10">
        <section className="lg:w-1/2 flex justify-center items-center px-[10%] lg:px-0 ">
          <Image
            src={"/verify-image.svg"}
            alt={"Hero Image"}
            width={1080}
            height={1080}
            priority
            quality={100}
            className="w-auto h-[50%] lg:h-[70%] lg:max-h-screen"
          />
        </section>
        <section className="lg:w-1/2 flex justify-center items-center">
          <div className="  w-fit  mx-auto bg-white border border-[#ECF5FF] shadow-[0px_2px_5px_0px_#0668E10F,_0px_9px_9px_0px_#0668E10D,_0px_20px_12px_0px_#0668E108,_0px_36px_14px_0px_#0668E103,_0px_56px_16px_0px_#0668E100] rounded-[12px] p-4 md:p-7 xl:p-10">
            <h2 className="lg:text-[20px] xl:text-[24px] 2xl:text-[28px] font-semibold ">
              Account Verified
            </h2>
            <div className="my-5 border-t border-[#9F9F9F] w-full" />
            <div className="space-y-5">
              <div className="grid grid-cols-2 text-[12px] lg:text-[18px] xl:text-[20px]">
                <p className="text-[#9F9F9F] ">Organization Name</p>
                <p className="font-semibold">
                  {" "}
                  : Primethic Private Limited
                </p>{" "}
              </div>
              <div className="grid grid-cols-2 text-[12px] lg:text-[18px] xl:text-[20px]">
                <p className="text-[#9F9F9F] ">Organization Code</p>
                <p className="font-semibold "> : EC2654</p>{" "}
              </div>
              <div className="grid grid-cols-2 text-[12px] lg:text-[18px] xl:text-[20px]">
                <p className="text-[#9F9F9F] ">GSTIN</p>
                <p className="font-semibold"> : 6554962648246578</p>{" "}
              </div>
            </div>
            <div className="my-8 flex justify-center">
              <button className="min-w-[190px] bg-[#0668E1] h-[40px] lg:h-[48px] hover:bg-[#0560D0] text-white py-2 px-6 my-3 rounded-md text-[16px] xl:text-[18px] 2xl:text-[20px] ">
                Next
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default page;
