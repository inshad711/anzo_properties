// "use client";
// import React from "react";
// import {
//   Sparkles,
//   Handshake,
//   Building2,
//   Play,
//   ArrowRight,
//   PhoneCall,
// } from "lucide-react";

// const AboutSection = () => {
//   return (
//     <section className="w-full bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row gap-12 items-center">
//           {/* Left Column: Main Building Image */}
//           <div className="w-full lg:w-[42%] relative">
//             <div className="rounded-[30px] overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
//                 alt="Modern Real Estate Building"
//                 className="w-full h-auto object-cover min-h-[500px]"
//                 onError={(e) => {
//                   e.target.src =
//                     "https://via.placeholder.com/600x800?text=Building+Image";
//                 }}
//               />
//             </div>
//             {/* Decorative elements could be added here to match the image precisely */}
//           </div>

//           {/* Right Column: Content */}
//           <div className="w-full lg:w-[58%] flex flex-col space-y-8">
//             {/* Header Area */}
//             <div className="space-y-4">
//               <div className="flex items-center gap-2 text-[#0a2a1b] font-semibold uppercase tracking-widest text-xs">
//                 <Sparkles className="w-4 h-4 text-gray-400" />
//                 <span>About Our Company</span>
//               </div>

//               <h2 className="text-4xl md:text-5xl font-bold text-[#0a2a1b] leading-tight">
//                 The Foremost Privately Held Firm In Global Real Estate
//                 Investment
//               </h2>

//               <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
//                 But I must explain to you how all this mistaken idea of
//                 denouncing pleasure and praising pain was born and I will give
//                 you a complete account.
//               </p>
//             </div>

//             {/* Middle Section: Mission/Vision & Video */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
//               {/* Mission & Vision Column */}
//               <div className="space-y-10">
//                 {/* Mission Item */}
//                 <div className="flex gap-4">
//                   <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center relative">
//                     <div className="absolute inset-0 bg-gray-200 rounded-full scale-90 translate-x-2 translate-y-2 opacity-30"></div>
//                     <Handshake className="w-8 h-8 text-[#0a2a1b] relative z-10" />
//                   </div>
//                   <div className="space-y-1">
//                     <h3 className="text-xl font-bold text-[#0a2a1b]">
//                       Our Mission
//                     </h3>
//                     <p className="text-gray-500 text-sm leading-relaxed">
//                       To empower organizations to unlock their greatest
//                       potential by transforming their human
//                     </p>
//                   </div>
//                 </div>

//                 {/* Vision Item */}
//                 <div className="flex gap-4">
//                   <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center relative">
//                     <div className="absolute inset-0 bg-gray-200 rounded-full scale-90 translate-x-2 translate-y-2 opacity-30"></div>
//                     <Building2 className="w-8 h-8 text-[#0a2a1b] relative z-10" />
//                   </div>
//                   <div className="space-y-1">
//                     <h3 className="text-xl font-bold text-[#0a2a1b]">
//                       Our Vision
//                     </h3>
//                     <p className="text-gray-500 text-sm leading-relaxed">
//                       To redefine the future of work by creating a world where
//                       every organization recognizes
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Video Thumbnail Column */}
//               <div className="relative group cursor-pointer">
//                 <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[220px]">
//                   <img
//                     src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
//                     alt="Property Video Preview"
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                 </div>
//                 {/* Play Button Overlay */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-16 h-16 bg-[#ccff00] rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
//                     <Play className="w-6 h-6 text-black fill-black ml-1" />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Bottom Footer: CTA & Contact */}
//             <div className="pt-6 flex flex-wrap items-center gap-8">
//               {/* Read More Button */}
//               <button className="group relative flex items-center bg-[#ccff00] hover:bg-[#b8e600] text-black px-8 py-4 rounded-full font-bold transition-all duration-300">
//                 <div className="absolute left-2 w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
//                   <ArrowRight className="w-5 h-5 text-[#ccff00]" />
//                 </div>
//                 <span className="ml-8">Read More</span>
//               </button>

