// "use client";
// import React from "react";

// export default function CTA() {
//   const lines = [
//     "We are a next-generation platform combining",
//     "AI-driven property analytics and blockchain-secured",
//     "transactions to revolutionize the real estate",
//     "investment process",
//   ];

//   return (
//     <main className=" bg-black font-normal text-white">
//       <div className="mx-auto max-w-[1100px] px-5 pt-[100px]">
//         {/* Container for the lines */}
//         <div className="flex flex-col items-center">
//           {lines.map((line, index) => (
//             <h1
//               key={index}
//               className="overflow-hidden text-center text-[24px] md:text-[30px] leading-[1.0] py-1"
//             >
//               <span
//                 className="block animate-[revealDown_1.2s_cubic-bezier(0.77,0,0.175,1)_both]"
//                 style={{
//                   // Stagger the delay: Line 1 starts at 0.5s, Line 2 at 0.6s, etc.
//                   animationDelay: `${0.5 + index * 0.15}s`,
//                 }}
//               >
//                 {line}
//               </span>
//             </h1>
//           ))}
//         </div>

//         {/* Global Keyframes */}
//         <style jsx global>{`
//           @keyframes revealDown {
//             0% {
//               transform: translateY(-110%);
//             }
//             100% {
//               transform: translateY(0%);
//             }
//           }
//         `}</style>
//       </div>
//     </main>
//   );
// }

// "use client";
// import React from "react";

// export default function CTA() {
//   const lines = [
//     "We are a next-generation platform combining",
//     "AI-driven property analytics and blockchain-secured",
//     "transactions to revolutionize the real estate",
//     "investment process",
//   ];

//   return (
//     <main className="bg-black font-normal text-white min-h-[400px]">
//       <div className="mx-auto max-w-[1100px] px-5 pt-[100px]">
//         <div className="flex flex-col items-center">
//           {lines.map((line, index) => (
//             <h1
//               key={index}
//               className="overflow-hidden text-center text-[24px] md:text-[30px] leading-[1.2] py-1"
//             >
//               <span
//                 className="block animate-[revealDown_1.2s_cubic-bezier(0.77,0,0.175,1)_both]"
//                 style={{
//                   // 1. Force it to stay hidden BEFORE the animation starts
//                   transform: "translateY(-110%)",
//                   // 2. The staggered delay
//                   animationDelay: `${0.5 + index * 0.15}s`,
//                 }}
//               >
//                 {line}
//               </span>
//             </h1>
//           ))}
//         </div>

//         <style jsx global>{`
//           @keyframes revealDown {
//             0% {
//               transform: translateY(-130%);
//             }
//             100% {
//               transform: translateY(0%);
//             }
//           }
//         `}</style>
//       </div>
//     </main>
//   );
// }

// "use client";
// import React from "react";

// export default function CTA() {
//   const content = [
//     { text: "Discover the Anzo Experience", isHeader: true },
//     {
//       text: "At ANZO PROPERTIES, our story began as investors in Dubai’s thriving real estate market a",
//       isHeader: false,
//     },
//     {
//       text: " journey built on capital growth,high-end returns, trust, and lasting relationships. ",
//       isHeader: false,
//     },
//     {
//       text: " Today, that we do, helping clients expand their portfolios with ",
//       isHeader: false,
//     },

//     {
//       text: "precision and confidence.",
//       isHeader: false,
//     },
//     {
//       text: "Our firsthand experience as buyers gives us an intimate understanding of what investors",
//       isHeader: false,
//       spacing: "mt-8",
//     },
//     {
//       text: " truly seek value, transparency, and opportunity. We don’t just connect",
//       isHeader: false,
//     },
//     {
//       text: " clients with properties; we guide them toward the city’s most rewarding",
//       isHeader: false,
//     },
//     {
//       text: " investments in an ever-evolving skyline of innovation and promise.",
//       isHeader: false,
//     },
//   ];

