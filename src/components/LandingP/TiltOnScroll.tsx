"use client";
import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from 'framer-motion';
import { Product, Product2 } from "@/assets";

export const TiltOnScroll = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const rotate = useTransform(scrollYProgress, [0, 1], [55, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1.65, 1]);
    const translate = useTransform(scrollYProgress, [0, 1], [0, -90]);

   
    const mobileScale = useTransform(scrollYProgress, [0, 1], [5.0, 1.5]); 
    const mobileTranslate = useTransform(scrollYProgress, [0, 1], [-120, 120]); 
    const mobileRotate = useTransform(scrollYProgress, [0, 1], [-45, 10]);

    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        const handleMediaChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        };

        setIsMobile(mediaQuery.matches);

        mediaQuery.addEventListener("change", handleMediaChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaChange);
        };
    }, []);

    return (
        <div className="flex flex-col h-screen" ref={sectionRef}>
            <div className="h-[120vh] transform scale-[0.8] flex items-center justify-center relative">
                <div className="w-full relative" style={{ perspective: '1000px' }}>
                    {isMobile ? (
                        <motion.img
                            src={Product2.src}
                            alt="product"
                            className="max-h-full max-w-full rounded-[30px]"
                            style={{
                                translateY: mobileTranslate, 
                                scale: mobileScale,
                                rotate: mobileRotate,
                            }} 
                        />
                    ) : (
                        <Card rotate={rotate} translate={translate} scale={scale} />
                    )}
                </div>
            </div>
        </div>
    );
};

const Card = ({
    rotate,
    scale,
    translate,
}: {
    rotate: any;
    scale: any;
    translate: any;
}) => {
    return (
        <motion.div
            style={{
                rotateX: rotate,
                scale,
                boxShadow: '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
            }}
            className="max-w-5xl -mt-12 mx-auto h-[30rem] w-full border-4 border-[#6C6C6C] rounded-[30px] shadow-2xl"
        >
            <div className="h-full w-full rounded-[30px] flex items-center justify-center overflow-hidden p-5">
                <motion.img
                    src={Product.src} 
                    alt="product"
                    className="h-full w-full object-cover mt-20 rounded-[30px]" 
                    style={{ translateY: translate }} 
                />
            </div>
        </motion.div>
    );
};
