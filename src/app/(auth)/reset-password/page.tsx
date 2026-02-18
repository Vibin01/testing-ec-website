import Image from "next/image";
import React from "react";
import { ResetPassword } from "./ResetPassword";

const page = () => {
  return (
    <div className="bg-[url('/background/register-bg.svg')] min-h-screen  bg-cover ">
      <div className="flex flex-col lg:flex-row h-screen justify-center items-center  px-[4%] lg:px-[7%] lg:gap-10">
        <section className=" lg:w-1/2 flex justify-center items-center mt-20 lg:mt-0">
          <Image
            src={"/reset-password-image.svg"}
            alt={"Hero Image"}
            width={1080}
            height={1080}
            priority
            quality={100}
            className="w-auto h-[50%] lg:h-[70%] lg:max-h-screen"
          />
        </section>
        <section className="lg:w-1/2 flex justify-center items-center">
          <ResetPassword />
        </section>
      </div>
    </div>
  );
};
export default page;