//   return (
//     <main className="bg-black text-white">
//       <div className="mx-auto max-w-[1100px] px-5 pt-[50px] pb-[50px]">
//         <div className="flex flex-col items-center">
//           {content.map((item, index) => (
//             <div
//               key={index}
//               className={`overflow-hidden text-center w-full ${item.spacing || ""}`}
//             >
//               <p
//                 className={`
//                   block will-change-transform
//                   ${item.isHeader ? "text-[32px] md:text-[40px] font-elegant font-bold mb-10" : "text-[18px] md:text-[24px] leading-[1.3] text-gray-300"}
//                 `}
//                 style={{
//                   // These inline styles ensure the element is prepared before animation
//                   animationName: "revealDown",
//                   animationDuration: "1.8s",
//                   animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
//                   animationFillMode: "both",
//                   animationDelay: `${0.5 + index * 0.2}s`,
//                 }}
//               >
//                 {item.text}
//               </p>
//             </div>
//           ))}
//         </div>

//         <style jsx global>{`
//           @keyframes revealDown {
//             0% {
//               transform: translateY(-110%);
//               opacity: 0;
//             }
//             100% {
//               transform: translateY(0%);
//               opacity: 1;
//             }
//           }
//         `}</style>
//       </div>
//     </main>
//   );
// }

///new

// "use client";
// import React, { useState, useEffect } from "react";

// export default function CTA() {
//   // We use this state to "jumpstart" the animation only after the page loads
//   const [startAnim, setStartAnim] = useState(false);

//   useEffect(() => {
//     setStartAnim(true);
//   }, []);

//   const content = [
//     { text: "Discover the Anzo Experience", isHeader: true },
//     {
//       text: "At ANZO PROPERTIES, our story began as investors in Dubai’s thriving real estate market a",
//       isHeader: false,
//     },
//     {
//       text: " journey built on capital growth,high-end returns, trust, and lasting relationships. ",
//       isHeader: false,
//     },
//     {
//       text: " Today, that we do, helping clients expand their portfolios with ",
//       isHeader: false,
//     },
//     {
//       text: "precision and confidence.",
//       isHeader: false,
//     },
//     {
//       text: "Our firsthand experience as buyers gives us an intimate understanding of what investors",
//       isHeader: false,
//       spacing: "mt-8",
//     },
//     {
//       text: " truly seek value, transparency, and opportunity. We don’t just connect",
//       isHeader: false,
//     },
//     {
//       text: " clients with properties; we guide them toward the city’s most rewarding",
//       isHeader: false,
//     },
//     {
//       text: " investments in an ever-evolving skyline of innovation and promise.",
//       isHeader: false,
//     },
//   ];

//   return (
//     <main className="bg-black text-white">
//       <div className="mx-auto max-w-[1100px] px-5 pt-[50px] pb-[50px]">
//         <div className="flex flex-col items-center">
//           {content.map((item, index) => (
//             <div
//               key={index}
//               className={`overflow-hidden text-center w-full ${item.spacing || ""}`}
//             >
//               <p
//                 className={`
//                   block will-change-transform
//                   ${item.isHeader ? "text-[32px] md:text-[40px] font-elegant font-medium mb-10" : "text-[18px] md:text-[24px] leading-[1.3] text-gray-300"}
//                 `}
//                 style={{
//                   // Animation only runs if startAnim is true
//                   animationName: startAnim ? "revealDown" : "none",
//                   animationDuration: "1.8s",
//                   animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
//                   animationFillMode: "both",
//                   animationDelay: `${0.5 + index * 0.2}s`,
//                   // Keeps text hidden until animation starts
//                   opacity: startAnim ? undefined : 0,
//                 }}
//               >
//                 {item.text}
//               </p>
//             </div>
//           ))}
//         </div>

//         <style jsx global>{`
//           @keyframes revealDown {
//             0% {
//               transform: translateY(-110%);
//               opacity: 0;
//             }
//             100% {
//               transform: translateY(0%);
//               opacity: 1;
//             }
//           }
//         `}</style>
//       </div>
//     </main>
//   );
// }

//////new word by word animated

// "use client";
// import React, { useState, useEffect } from "react";

// export default function CTA() {
//   const [startAnim, setStartAnim] = useState(false);

//   useEffect(() => {
//     setStartAnim(true);
//   }, []);

