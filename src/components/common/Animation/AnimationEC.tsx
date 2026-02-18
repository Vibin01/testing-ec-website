"use client";

import { useRef, useEffect, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

export default function AnimationEC({ animationData }: any) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [isComplete, setIsComplete] = useState(false); // track animation end

  // observe section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  // auto-play when entering view
  useEffect(() => {
    if (inView && lottieRef.current) {
      lottieRef.current.goToAndPlay(0, true); // restart from start
      setIsComplete(false); // reset complete flag
    } else if (!inView && lottieRef.current) {
      lottieRef.current.stop();
    }
  }, [inView]);

  // handle click after animation done
  // const handleClick = () => {
  //   if (isComplete && lottieRef.current) {
  //     lottieRef.current.goToAndPlay(0, true);
  //     setIsComplete(false); // mark running again
  //   }
  // };

  return (
    <div ref={containerRef} 
    // onClick={handleClick}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={false}
        onComplete={() => setIsComplete(true)} 
      />
    </div>
  );
}
