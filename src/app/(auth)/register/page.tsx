import React from "react";
import RegisterForm from "./RegisterForm";
import Image from "next/image";

export const metadata = {
  title: "Register for Connect EC - Gamified Hiring Platform",
  description:
    "Sign up for Connect EC to start engaging candidates, streamlining hiring, and optimizing recruitment with gamified, ethical tools.",
};

const page = () => {
  return (
    <div className="bg-[url('/background/register-bg.svg')] min-h-screen bg-cover ">
      <div className="flex flex-col lg:flex-row justify-evenly items-center  p-[3%] lg:px-[7%] gap-10">
        <section className="w-full lg:w-1/2 flex flex-col items-center justify-center mt-10 lg:mt-0  ">
          <Image
            src={"/connect-ec-easy-recruitment-revolution.svg"}
            alt={
              "Promotional graphic positioning Connect EC as the “Easy Recruitment Revolution,” redefining simplicity in hiring."
            }
            width={1080}
            height={1080}
            priority
            quality={100}
            className="w-auto lg:h-[70vh] max-h-screen "
          />

          <p className="hidden lg:block text-[16px] text-center mt-4 w-[80%]">
            All rights reserved. Connect EC is a registered trademark of
            Primethic Private Limited. By logging in, I agree to Connect EC’s
            <span className="text-[#0668E1] font-medium"> Terms and Conditions</span>.
          </p>
        </section>
        <section className="lg:w-1/2 xl:px-[5%]">
          <RegisterForm />
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
