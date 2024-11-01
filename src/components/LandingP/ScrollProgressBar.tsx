'use client';
import React, { useEffect, useState } from "react";

export const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    const scrollListener = () => {
      requestAnimationFrame(calculateScrollProgress);
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]"
      style={{ width: `${scrollProgress}%` }}
    />
  );
};

export default ScrollProgressBar;
