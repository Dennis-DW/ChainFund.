'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import {
  alchemy,
  metamask,
  world,
  eth,
  learn,
  chainlink,
} from '@/assets';

const logos = [
  { src: alchemy, alt: "alchemy" },
  { src: metamask, alt: "metamask" },
  { src: eth, alt: "eth" },
  { src: learn, alt: "learn" },
  { src: world, alt: "world" },
  { src: chainlink, alt: "chainlink" },
];

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 ">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {logos.concat(logos).map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="logo-ticker-image"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
