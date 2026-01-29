"use client";
import React from "react";
import { Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";

/**
 * Uptown Footer - Layout Adjusted
 * Replicates the specific horizontal layout where the image spans the right
 * side and the diamond 'Back to Top' button overlaps the corner.
 */
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0a0a0a] text-white pt-16 pb-8 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* 1. Marquee Headline */}
      {/* <div className="relative mb-24 overflow-hidden select-none">
        <div className="flex animate-marquee whitespace-nowrap">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center">
              <span className="text-[12vw] font-light tracking-tighter leading-none px-4">
                WE ARE UPTOWN
              </span>
              <div className="w-[5vw] h-[5vw] border border-[#0097a7] rotate-45 mx-12 flex-shrink-0"></div>
            </div>
          ))}
        </div>
      </div> */}

      {/* 2. Content Grid with Overlapping Image Area */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ">
        {/* Navigation Column */}
        <div className="lg:col-span-2 space-y-3 z-10">
          {["HOME", "ABOUT US", "SERVICES", "TEAM", "PROJECTS"].map((link) => (
            <a
              key={link}
              href="#"
              className="block text-[13px] font-medium tracking-widest hover:text-[#00bcd4] transition-colors"
            >
              {link}
            </a>
          ))}

          <div className="pt-12">
            <a
              href="#"
              className="inline-flex items-center px-5 py-3 border border-gray-800 bg-black/50 backdrop-blur rounded-sm group hover:border-[#00bcd4] transition-all"
            >
              <div className="w-2 h-2 bg-[#00bcd4] rotate-45 mr-3"></div>
              <span className="text-[12px] tracking-wider">
                Got a project in mind?
              </span>
            </a>
          </div>
        </div>

        {/* Contact Column */}
        <div className="lg:col-span-2 space-y-6 z-10">
          <h4 className="text-gray-500 text-[11px] font-bold tracking-[0.3em] uppercase">
            Contact
          </h4>
          <div className="flex flex-col space-y-2 text-[13px] tracking-wide">
            <a href="mailto:info@uptown.ae" className="hover:text-[#00bcd4]">
              info@uptown.ae
            </a>
            <a
              href="tel:+971024488991"
              className="hover:text-[#00bcd4] text-gray-300"
            >
              +971 02 - 44 88 991
            </a>
            <a href="#" className="hover:text-[#00bcd4] text-gray-300">
              www.uptown.ae
            </a>
          </div>
        </div>

        {/* Socials & Careers Column */}
        <div className="lg:col-span-2 space-y-12 z-10">
          <div>
            <h4 className="text-gray-500 text-[11px] font-bold tracking-[0.3em] uppercase mb-4">
              Social Media
            </h4>
            <div className="flex space-x-5">
              <Facebook
                size={18}
                className="cursor-pointer hover:text-[#00bcd4]"
              />
              <Instagram
                size={18}
                className="cursor-pointer hover:text-[#00bcd4]"
              />
              <Linkedin
                size={18}
                className="cursor-pointer hover:text-[#00bcd4]"
              />
            </div>
          </div>
          <div>
            <h4 className="text-gray-500 text-[11px] font-bold tracking-[0.3em] uppercase mb-1">
              Careers
            </h4>
            <p className="text-[11px] text-gray-400 mb-1">Apply on</p>
            <a
              href="mailto:uptown.careers@gmail.com"
              className="text-[13px] hover:text-[#00bcd4]"
            >
              uptown.careers@gmail.com
            </a>
          </div>
        </div>

        {/* 3. The Image Component - Spanning the right side */}
        <div className="lg:col-span-6 relative w-full h-[350px] lg:h-[290px]">
          {/* <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div> */}

          <img
            src="https://www.uptown.ae/assets/footer-img-qOMPXiNy.webp"
            alt="Interior architectural view"
            className="w-full h-full object-cover rounded-sm  opacity-90"
          />
        </div>
      </div>

      {/* 4. Footer Credits Bar */}
      <div className="border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 tracking-[0.2em] font-medium gap-4">
        <div>
          <span>© 2025 UPTOWN. ALL RIGHTS RESERVED</span>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">
            PRIVACY POLICY
          </a>
          <span className="text-gray-800">|</span>
          <a href="#" className="hover:text-white transition-colors">
            TERMS AND CONDITIONS
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
