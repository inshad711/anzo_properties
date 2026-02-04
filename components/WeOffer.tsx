// "use client";
// import React, { useEffect, useState } from "react";
// import { Diamond, Handshake, Hammer } from "lucide-react";

// /**
//  * A Next.js/React component replicating the "What We Offer" section
//  * Features: Parallax background, Staggered Glassmorphism cards, Precise Typography
//  */
// export default function App() {
//   const [scrollY, setScrollY] = useState(0);

//   // Handle scroll for parallax effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const services = [
//     {
//       title: "Luxury Real Estate Advisory",
//       description:
//         "Personalized guidance for buyers and investors seeking long-term value in Dubai’s premium real estate market.",
//       icon: <Diamond className="w-5 h-5 text-[#c5a36b]" />,
//       offset: "md:translate-y-12",
//     },
//     {
//       title: "Investment Consulting",
//       description:
//         "Strategic advice focused on rental demand, appreciation potential, exit planning, and portfolio growth.",
//       icon: <Handshake className="w-5 h-5 text-[#c5a36b]" />,
//       offset: "md:-translate-y-4", // Middle card is higher in the reference image
//     },
//     {
//       title: "End-to-End Support",
//       description:
//         "From property shortlisting and booking to documentation, payments, and handover coordination — handled seamlessly.",
//       icon: <Hammer className="w-5 h-5 text-[#c5a36b]" />,
//       offset: "md:translate-y-12",
//     },
//   ];

//   return (
//     <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
//       {/* Injecting fonts and global overrides */}
//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Inter:wght@300;400;500&display=swap');

//         .font-serif-custom {
//           font-family: 'Playfair Display', serif;
//         }

//         .font-sans-custom {
//           font-family: 'Inter', sans-serif;
//         }

//         .luxury-card {
//           background: rgba(18, 18, 18, 0.85);
//           backdrop-filter: blur(12px);
//           border: 1px solid rgba(255, 255, 255, 0.08);
//         }
//       `,
//         }}
//       />

//       {/* Parallax Background Container */}
//       <div
//         className="absolute inset-0 w-full h-full opacity-70 pointer-events-none"
//         style={{
//           backgroundImage: `url('https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=2000&auto=format&fit=crop')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           transform: `translateY(${scrollY * 0.12}px) scale(1.1)`,
//           transition: "transform 0.15s ease-out",
//         }}
//       />

//       {/* Overlay gradient for depth */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

//       {/* Content Section */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-48 flex flex-col items-center font-sans-custom">
//         {/* Header Section */}
//         <div className="text-center mb-16 space-y-6">
//           <div className="flex flex-col items-center gap-3">
//             <div className="h-[1px] w-16 bg-[#c5a36b]/60 mb-1" />
//             <span className="text-[10px] uppercase tracking-[0.5em] font-medium text-gray-300">
//               What We Offer
//             </span>
//           </div>

//           <h2 className="text-4xl md:text-6xl font-serif-custom font-normal tracking-tight max-w-4xl leading-[1.15] text-white">
//             Bringing Vision, Value, and <br className="hidden md:block" />{" "}
//             Expertise Together
//           </h2>
//         </div>

//         {/* Services Grid with Staggered Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-start">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className={`luxury-card flex flex-col justify-between p-10 rounded-lg transition-all duration-700 hover:border-[#c5a36b]/30 ${service.offset}`}
//             >
//               <div>
//                 {/* Icon Box */}
//                 <div className="w-10 h-10 bg-white/5 rounded-md flex items-center justify-center mb-8 border border-white/10">
//                   {service.icon}
//                 </div>

//                 {/* Text Content */}
//                 <h3 className="text-2xl font-serif-custom font-medium mb-5 text-white">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-400 leading-relaxed font-light text-[15px] mb-12">
//                   {service.description}
//                 </p>
//               </div>

//               {/* Action Button */}
//               <button className="w-fit px-7 py-2.5 border border-white/20 rounded text-[13px] font-medium text-gray-200 hover:bg-white/10 hover:border-white/40 transition-all uppercase tracking-wider">
//                 Learn More
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

/// make like this video , bg image parallex

// "use client";
// import React from "react";
// import { Diamond, Handshake, Layout } from "lucide-react";
// import { motion } from "framer-motion";

