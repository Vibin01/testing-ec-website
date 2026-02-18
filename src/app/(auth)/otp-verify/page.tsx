"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import React from "react";

const page = () => {

  const OTP_LENGTH = 6;

  const [otp, setOtp] = useState<string[]>(new Array(OTP_LENGTH).fill(""));
  const [error, setError] = useState("");
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  // Handle input change
  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return; // Allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  // Handle paste
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, OTP_LENGTH);

    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = pastedData.split("");
    setOtp([...newOtp, ...new Array(OTP_LENGTH - newOtp.length).fill("")]);

    inputsRef.current[pastedData.length - 1]?.focus();
  };

  // Validate & Submit
  const handleSubmit = () => {
    const otpValue = otp.join("");

    if (otpValue.length !== OTP_LENGTH) {
      setError("Please enter complete OTP.");
      return;
    }

    setError("");
    console.log("OTP Submitted:", otpValue);

    // 🔥 Call your API here
  };


  return (
    <div className="bg-[url('/background/register-bg.svg')] min-h-screen bg-cover ">
      <div className="flex flex-col lg:flex-row items-center justify-center mt-20 lg:mt-0  px-[3%] lg:px-[7%] lg:gap-10">
        <section className="lg:w-1/2 flex justify-center items-center px-[10%] lg:px-0 ">
          <Image
            src={"/verify-image.svg"}
            alt={"Hero Image"}
            width={1080}
            height={1080}
            priority
            quality={100}
            className="w-auto h-[40%] lg:h-[70%] lg:max-h-screen"
          />
        </section>
        <section className="lg:w-1/2 flex justify-center items-center">
          <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white lg:w-[550px] rounded-[12px] border border-[#ECF5FF] shadow-[0px_2px_5px_0px_#0668E10F,_0px_9px_9px_0px_#0668E10D,_0px_20px_12px_0px_#0668E108,_0px_36px_14px_0px_#0668E103,_0px_56px_16px_0px_#0668E100] p-8">
              <h2 className="lg:text-[20px] xl:text-[24px] 2xl:text-[28px] font-semibold mb-3">
          OTP Verification
        </h2>

      <p className="text-[#9F9F9F] text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]  mb-8">
          Enter the OTP sent to your mobile number or email.
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-between mb-12 px-5">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputsRef.current[index] = el;
              }}
              type="text"
              value={digit}
              maxLength={1}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              className="w-8 h-6 lg:w-13 lg:h-10 text-center text-[#0668E1] font-semibold border border-[#9F9F9F] rounded-[20px] focus:outline-none focus:border-blue-500"
            />
          ))}
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-[#0668E1] h-[36px] lg:h-[48px] hover:bg-[#0560D0] text-white  px-6 my-3 rounded-md text-[16px] xl:text-[18px] 2xl:text-[20px] "
        >
          Verify
        </button>

        <p className="flex justify-between items-center text-[14px] lg:text-[18px] text-center">
          <span>
          Didn’t receive the verification OTP?</span>
          <button className="text-[#0668E1] text-[13px] lg:text-[16px] font-medium underline ml-1">
            Resend
          </button>
        </p>
      </div>
    </div>
        </section>
      </div>
    </div>
  );
};
export default page;