//   const content = [
//     { text: "Discover the Anzo Experience", isHeader: true },
//     {
//       text: "At ANZO PROPERTIES, our story began as investors in Dubai’s thriving real estate market a",
//       isHeader: false,
//     },
//     {
//       text: " journey built on capital growth, high-end returns, trust, and lasting relationships.",
//       isHeader: false,
//     },
//     {
//       text: " Today, that we do, helping clients expand their portfolios with",
//       isHeader: false,
//     },
//     {
//       text: " precision and confidence.",
//       isHeader: false,
//     },
//     {
//       text: "Our firsthand experience as buyers gives us an intimate understanding of what investors",
//       isHeader: false,
//       spacing: "mt-8",
//     },
//     {
//       text: " truly seek value, transparency, and opportunity. We don’t just connect",
//       isHeader: false,
//     },
//     {
//       text: " clients with properties; we guide them toward the city’s most rewarding",
//       isHeader: false,
//     },
//     {
//       text: " investments in an ever-evolving skyline of innovation and promise.",
//       isHeader: false,
//     },
//   ];

//   let wordIndex = 0;

//   return (
//     <main className="bg-black text-white">
//       <div className="mx-auto max-w-[1100px] px-5 pt-[50px] pb-[50px]">
//         <div className="flex flex-col items-center text-center">
//           {content.map((item, index) => (
//             <div
//               key={index}
//               className={`overflow-hidden w-full ${item.spacing || ""}`}
//             >
//               <p
//                 className={`flex flex-wrap justify-center
//                   ${
//                     item.isHeader
//                       ? "text-[32px] md:text-[40px] font-elegant font-medium mb-10"
//                       : "text-[18px] md:text-[24px] leading-[1.3] text-gray-300"
//                   }
//                 `}
//               >
//                 {item.text.split(" ").map((word, i) => {
//                   const delay = 0.3 + wordIndex * 0.08;
//                   wordIndex++;

//                   return (
//                     <span
//                       key={i}
//                       className="inline-block overflow-hidden mr-[6px]"
//                     >
//                       <span
//                         className="inline-block will-change-transform"
//                         style={{
//                           animationName: startAnim ? "revealDown" : "none",
//                           animationDuration: "1.4s",
//                           animationTimingFunction:
//                             "cubic-bezier(0.16, 1, 0.3, 1)",
//                           animationFillMode: "both",
//                           animationDelay: `${delay}s`,
//                           opacity: startAnim ? undefined : 0,
//                         }}
//                       >
//                         {word}
//                       </span>
//                     </span>
//                   );
//                 })}
//               </p>
//             </div>
//           ))}
//         </div>

//         <style jsx global>{`
//           @keyframes revealDown {
//             0% {
//               transform: translateY(-120%);
//               opacity: 0;
//             }
//             100% {
//               transform: translateY(0%);
//               opacity: 1;
//             }
//           }
//         `}</style>
//       </div>
//     </main>
//   );
// }

/////new on view

// "use client";
// import React, { useState, useEffect, useRef } from "react";

// export default function CTA() {
//   const [startAnim, setStartAnim] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setStartAnim(true);
//           observer.disconnect(); // animate only once
//         }
//       },
//       { threshold: 0.3 },
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => observer.disconnect();
//   }, []);

//   const content = [
//     { text: "Discover the Anzo Experience", isHeader: true },
//     {
//       text: "At ANZO PROPERTIES, our story began as investors in Dubai’s thriving real estate market a",
//       isHeader: false,
//     },
//     {
//       text: " journey built on capital growth, high-end returns, trust, and lasting relationships.",
//       isHeader: false,
//     },
//     {
//       text: " Today, that we do, helping clients expand their portfolios with",
//       isHeader: false,
//     },
//     { text: " precision and confidence.", isHeader: false },
//     {
//       text: "Our firsthand experience as buyers gives us an intimate understanding of what investors",
//       isHeader: false,
//       spacing: "mt-8",
//     },
//     {
//       text: " truly seek value, transparency, and opportunity. We don’t just connect",
//       isHeader: false,
//     },
//     {
//       text: " clients with properties; we guide them toward the city’s most rewarding",
//       isHeader: false,
//     },
//     {
//       text: " investments in an ever-evolving skyline of innovation and promise.",
//       isHeader: false,
//     },
//   ];

//   let wordIndex = 0;

