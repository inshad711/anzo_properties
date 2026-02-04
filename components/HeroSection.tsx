// import React from "react";

// const HeroSection = () => {
//   return (
//     <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
//       >
//         <source
//           src="/video/VIDEO-FOR-ANXO-PROP.mp4" // Ensure your video is in the public/videos folder
//           type="video/mp4"
//         />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay for Readability */}
//       {/* <div className="absolute inset-0 z-10 bg-black/50" /> */}

//       {/* Content */}
//       <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
//         <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
//           Next Generation <span className="text-blue-500">Solutions</span>
//         </h1>
//         <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8">
//           Crafting high-performance digital experiences with precision and
//           modern technology.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all">
//             Get Started
//           </button>
//           <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg backdrop-blur-md border border-white/30 transition-all">
//             Learn More
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

////// new

// "use client";

// import React from "react";

// const HeroSection: React.FC = () => {
//   return (
//     <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gray-900">
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         poster="/hero-fallback.jpg" // High-quality image shown while video loads
//         className="absolute inset-0 w-full h-full object-cover z-0"
//       >
//         <source src="/video/VIDEO-FOR-ANXO-PROP.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       <div className="absolute inset-0 bg-black/10 z-10" />

//       {/* Main Content */}
//       <div className="container mx-auto px-6 relative z-20 text-center">
//         <h1 className="text-4xl uppercase font-elegant md:text-5xl font-medium text-white tracking-tight mb-6">
//           Elevate Your <span className="text-[#edcb79]">Digital Presence</span>
//         </h1>

//         <p className="text-lg md:text-xl font-ui  text-gray-200 max-w-3xl mx-auto mb-10 leading-tight">
//           Building high-performance web applications with Next.js and Tailwind
//           CSS that captivate your audience from the first frame.
//         </p>

//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//           <button className="px-8 py-3 bg-[#d6b56a] text-black font-medium rounded-sm shadow-lg transition-all transform hover:scale-105">
//             View Our Projects
//           </button>
//           <button className="px-8 py-3 bg-white text-black font-medium rounded-sm backdrop-blur-sm border border-white/20 transition-all transform hover:scale-105">
//             Contact Us
//           </button>
//         </div>
//       </div>

//       {/* Bottom Gradient Shadow for Smooth Transition to Next Section */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10" />
//     </section>
//   );
// };

// export default HeroSection;

////// hero new

"use client";

import Link from "next/link";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[90vh] md:h-screen flex items-end justify-center overflow-hidden bg-gray-900">
      <video
        autoPlay
        loop
        muted
        playsInline
        // poster="/hero-fallback.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video/VIDEO-FOR-ANXO-PROP.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-20 text-center pb-8">
        <h1 className="text-3xl uppercase font-[var(--font-libertinus)] md:text-5xl font-medium text-white tracking-tight mb-6">
          Your Gateway to Dubai’s <br className="md:block hidden" />
          <span className="text-[#d6b56a]">World-Class Living.</span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* <button className="px-8 py-2 cursor-pointer bg-transparent text-white font-medium rounded-sm shadow-lg border border-[#d6b56a] transition-all">
            Book a Consultation
          </button> */}

          <Link href="/contact">
            <button className="px-10 py-4 cursor-pointer border border-[#c5a36b]/90 rounded-full text-[13px] uppercase tracking-widest font-semibold text-[#ffffff] hover:bg-[#c5a36b] hover:text-black transition-all duration-500">
              Book a Consultation
            </button>
          </Link>

          {/* 
          <button className="px-8 py-2 cursor-pointer bg-transparent text-white font-medium rounded-sm shadow-lg border border-white transition-all">
            Explore Properties
          </button> */}
          {/* <button className=" px-10 py-4 border border-[#ffffff]/90 rounded-full text-[13px] uppercase tracking-widest font-semibold text-[#ffffff] hover:bg-[#c5a36b] hover:text-black transition-all duration-500">
            Explore Properties
          </button> */}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
