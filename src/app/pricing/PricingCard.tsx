"use client";
import InfoTooltip from "@/components/common/InfoTooltip";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";
import { BsExclamation } from "react-icons/bs";
import { HiOutlineCheck } from "react-icons/hi";
import ButtonDialog from "./RequestForQuoteDialogBox";
type Props = {
  tier: string;
  label: string;
  price: string;
  description: string;
  features_heading: string;
  features: { text: string; description?: string }[];
  buttonText: string;
  yearlyPlan: boolean;
};

export default function PricingCard({
  tier,
  label,
  price,
  description,
  features_heading,
  features,
  buttonText,
  yearlyPlan,
}: Props) {
  return (
    <div
      className={`${
        label === "Standard"
          ? "bg-[#0668E1] shadow-[0px_4px_4px_0px_#00000040]"
          : "bg-white shadow-[0px_0px_10px_0px_#0668E140]"
      } md:w-[55%] lg:w-[32%] border rounded-[16px] lg:rounded-[24px]  flex flex-col items-center `}
    >
      <div
        className={`bg-white/10 p-4 lg:p-6 xl:p-8 ${
          label === "Standard" ? "" : "border-b border-[#CDCDCD]"
        }  `}
      >
        <div className="flex justify-between items-center w-full mb-2">
          <h3
            className={`${
              label === "Standard" ? "text-white" : ""
            } mb-2 lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-semibold`}
          >
            {tier}
          </h3>
          <span
            className={`text-center rounded-[8px]  w-[80px] lg:w-[100px] xl:w-[110px] 2xl:w-[130px] py-2 ${
              (label === "Basic" && "text-[#0668E1] border border-[#0668E1]") ||
              (label === "Standard" && "text-[#0668E1] bg-[#FFFFFF]") ||
              (label === "Premium" && " text-[#FFFFFF] bg-[#0668E1]")
            } font-semibold text-[12px] lg:text-[13px] xl:text-[16px] 2xl:text-[20px]`}
          >
            {label}
          </span>
        </div>
        {/* <p
          className={` my-3 text-[20px] md:text-[24px] lg:text-[26px] xl:text-[32px] 2xl:text-[48px] font-bold 
            ${
              (label === "Basic" && "text-[#0668E1]") ||
              (label === "Standard" && "text-white")
            }`}
        >
          {label === "Basic"
            ? price
            : yearlyPlan
            ? `₹${(Number(price.replace(/,/g, "")) * 4).toLocaleString()}`
            : `₹${price}`}
        </p> */}
        <p
          className={` mb-2 text-[12px] md:text-[14px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] font-medium ${
            label === "Standard" ? "text-white" : ""
          }`}
        >
          {description}
        </p>
      </div>
      <div
        className={`p-6 lg:p-8 xl:p-10 flex flex-col justify-between h-full w-full`}
      >
        <div className={` ${label === "Standard" ? "text-white" : ""}`}>
          <h3
            className={`text-[16px] md:text-[18px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] font-semibold `}
          >
            {features_heading}
          </h3>
          <ul className="mt-6 space-y-4 text-[14px] md:text-[16px] lg:text-[13px] xl:text-[16px] 2xl:text-[20px]  w-full">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 xl:gap-4">
                <span
                  className={`p-0.5 rounded-[4px] text-white ${
                    label === "Standard" ? " bg-white/40" : "bg-[#0668E1]"
                  }`}
                >
                  <HiOutlineCheck className="stroke-3" />
                </span>
                <span>{feature.text}</span>
                {feature.description && (
                  <InfoTooltip label={label} description={feature.description} />
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center my-5  pt-14">
          <ButtonDialog label={label} buttonText={buttonText} tier={tier} />
        </div>
      </div>
    </div>
  );
}
