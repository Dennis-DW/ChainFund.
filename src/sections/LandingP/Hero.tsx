"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ArrowRight, web3, block } from "@/assets/index.js";
import { LogoTicker, Typewriter } from "@/components/LandingP";
import { zoomIn } from '@/utils/motion';

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={heroRef} className="pt-5 pb-5 md:pt-5 md:pb-5 bg-[radial-gradient(ellipse_200%_100%_at_top_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[525px]">
            <div className="tag">Version 1.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E] text-transparent bg-clip-text mt-6">
              Pathway to Productivity
            </h1>
            <Typewriter
              text="A DAO-powered crowdfunding web app that enables users to send contributions seamlessly, supporting projects transparently through decentralized blockchain technology."
              className="text-xl text-[#010D3E] tracking-tight mt-6"
            />
            <div className="flex gap-4 items-center mt-[30px]">
              <button className="btn btn-primary" aria-label="Get Started">
                Get Started
              </button>
              <button className="btn btn-text gap-1" aria-label="Learn More">
                <span>Learn More</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[445px] md:flex-1 relative">
            <motion.img
              src={web3.src}
              alt="Web3 Illustration"
              animate={{ translateY: [-30, 30] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
              className="lg:right-0 md:absolute md:pt-0 md:h-full md:w-auto md:max-w-none"
            />
            <motion.img
              src={block.src}
              alt="Blockchain Illustration"
              width={200}
              height={200}
              style={{ translateY: translateY }}
              variants={zoomIn(0.5, 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              className="hidden md:block -top-15 -left-40 md:absolute"
            />
          </div>
        </div>
      </div>
      <LogoTicker />
    </section>
  );
};