// export default function WeOffer() {
//   const services = [
//     {
//       title: "Luxury Real Estate Advisory",
//       description:
//         "Personalized guidance for buyers and investors seeking long-term value in Dubai’s premium real estate market.",
//       icon: <Diamond className="w-6 h-6 text-[#c5a36b]" />,
//       // Adds the "staggered" height effect on desktop
//       desktopMargin: "md:mt-24",
//     },
//     {
//       title: "Investment Consulting",
//       description:
//         "Strategic advice focused on rental demand, appreciation potential, exit planning, and portfolio growth.",
//       icon: <Handshake className="w-6 h-6 text-[#c5a36b]" />,
//       desktopMargin: "md:mt-0",
//     },
//     {
//       title: "End-to-End Support",
//       description:
//         "From property shortlisting and booking to documentation, payments, and handover coordination — handled seamlessly.",
//       icon: <Layout className="w-6 h-6 text-[#c5a36b]" />,
//       desktopMargin: "md:mt-24",
//     },
//   ];

//   return (
//     <section
//       className="relative w-full overflow-hidden"
//       /* The magic line: clip-path ensures the fixed bg doesn't bleed into other components */
//       style={{ clipPath: "inset(0 0 0 0)" }}
//     >
//       {/* FIXED BACKGROUND
//           'fixed' keeps it stationary.
//           The parent 'clip-path' ensures it's only visible HERE.
//       */}
//       <div
//         className="fixed inset-0 w-full h-full z-0"
//         style={{
//           backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       />

//       {/* LUXURY OVERLAYS */}

//       <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/40 to-[#0a0a0a]" />
//       <div className="absolute inset-0 z-[1] bg-black/50" />

//       {/* MAIN CONTENT */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col items-center">
//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-28 space-y-6"
//         >
//           <div className="flex flex-col items-center gap-4">
//             <div className="h-[1px] w-12 bg-[#c5a36b]/80" />
//             <span className="text-[11px] uppercase tracking-[0.5em] font-medium text-[#c5a36b]">
//               What We Offer
//             </span>
//           </div>

//           <h2 className="text-4xl md:text-6xl text-white font-light tracking-tight max-w-4xl leading-[1.1]">
//             Bringing Vision, Value, and <br className="hidden md:block" />{" "}
//             Expertise Together
//           </h2>
//         </motion.div>

//         {/* SERVICES GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-start">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               className={`
//                 group relative flex flex-col justify-between p-10 rounded-2xl min-h-[460px]
//                 border border-white/10 bg-black/40 backdrop-blur-2xl
//                 hover:border-[#c5a36b]/40 transition-all duration-700
//                 ${service.desktopMargin}
//               `}
//             >
//               <div>
//                 {/* ICON BOX */}
//                 <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-10 border border-white/10 group-hover:bg-[#c5a36b]/10 group-hover:border-[#c5a36b]/30 transition-all duration-500">
//                   {service.icon}
//                 </div>

//                 {/* TEXT CONTENT */}
//                 <h3 className="text-2xl text-white mb-6 group-hover:text-[#c5a36b] transition-colors duration-500">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-400 font-light leading-relaxed text-[16px]">
//                   {service.description}
//                 </p>
//               </div>

//               {/* ACTION BUTTON */}
//               <button className="mt-10 w-fit px-8 py-3 border border-[#c5a36b]/40 rounded-full text-[11px] uppercase tracking-widest font-semibold text-[#c5a36b] hover:bg-[#c5a36b] hover:text-black transition-all duration-500">
//                 Explore More
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

///new
// "use client";
// import React from "react";
// import { Diamond, Handshake, Layout } from "lucide-react";
// import { motion } from "framer-motion";

// export default function WeOffer() {
//   const services = [
//     {
//       title: "Luxury Real Estate Advisory",
//       description:
//         "Personalized guidance for buyers and investors seeking long-term value in Dubai’s premium real estate market.",
//       icon: <Diamond className="w-6 h-6 text-[#c5a36b]" />,
//       desktopMargin: "md:mt-24",
//     },
//     {
//       title: "Investment Consulting",
//       description:
//         "Strategic advice focused on rental demand, appreciation potential, exit planning, and portfolio growth.",
//       icon: <Handshake className="w-6 h-6 text-[#c5a36b]" />,
//       desktopMargin: "md:mt-0",
//     },
//     {
//       title: "End-to-End Support",
//       description:
//         "From property shortlisting and booking to documentation, payments, and handover coordination — handled seamlessly.",
//       icon: <Layout className="w-6 h-6 text-[#c5a36b]" />,
//       desktopMargin: "md:mt-24",
//     },
//   ];

