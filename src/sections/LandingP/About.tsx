"use client";
import { useRef } from "react";
import { textVariant } from "@/utils/motion";
import { Anime } from "@/assets";
import { motion, useScroll, useTransform } from "framer-motion";

export const About = () => {
    const aboutRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: aboutRef,
        offset: ["start end", "end start"],
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [150, -90]);

    return (
        <motion.div ref={aboutRef} id="about" className="flex flex-col md:flex-row items-center max-w-screen-xl bg-gradient-to-t from-[#D2DCFF] to-[#EAEEFE] overflow-x-clip">

            <div className="w-full md:w-1/2 p-10 order-last md:order-first">
                <div className="image object-center text-center">
                    <motion.img
                        src={Anime.src}
                        alt="About our company"
                        width={500}
                        height={500}
                        className="mx-auto"
                        style={{
                            translateY: translateY,
                        }}
                    />
                </div>
            </div>
            {/* Text section */}
            <div className="w-full md:w-1/2 p-5">
                <motion.div
                    variants={textVariant(0.5)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="text"
                >
                    <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About Us</span>
                    <h2 className=" section-title text-start my-4 font-bold text-3xl sm:text-4xl">
                        About <span className="text-indigo-600">Our Company</span>
                    </h2>
                    <p className="section-description">
                        <span className="font-bold text-[22px]">ChainFund</span> is an innovative crowdfunding platform that leverages blockchain technology to empower communities and individuals in raising funds for their projects and initiatives. By integrating decentralized finance (DeFi) principles, ChainFund provides a transparent, secure, and efficient environment for fundraising. Users can create campaigns, set funding goals, and attract backers who share their vision, all while maintaining control over their contributions through smart contracts. With features like real-time tracking, community voting, and flexible funding options, ChainFund aims to democratize access to capital, fostering collaboration and creativity across diverse sectors. Whether you’re a grassroots organization, a startup, or an artist looking to bring your ideas to life, ChainFund connects you with a global network of supporters, making it easier than ever to transform your vision into reality.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};