//               {/* Contact Section */}
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center">
//                   <PhoneCall className="w-5 h-5 text-white" />
//                 </div>
//                 <div>
//                   <p className="text-gray-400 text-xs font-medium uppercase tracking-tight">
//                     Call Anytime
//                   </p>
//                   <p className="text-[#0a2a1b] font-bold text-lg leading-none">
//                     +88 017 500 500 88
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default function About() {
//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//       <AboutSection />
//     </div>
//   );
// }

//// new

"use client";

import React, { ReactElement } from "react";
import {
  Sparkles,
  Handshake,
  Building2,
  Play,
  ArrowRight,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";

const AboutSection: React.FC = (): ReactElement => {
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://via.placeholder.com/600x800?text=Building+Image";
  };

  return (
    // Changed: bg-white to bg-[#0a0a0a] (Deep Black)
    <section className="w-full bg-zinc-950 py-12 mt-18 md:py-20 overflow-hidden">
      <div className="templateContainer">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Left Column: Full Height Image Container */}
          <div className="w-full lg:w-[42%] relative">
            <div className="rounded-[12px] overflow-hidden shadow-2xl h-full">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                alt="Modern Real Estate Building"
                // Changed: Added h-full and object-cover to ensure it fills the column
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-[58%] flex flex-col justify-center space-y-8">
            {/* Header Area */}
            <div className="space-y-4">
              {/* Changed: text-[#0a2a1b] to text-white */}
              <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight">
                About Anzo
              </h2>

              <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                A leading luxury developer shaping Dubai’s most iconic
                communities. Damac is known for delivering landmark destinations
                that combine premium design, hospitality-inspired amenities, and
                strong investment value across Dubai and beyond.
              </p>
              <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                A The brand’s communities are crafted around lifestyle,
                wellness, and long-term value, making Damac a trusted name in
                luxury real estate.
              </p>
            </div>

            {/* Middle Section: Mission/Vision & Video */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-start">
              <div className="space-y-10">
                {/* Mission Item */}
                <div className="flex gap-4">
                  {/* Changed: bg-gray-100 to bg-white/10 */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-white/5 rounded-full scale-90 translate-x-2 translate-y-2 opacity-30"></div>
                    <Handshake className="w-8 h-8 text-[#8a6531] relative z-10" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">
                      Our Mission
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      To deliver a modern, intelligent, and intuitive real
                      estate experience to every tenant and landlord - rooted in
                      care, powered by innovation, and focused on a connected,
                      sustainable future.
                    </p>
                  </div>
                </div>

                {/* Vision Item */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-white/5 rounded-full scale-90 translate-x-2 translate-y-2 opacity-30"></div>
                    <Building2 className="w-8 h-8 text-[#8a6531] relative z-10" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">Our Vision</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      Our brand values are the foundation of everything we do.
                      They reflect our commitment to sustainability, community,
                      innovation, and integrity. These values guide how we
                      operate, how we serve, and how we grow.
                    </p>
                  </div>
                </div>
              </div>

              {/* Video Thumbnail */}
              {/* <div className="relative group cursor-pointer h-full min-h-[220px]">
                <div className="rounded-2xl overflow-hidden shadow-lg h-full border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
                    alt="Property Video Preview"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#ccff00] rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-6 h-6 text-black fill-black ml-1" />
                  </div>
                </div>
              </div> */}
            </div>

            {/* Bottom Footer: CTA & Contact */}
            <div className="pt-6 flex flex-wrap items-center gap-8 border-t border-white/10">
              {/* <button className="group relative flex items-center bg-[#8a6531] hover:bg-[#8a6531] text-black px-8 py-4 rounded-full font-bold transition-all duration-300">
                <div className="absolute left-2 w-10 h-10 bg-black rounded-full flex items-center justify-center transition-transform">
                  <ArrowRight className="w-5 h-5 text-[#8a6531]" />
                </div>
                <span className="ml-8">Read More</span>
              </button> */}
              <Link href="/contact" className="inline-block">
                <button className="group relative cursor-pointer flex items-center bg-[#8a6531] hover:bg-[#8a6531] text-black px-8 py-4 rounded-full font-bold transition-all duration-300">
                  <div className="absolute left-2 w-10 h-10 bg-black rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1">
                    <ArrowRight className="w-5 h-5 text-[#8a6531]" />
                  </div>
                  <span className="ml-8">Read More</span>
                </button>
              </Link>

              {/* <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/5">
                  <PhoneCall className="w-5 h-5 text-[#8a6531]" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-tight">
                    Call Anytime
                  </p>
                  <p className="text-white font-bold text-lg leading-none">
                    +9876543211
                  </p>
                </div>
              </div> */}
              <a
                href="tel:+971 551172789"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/5 group-hover:bg-white/20 transition">
                  <PhoneCall className="w-5 h-5 text-[#8a6531]" />
                </div>

                <div>
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-tight">
                    Call Anytime
                  </p>
                  <p className="text-white font-bold text-lg leading-none group-hover:underline">
                    +971 551172789
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function About(): ReactElement {
  return (
    <div className="bg-zinc-950 flex items-center justify-center">
      <AboutSection />
    </div>
  );
}
