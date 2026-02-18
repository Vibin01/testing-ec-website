"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Employers", link: "/employers" },
  { name: "Candidates", link: "/candidates" },
  { name: "Recruiters", link: "/recruiters" },
  { name: "Features", link: "/features" },
  { name: "Resources", link: "/resources" },
  { name: "Pricing", link: "/pricing" },
  { name: "Contact us", link: "/contact-us" },
];

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
const [showDropdown, setShowDropdown] = useState(false);

const [isMenuOpen, setIsMenuOpen] = useState(false);


  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 200) {
        // 👇 user scrolling down
        setShow(false);
      } else {
        // 👇 user scrolling up
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <>
      <div className={`${isMenuOpen ? "hidden" : ""} h-[60px] lg:h-[100px] max-h-[100px] bg-[url('/background/mobile-bg-navbar.svg')]`}></div>
      <div
        className={` ${isMenuOpen ? "h-0" : "h-[60px]"} fixed top-0 left-0 z-50 flex w-full bg-[url('/background/mobile-bg-navbar.svg')] lg:bg-none- bg-cover bg-no-repeat 
    transition-transform duration-300  lg:h-[100px] max-h-[100px] ${
      show ? "translate-y-0 bg-white" : "-translate-y-full"
    }`}
      >
        <nav className="flex w-full items-center justify-between lg:text-[14px] xl:text-[18px] 2xl:text-[24px] px-3 lg:px-4 xl:px-6 2xl:px-8 py-6 md:py-4  bg-[#FFFFFF33] md:bg-[#FFFFFF66] border-b border-[#0668E11A] md:border-[#E5E5E5] relative z-[9999]">
          <div className="flex lg:w-1/5 items-center   ">
            <Link href={"https://connectec.app/"}>
              <Image
                src="/Connect_EC_Logo.svg"
                alt="Logo"
                width={280}
                height={100}
                className="object-contain cursor-pointer w-[65%] md:w-full h-auto xl:min-w-[200px] 2xl:min-w-[280px]"
              />
            </Link>
          </div>
          {!pathname.includes("login") &&
            !pathname.includes("register") &&
            !pathname.includes("reset-password") &&
            !pathname.includes("forgot-password") &&
            !pathname.includes("account-verify") && (
              <>
                <ul className="hidden lg:flex items-center justify-center lg:gap-[15px] xl:gap-[2.5%]  text-[#1B1C17] w-4/5">
                  {navItems.map((item) => {
                    const isActive =
                      item.name === "Home"
                        ? pathname === "/" || pathname.startsWith("/home")
                        : pathname.startsWith(item.link);

                    return (
                      <li
                        key={item.name}
                        className={`${
                          isActive
                            ? "text-[#0668E1]  font-semibold"
                            : "font-medium"
                        }  cursor-pointer flex flex-col justify-center items-center`}
                        onClick={() => router.push(item.link)}
                      >
                        {item.name}
                        {isActive ? (
                          <div className="mt-1 lg:h-[4px]  2xl:h-[6px] lg:w-[40px] xl:w-[50px]- bg-[#0668E1] rounded-[4px]" />
                        ) : (
                          <div className="mt-1 lg:h-[4px]  2xl:h-[6px] w-[85%] " />
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div className="lg:border-l-2 flex w-[30%] md:w-[300px] justify-end lg:justify-center items-center gap-3 lg:gap-3 xl:gap-4">
                  <div className="hidden relative lg:inline-block group py-4 ">
                    {/* Trigger */}
                    <div onClick={()=>setShowDropdown(!showDropdown)} className="flex items-center gap-4 cursor-pointer">
                      <span className="font-medium ">
                        For Employers
                      </span>
                      <FaChevronDown
                        className={`w-auto lg:h-3 xl:h-5 transition-transform duration-200 group-hover:rotate-180 ${showDropdown ? 'rotate-180' : ''}`}/>
                        
                    </div>

                    {/* Dropdown */}
                    <div className={`absolute left-0 mt-3 w-[200px] bg-white rounded-[12px] shadow-[0px_1px_3px_0px_#0668E10D,_0px_6px_6px_0px_#0668E10A,_0px_13px_8px_0px_#0668E108,_0px_23px_9px_0px_#0668E103,_0px_36px_10px_0px_#0668E100] 
                    border border-[#EAF3FF] invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${showDropdown ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                      <div className="py-4 px-6 space-y-3  text-[16px] xl:text-[20px] font-medium">
                        <Link href={"/register"} className="w-full py-2 text-left block hover:font-semibold hover:text-[#0668E1]">
                          Register
                        </Link>
                        <Link href={"/login"} className="w-full py-2 text-left block hover:font-semibold hover:text-[#0668E1]">
                          Login
                        </Link>
                      </div>
                    </div>
                  </div>

                 
                  <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                </div>
              </>
            )}
        </nav>
      </div>
    </>
  );
};
