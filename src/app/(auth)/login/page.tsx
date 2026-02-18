import Image from "next/image";
import React from "react";
import { LoginForm } from "./LoginForm";

export const metadata = {
  title: " Log in to the Connect EC Platform",
  description:
    "Access your Connect EC account to manage recruitment, candidate data, and team collaboration efficiently and securely.",
};

const page = () => {
  return (
    <div className="bg-[url('/background/register-bg.svg')] min-h-screen  bg-cover ">
      <div className="flex flex-col lg:flex-row  justify-evenly items-starts lg:py-[5%] px-[4%] lg:px-[7%] gap-10">
        <section className="w-full lg:h-[70vh] lg:w-1/2 flex flex-col items-center justify-center mt-16 lg:mt-0 ">
          <Image
            src={"/connect-ec-easy-recruitment-revolution.svg"}
            alt={
              "Promotional graphic positioning Connect EC as the “Easy Recruitment Revolution,” redefining simplicity in hiring."
            }
            width={1080}
            height={1080}
            priority
            quality={100}
            className="w-auto lg:h-[70%] max-h-screen"
          />

          <p className="hidden lg:block text-[16px] text-center mt-14 w-[80%]">
            All rights reserved. Connect EC is a registered trademark of
            Primethic Private Limited. By logging in, I agree to Connect EC’s
            <span className="text-[#0668E1] font-medium"> Terms and Conditions</span>.
          </p>
        </section>
        <section className="lg:w-1/2 xl:px-[5%]  ">
          <LoginForm />
        </section>
        <p className="block lg:hidden text-[10px] text-center mt-8 lg:mt-14 lg:w-[80%]">
            All rights reserved. Connect EC is a registered trademark of
            Primethic Private Limited. By logging in, I agree to Connect EC’s
            <span className="text-[#0668E1] font-medium"> Terms and Conditions</span>.
          </p>
      </div>
    </div>
  );
};

export default page;
