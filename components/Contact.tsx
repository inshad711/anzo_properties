// "use client";
// import React from "react";
// import { Twitter, Instagram, Share2, ChevronDown } from "lucide-react";

// const Contact = () => {
//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-white py-16 px-6 md:px-12 lg:px-24">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
//         {/* Left Section */}
//         <div className="space-y-8">
//           <div className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
//             <span className="w-2 h-2 bg-red-600 rounded-full shadow-[0_0_8px_rgba(220,38,38,0.8)]"></span>
//             Contact Us
//           </div>

//           <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight">
//             Complete this form <br />
//             <span className="text-gray-500 italic">to contact</span> <br />
//             our team
//           </h1>

//           <div className="space-y-4 pt-4">
//             <p className="text-gray-500 font-bold text-[10px] tracking-[0.3em]">
//               FOLLOW US:
//             </p>
//             <div className="flex gap-3">
//               <a
//                 href="#"
//                 className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all"
//               >
//                 <Share2 size={18} strokeWidth={1.5} />
//               </a>
//               <a
//                 href="#"
//                 className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all"
//               >
//                 <Instagram size={18} strokeWidth={1.5} />
//               </a>
//               <a
//                 href="#"
//                 className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all"
//               >
//                 <Twitter size={18} strokeWidth={1.5} />
//               </a>
//             </div>
//           </div>

//           <div className="pt-10">
//             <div className="relative group max-w-md">
//               <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-transparent rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
//               <img
//                 src="/city-skyline.jpg"
//                 alt="City Skyline"
//                 className="relative rounded-3xl w-full object-cover aspect-[4/3] filter grayscale hover:grayscale-0 transition-all duration-700"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Right Section: Form */}
//         <div className="pt-4 lg:pt-20">
//           <form className="space-y-4 max-w-xl">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 className="w-full bg-[#161616] border border-white/5 rounded-2xl p-5 text-white placeholder:text-gray-600 focus:bg-[#1c1c1c] focus:border-white/20 outline-none transition-all"
//               />
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 className="w-full bg-[#161616] border border-white/5 rounded-2xl p-5 text-white placeholder:text-gray-600 focus:bg-[#1c1c1c] focus:border-white/20 outline-none transition-all"
//               />
//             </div>

//             <input
//               type="email"
//               placeholder="Email Address*"
//               required
//               className="w-full bg-[#161616] border border-white/5 rounded-2xl p-5 text-white placeholder:text-gray-600 focus:bg-[#1c1c1c] focus:border-white/20 outline-none transition-all"
//             />

//             <div className="relative">
//               <select className="w-full bg-[#161616] border border-white/5 rounded-2xl p-5 text-gray-500 focus:bg-[#1c1c1c] focus:border-white/20 outline-none appearance-none cursor-pointer">
//                 <option>Location</option>
//                 <option>New York</option>
//                 <option>London</option>
//                 <option>Mumbai</option>
//               </select>
//               <ChevronDown
//                 className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none"
//                 size={20}
//               />
//             </div>

//             <textarea
//               placeholder="Message"
//               rows={5}
//               className="w-full bg-[#161616] border border-white/5 rounded-2xl p-5 text-white placeholder:text-gray-600 focus:bg-[#1c1c1c] focus:border-white/20 outline-none resize-none transition-all"
//             ></textarea>

//             <button
//               type="submit"
//               className="group flex items-center gap-3 px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 active:scale-95"
//             >
//               Submit
//               <span className="group-hover:translate-x-1 transition-transform">
//                 →
//               </span>
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// "use client";
// import React from "react";
// import { Twitter, Instagram, Music2 } from "lucide-react"; // Music2 for TikTok-like icon

// const Contact = () => {
//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center p-6 md:p-12">
//       <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
//         {/* Left Section */}
//         <div className="space-y-8">
//           <div className="flex items-center gap-2">
//             <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
//             <span className="text-sm font-semibold tracking-widest uppercase text-gray-600">
//               Contact Us
//             </span>
//           </div>

//           <h1 className="text-5xl md:text-6xl font-medium leading-tight text-gray-900">
//             Complete this form <br /> to contact our team
//           </h1>

//           <div className="space-y-4">
//             <p className="text-gray-400 font-medium text-sm tracking-widest uppercase">
//               Follow us:
//             </p>
//             <div className="flex gap-4">
//               <a
//                 href="#"
//                 className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
//               >
//                 <Music2 size={20} className="text-gray-800" />
//               </a>
//               <a
//                 href="#"
//                 className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
//               >
//                 <Instagram size={20} className="text-gray-800" />
//               </a>
//               <a
//                 href="#"
//                 className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
//               >
//                 <Twitter size={20} className="text-gray-800" />
//               </a>
//             </div>
//           </div>

