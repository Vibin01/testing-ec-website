"use client";
import { usePathname } from "next/navigation";
import { FaInstagram, FaYoutube, FaMediumM } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function FooterClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [openSection, setOpenSection] = useState<string | null>(null);
  const router = useRouter();

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const handleFaqClick = () => {
    router.push("/employers"); // Go to /about without auto-scroll
    sessionStorage.setItem("scrollToFaq", "true");
  };

  return (
    <>
      {!pathname.includes("login") &&
        !pathname.includes("register") &&
        !pathname.includes("reset-password") &&
        !pathname.includes("forgot-password") &&
        !pathname.includes("otp-verify") &&
        !pathname.includes("account-verify") && (
          <footer className="bg-[#0668E1] text-[16px] xl:text-[18px] 2xl:text-[20px]  text-white pt-[2%] pb-7 px-6">
            <div className="flex flex-col  justify-center items-center xl:justify-between   mx-auto">
              <div className=" w-[100%]  flex flex-col lg:flex-row justify-center  md:justify-between  lg:items-end gap-6">
                <div className=" mt-10 lg:mt-0 px-[2%] mb-2 lg:mb-0">
                  <div className="flex justify-center lg:justify-start mb-4">
                    <Link href={"https://connectec.app/"}>
                      <Image
                        src="/Connect_EC_Logo-white.svg"
                        alt="Logo"
                        width={200}
                        height={200}
                        className="h-auto  mb-8 w-auto max-w-[300px] cursor-pointer"
                      />
                    </Link>
                  </div>

                  <p className="mt-4 text-[14px] xl:text-[18px]   lg:font-medium">
                    Phone : +91 9499045981
                  </p>
                  <p className="mt-1 lg:mt-2 text-[14px] xl:text-[18px]  lg:font-medium">
                    Email : hello@connectec.app
                  </p>
                </div>
                <div className="flex flex-col lg:flex-row h-full gap-3 lg:gap-14 items-start lg:justify-between lg:items-center px-[2%] ">
                  <Image
                    src="/googleplay.svg"
                    alt="Google Play"
                    loading="lazy"
                    width={200}
                    height={200}
                    className=" w-auto h-[50px]"
                  />

                  {/* Social Icons */}
                  <div className="mt-3 lg:mt-0 flex items-center gap-3 lg:gap-6 text-lg lg:text-xl">
                    <div className="p-2 bg-[#FFFFFF1A] rounded-full">
                      <FaXTwitter />
                    </div>

                    <div className="p-2 bg-[#FFFFFF1A] rounded-full">
                      <ImLinkedin2 />
                    </div>
                    <div className="p-2 bg-[#FFFFFF1A] rounded-full">
                      <FaMediumM />
                    </div>

                    <div className="p-2 bg-[#FFFFFF1A] rounded-full">
                      <FaYoutube />
                    </div>
                    <div className="p-2 bg-[#FFFFFF1A] rounded-full">
                      <FaInstagram />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col mt-4 lg:mt-0 pt-3">
                <div className="hidden lg:flex flex-col items-end  py-4">
                  <div className="sm:w-[100%]   border-t border-[#FFFFFF] my-2"></div>
                </div>

                <div className="mt-10 lg:mt-0 flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-between ">
                  <div className="flex justify-center items-center flex-wrap lg:flex-nowrap lg:block   text-[12px] md:text-[14px]  text-start lg:font-medium space-x-3">
                    <Link href="https://primethic.com/">About us</Link>|{" "}
                    <a href="/terms-and-condition">&nbsp;&nbsp;Terms & Conditions</a>
                    |&nbsp;&nbsp; {""}
                    <a href="/privacy-policy">Privacy Policy</a>|{" "}
                    <button onClick={handleFaqClick} className="cursor-pointer">
                      &nbsp;&nbsp;FAQs
                    </button>
                  </div>
                    <p className="mt-8 lg:mt-0 text-[10px] lg:text-[14px]  font-normal flex flex-col justify-center items-center lg:items-end ">
                    <span>
                      <Link href="https://primethic.com/">
                        © Copyright Primethic Private Limited{" "}
                      </Link>
                      {new Date().getFullYear()}. All Rights Reserved.
                    </span>
                    <span className="text-[5px] lg:text-[9px]">
                      {" "}
                      {children}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </footer>
        )}
    </>
  );
}
