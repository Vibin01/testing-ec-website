"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export const ResetPassword = () => {
  const [formData, setFormData] = React.useState({
    password: "",
    confirmPassword: "",
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

    if (!formData.password) {
      alert("Please enter a password");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    router.push("/account-verify");
    console.log("Password reset successful:", formData.password);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="lg:w-[550px]  mx-auto bg-white border border-[#ECF5FF] shadow-[0px_2px_5px_0px_#0668E10F,_0px_9px_9px_0px_#0668E10D,_0px_20px_12px_0px_#0668E108,_0px_36px_14px_0px_#0668E103,_0px_56px_16px_0px_#0668E100] rounded-[12px]  p-6 xl:p-8"
    >
      <h2 className="lg:text-[20px] xl:text-[24px] 2xl:text-[28px] font-semibold mb-4">
        Reset password?
      </h2>
      <p className="text-[#9F9F9F] text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]  mb-5">
        Please choose your new password
      </p>
      <input
        type="Password"
        name="password"
        placeholder="New password"
        value={formData.password}
        onChange={handleChange}
        className="w-full h-[40px] xl:h-[48px] bg-white border border-[#9F9F9F] placeholder:text-[#9F9F9F]  rounded-md p-2 mb-5"
      />

      <input
        type="Password"
        name="confirmPassword"
        placeholder="Confirm password"
        value={formData.confirmPassword}
        onChange={handleChange}
        className="w-full h-[40px] xl:h-[48px] bg-white border border-[#9F9F9F] placeholder:text-[#9F9F9F]  rounded-md p-2 mb-5"
      />

      <div className=" flex justify-center mt-4">
        <button
          type="submit"
          className="w-full bg-[#0668E1] h-[40px] xl:h-[48px] hover:bg-[#0560D0] text-white py-2 px-6 my-3 rounded-md text-[16px] xl:text-[18px] 2xl:text-[20px] "
        >
          Save
        </button>
      </div>

    </form>
  );
};
