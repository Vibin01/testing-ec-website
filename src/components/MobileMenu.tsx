"use client";

import { useState } from "react";
import Link from "next/link";
import { RiMenu5Fill } from "react-icons/ri";
import { X } from "lucide-react";
import Image from "next/image";

export default function MobileMenu({isMenuOpen, setIsMenuOpen}: {isMenuOpen: boolean, setIsMenuOpen: (open: boolean) => void}) {

  return (
    <>
      <button
        className="lg:hidden z-50 relative"
       onClick={() => {
  const newState = !isMenuOpen;
  setIsMenuOpen(newState);
}}

        aria-label="Open menu"
      >
        {!isMenuOpen && <RiMenu5Fill className="w-6 h-6 text-[#0668E1]" />}
      </button>

      {/* Mobile menu */}
      <div
        className={`fixed z-[99999] top-0 left-0 w-full overflow-y-auto scrollbar-hidden h-[100dvh]
           bg-[#0668E1] text-white p-6 
          transition-transform duration-300 ease-out
          ${isMenuOpen ? "translate-y-0" : "-translate-y-full"} 
          
          lg:hidden z-40`}
      >
        <div className="flex justify-between items-center w-full">
          <Image
            src="/Connect_EC_Logo-white.svg"
            alt="Logo"
            width={140}
            height={100}
            className="object-contain w-[200px] h-auto mt-5 mb-2"
          />

          <X
            
  onClick={() => {
    setIsMenuOpen(false);
  }}

            className="w-6 h-6 text-white cursor-pointer"
          />
        </div>
        <nav className="flex flex-col mt-6 text-[16px]">
          <Link href="/" className="border-b border-[#0072FF] py-4" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/employers" className="border-b border-[#0072FF] py-3" onClick={() => setIsMenuOpen(false)}>
            Employers
          </Link>
          <Link href="/candidates" className="border-b border-[#0072FF] py-3"  onClick={() => setIsMenuOpen(false)}>
            Candidates
          </Link>
          <Link href="/recruiters" className="border-b border-[#0072FF] py-3" onClick={() => setIsMenuOpen(false)}>
            Recruiters
          </Link>
          <Link href="/features" className="border-b border-[#0072FF] py-3" onClick={() => setIsMenuOpen(false)}>
            Features
          </Link>
          <Link href="/resources" className="border-b border-[#0072FF] py-3" onClick={() => setIsMenuOpen(false)}>
            Resources
          </Link>
          <Link href="/pricing" className="border-b border-[#0072FF] py-3" onClick={() => setIsMenuOpen(false)}>
            Pricing
          </Link>
          <Link href="/contact-us" className="border-b border-[#0072FF] py-3" onClick={() => setIsMenuOpen(false)}>
            Contact us
          </Link>
        </nav>
        <div className="relative h-[170px]  w-full mx-auto">

           <div className="absolute -bottom-6 -left-6 p-6 rounded-t-[20px]  w-[100vw] flex flex-col gap-3 bg-white h-[170px] shadow-[0px_-1px_2px_0px_0668E10D,_0px_-3px_3px_0px_#0668E10A,_0px_-7px_4px_0px_#0668E108,_0px_-12px_5px_0px_#0668E103,_0px_-19px_5px_0px_#0668E100,_0px_4px_4px_0px_#00000040]">

<h2 className="text-[16px] font-medium text-[#1B1C17] mb-2">For Employers</h2>
<Link href="/register" className="w-full py-2 rounded-[8px] text-[14px] font-semibold bg-[#0668E1] text-center" onClick={() => setIsMenuOpen(false)}>
          Register
          </Link>
         <Link href="/login" className="w-full py-2 rounded-[8px] text-[14px] text-[#1B1C17] border border-[#0668E1] font-semibold bg-white text-center" onClick={() => setIsMenuOpen(false)}>
            Login
          </Link>
          </div>
       </div>
      </div>
    </>
  );
}