//   return (
//     <section
//       className="relative w-full overflow-hidden bg-[#0a0a0a]"
//       /* FIX 1: Negative margin upar aur niche wale gap ko "overlap" karke khatam kar dega */
//       style={{
//         marginTop: "-4px",
//         marginBottom: "-4px",
//         paddingTop: "4px",
//         paddingBottom: "4px",
//       }}
//     >
//       {/* FIXED BACKGROUND
//           Humne clip-path hata diya hai aur direct background-attachment use kiya hai
//           jo borders par zyada stable rehta hai.
//       */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundAttachment: "fixed", // Yeh parallax effect bhi dega aur borders clean rakhega
//         }}
//       />

//       {/* LUXURY OVERLAYS
//           FIX 2: Overlays ko section se 2px bahar stretch kiya taaki edge leaks na hon
//       */}
// <div className="absolute -inset-y-2 inset-x-0 z-[1] bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]" />
// <div className="absolute -inset-y-2 inset-x-0 z-[1] bg-black/50" />

//       {/* MAIN CONTENT */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col items-center">
//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-28 space-y-6"
//         >
//           <div className="flex flex-col items-center gap-4">
//             <div className="h-[1px] w-12 bg-[#c5a36b]/80" />
//             <span className="text-[11px] uppercase tracking-[0.5em] font-medium text-[#c5a36b]">
//               What We Offer
//             </span>
//           </div>

//           <h2 className="text-4xl md:text-6xl text-white font-light tracking-tight max-w-4xl leading-[1.1]">
//             Bringing Vision, Value, and <br className="hidden md:block" />{" "}
//             Expertise Together
//           </h2>
//         </motion.div>

//         {/* SERVICES GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-start">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               className={`
//                 group relative flex flex-col justify-between p-10 rounded-2xl min-h-[460px]
//                 border border-white/10 bg-black/40 backdrop-blur-2xl
//                 hover:border-[#c5a36b]/40 transition-all duration-700
//                 ${service.desktopMargin}
//               `}
//             >
//               <div>
//                 <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-10 border border-white/10 group-hover:bg-[#c5a36b]/10 group-hover:border-[#c5a36b]/30 transition-all duration-500">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-2xl text-white mb-6 group-hover:text-[#c5a36b] transition-colors duration-500">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-400 font-light leading-relaxed text-[16px]">
//                   {service.description}
//                 </p>
//               </div>
//               <button className="mt-10 w-fit px-8 py-3 border border-[#c5a36b]/40 rounded-full text-[11px] uppercase tracking-widest font-semibold text-[#c5a36b] hover:bg-[#c5a36b] hover:text-black transition-all duration-500">
//                 Explore More
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
/////// new

// "use client";
// import React from "react";
// import { Diamond, Handshake, Layout } from "lucide-react";
// import { motion } from "framer-motion";

// export default function WeOffer() {
//   const services = [
//     {
//       title: "Luxury Real Estate Advisory",
//       description:
//         "Personalized guidance for buyers and investors seeking long-term value in Dubai’s premium real estate market.",
//       icon: <Diamond className="w-6 h-6 text-[#c5a36b]" />,
//       desktopMargin: "md:mt-24",
//     },
//     {
//       title: "Investment Consulting",
//       description:
//         "Strategic advice focused on rental demand, appreciation potential, exit planning, and portfolio growth.",
//       icon: <Handshake className="w-6 h-6 text-[#c5a36b]" />,
//       desktopMargin: "md:mt-0",
//     },
//     {
//       title: "End-to-End Support",
//       description:
//         "From property shortlisting and booking to documentation, payments, and handover coordination — handled seamlessly.",
//       icon: <Layout className="w-6 h-6 text-[#c5a36b]" />,
//       desktopMargin: "md:mt-24",
//     },
//   ];

//   return (
//     <section
//       className="relative w-full overflow-hidden bg-black"
//       // Desktop par overlap rakhenge, mobile par 1px extra stretch
//       // style={{ marginTop: "-2px", marginBottom: "-2px" }}
//       style={{ clipPath: "inset(0 0 0 0)" }}
//     >
//       {/* FIXED BACKGROUND WITH MOBILE FIX */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",

//           backgroundAttachment:
//             typeof window !== "undefined" && window.innerWidth > 1024
//               ? "fixed"
//               : "scroll",
//         }}
//       />

//       {/* LUXURY OVERLAYS - Yahan inset-y ko -5px kiya hai taaki mobile gaps fill ho jayein */}
//       {/* <div className="absolute -inset-y-[5px] inset-x-0 z-[1] bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]" />
//       <div className="absolute -inset-y-[5px] inset-x-0 z-[1] bg-black/50" /> */}
//       <div className="absolute -inset-y-2 inset-x-0 z-[1] bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]" />
//       <div className="absolute -inset-y-2 inset-x-0 z-[1] bg-black/50" />

