"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

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
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" lg:max-w-[450px] xl:max-w-[600px] lg:max-h-[53vh] w-auto  mx-auto bg-white border border-[#ECF5FF] shadow-[0px_2px_5px_0px_#0668E10F,_0px_9px_9px_0px_#0668E10D,_0px_20px_12px_0px_#0668E108,_0px_36px_14px_0px_#0668E103,_0px_56px_16px_0px_#0668E100]
       rounded-[12px]  p-6 xl:p-8"
    >
      <h2 className=" lg:text-[20px] xl:text-[24px] 2xl:text-[28px] font-semibold mb-6">
        Achieve your Hiring Goals with Ease
      </h2>
      <p className="text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] text-left font-medium mb-2">
        Organization
      </p>
      <input
        type="email"
        name="email"
        placeholder="Your official email id"
        value={formData.email}
        onChange={handleChange}
        className="w-full h-[36px] lg:h-[48px] bg-white border border-[#9F9F9F] placeholder:text-[#9F9F9F] text-[12px] lg:text-[16px] rounded-md p-2 mb-3"
      />

      <div className="relative w-full mb-3">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full h-[36px] lg:h-[48px] bg-white border border-[#9F9F9F] placeholder:text-[#9F9F9F] text-[12px] lg:text-[16px] rounded-md p-2 pr-14"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-[#0668E1] "
        >
                    {showPassword ? <IoEye className="text-[#0668E1] w-6 h-6" /> : <IoMdEyeOff className="text-[#9F9F9F] w-6 h-6" />}

        </button>
      </div>
      <Link
        href={"/forgot-password"}
        className="my-1 text-[#0668E1] font-semibold text-[12px] xl:text-[14px] 2xl:text-[16px]"
      >
        Forgot Password
      </Link>
      <div className="pt-5 flex ">
        <button
          type="submit"
          className="w-full bg-[#0668E1] h-[36px] lg:h-[48px] hover:bg-blue-700 text-white  px-6 my-2 rounded-md text-[16px] xl:text-[18px] 2xl:text-[20px] "
        >
          Log in
        </button>
      </div>
    
      <p className="pt-4 text-center text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[18px] mt-4">
        New to Connect EC?{" "}
        <Link target="_self"  href="/register" className="text-[#0668E1] font-semibold">
          Register Now
        </Link>{" "}
      </p>
    </form>
  );
};
