"use client";

import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { FaqsData } from "@/data/FaqsData";

export default function FAQSection() {
  const [openCategory, setOpenCategory] = useState<string | null>("Recruiter");

  useEffect(() => {
    const shouldScroll = sessionStorage.getItem("scrollToFaq");
    if (shouldScroll === "true") {
      sessionStorage.removeItem("scrollToFaq");
      const faqSection = document.getElementById("faq");
      faqSection?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      id="faq"
      className="faq-section group w-full md:px-[4%] lg:px-[6%] xl:px-[8%] 2xl:px-[10%] mx-auto py-12"
    >
      <h1 className="text-[22px] md:text-[26px] lg:text-[30px] xl:text-[38px] 2xl:text-[48px] font-bold text-center mb-12 md:mb-16 lg:mb-22">
        {FaqsData.title}
      </h1>

      <div className="space-y-7">
        {FaqsData.faqData.map((cat, index) => (
          <div
            key={cat.category}
            className={`${
              index !== FaqsData.faqData.length - 1 ? "border-b-[2px]" : ""
            } border-[#1B1C17] pb-6`}
          >
            <button
              className="cursor-pointer flex justify-between items-center w-full font-bold text-[18px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]"
              onClick={() =>
                setOpenCategory(
                  openCategory === cat.category ? null : cat.category
                )
              }
            >
              {cat.category}

              <motion.span
                animate={{ rotate: openCategory === cat.category ? 0 : 180 }}
                transition={{ duration: 0.5 }}
              >
                <IoIosArrowUp />
              </motion.span>
            </button>

            <AnimatePresence>
              {openCategory === cat.category && (
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  exit={{ opacity: 0, scaleY: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ originY: 0 }}
                  className="overflow-hidden mt-6 space-y-2.5 lg:space-y-4 xl:space-y-6"
                >
                  {cat.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className={`${
                        i !== cat.faqs.length - 1 ? "border-b-[2px]" : ""
                      } border-[#EEEEEE] pb-3 lg:pb-6`}
                    >
                      <h2 className="w-full text-left font-medium mb-3 xl:mb-5 text-[14px] md:text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[24px]">
                        {faq.question}
                      </h2>

                      <p className="text-[#666666] text-[13px] md:text-[14px] lg:text-[16px] xl:text-[20px]">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
