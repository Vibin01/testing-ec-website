"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.6, // 60% visible before playing
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isVisible) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isVisible]);

  return (
    <section className="pb-10 pt-10">
      <h2 className="text-center text-[24px] md:text-[30px] lg:text-[38px] font-bold mb-14">
        Connecting Everyone for Easy Hiring
      </h2>

      <div className="w-full mx-auto px-4">
        <div className="rounded-[40px] overflow-hidden">
          <video
            ref={videoRef}
            src="/videos/your-video.mp4" 
            muted
            playsInline
            controls={false}
            className="w-full h-[40vh] lg:h-[75vh] object-cover aspect-[16/8]"
          />
        </div>
      </div>
    </section>
  );
}
