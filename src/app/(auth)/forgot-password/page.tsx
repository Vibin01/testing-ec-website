import Image from "next/image";
import React from "react";
import { ForgotPassowrdpage } from "./ForgotPassowrdpage";

const page = () => {
  return (
    <div className="bg-[url('/background/register-bg.svg')] min-h-screen  bg-cover ">
      <div className="flex flex-col lg:flex-row lg:h-screen justify-center items-center px-[4%] lg:px-[7%] gap-10">
        <section className="lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0 ">
          <Image
            src={"/forget-password-image.svg"}
            alt={"Hero Image"}
            width={1080}
            height={1080}
            priority
            quality={100}
            className="w-auto lg:h-[70%] px-[8%] max-h-screen"
          />
        </section>
        <section className="lg:w-1/2 w-full flex justify-center items-center">
          <ForgotPassowrdpage />
        </section>
      </div>
    </div>
  );
};
export default page;