//       {/* MAIN CONTENT */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col items-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-28 space-y-6"
//         >
//           <div className="flex flex-col items-center gap-4">
//             <div className="h-[1px] w-12 bg-[#c5a36b]/80" />
//             <span className="text-[11px] uppercase tracking-[0.5em] font-medium text-[#c5a36b]">
//               What We Offer
//             </span>
//           </div>

//           <h2 className="text-4xl md:text-6xl text-white font-light tracking-tight max-w-4xl leading-[1.1]">
//             Bringing Vision, Value, and <br className="hidden md:block" />{" "}
//             Expertise Together
//           </h2>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-start">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               className={`
//                 group relative flex flex-col justify-between p-10 rounded-2xl min-h-[420px]
//                 border border-white/10 bg-black/40 backdrop-blur-2xl
//                 hover:border-[#c5a36b]/40 transition-all duration-700
//                 ${service.desktopMargin}
//               `}
//             >
//               <div>
//                 <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-10 border border-white/10 group-hover:bg-[#c5a36b]/10 group-hover:border-[#c5a36b]/30 transition-all duration-500">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-2xl text-white mb-6 group-hover:text-[#c5a36b] transition-colors duration-500">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-400 font-light leading-relaxed text-[16px]">
//                   {service.description}
//                 </p>
//               </div>
//               <button className="mt-10 w-fit px-8 py-3 border border-[#c5a36b]/40 rounded-full text-[11px] uppercase tracking-widest font-semibold text-[#c5a36b] hover:bg-[#c5a36b] hover:text-black transition-all duration-500">
//                 Explore More
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

///// new

"use client";
import React from "react";
import { Diamond, Handshake, Layout } from "lucide-react";
import { motion } from "framer-motion";

export default function WeOffer() {
  const services = [
    {
      title: "Luxury Real Estate Advisory",
      description:
        "Personalized guidance for buyers and investors seeking long-term value in Dubai’s premium real estate market.",
      icon: <Diamond className="w-6 h-6 text-[#c5a36b]" />,
      desktopMargin: "md:mt-24",
    },
    {
      title: "Investment Consulting",
      description:
        "Strategic advice focused on rental demand, appreciation potential, exit planning, and portfolio growth.",
      icon: <Handshake className="w-6 h-6 text-[#c5a36b]" />,
      desktopMargin: "md:mt-0",
    },
    {
      title: "End-to-End Support",
      description:
        "From property shortlisting and booking to documentation, payments, and handover coordination — handled seamlessly.",
      icon: <Layout className="w-6 h-6 text-[#c5a36b]" />,
      desktopMargin: "md:mt-24",
    },
  ];

  return (
    <section
      className="relative w-full overflow-hidden bg-zinc-950"
      style={{ clipPath: "inset(0 0 0 0)" }}
    >
      {/* FIXED BACKGROUND WITH MOBILE FIX */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",

          backgroundAttachment:
            typeof window !== "undefined" && window.innerWidth > 1024
              ? "scroll"
              : "scroll",
        }}
      />

      <div className="absolute -inset-y-2 inset-x-0 z-[1] bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]" />
      <div className="absolute -inset-y-2 inset-x-0 z-[1] bg-black/50" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20 space-y-6"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="h-[1px] w-12 bg-[#c5a36b]/80" />
            <span className="text-[11px] uppercase tracking-[0.5em] font-medium text-[#c5a36b]">
              What We Offer
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl text-white font-light tracking-tight max-w-4xl leading-[1.1]">
            Bringing Vision, Value, and <br className="hidden md:block" />{" "}
            Expertise Together
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-start">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`
                group relative flex flex-col justify-between p-10 rounded-2xl min-h-[420px] 
                border border-white/10 bg-black/40 backdrop-blur-2xl
                hover:border-[#c5a36b]/40 transition-all duration-700 
                ${service.desktopMargin}
              `}
            >
              <div>
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-10 border border-white/10 group-hover:bg-[#c5a36b]/10 group-hover:border-[#c5a36b]/30 transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl text-white mb-6 group-hover:text-[#c5a36b] transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed text-[16px]">
                  {service.description}
                </p>
              </div>
              <button className="mt-10 w-fit px-8 py-3 border border-[#c5a36b]/40 rounded-full text-[11px] uppercase tracking-widest font-semibold text-[#c5a36b] hover:bg-[#c5a36b] hover:text-black transition-all duration-500">
                Explore More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
