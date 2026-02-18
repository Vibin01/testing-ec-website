"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
export default function RegisterForm() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState({
    organizationType: "",
    fullName: "",
    phone: "",
    email: "",
    organization: "",
    countryCode: "",
    password: "",
    confirmPassword: "",
    cin_number: "",
    agree: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      phone: e.target.value,
      countryCode: countryCode,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (formRef.current) {
        const topPosition =
          formRef.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: topPosition - 100, // 👈 Offset of 100px
          behavior: "smooth",
        });
      }
    }, 3000); // 👈 3-second delay

    // Cleanup timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className=" lg:max-w-[400px] xl:max-w-[600px]   w-auto  mx-auto bg-white border border-[#ECF5FF] shadow-[0px_2px_5px_0px_#0668E10F,_0px_9px_9px_0px_#0668E10D,_0px_20px_12px_0px_#0668E108,_0px_36px_14px_0px_#0668E103,_0px_56px_16px_0px_#0668E100] rounded-[12px] p-4 lg:p-6 xl:p-8"
    >
      <h2 className="lg:text-[20px] xl:text-[24px] 2xl:text-[28px] font-semibold mb-4">
        Talent Acquisition made EASY!
      </h2>
      <div className="flex items-center gap-4 mb-4 lg:mb-10">
        <p className="text-[14px] lg:text-[18px] xl:text-[20px]  font-semibold  ">
          Hiring as:
        </p>
        <div className="flex space-x-6 ">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="organizationType"
              value="company"
              checked={formData.organizationType === "company"}
              onChange={handleChange}
              className="w-3 lg:w-5 h-auto text-[12px] lg:text-[16px] xl:text-[18px]  accent-[#0668E1] 
    "
            />
            <span className="text-[12px] lg:text-[16px] xl:text-[18px]">Company</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="organizationType"
              value="staffing"
              checked={formData.organizationType === "staffing"}
              onChange={handleChange}
              className="w-3 lg:w-5 h-auto text-[12px] lg:text-[16px] xl:text-[18px]  accent-[#0668E1] "
            />
            <span className="text-[12px] lg:text-[16px] xl:text-[18px]">Staffing Agency</span>
          </label>
        </div>
      </div>
      <input
        type="text"
        name="fullName"
        placeholder="Write your full name"
        value={formData.fullName}
        onChange={handleChange}
        className="w-full h-[36px] xl:h-[48px] text-[14px] lg:text-[16px] bg-white border border-[#9F9F9F] placeholder:text-[#9F9F9F]  rounded-md p-2 mb-3 "
      />

      <div className="flex items-center w-full h-[36px] xl:h-[48px] text-[14px] lg:text-[16px] bg-white border border-[#9F9F9F] rounded-md mb-3  overflow-hidden">
        {/* Country code selector */}
        <select
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          className="h-full pl-2 mr-2 bg-white focus:outline-none   text-sm"
        >
          <option value="+91">+91</option>
          <option value="+1">+1</option>
          <option value="+44">+44</option>
          <option value="+61">+61</option>
          {/* add more as needed */}
        </select>

        {/* Phone number input */}
        <input
          type="tel"
          name="phone"
          placeholder="1234567890"
          value={formData.phone}
          onChange={handlePhoneChange}
          className="flex-1 h-full px-3 bg-white focus:outline-none border-l border-[#9F9F9F] text-sm"
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="Your official email id"
        value={formData.email}
        onChange={handleChange}
        className="w-full h-[36px] xl:h-[48px] text-[14px] lg:text-[16px] bg-white border border-[#9F9F9F] placeholder:text-[#9F9F9F]  rounded-md p-2 mb-3 "
      />

      <input
        type="text"
        name="organization"
        placeholder="Enter your organization"
        value={formData.organization}
        onChange={handleChange}
        className="w-full h-[36px] xl:h-[48px] text-[14px] lg:text-[16px] bg-white border border-[#9F9F9F] placeholder:text-[#9F9F9F]  rounded-md p-2 mb-3 "
      />

      <div className="relative w-full mb-3 ">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full h-[36px] xl:h-[48px] text-[14px] lg:text-[16px] bg-white border border-[#9F9F9F] placeholder:text-[#9F9F9F] rounded-md p-2 pr-14"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-[#0668E1] "
        >
          {showPassword ? <IoEye className="text-[#0668E1] w-6 h-6" /> : <IoMdEyeOff className="text-[#9F9F9F] w-6 h-6" />}
        </button>
      </div>

      <div className="relative w-full mb-3 ">
        <input
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full h-[36px] xl:h-[48px] text-[14px] lg:text-[16px] bg-white border border-[#9F9F9F] placeholder:text-[#9F9F9F] rounded-md p-2 pr-14"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-[#0668E1] "
        >
                  {showPassword ? <IoEye className="text-[#0668E1] w-6 h-6" /> : <IoMdEyeOff className="text-[#9F9F9F] w-6 h-6" />}

        </button>
      </div>

      <input
        type="text"
        name="cin_number"
        placeholder="Employer CIN (for verification)"
        value={formData.cin_number}
        onChange={handleChange}
        className="w-full h-[36px] xl:h-[48px] text-[14px] lg:text-[16px] bg-white border border-[#9F9F9F] placeholder:text-[#9F9F9F]  rounded-md p-2 mb-3 "
      />

      <label className="flex items-start space-x-2 mb-8 pl-1 ">
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
          className="h-5 w-5 mr-2 lg:mr-4 accent-[#0668E1] "
        />
        <span className=" text-[10px] xl:text-[12px] 2xl:text-[14px]">
          I have read and agree to the{" "}
          <a href="#" className="text-[#0668E1] font-medium">
            Terms and Conditions
          </a>{" "}
          and{" "}
          <a href="#" className="text-[#0668E1] font-medium">
            Privacy Policy
          </a>
        </span>
      </label>
      <div className="flex w-full">
        <button
          type="submit"
          className=" bg-[#0668E1] h-[36px] xl:h-[48px] text-[14px] lg:text-[16px] w-full hover:bg-[#0560D0] text-white px-6 my-3 rounded-md xl:text-[18px] 2xl:text-[20px] "
        >
          Register for Free
        </button>
      </div>

      <p className="text-center text-[14px] xl:text-[16px] 2xl:text-[18px] mt-2 py-2">
        Already Registered?{" "}
        <Link href="/login" className="text-[#0668E1] font-semibold">
          Login
        </Link>{" "}
        here
      </p>
    </form>
  );
}
