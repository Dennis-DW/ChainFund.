"use client";
import { useRef } from "react";
import { star, tube } from "@/assets";
import { motion, useScroll, useTransform } from "framer-motion";
import { textVariant, slideIn } from "@/utils/motion";
import { TiltOnScroll } from '@/components/LandingP';
import { achievementData } from '@/constants/data';

export const FeaturesA = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const translateY1 = useTransform(scrollYProgress, [0, 1], [200, -100]);
    const translateY2 = useTransform(scrollYProgress, [0, 1], [190, -120]);
    const scaleEffect = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section className="py-5 relative xl:mr-0 lg:mr-5 mr-0" ref={sectionRef}>
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                                <div className="tag">Boost Security of Funds</div>
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <motion.h2
                                        variants={slideIn("left", "tween", 0.2, 1)}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: false }}
                                        className="section-title text-start">
                                        Revolutionizing Crowdfunding Platforms
                                    </motion.h2>
                                    <motion.p
                                        variants={textVariant(0.5)}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: false }}
                                        className="section-description mt-5">
                                        Redefines the fundraising landscape by integrating blockchain technology, ensuring transparency, and enhancing security. With innovative features like smart contracts and community engagement, it empowers creators to connect with global supporters, streamline contributions, and bring their projects to life with confidence and efficiency.
                                    </motion.p>
                                </div>
                            </div>
                            <div className="w-full flex-col justify-center items-start gap-6 flex">
                                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                    {achievementData.map((achievement, index) => (
                                        <div
                                            key={index}
                                            className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                                                {achievement.title}
                                            </h4>
                                            <p className="text-gray-500 text-base font-normal leading-relaxed">
                                                {achievement.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <TiltOnScroll />
                </div>
                <motion.img
                    src={star.src}
                    alt="star"
                    height={300}
                    width={300}
                    className="hidden md:block absolute -right-80 -top-16"
                    style={{
                        translateY: translateY1,
                        scale: scaleEffect,
                        rotate: -65,
                    }}
                />
                <motion.img
                    src={tube.src}
                    alt="tube"
                    height={210}
                    width={210}
                    className="hidden md:block absolute -left-64 bottom-14"
                    style={{
                        translateY: translateY2,
                        scale: scaleEffect,
                    }}
                />
            </div>
        </section>
    );
};