//   return (
//     <main ref={sectionRef} className="bg-black text-white">
//       <div className="mx-auto max-w-[1100px] px-5 pt-[50px] pb-[50px]">
//         <div className="flex flex-col items-center text-center">
//           {content.map((item, index) => (
//             <div
//               key={index}
//               className={`overflow-hidden w-full ${item.spacing || ""}`}
//             >
//               <p
//                 className={`flex flex-wrap justify-center ${
//                   item.isHeader
//                     ? "text-[32px] md:text-[40px] font-[var(--font-libertinus)] font-normal mb-10"
//                     : "text-[18px] md:text-[24px] leading-[1.3] text-gray-300"
//                 }`}
//               >
//                 {item.text.split(" ").map((word, i) => {
//                   const delay = 0.3 + wordIndex * 0.08;
//                   wordIndex++;

//                   return (
//                     <span
//                       key={i}
//                       className="inline-block overflow-hidden mr-[6px]"
//                     >
//                       <span
//                         className="inline-block will-change-transform"
//                         style={{
//                           animationName: startAnim ? "revealDown" : "none",
//                           animationDuration: "1.4s",
//                           animationTimingFunction:
//                             "cubic-bezier(0.16, 1, 0.3, 1)",
//                           animationFillMode: "both",
//                           animationDelay: `${delay}s`,
//                           opacity: startAnim ? undefined : 0,
//                         }}
//                       >
//                         {word}
//                       </span>
//                     </span>
//                   );
//                 })}
//               </p>
//             </div>
//           ))}
//           <div className="pt-8">
//             {/* <button className="px-8 py-2 cursor-pointer bg-transparent text-white font-medium rounded-sm shadow-lg border border-[#d6b56a] transition-all">
//               About Us
//             </button> */}
//             <button className="w-fit px-8 py-3 border border-[#c5a36b]/40 rounded-full text-[13px] uppercase tracking-widest font-semibold text-[#c5a36b] hover:bg-[#c5a36b] hover:text-black transition-all duration-500">
//               About Us
//             </button>
//           </div>
//         </div>

//         <style jsx global>{`
//           @keyframes revealDown {
//             0% {
//               transform: translateY(-120%);
//               opacity: 0;
//             }
//             100% {
//               transform: translateY(0%);
//               opacity: 1;
//             }
//           }
//         `}</style>
//       </div>
//     </main>
//   );
// }

//// on scroll

// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// export default function CTA() {
//   const content = [
//     { text: "Discover the Anzo Experience", isHeader: true },
//     {
//       text: "At ANZO PROPERTIES, our story began as investors in Dubai’s thriving real estate market a",
//       isHeader: false,
//     },
//     {
//       text: " journey built on capital growth, high-end returns, trust, and lasting relationships.",
//       isHeader: false,
//     },
//     {
//       text: " Today, that we do, helping clients expand their portfolios with",
//       isHeader: false,
//     },
//     { text: " precision and confidence.", isHeader: false },
//     {
//       text: "Our firsthand experience as buyers gives us an intimate understanding of what investors",
//       isHeader: false,
//       spacing: "mt-8",
//     },
//     {
//       text: " truly seek value, transparency, and opportunity. We don’t just connect",
//       isHeader: false,
//     },
//     {
//       text: " clients with properties; we guide them toward the city’s most rewarding",
//       isHeader: false,
//     },
//     {
//       text: " investments in an ever-evolving skyline of innovation and promise.",
//       isHeader: false,
//     },
//   ];

//   return (
//     // Extra padding ensures you can scroll the text through the center of the screen
//     <main className="bg-black text-white py-12">
//       <div className="mx-auto max-w-[1100px] px-5">
//         <div className="flex flex-col items-center text-center">
//           {content.map((item, index) => (
//             <div key={index} className={`w-full ${item.spacing || ""}`}>
//               <p
//                 // className={`flex flex-wrap justify-center ${
//                 //   item.isHeader
//                 //     ? "text-[32px] md:text-[45px]  mb-10 text-white"
//                 //     : "text-[18px] md:text-[24px] leading-[1.4] text-gray-500"
//                 // }`}
//                 className={`flex flex-wrap justify-center ${
//                   item.isHeader
//                     ? "text-[32px] md:text-[40px] font-[var(--font-libertinus)] font-normal mb-10"
//                     : "text-[18px] md:text-[24px] leading-[1.3] text-gray-300"
//                 }`}
//               >
//                 {item.text.split(" ").map((word, i) => (
//                   <ScrollWord key={i} word={word} />
//                 ))}
//               </p>
//             </div>
//           ))}

