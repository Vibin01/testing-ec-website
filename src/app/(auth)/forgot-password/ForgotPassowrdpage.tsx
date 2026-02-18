"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const ForgotPassowrdpage = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    router.push("/reset-password");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full lg:w-[550px]  mx-auto bg-white border border-[#ECF5FF] shadow-[0px_2px_5px_0px_#0668E10F,_0px_9px_9px_0px_#0668E10D,_0px_20px_12px_0px_#0668E108,_0px_36px_14px_0px_#0668E103,_0px_56px_16px_0px_#0668E100] rounded-[12px] p-7 xl:p-10"
    >
      <h2 className="lg:text-[20px] xl:text-[24px] 2xl:text-[28px] font-semibold mb-3">
        Forgot your password?
      </h2>
      <p className="text-[#9F9F9F] text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]  mb-5">
      Email Address or Phone Number
      </p>
      <input
        type="email"
        name="email"
        placeholder="Your official email id"
        value={formData.email}
        onChange={handleChange}
        className="w-full h-[40px] lg:h-[48px] bg-white border border-[#9F9F9F] placeholder:text-[#9F9F9F]  rounded-md p-2 mb-10"
      />

      <div className=" flex justify-center">
        <button
          type="submit"
          className="w-full bg-[#0668E1] h-[48px] hover:bg-[#0560D0] text-white py-2 px-6 my-3 rounded-md text-[16px] xl:text-[18px] 2xl:text-[20px] "
        >
          Submit
        </button>
      </div>


    </form>
  );
};
