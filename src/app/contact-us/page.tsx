import React from "react";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Connect EC for Recruitment Solutions",
  description:
    "Get in touch with Connect EC to see how gamified, ethical hiring tool can improve recruitment, candidate engagement & team efficiency.",
};
const page = () => {
  return (
    <>
      <section className="lg:bg-[url('/background/contact-background.svg')] bg-cover ">
        <div className=" bg-[url('/background/mobile-contact-part-1.svg')] lg:bg-none bg-cover bg-no-repeat">
          <div className="py-18 lg:py-0 lg:pt-[11%] lg:pb-[1%] px-[7%]">
            <h2 className="mb-4 lg:mb-8 leading-[44px] md:leading-14 lg:leading-18 xl:leading-20 2xl:leading-22 text-center text-[34px] md:text-[38px] lg:text-[56px]- xl:text-[56px] 2xl:text-[72px] font-bold">
              Need Help, Have Question, or <span className="lg:block" /> want to
              share Feedback?
            </h2>
            <h3 className="mb-5 text-center text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px] font-semibold ">
              It’s easy to Connect with us!
            </h3>
          </div>
        </div>
        <div className=" bg-[url('/background/mobile-contact-part-2.svg')] py-14 lg:py-0 lg:bg-none bg-cover bg-no-repeat">
          <div className="px-[7%] xl:px-[10%] py-[4%] ">
            <ContactForm />
          </div>
        </div>
        {/* <div className=" bg-[url('/background/mobile-contact-part-3.svg')] py-14 lg:py-0 lg:bg-none bg-cover bg-no-repeat">
          <div className="px-[7%] xl:px-[10%] py-[4%] ">
            <div className=" lg:mt-[7%]  bg-[#FFFFFF99] rounded-[16px] lg:rounded-[20px] shadow-[0px_0px_4px_0px_#0668E14D] px-4 lg:px-10 py-6">
              <h4 className="text-[18px] lg:text-[22px] xl:text-[28px] 2xl:text-[32px] font-semibold">
                Contact Info
              </h4>
              <hr className="my-6 border-t-2 border-[#EEEEEE]" />
              <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-1 lg:flex  justify-between">
                <div className="flex flex-col md:gap-2 lg:gap-5">
                  <div className="flex items-center gap-">
                    <div className="w-10">
                      <TiLocation className=" w-6 lg:w-10 h-6 lg:h-8" />
                    </div>
                    <h5 className="text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-semibold">
                      Address
                    </h5>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10"></div>
                    <p className="text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-medium">
                      155/201, Kamarajapuram,
                      <span className="block" /> Nungambakkam,
                      <span className="block" /> Chennai – 600 034{" "}
                      <span className="block" /> Tamil Nadu
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:gap-2 lg:gap-5">
                  <div className="flex items-center">
                    <div className="w-10">
                      <MdLocalPhone className="w-6 lg:w-10 h-6 lg:h-8" />
                    </div>
                    <h5 className=" text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-semibold">
                      Phone
                    </h5>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10"></div>
                    <p className="text-[#0668E1] text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-semibold">
                      +91 9499045981
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:gap-2 lg:gap-5">
                  <div className="flex items-center">
                    <div className="w-10">
                      <IoMdMail className="w-6 lg:w-10 h-6 lg:h-8" />
                    </div>
                    <h5 className="text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-semibold">
                      Email
                    </h5>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10"></div>
                    <p className="text-[#0668E1] text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-semibold">
                      hello@connectec.app
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:gap-2 lg:gap-5">
                  <div className="flex items-center">
                    <div className="w-10">
                      <TbWorld className="w-6 lg:w-10 h-6 lg:h-8" />
                    </div>
                    <h5 className="text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-semibold">
                      Web
                    </h5>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10"></div>
                    <p className="text-[#0668E1] text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-semibold">
                      primethic.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default page;
