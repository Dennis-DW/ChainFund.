"use client";
import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, logo, menu, close } from '@/assets/index.js';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ScrollProgressBar } from '@/components/LandingP';

export const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'features', title: 'Features' },
  { id: 'testimonials', title: 'Testimonials' },
  { id: 'footer', title: 'Contact' }
];

const arrowVariants = {
  animate: {
    x: ['-100%', '100%'],
    scale: [1, 1.5, 1],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 2,
        ease: 'linear',
      },
      scale: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 1,
        ease: 'linear',
      },
    },
  },
};

export const handleNavClick = (
  id: string,
  setActive: React.Dispatch<React.SetStateAction<string>>,
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setToggle(false);
    history.pushState(null, '', `#${id}`);
  }
};

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const [active, setActive] = useState<string>('');

  const sectionRefs = useRef<Record<string, React.RefObject<HTMLDivElement>>>(
    navLinks.reduce((acc, link) => {
      acc[link.id] = React.createRef<HTMLDivElement>();
      return acc;
    }, {} as Record<string, React.RefObject<HTMLDivElement>>)
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
          history.pushState(null, '', `#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const section = sectionRefs.current[link.id].current;
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      navLinks.forEach((link) => {
        const section = sectionRefs.current[link.id].current;
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-20 transition-all duration-300 ${scrolled
        ? 'backdrop-blur-md bg-opacity-70'
        : 'bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]'
        }`}
    >
      <ScrollProgressBar /> {/* Add the ScrollProgressBar component here */}
      <div className="flex justify-center items-center py-3 text-white text-sm gap-3 bg-black/90">
        <p className="text-white/60 hidden md:block">Optimize your crowdfunding</p>
        <div className="inline-flex gap-3 items-center">
          <p> workflow</p>
          <motion.div
            className="h-4 w-4 inline-flex justify-center items-center"
            variants={arrowVariants}
            animate="animate"
          >
            <ArrowRight />
          </motion.div>
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                setActive("");
                window.scrollTo({ top: 0, behavior: 'smooth' });
                history.pushState(null, '', '#');
              }}
            >
              <Image src={logo} alt="DW Logo" height={40} width={40} />
              <p className='section-title text-[20px] font-bold cursor-pointer'>
                ChainFund
              </p>
            </a>

            {/* Toggle button for mobile */}
            <Image
              src={toggle ? close : menu}
              alt="menu"
              className="w-6 h-6 cursor-pointer object-contain md:hidden"
              onClick={() => setToggle(!toggle)}
              aria-label="Menu"
            />

            {/* Desktop navigation */}
            <nav className="hidden md:flex flex-1 justify-center items-center gap-6 text-black/60 relative">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`${active === link.id ? 'text-white/40' : 'text-secondary'} font-poppins font-medium cursor-pointer hover:text-gray-800 text-[15px]`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id, setActive, setToggle);
                  }}
                >
                  {link.title}
                </a>
              ))}
              {/* Dashboard button positioned to the right */}
              <div className="absolute right-0">
                <button className="bg-black text-white px-4 py-2 rounded-lg font-medium tracking-tight hover:bg-white hover:text-black">
                  Dashboard
                </button>
              </div>
            </nav>
          </div>

          {/* Mobile navigation */}
          {toggle && (
            <div className="md:hidden absolute top-20 right-0 mx-4 my-2 min-w-[120px] p-6 backdrop-blur-md bg-opacity-85 border border-gray-300 rounded-xl shadow-lg z-10">
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${active === link.id ? 'text-black' : 'text-gray-700'} font-poppins font-medium cursor-pointer hover:text-black text-[15px]`}
                    onClick={() => handleNavClick(link.id, setActive, setToggle)}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
                <button
                  onClick={() => setToggle(false)}
                  className="bg-black text-white hover:bg-white hover:text-black px-4 py-2 rounded-lg font-medium tracking-tight w-full mt-2"
                >
                  Dashboard
                </button>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};