"use client";
import React from "react";
import { Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0a0a0a] text-white pt-16 pb-8 md:pb-0 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* 2. Content Grid with Overlapping Image Area */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ">
        {/* Navigation Column */}
        <div className="lg:col-span-2 space-y-3 z-10">
          <h4 className="text-gray-500 text-[11px] font-bold tracking-[0.3em] uppercase mb-4">
            Quick Links
          </h4>
          {["HOME", "ABOUT US", "SERVICES", "PROJECTS"].map((link) => (
            <a
              key={link}
              href="#"
              className="block text-[13px] font-medium tracking-widest hover:text-[#8a6531] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Contact Column */}
        <div className="lg:col-span-2 space-y-6 z-10">
          <h4 className="text-gray-500 text-[11px] font-bold tracking-[0.3em] uppercase">
            Contact
          </h4>
          <div className="flex flex-col space-y-2 text-[13px] tracking-wide">
            <a
              href="mailto:info@test.gmail.com"
              className="hover:text-[#8a6531]"
            >
              info@anzoproperties.com
            </a>
            <a
              href="00971-55-1172789"
              className="hover:text-[#8a6531] text-gray-300"
            >
              00971-55-1172789
            </a>
            <a
              href="00971-58-5430953"
              className="hover:text-[#8a6531] text-gray-300"
            >
              00971-58-5430953
            </a>
          </div>
        </div>

        {/* Socials & Careers Column */}
        <div className="lg:col-span-2 space-y-12 z-10">
          <div>
            <h4 className="text-gray-500 text-[11px] font-bold tracking-[0.3em] uppercase mb-1">
              Address
            </h4>
            <p className="  mb-1">16 wasl complex al quoz 3 Dubai uae </p>
          </div>
          <div>
            <h4 className="text-gray-500 text-[11px] font-bold tracking-[0.3em] uppercase mb-4">
              Social Media
            </h4>
            <div className="flex space-x-5">
              <Facebook
                size={18}
                className="cursor-pointer hover:text-[#8a6531]"
              />
              <Instagram
                size={18}
                className="cursor-pointer hover:text-[#8a6531]"
              />
              <Linkedin
                size={18}
                className="cursor-pointer hover:text-[#8a6531]"
              />
            </div>
          </div>
        </div>

        {/* 3. The Image Component - Spanning the right side */}
        <div className="lg:col-span-6 relative w-full h-[350px] lg:h-[260px]">
          {/* <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div> */}

          <img
            src="/image/076aad00-ce50-4dd7-a2e1-6e089933482d.jpg"
            alt="Interior architectural view"
            className="w-full h-full object-cover rounded-sm  opacity-90"
          />
        </div>
      </div>

      {/* 4. Footer Credits Bar */}
      {/* <div className="border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 tracking-[0.2em] font-medium gap-4">
        <div>
          <span>© 2025 Anzo. ALL RIGHTS RESERVED</span>
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
      </div> */}
      <div
        className="border-t border-gray-900 
py-6
  flex flex-col md:flex-row 
  justify-center items-center 
  text-[10px] text-gray-600 
  tracking-[0.2em] font-medium 
  gap-4"
      >
        <div>
          <span>© {new Date().getFullYear()} Anzo. ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
