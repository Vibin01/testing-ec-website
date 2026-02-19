"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";

interface SubTab {
  id: string;
  title: string;
  path: string;
  image?: string;
  image_alt: string;
  content: React.ReactNode;
}

interface EmployerTab {
  id: string;
  title: string;
  heading: string;
  path: string;
  description: string;
  highlight_description: string;
  icon: string;
  subTabs: SubTab[];
}
[];

export default function EmployerTabs({
  employerTabs,
}: {
  employerTabs: EmployerTab[];
}) {
  const router = useRouter();
  const params = useParams();
  const [activeIndex, setActiveIndex] = useState(1);

  const [mainTab, setMainTab] = useState<string>(
    typeof params.mainTab === "string" ? params.mainTab : employerTabs[0].path,
  );
  const [subTab, setSubTab] = useState<string>(
    typeof params.subTab === "string"
      ? params.subTab
      : employerTabs[0]?.subTabs[0]?.path || "",
  );

  const rightContainerRef = useRef<HTMLDivElement>(null);

  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      const box = document.getElementById("sticky-box");

      if (!footer || !box) return;

      const footerRect = footer.getBoundingClientRect();
      const footerTop = footerRect.top + window.scrollY; // footer absolute Y position
      const scrollY = window.scrollY + window.innerHeight; // bottom of viewport position

      if (scrollY + 50 >= footerTop) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  //  useEffect(() => {
  //     const controlNavbar = () => {
  //       const currentScroll = window.scrollY;
  //       const maxScroll = document.body.scrollHeight - window.innerHeight;
  //       const remainingScroll = maxScroll - currentScroll;

  //       // 🧠 Always hide if in the last 800px zone
  //       if (remainingScroll < 800) {
  //         setShow(false);
  //       } else if (currentScroll > lastScrollY && currentScroll > 750) {
  //         // 👇 Scrolling down past 750px
  //         setShow(false);
  //       } else {
  //         // 👆 Scrolling up and NOT near bottom
  //         setShow(true);
  //       }

  //       setLastScrollY(currentScroll);
  //     };

  //     window.addEventListener("scroll", controlNavbar);
  //     return () => window.removeEventListener("scroll", controlNavbar);
  //   }, [lastScrollY]);

  useEffect(() => {
    if (typeof params.mainTab === "string") setMainTab(params.mainTab);
    if (typeof params.subTab === "string") setSubTab(params.subTab);
  }, [params.mainTab, params.subTab]);

  const currentMain = useMemo(
    () => employerTabs.find((tab) => tab.path === mainTab),
    [mainTab, employerTabs],
  );

  const currentSub = useMemo(
    () => currentMain?.subTabs.find((tab) => tab.path === subTab),
    [currentMain, subTab],
  );

  useEffect(() => {
    const container = rightContainerRef.current;
    if (container) container.scrollTo({ top: 0, behavior: "smooth" });
  }, [mainTab, subTab]);

  useEffect(() => {
    if (typeof params.mainTab === "string") {
      setMainTab(params.mainTab);
      const index = employerTabs.findIndex(
        (tab) => tab.path === params.mainTab,
      );
      if (index !== -1) setActiveIndex(index + 1);
    }
  }, [params.mainTab, employerTabs]);

  const handleMainTabChange = (path: string) => {
    setMainTab(path);
    const firstSub = employerTabs.find((tab) => tab.path === path)?.subTabs[0]
      ?.path;
    if (firstSub) setSubTab(firstSub);

    router.push(`/resources/${params.pages}/${path}/${firstSub}`, {
      scroll: false,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubTabChange = (path: string) => {
    setSubTab(path);
    router.push(`/resources/${params.pages}/${mainTab}/${path}`, {
      scroll: false,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop */}
      <div className="hidden  lg:flex md:gap-[2%] lg:gap-[2%] px-[4%] md:px-[5%] py-[2%] overflow-y-scroll scrollbar-hidden">
        <div className="flex lg:flex-col lg:w-[75%]">
          {employerTabs
            .filter((m) => m.path === mainTab)
            .map((m) => (
              <h2
                key={m.path}
                className="mb-6 text-[20px] md:text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-[40px] font-bold"
              >
                {m.heading}
              </h2>
            ))}
          <div ref={rightContainerRef} className="  ">
            {currentSub && (
              <div className="space-y-6">
                {currentSub?.image && (
                  <Image
                    src={currentSub.image}
                    alt={currentSub.image_alt}
                    width={1080}
                    height={1080}
                    className=" w-full h-auto object-cover rounded-[16px] "
                  />
                )}

                {/* content */}
                <div className="prose max-w-none">
                  <div className="" />
                  {currentSub.content}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className=" relative flex lg:flex-col lg:w-[25%] ">
          <div
            id="sticky-box"
            className={`${
              isFixed
                ? "fixed top-[130px]"
                : "relative flex flex-col justify-end items-end top-auto right-auto"
            } pr-[5%] h-[82vh] overflow-y-scroll scrollbar-hidden`}
          >
            {employerTabs
              .filter((m) => m.path === mainTab)
              .map((m) => (
                <h2
                  key={m.path}
                  className="mb-6 text-[20px] md:text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-[40px] font-bold"
                >
                  {m.title} Solution
                </h2>
              ))}

            <div className="flex flex-col">
              <Tabs
                value={mainTab}
                onValueChange={handleMainTabChange}
                orientation="vertical"
              >
                <TabsList className="flex flex-col w-full space-y-6">
                  {employerTabs.map((tab) => (
                    <div
                      key={tab.path}
                      className={`w-full md:p-2 lg:p-4 xl:p-6 backdrop-blur-[6px] bg-white rounded-[12px] border-l-[10px]  ${
                        mainTab === tab.path
                          ? "border-[#0668E1]"
                          : "border-white"
                      }`}
                    >
                      <TabsTrigger
                        value={tab.path}
                        className="flex flex-col  gap-2 w-full"
                      >
                        <div className="flex flex-row">
                          <div className=" lg:w-1/4">
                            <Image
                              src={tab.icon}
                              alt={tab.heading}
                              width={60}
                              height={60}
                              className="object-contain w-auto h-[60px]"
                            />{" "}
                          </div>
                          <div className="lg:w-3/4 flex flex-col space-y-4 text-left">
                            <span className="md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] font-bold">
                              {tab.heading}
                            </span>
                          </div>
                        </div>
                        <div className=" flex mb-4">
                          <span className="md:text-[11px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] text-left">
                            <span className="font-semibold">
                              {tab.highlight_description}
                            </span>
                            {tab.description}
                          </span>
                        </div>
                      </TabsTrigger>

                      <AnimatePresence initial={false}>
                        {mainTab === tab.path && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden mt-5 "
                          >
                            <Tabs
                              value={subTab}
                              onValueChange={handleSubTabChange}
                              orientation="vertical"
                            >
                              <TabsList className="grid md:grid-cols-2   gap-4">
                                {tab.subTabs.map((sub) => (
                                  <TabsTrigger
                                    key={sub.path}
                                    value={sub.path}
                                    data-title={sub.title}
                                    className="solution-sub-title justify-start w-full md:text-[13px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] font-semibold md:min-h-[30px] lg:min-h-[48px] xl:min-h-[54px] rounded-[12px] border border-[#0668E11A] data-[state=active]:bg-[#0668E1] data-[state=active]:text-white hover:bg-gray-100"
                                  >
                                    {sub.title}
                                  </TabsTrigger>
                                ))}
                              </TabsList>
                            </Tabs>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col lg:hidden md:gap-[2%] lg:gap-[3%] px-[4%] md:px-[7%] py-[12%]">
        <div className="flex flex-col ">
          {employerTabs
            .filter((m) => m.path !== mainTab)
            .map((m) => (
              <h2
                key={m.path}
                className="mb-6 flex justify-between text-[18px] font-semibold"
              >
                <span>{m.title} Solution</span>
                <span className="text-[16px]">
                  <span className="text-[#0668E1]">0{activeIndex}</span>/
                  <span>02</span>
                </span>
              </h2>
            ))}
          <div className="flex py-3 -mx-2 overflow-x-scroll scrollbar-hidden ">
            <Tabs
              value={mainTab}
              onValueChange={handleMainTabChange}
              orientation="horizontal"
              className="flex "
            >
              <TabsList className="flex  gap-6">
                {employerTabs.map((tab) => (
                  <TabsTrigger
                    key={tab.path}
                    value={tab.path}
                    className={`flex p-2 gap-5 w-[320px]  md:p-2 lg:p-4 xl:p-6 backdrop-blur-[6px] shadow-[4px_4px_6px_-3px_#0000000D,_5px_5px_10px_-3px_#0000000D] bg-white rounded-[12px] border-l-[10px] ${
                      mainTab === tab.path ? "border-[#0668E1]" : "border-white"
                    }`}
                  >
                    <div className="w-1/4">
                      <Image
                        src={tab.icon}
                        alt={tab.heading}
                        width={100}
                        height={100}
                        className="object-contain w-full h-auto"
                      />
                    </div>
                    <div className="w-3/4 flex flex-col space-y-4 text-left">
                      <span className="text-[14px] md:text-[15px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] font-bold">
                        {tab.heading}
                      </span>
                      <span className="text-[12px]  md:text-[13px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px]">
                        {tab.description}
                      </span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          <div className="flex overflow-x-scroll scrollbar-hidden ">
            {currentMain && (
              <div className="my-8 ">
                <Tabs
                  value={subTab}
                  onValueChange={handleSubTabChange}
                  orientation="horizontal"
                >
                  <TabsList className="flex gap-4">
                    {currentMain.subTabs.map((sub) => (
                      <TabsTrigger
                        key={sub.path}
                        value={sub.path}
                        data-title={sub.title}
                        className="solution-sub-title justify-center items-center flex text-nowrap w-[100px] px-3 text-[13px]  font-semibold  min-h-[38px]  rounded-[12px]  border border-[#0668E11A]  data-[state=active]:bg-[#0668E1] data-[state=active]:text-white hover:bg-gray-100"
                      >
                        {sub.title}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col  lg:w-2/3">
          {employerTabs
            .filter((m) => m.path === mainTab)
            .map((m) => (
              <h2
                key={m.path}
                className="mb-6 text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[40px] font-bold"
              >
                {m.title}
              </h2>
            ))}
          <div className="">
            {currentSub && (
              <div className="space-y-6">
                {currentSub?.image && (
                  <Image
                    src={currentSub.image}
                    alt={currentSub.image_alt}
                    width={1080}
                    height={1080}
                    className=" w-full h-auto object-cover"
                  />
                )}

                {/* content */}
                <div className="prose max-w-none">
                  <div className="" />
                  {currentSub.content}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