//           <button className="mt-20 px-10 py-4 border border-[#c5a36b]/40 rounded-full text-[13px] uppercase tracking-widest font-semibold text-[#c5a36b] hover:bg-[#c5a36b] hover:text-black transition-all duration-500">
//             About Us
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }

// function ScrollWord({ word }) {
//   const wordRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: wordRef,
//     // Start animation when word is 90% down the screen
//     // Finish animation when word reaches 60% (near center)
//     offset: ["start 0.95", "start 0.6"],
//   });

//   // Smooth out the movement so it doesn't jitter with the scroll wheel
//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 20,
//   });

//   // REVEAL DOWN LOGIC:
//   // Start at -100% (completely hidden above the container)
//   // End at 0% (its natural position)
//   const y = useTransform(smoothProgress, [0, 1], ["-100%", "0%"]);

//   // Opacity and color change to make the reveal "pop"
//   const opacity = useTransform(smoothProgress, [0, 0.5], [0, 1]);
//   const color = useTransform(smoothProgress, [0, 1], ["#1a1a1a", "#ffffff"]);

//   return (
//     <span
//       ref={wordRef}
//       className="relative inline-block overflow-hidden mr-[8px] py-[2px]"
//     >
//       <motion.span
//         style={{ y, opacity, color }}
//         className="inline-block will-change-transform"
//       >
//         {word}
//       </motion.span>
//     </span>
//   );
// }

/////solved

// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// // 1. Define the type for your content objects
// interface ContentSection {
//   text: string;
//   isHeader: boolean;
//   spacing?: string;
// }

// const content: ContentSection[] = [
//   { text: "Discover the Anzo Experience", isHeader: true },
//   {
//     text: "At ANZO PROPERTIES, our story began as investors in Dubai’s thriving real estate market a",
//     isHeader: false,
//   },
//   {
//     text: " journey built on capital growth, high-end returns, trust, and lasting relationships.",
//     isHeader: false,
//   },
//   {
//     text: " Today, that we do, helping clients expand their portfolios with",
//     isHeader: false,
//   },
//   { text: " precision and confidence.", isHeader: false },
//   {
//     text: "Our firsthand experience as buyers gives us an intimate understanding of what investors",
//     isHeader: false,
//     spacing: "mt-8",
//   },
//   {
//     text: " truly seek value, transparency, and opportunity. We don’t just connect",
//     isHeader: false,
//   },
//   {
//     text: " clients with properties; we guide them toward the city’s most rewarding",
//     isHeader: false,
//   },
//   {
//     text: " investments in an ever-evolving skyline of innovation and promise.",
//     isHeader: false,
//   },
// ];

// export default function CTA() {
//   return (
//     <main className="bg-black text-white py-12">
//       <div className="mx-auto max-w-[1100px] px-5">
//         <div className="flex flex-col items-center text-center">
//           {content.map((item, index) => (
//             <div key={index} className={`w-full ${item.spacing || ""}`}>
//               <p
//                 className={`flex flex-wrap justify-center ${
//                   item.isHeader
//                     ? "text-[32px] md:text-[40px] font-[var(--font-libertinus)] font-normal mb-10"
//                     : "text-[18px] md:text-[24px] leading-[1.3] text-gray-300"
//                 }`}
//               >
//                 {item.text.split(" ").map((word, i) => (
//                   <ScrollWord key={i} word={word} />
//                 ))}
//               </p>
//             </div>
//           ))}

//           <button className="mt-12 px-10 py-4 border border-[#c5a36b]/40 rounded-full text-[13px] uppercase tracking-widest font-semibold text-[#c5a36b] hover:bg-[#c5a36b] hover:text-black transition-all duration-500">
//             About Us
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }

// // 2. Add Type for the props
// interface ScrollWordProps {
//   word: string;
// }

