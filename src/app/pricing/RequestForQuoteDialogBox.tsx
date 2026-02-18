"use client";

import { useEffect, useState, type ChangeEvent } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import AnimationEC from "@/components/common/Animation/AnimationEC";
import animationData from "@/public/animation/tick-verify.json";
interface ButtonDialogProps {
  label: string;
  buttonText: string;
  tier: string;
}

export default function ButtonDialog({
  label,
  buttonText,
  tier,
}: ButtonDialogProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    tier: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (tier) {
      const cleanTier = tier.replace(/[^\d]/g, "");
      setFormData((prev) => ({ ...prev, tier: cleanTier }));
    }
  }, [tier]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "tier" ? value.replace(/[^\d]/g, "") : value,
    }));
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
        setOpen(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleDialogChange = (state: boolean) => {
    setOpen(state);
    if (!state) {
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        tier: "",
      });
      setErrors({});
      setSubmitted(false);
      setLoading(false);
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.company.trim())
      newErrors.company = "Company name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.tier) newErrors.tier = "Please select a tier";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const response = await fetch("/api/sending-mail-request-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Email failed to send");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    //scroll to top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (label !== "Free Forever") {
      setOpen(true);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`w-[70%] h-[44px] md:h-[50px] lg:h-[60px] xl:h-[70px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] cursor-pointer font-semibold rounded-[12px] ${
          label === "Standard"
            ? "text-white bg-[#FFFFFF33] shadow-[0px_4px_20px_0px_#0000001A]"
            : "text-[#0668E1] border border-[#0668E1]"
        }`}
      >
        {buttonText}
      </button>

      <Dialog open={open} onOpenChange={handleDialogChange}>
        <DialogContent
          className={`w-full  p-3 lg:p-6 max-w-[90%] lg:max-w-[750px] max-h-[95%] overflow-y-scroll scrollbar-hidden rounded-[16px] lg:rounded-[32px] ${
            submitted ? "bg-transparent border-none shadow-none" : "bg-white"
          } `}
        >
          <DialogTitle className="hidden"></DialogTitle>
          {submitted ? (
            <div className="flex flex-col justify-center items-center  lg:p-10 bg-transparent text-center ">
              {/* <Image src={"/tick-success.svg"} height={100} width={100} alt="tick icon" className="lg:w-[120px] lg:h-[120px] mb-5" />
               */}
              <div className="h-[140px] w-[140px] mb-5">
                <AnimationEC animationData={animationData} />
              </div>
              <h2 className="text-[#0668E1]  font-bold text-[20px] lg:text-[32px] mb-6 px-[2%] lg:px-[20%]">
                Your Connect EC Journey Starts Here!
              </h2>
              <p className="text-[14px] lg:text-[24px] font-medium ">
                Thanks for sharing your interest — our team will reach out soon
                to help you elevate your hiring experience.
              </p>
            </div>
          ) : (
            <>
              <div className="bg-[#0668E1] text-white p-4 lg:p-6 rounded-[16px] ">
                <Image
                  src="/Connect_EC_Logo-white.svg"
                  alt="Logo"
                  width={200}
                  height={200}
                  className="h-[25px] lg:h-[50px]  mb-5 lg:mb-8 w-auto cursor-pointer"
                />
                <h2 className="text-[16px] lg:text-[28px] font-semibold leading-snug mb-2">
                  Request a Quote – Elevate your Hiring Excellence
                </h2>
                <p className="text-[12px] lg:text-[18px] mt-2 lg:font-medium opacity-80">
                  Transform talent acquisition with a unified platform that
                  empowers recruiters, decodes success patterns, and inspires
                  lasting connections — all powered by Connect EC.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 lg:gap-6  bg-white"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 lg:py-4 rounded-[8px] bg-[#F4F4F4] outline-none"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name}</p>
                )}

                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 lg:py-4 rounded-[8px] bg-[#F4F4F4] outline-none"
                />
                {errors.company && (
                  <p className="text-red-500 text-xs">{errors.company}</p>
                )}

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone No"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 lg:py-4 rounded-[8px] bg-[#F4F4F4] outline-none"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs">{errors.phone}</p>
                )}

                <input
                  type="email"
                  name="email"
                  placeholder="Business E Mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 lg:py-4 rounded-[8px] bg-[#F4F4F4] outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}

                <select
                  name="tier"
                  value={formData.tier}
                  onChange={handleChange}
                  className="w-full px-4 py-2 lg:py-4 rounded-[8px] bg-[#F4F4F4] outline-none"
                >
                  <option value="">Select Tier</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                {errors.tier && (
                  <p className="text-red-500 text-xs">{errors.tier}</p>
                )}

                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 mb-3 bg-[#0668E1] text-white font-semibold py-3 px-8 lg:px-[6%] rounded-lg hover:bg-[#045ac3] transition flex items-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin w-5 h-5" />
                        Sending...
                      </>
                    ) : (
                      "Get My Quote"
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
