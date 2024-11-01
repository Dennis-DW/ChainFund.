'use client';
import {
  logo,
  Social1,
  Social2,
  Social3,
  Social4,
  Social5
} from "@/assets";
import Image from "next/image";
import { navLinks, handleNavClick } from "./Header";

export const Footer = () => {
  return (
    <footer id="footer" className="p-5 ">
      <div className="bg-black/90 py-4 text-blue-300 rounded-3xl">
        <div className="container px-4 mx-auto">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="px-4 my-4 w-full flex flex-col md:flex-row xl:w-1/5">
              <div className="md:w-1/3">
                <Image src={logo} height={80} alt="ChainFund logo" className="relative" />
              </div>
              <div className="md:w-2/3">
                <p className="text-justify text-gray-200 section-description">
                  ChainFund is your all-in-one solution for streamlined crowdfunding, leveraging blockchain technology to provide secure, efficient, and transparent project funding. Explore how ChainFund empowers communities to bring ideas to life.
                </p>
              </div>
            </div>

            <div className="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-white">Blog</h2>
              </div>
              <ul className="leading-8 text-gray-200 section-description">
                <li><a href="#" className="hover:text-gray-400">Introduction to Blockchain Crowdfunding</a></li>
                <li><a href="#" className="hover:text-gray-400">Benefits of Decentralized Funding Models</a></li>
                <li><a href="#" className="hover:text-gray-400">Best Practices for Secure Contributions</a></li>
                <li><a href="#" className="hover:text-gray-400">5 Tips for Running a Successful Campaign</a></li>
                <li><a href="#" className="hover:text-gray-400">Explore More Articles</a></li>
              </ul>
            </div>

            {/* Navigation Links */}
            <div className="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-white">Navigation</h2>
              </div>
              <ul className="leading-8">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="hover:text-gray-400 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.id, () => {}, () => {});
                      }}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-white">Connect With Us</h2>
              </div>
              <div className="flex space-x-2">
                <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:text-gray-400 hover:border-gray-400">
                  <Social1 />
                </a>
                <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:text-gray-400 hover:border-gray-400">
                  <Social2 />
                </a>
                <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:text-gray-400 hover:border-gray-400">
                  <Social3 />
                </a>
                <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:text-gray-400 hover:border-gray-400">
                  <Social4 />
                </a>
                <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:text-gray-400 hover:border-gray-400">
                  <Social5 />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};