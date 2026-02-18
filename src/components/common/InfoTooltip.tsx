import { useEffect, useState } from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { BsExclamation } from "react-icons/bs";

export default function InfoTooltip({ label,description }: any) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <button
            className={`rounded-full lg:p-1 cursor-pointer ${
              label === "Standard"
                ? "bg-white text-[#0668E1]"
                : "bg-[#C4D9F1]"
            }`}
          >
            <BsExclamation className="lg:w-4 lg:h-4" />
          </button>
        </PopoverTrigger>
        <PopoverContent
          side="bottom"
          className="max-w-[300px] lg:max-w-md shadow-xl text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#1B1C17] bg-white"
        >
          {description}
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          className={`rounded-full cursor-pointer ${
            label === "Standard"
              ? "bg-white text-[#0668E1]"
              : "bg-[#C4D9F1]"
          }`}
        >
          <BsExclamation className="w-4 h-4" />
        </span>
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        className="max-w-[300px] lg:max-w-md shadow-xl text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#1B1C17] bg-white"
      >
        {description}
      </TooltipContent>
    </Tooltip>
  );
}
