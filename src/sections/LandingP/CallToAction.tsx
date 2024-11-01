"use client";
import { ArrowRight } from "@/assets";
import Image from "next/image";
import { avatar1, avatar2, avatar3, avatar4, avatar5 } from "@/assets";
import { fadeIn } from "@/utils/motion";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const callRef = useRef(null);
  useScroll({
    target: callRef,
    offset: ["start end", "end start"],
  });

  const index = 0;

  return (
    <section className="overflow-x-clip" ref={callRef}>
      <motion.div
        className="container"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      >
        <div className="section-heading relative text-center">
          <div className="mx-auto py-14 sm:px-4 lg:px-6">
            <div className="relative isolate overflow-hidden px-6 py-24 text-center sm:rounded-3xl sm:px-16">
              <h2 className="section-title mb-5 mx-auto font-bold uppercase tracking-tight">
                Join ChainFund Today
              </h2>
              <p className="section-description font-sans tracking-normal">
                Become part of a vibrant community supporting collaborative projects.
              </p>
              <div className="inline-flex items-end justify-center w-full text-center mx-auto relative">
                <Image
                  src={avatar1}
                  className="absolute transform translate-x-24 ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white"
                  alt="Avatar 1"
                />
                <Image
                  src={avatar2}
                  className="absolute transform -translate-x-24 -ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white"
                  alt="Avatar 2"
                />
                <Image
                  src={avatar3}
                  className="absolute transform -translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white"
                  alt="Avatar 3"
                />
                <Image
                  src={avatar4}
                  className="absolute transform translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white"
                  alt="Avatar 4"
                />
                <Image
                  src={avatar5}
                  className="rounded-full w-20 h-20 md:w-24 md:h-24 border-4 border-white relative"
                  alt="Avatar 5"
                />
              </div>
              <div className="mt-12 flex items-center justify-center gap-x-6">
                <button
                  type="button"
                  className="text-md relative inline-flex items-center gap-x-2 rounded-lg bg-white px-6 py-4 font-semibold text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <span className="absolute -top-5 left-0 w-full text-left text-xs italic text-black">No Commitments</span>
                  Get Started
                  <ArrowRight className="-mr-0.5 h-5 w-5" />
                </button>
              </div>
              <svg
                viewBox="0 0 1024 1024"
                className="absolute left-1/2 top-1/2 -z-10 h-[72rem] w-[72rem] -translate-x-1/2"
                aria-hidden="true"
                style={{
                  fill: 'url(#customGradient)',
                  maskImage: 'radial-gradient(closest-side, white, transparent)',
                }}
              >
                <defs>
                  <radialGradient id="customGradient" cx="0.25" cy="1" r="1.25">
                    <stop offset="0%" stopColor="#183EC2" />
                    <stop offset="100%" stopColor="#EAEEFE" />
                  </radialGradient>
                </defs>
                <circle cx="512" cy="512" r="512" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};



