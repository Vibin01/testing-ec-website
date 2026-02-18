import Image from "next/image";

const MDXComponents = {
  h1: (props: any) => (
    <h1
      className="my-6 text-[24px] md:text-[26px] lg:text-[32px] xl:text-[40px] 2xl:text-[60px] font-extrabold text-[#0668E1]"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="mt-7 lg:mt-10 mb-4 lg:mb-6 md:text-[22px] lg:text-[26px] xl:text-[32px] 2xl:text-[48px] font-bold"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="mt-7 lg:mt-10 mb-4 lg:mb-6 text-[22px] md:text-[26px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] font-bold"
      {...props}
    />
  ),
  h4: (props: any) => (
    <h4
      className=" mt-7 lg:mt-10 mb-4 lg:mb-6 text-[20px]  md:text-[22px] lg:text-[26px] xl:text-[28px] 2xl:text-[32px] font-bold "
      {...props}
    />
  ),

  h6: (props: any) => (
    <h6
      className="my-4 text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] font-bold "
      {...props}
    />
  ),

  p: (props: any) => (
    <p
      className="text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px]  "
      {...props}
    />
  ),

  strong: (props: any) => <strong className="font-semibold  " {...props} />,

  // li: (props: any) => (
  //   <li
  //     className="list-disc ml-5 indent-2 lg:text-[18px] xl:text-[20px] 2xl:text-[24px] "
  //     {...props}
  //   />
  // ),
  ul: (props: any) => (
    <ul
      {...props}
      className="my-4 lg:my-7 list-disc ml-1 lg:ml-5  space-y-3 text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] "
    ></ul>
  ),

  blockquote: (props: any) => (
    <blockquote className=" italic  border-l-4 border-blue-400 pl-3">
      <p className="text-[#0668E1] font-semibold" {...props} />
    </blockquote>
  ),

  hr: (props: any) => (
    <hr
      className=" border-t lg:border-t-2 border-[#0668E1] w-full my-5"
      {...props}
    />
  ),

  img: (props: any) => (
      <Image
        {...props}
        alt={props.alt || ""}
        width={1080}
        height={1080}
        className="w-auto h-auto"
      />
  ),
  Image,
};

export default MDXComponents;