// function ScrollWord({ word }: ScrollWordProps) {
//   // 3. Define the Ref type as HTMLSpanElement
//   const wordRef = useRef<HTMLSpanElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: wordRef,
//     offset: ["start 0.95", "start 0.6"],
//   });

//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 20,
//   });

//   const y = useTransform(smoothProgress, [0, 1], ["-100%", "0%"]);
//   const opacity = useTransform(smoothProgress, [0, 0.5], [0, 1]);
//   const color = useTransform(smoothProgress, [0, 1], ["#1a1a1a", "#ffffff"]);

//   return (
//     <span
//       ref={wordRef}
//       className="relative inline-block overflow-hidden mr-[8px] py-[1px]"
//     >
//       <motion.span
//         style={{ y, opacity, color }}
//         className="inline-block will-change-transform"
//       >
//         {word}
//       </motion.span>
//     </span>
//   );
// }

////new separeate
"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// 1. Define the type for your content objects
interface ContentSection {
  text: string;
  isHeader: boolean;
  spacing?: string;
}

const content: ContentSection[] = [
  { text: "Discover the Anzo Experience", isHeader: true },
  {
    text: "At ANZO PROPERTIES, our story began as investors in Dubai’s thriving real estate market a",
    isHeader: false,
  },
  {
    text: " journey built on capital growth, high-end returns, trust, and lasting relationships.",
    isHeader: false,
  },
  {
    text: " Today, that we do, helping clients expand their portfolios with",
    isHeader: false,
  },
  { text: " precision and confidence.", isHeader: false },
  {
    text: "Our firsthand experience as buyers gives us an intimate understanding of what investors",
    isHeader: false,
    spacing: "mt-8",
  },
  {
    text: " truly seek value, transparency, and opportunity. We don’t just connect",
    isHeader: false,
  },
  {
    text: " clients with properties; we guide them toward the city’s most rewarding",
    isHeader: false,
  },
  {
    text: " investments in an ever-evolving skyline of innovation and promise.",
    isHeader: false,
  },
];

export default function CTA() {
  return (
    <main className="bg-black text-white py-12">
      <div className="mx-auto max-w-[1100px] px-5">
        <div className="flex flex-col items-center text-center">
          {content.map((item, index) => (
            <div key={index} className={`w-full ${item.spacing || ""}`}>
              <p
                className={`flex flex-wrap justify-center ${
                  item.isHeader
                    ? "text-[32px] md:text-[40px] font-[var(--font-libertinus)] font-normal mb-10"
                    : "text-[18px] md:text-[24px] leading-[1.3] text-gray-300"
                }`}
              >
                {item.text.split(" ").map((word, i) => (
                  <React.Fragment key={i}>
                    <ScrollWord word={word} />
                    {/* Replaced mr-[8px] with a real space for smoother browser rendering */}
                    <span>&nbsp;</span>
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}

          <button className="mt-12 px-10 py-4 border border-[#c5a36b]/40 rounded-full text-[13px] uppercase tracking-widest font-semibold text-[#c5a36b] hover:bg-[#c5a36b] hover:text-black transition-all duration-500">
            About Us
          </button>
        </div>
      </div>
    </main>
  );
}

// 2. Add Type for the props
interface ScrollWordProps {
  word: string;
}

function ScrollWord({ word }: ScrollWordProps) {
  // 3. Define the Ref type as HTMLSpanElement
  const wordRef = useRef<HTMLSpanElement>(null);

  const { scrollYProgress } = useScroll({
    target: wordRef,
    offset: ["start 0.95", "start 0.6"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  const y = useTransform(smoothProgress, [0, 1], ["-100%", "0%"]);
  const opacity = useTransform(smoothProgress, [0, 0.5], [0, 1]);
  const color = useTransform(smoothProgress, [0, 1], ["#1a1a1a", "#ffffff"]);

  return (
    <span
      ref={wordRef}
      className="relative inline-block overflow-hidden py-[1px]"
      style={{ verticalAlign: "bottom" }} // Prevents jittery baseline alignment
    >
      <motion.span
        style={{
          y,
          opacity,
          color,
          WebkitFontSmoothing: "antialiased", // Keeps text sharp during animation
        }}
        className="inline-block will-change-transform"
      >
        {word}
      </motion.span>
    </span>
  );
}
