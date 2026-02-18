"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
export default function ScrollButtons() {
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop <= 150) {
        setShowUp(false);
        setShowDown(true);
      } else if (scrollTop + windowHeight >= documentHeight - 10) {
        setShowUp(true);
        setShowDown(false);
      } else {
        setShowUp(true);
        setShowDown(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showUp && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className=" fixed bottom-40 right-16 lg:text-[20px] xl:text-[24px] 2xl:text-[28px] lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 flex justify-center items-center cursor-pointer rounded-full opacity-[80%] bg-[linear-gradient(90deg,_#004AA6_0%,_#0668E1_50%,_#0072FF_100%)] text-white shadow-md"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <MdOutlineKeyboardDoubleArrowUp />
          </motion.div>
        </button>
      )}
      {showDown && (
        <button
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
          className=" fixed bottom-20 right-16 lg:text-[20px] xl:text-[24px] 2xl:text-[28px] lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 flex justify-center items-center cursor-pointer rounded-full opacity-[80%] bg-[linear-gradient(90deg,_#004AA6_0%,_#0668E1_50%,_#0072FF_100%)] text-white shadow-md"
        >
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <MdKeyboardDoubleArrowDown />
          </motion.span>
        </button>
      )}
    </>
  );
}
