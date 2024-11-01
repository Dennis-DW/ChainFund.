"use client";
import { useRef } from "react";
import { FeedbackColumn } from "@/components/LandingP";
import { feedback } from '@/constants/data';
import { motion, useScroll, useTransform } from "framer-motion";
import { textVariant, slideIn } from "@/utils/motion";

const firstColumn = feedback.slice(0, 3);
const secondColumn = feedback.slice(3, 6);
const thirdColumn = feedback.slice(6, 9);

export const Testimonials = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    return (
        <section ref={sectionRef} id="testimonials" className='font-serif bg-gradient-to-t from-[#D2DCFF] to-[#EAEEFE]  py-10 overflow-hidden'>
            <div className='container'>
                <div className="section-heading">
                    <div className='flex justify-center'>
                        <div className='tag'>Testimonials</div>
                    </div>
                    <motion.h2 
                        variants={textVariant(0.5)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false }}
                        className='section-title mt-5'
                    >
                        Feedback From Our ChainFund Users.
                    </motion.h2>
                    <motion.p 
                        variants={slideIn("right", "tween", 0.2, 1)} 
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false }}
                        className='section-description text-center font-thin mt-5'
                    >
                        ChainFund is a blockchain-powered crowdfunding platform that enables users to send contributions seamlessly, supporting projects transparently through decentralized technology.
                    </motion.p>
                </div>
                <div className='flex justify-center gap-6 mt-10 max-h-[438px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]'>
                    <FeedbackColumn feedback={firstColumn} duration={24} />
                    <FeedbackColumn feedback={secondColumn} duration={28} className="hidden md:block" reverse /> 
                    <FeedbackColumn feedback={thirdColumn} duration={26} className="hidden lg:block" />
                </div>
            </div>
        </section>
    );
};
