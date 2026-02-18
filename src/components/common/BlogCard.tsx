"use client";

import Link from "next/link";

type BlogCardProps = {
  title: string;
  slug: string;
  date: string;
  heading: string;
};

export default function BlogCard({
  title,
  slug,
  date,
  heading,
}: BlogCardProps) {
  return (
    <Link data-title={heading} className="blog-section" href={`/resources/blog/${slug}`}>
      <div className="group flex flex-col justify-between items-stretch h-full lg:max-h-[500px] shadow-[0px_4px_6px_-3px_#0000000D} relative overflow-hidden rounded-2xl bg-white  transition border hover:border-transparent  border-[#0668E11A] hover:shadow-[0px_4px_6px_-3px_#0000000D,_0px_10px_15px_-3px_#0000001A] dark:bg-neutral-900">
        <div className="p-5 h-full flex flex-col justify-between">
          <h1 className="mb-4 font-semibold text-[18px] md:text-[20px] lg:text-[22px] xl:text-[28px] 2xl:text-[32px] text-[#0668E1] ">
            {heading}
          </h1>
          <h2 className="mb-3 lg:mb-7 line-clamp-2 text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[26px] font-medium  group-hover:border-[#0668E1] ">
            {title}
          </h2>
          <div className="mt-3 flex items-center justify-between text-[#666666] text-[12px] lg:text-[13px] xl:text-[16px]">
            <span>
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
            <span>13 min read</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