//           <div className="pt-8">
//             <img
//               src="/path-to-your-city-image.jpg"
//               alt="City Skyline"
//               className="rounded-3xl w-full max-w-md object-cover shadow-sm"
//             />
//           </div>
//         </div>

//         {/* Right Section (Form) */}
//         <div className="bg-transparent space-y-4">
//           <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {/* First Name */}
//             <input
//               type="text"
//               placeholder="William"
//               className="col-span-1 p-5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-gray-200 outline-none placeholder:text-gray-900"
//             />
//             {/* Last Name */}
//             <input
//               type="text"
//               placeholder="J"
//               className="col-span-1 p-5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-gray-200 outline-none"
//             />
//             {/* Email */}
//             <input
//               type="email"
//               placeholder="Email Address*"
//               className="col-span-full p-5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-gray-200 outline-none"
//             />
//             {/* Location Dropdown */}
//             <div className="col-span-full relative">
//               <select className="w-full p-5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-gray-200 outline-none appearance-none text-gray-500">
//                 <option>Location</option>
//                 <option>United States</option>
//                 <option>United Kingdom</option>
//               </select>
//               <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
//                 <svg
//                   className="w-4 h-4 text-gray-400"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M19 9l-7 7-7-7"
//                   ></path>
//                 </svg>
//               </div>
//             </div>
//             {/* Message */}
//             <textarea
//               placeholder="Message"
//               rows={6}
//               className="col-span-full p-5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-gray-200 outline-none resize-none"
//             ></textarea>

//             {/* Submit Button */}
//             <div className="col-span-full pt-4">
//               <button
//                 type="submit"
//                 className="w-1/2 md:w-1/3 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

"use client";
import React from "react";
import { Twitter, Instagram, Music2, ChevronDown } from "lucide-react";

const Contact = () => {
  return (
    // Changed to bg-zinc-950 for a deep black finish
    <div className=" bg-zinc-950  text-white flex items-center justify-center p-6 md:p-12">
      <div className="max-w-7xl w-full pt-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            <span className="text-sm font-semibold tracking-widest uppercase text-zinc-400">
              Contact Us
            </span>
          </div>

          <h1 className="text-5xl md:text-5xl font-medium leading-tight text-white">
            Complete this form <br /> to contact our team
          </h1>

          <div className="space-y-4">
            <p className="text-zinc-500 font-medium text-sm tracking-widest uppercase">
              Follow us:
            </p>
            <div className="flex gap-4">
              {/* Darker social icons with hover effects */}
              <a
                href="#"
                className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors border border-zinc-800"
              >
                <Music2 size={20} className="text-zinc-300" />
              </a>
              <a
                href="#"
                className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors border border-zinc-800"
              >
                <Instagram size={20} className="text-zinc-300" />
              </a>
              <a
                href="#"
                className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors border border-zinc-800"
              >
                <Twitter size={20} className="text-zinc-300" />
              </a>
            </div>
          </div>

          <div className="pt-8">
            <img
              src="/path-to-your-city-image.jpg"
              alt="City Skyline"
              className="rounded-3xl w-full max-w-md object-cover opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="space-y-4">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Inputs: bg-zinc-900 with subtle borders */}
            <input
              type="text"
              placeholder="Name Name"
              className="col-span-1 p-5 bg-zinc-900 border border-zinc-800 rounded-2xl focus:ring-2 focus:ring-orange-500/50 outline-none placeholder:text-zinc-200 text-white"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="col-span-1 p-5 bg-zinc-900 border border-zinc-800 rounded-2xl focus:ring-2 focus:ring-orange-500/50 outline-none placeholder:text-zinc-500"
            />
            <input
              type="email"
              placeholder="Email Address*"
              className="col-span-full p-5 bg-zinc-900 border border-zinc-800 rounded-2xl focus:ring-2 focus:ring-orange-500/50 outline-none placeholder:text-zinc-500"
            />

            <div className="col-span-full relative">
              <select className="w-full p-5 bg-zinc-900 border border-zinc-800 rounded-2xl focus:ring-2 focus:ring-orange-500/50 outline-none appearance-none text-zinc-500">
                <option>Location</option>
                <option>United States</option>
                <option>India</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                <ChevronDown size={20} className="text-zinc-500" />
              </div>
            </div>

            <textarea
              placeholder="Message"
              rows={6}
              className="col-span-full p-5 bg-zinc-900 border border-zinc-800 rounded-2xl focus:ring-2 focus:ring-orange-500/50 outline-none resize-none placeholder:text-zinc-500"
            ></textarea>

            <div className="col-span-full pt-4">
              {/* Button: White background for contrast against the black theme */}
              <button
                type="submit"
                className="w-1/2 md:w-1/3 py-4 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-all active:scale-95"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
