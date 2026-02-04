"use client";
import React from "react";
import {
  Mail,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";

const LandingPage = () => {
  return (
    <div className=" bg-black text-white  overflow-x-hidden">
      <section className="relative flex flex-col justify-between p-6 sm:p-10 md:p-16 lg:p-20 bg-black overflow-hidden">
        {/* brand text  */}
        <div className="absolute top-0  left-0 w-full z-0 pointer-events-none select-none flex justify-center overflow-hidden">
          <h1 className="text-[9vw] sm:text-[10vw] font-medium uppercase tracking-tighter leading-none text-white whitespace-nowrap">
            Anzo Properties
          </h1>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 mt-14 md:mt-18 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left Column: Messaging */}
          <div className="lg:col-span-7 flex flex-col space-y-6 md:space-y-10">
            <h2 className="text-3xl sm:text-4xl md:text-3xl font-normal leading-[1.1] max-w-2xl">
              Looking for assistance? <br className="hidden sm:block" />
              Need guidance or have questions?
            </h2>

            <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed">
              Our real estate experts are just a click away, committed to
              providing the assistance you deserve.
            </p>

            {/* <div className="flex pt-2 md:pt-4">
              <button className="group flex items-center gap-4 rounded-full border border-white/30 px-2 py-2 pr-6 md:pr-8 hover:bg-white hover:text-black transition-all duration-300">
                <div className="bg-white text-black p-2 md:p-3 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                  <Mail size={18} className="md:w-5 md:h-5" />
                </div>
                <span className="font-semibold text-sm md:text-lg uppercase tracking-tight">
                  Reach Out
                </span>
              </button>
            </div> */}
          </div>

          {/* Right Column: Contact Stacks */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12 lg:space-y-0 lg:pl-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-3 md:space-y-4">
                <p className="text-gray-500 font-bold uppercase text-[10px] md:text-xs tracking-[0.2em]">
                  Contact
                </p>
                <div className="space-y-1">
                  <p className="text-base md:text-lg hover:text-gray-300 cursor-pointer break-words">
                    info@anzoproperties.com
                  </p>
                  <p className="text-base md:text-lg">+971-55-1172789</p>
                </div>
              </div>
              <div className="space-y-3 md:space-y-4">
                <p className="text-gray-500 font-bold uppercase text-[10px] md:text-xs tracking-[0.2em]">
                  Services
                </p>
                <div className="space-y-1">
                  <p className="text-base md:text-lg hover:text-gray-300 cursor-pointer break-words">
                    info@anzoproperties.com
                  </p>
                  <p className="text-base md:text-lg">+971-58-5430953</p>
                </div>
              </div>
            </div>

            {/* Socials & Copyright */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 pt-8">
              <div className="flex flex-wrap gap-3">
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                  >
                    <Icon size={16} className="md:w-[18px] md:h-[18px]" />
                  </a>
                ))}
              </div>
              {/* <p className="text-gray-600 text-[10px] md:text-xs uppercase tracking-widest">
                © Realtor Agency
              </p> */}
            </div>
          </div>
        </div>

        {/* Brand Logo Bottom Left */}
        <div className="relative z-10 flex items-center gap-3 mt-16 md:mt-8 lg:mt-12">
          <div className="w-5 h-5 md:w-6 md:h-6 bg-white rotate-45"></div>
          <span className="text-lg md:text-xl font-normal uppercase tracking-tighter">
            Anzo properties
          </span>
        </div>
      </section>
    </div>
  );
};

export default function Footer2() {
  return <LandingPage />;
}
