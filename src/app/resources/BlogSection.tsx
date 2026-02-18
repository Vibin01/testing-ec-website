"use client";
import BlogCard from "@/components/common/BlogCard";
import React, { useState } from "react";

export const BlogSection = ({ blogs }: { blogs: any[] }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleBlogs = showAll ? blogs : blogs.slice(0, 9);
  return (
    <section className="relative  py-[7%] px-[5%] md:px-[7%]">
      <h2 className="mb-8 text-[20px] md:text-[26px] lg:text-[30px] xl:text-[38px] 2xl:text-[48px] font-bold text-center md:mb-16 lg:mb-22">
        Strategic Insights for Today's Hiring Challenges
      </h2>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-1 lg:p-6">
        {visibleBlogs.map((blog: any) => (
          <BlogCard key={blog.slug} {...blog} />
        ))}
      </section>
      {/* <div className="flex justify-end">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="lg:mt-10 pr-6 cursor-pointer text-[#0668E1]  text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-medium  transition"
        >
          See All
        </button>
      </div> */}
    </section>
  );
};
