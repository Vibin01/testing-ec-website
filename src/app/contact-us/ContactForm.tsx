"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [queryType, setQueryType] = useState("General");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const queryOptions = [
    { label: "General", icon: "/contact/contact-general-icon.svg" },
    { label: "I'm a Recruiter", icon: "/contact/contact-recruiter-icon.svg" },
    { label: "I'm a Candidate", icon: "/contact/contact-candidate-icon.svg" },
    {
      label: "I represent an Organization",
      icon: "/contact/contact-organization-icon.svg",
    },
  ];
 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      setStatus("⚠️ Please fill all required fields");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("❌ Invalid email format");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/sending-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, queryType }),
      });
console.log(res);
      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
       className=" mx-auto bg-white rounded-[16px] lg:rounded-[40px] shadow-[0px_0px_20px_0px_#0668E10D,_0px_0px_10px_0px_#0668E10D] p-5  flex flex-col md:flex-row gap-6">
      {/* Left Panel */}
      <div className="w-full lg:w-[40%] 2xl:w-1/3 bg-[#0668E1] text-white rounded-[10px] lg:rounded-[20px] py-6 px-3 lg:px-8">
        <h2 className="text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[32px] font-semibold mb-4">
          How can we Help?
        </h2>
        <p className="mb-4 text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]  font-medium">
          Select your Query
        </p>
        <div className="space-y-4">
          {queryOptions.map((option) => (
            <button
              key={option.label}
               type="button"
              onClick={() => setQueryType(option.label)}
              className={`flex items-center text-[14px]  md:text-[16px] lg:text-[18px]- xl:text-[20px] 2xl:text-[24px] gap-3 w-full px-2 lg:px-2 xl:px-4 py-2 md:py-3 rounded-[8px] lg:rounded-[12px] font-medium transition ${
                queryType === option.label
                  ? "bg-white text-[#0668E1] font-semibold"
                  : "bg-[#FFFFFF4D] hover:bg-[#5b99e48b]"
              }`}
            >
              <Image
                src={option.icon}
                alt={option.label}
                width={40}
                height={40}
                className="w-6 h-6 lg:w-6 lg:h-6 xl:w-8 xl:h-8"
              />
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-[60%] 2xl:w-2/3 flex flex-col gap-4 py-4 px-[2%] lg:px-[5%]">
        <div>
          <label className="block lg:text-[18px] xl:text-[20px]  font-medium mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"     
             value={formData.name}
          onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-3 lg:py-4 rounded-[8px] bg-[#F4F4F4] outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block lg:text-[18px] xl:text-[20px]  font-medium mb-1">
            Your Phone No <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="phone"     
             value={formData.phone}
          onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full px-4 py-3 lg:py-4 rounded-[8px] bg-[#F4F4F4] outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block lg:text-[18px] xl:text-[20px]  font-medium mb-1">
            Your Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
             value={formData.email}
          onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-3 lg:py-4 rounded-[8px] bg-[#F4F4F4] outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block lg:text-[18px] xl:text-[20px]  font-medium mb-1">
            Your Query <span className="text-red-500">*</span>
          </label>
          
          <textarea
            placeholder="Type your query"
            name="message"
             value={formData.message}
          onChange={handleChange}
            rows={5}
            className="w-full min-h-[200px] max-h-[200px] px-4 py-4 rounded-[8px] bg-[#F4F4F4] outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          onClick={handleSubmit}
          className="self-center mt-5 w-[200px] py-3 bg-[#0668E1] text-white font-medium rounded-[8px] hover:bg-blue-700 transition"
        >
          {loading ? "Sending..." : "Send your Message"}
        </button>

        {status && <p className="text-center mt-3 text-sm">{status}</p>}
      </div>
    </form>
  );
}
