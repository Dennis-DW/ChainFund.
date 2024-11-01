"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const sentenceVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.05 } },
};


interface TypewriterProps extends HTMLMotionProps<"p"> {
  text: string;
}

export const Typewriter = ({ text, ...rest }: TypewriterProps) => {
  const heroRef = useRef(null);
  const [animationKey, setAnimationKey] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prevKey) => prevKey + 1);
    }, 30000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.p
      ref={heroRef}
      key={animationKey} 
      variants={sentenceVariants}
      initial="hidden"
      animate="visible"
      {...rest}
    >
      {text.split("").map((char, i) => (
        <motion.span key={`${char}-${i}`} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
};
