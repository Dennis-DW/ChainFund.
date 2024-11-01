"use client";
import React from "react";
import { feedback } from '@/constants/data';
import { motion } from "framer-motion";
import Image from 'next/image';

export const FeedbackColumn = (props: { className?: string; feedback: typeof feedback; duration?: number; reverse?: boolean }) => {
    return (
        <div className={props.className}>
            <motion.div
                animate={{ translateY: props.reverse ? '50%' : '-50%' }} 
                transition={{
                    duration: props.duration || 12,
                    repeat: Infinity,
                    ease: 'linear',
                    repeatType: "loop",
                }}
                className='flex flex-col gap-6 pb-6'
            >
                {[...new Array(2)].fill(0).map((_, index) => (
                    <React.Fragment key={index}>
                        {props.feedback.map(({ text, imageSrc, name, username }) => (
                            <div className='card' key={username}>
                                <div className='ml-5 mr-5'>
                                    <div className='font-bold'>{text}</div>
                                    <div className='flex items-center gap-2 mt-5'>
                                        <Image src={imageSrc} alt={name} width={40} height={40} className='rounded-full' />
                                        <div className='flex flex-col'>
                                            <div className='font-bold tracking-tight leading-5'>{name}</div>
                                            <div className='font-bold leading-5 tracking-tight'>{username}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
};
