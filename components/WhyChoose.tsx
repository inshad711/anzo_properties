// import React, { useEffect, useState } from "react";
// import { Home, Hammer, Diamond, ChevronRight } from "lucide-react";

// /**
//  * FeatureCard Component
//  * Matches the right-hand side layout of the image.
//  * Uses a horizontal flex layout with the icon on the right as seen in the image.
//  */
// const FeatureCard = ({ icon: Icon, title, description, delay }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), delay);
//     return () => clearTimeout(timer);
//   }, [delay]);

//   return (
//     <div
//       className={`group relative flex items-center justify-between p-8 rounded-xl border border-white/5 bg-[#0f0f0f] transition-all duration-1000 ease-out transform ${
//         isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
//       } hover:border-white/10 hover:bg-[#141414]`}
//     >
//       <div className="flex-1 pr-8">
//         <h3 className="text-2xl font-serif text-white mb-2 tracking-wide">
//           {title}
//         </h3>
//         <p className="text-zinc-400 text-sm leading-relaxed font-light max-w-md">
//           {description}
//         </p>
//       </div>

//       {/* Icon Container - Darker square with thin gold/tan icon */}
//       <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-lg bg-[#1a1a1a] border border-white/5 group-hover:scale-105 transition-transform duration-500">
//         <Icon size={28} strokeWidth={1} className="text-[#c5a67c]" />
//       </div>
//     </div>
//   );
// };

// const WhyChooseSection = () => {
//   const [headerVisible, setHeaderVisible] = useState(false);

//   useEffect(() => {
//     setHeaderVisible(true);
//   }, []);

//   const features = [
//     {
//       icon: Home,
//       title: "Advisory-First Approach",
//       description:
//         "We act as consultants, not salespeople. Your interest always comes first.",
//       delay: 300,
//     },
//     {
//       icon: Hammer, // Using Hammer as a visual proxy for the tool icon in image
//       title: "Prime Locations Only",
//       description:
//         "Only projects backed by strong fundamentals, connectivity, and demand.",
//       delay: 500,
//     },
//     {
//       icon: Diamond,
//       title: "Transparent Process",
//       description: "Clear pricing, realistic timelines, and zero confusion.",
//       delay: 700,
//     },
//   ];

//   return (
//     <section className="min-h-screen bg-black text-white py-20 px-6 md:px-12 lg:px-24 flex items-center overflow-hidden">
//       <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
//         {/* Left Content Side */}
//         <div
//           className={`space-y-10 transition-all duration-1000 ease-out transform ${headerVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
//         >
//           <div className="space-y-6">
//             <div className="flex items-center gap-4">
//               <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-100 uppercase">
//                 Why Choose Karimi Real Estate
//               </span>
//               <div className="h-[1px] w-24 bg-white/20"></div>
//             </div>

//             <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] tracking-tight text-white">
//               Where Trust, Strategy, <br />
//               and Luxury Align
//             </h2>
//           </div>

//           <div className="space-y-6 max-w-xl">
//             <p className="text-zinc-400 text-xl leading-relaxed">
//               Buying property in another country is a major decision. <br />
//               Our responsibility is to make that decision{" "}
//               <strong className="text-white font-semibold">
//                 clear, transparent, and secure
//               </strong>
//               .
//             </p>

//             <div className="space-y-2 text-zinc-400 text-lg">
//               <p>We don't rush you.</p>
//               <p>We educate you.</p>
//               <p>We stay honest — even if that means advising you to wait.</p>
//             </div>

//             <p className="text-zinc-300 text-lg pt-4">
//               That's why our clients come back and refer others.
//             </p>
//           </div>
//         </div>

//         {/* Right Cards Side */}
//         <div className="flex flex-col gap-6 w-full max-w-xl ml-auto">
//           {features.map((feature, index) => (
//             <FeatureCard
//               key={index}
//               icon={feature.icon}
//               title={feature.title}
//               description={feature.description}
//               delay={feature.delay}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default function WhyChoose() {
//   return (
//     <div className="bg-black min-h-screen selection:bg-[#c5a67c] selection:text-black">
//       <WhyChooseSection />
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import { Home, Hammer, Diamond, LucideIcon } from "lucide-react";

/**
 * Interface for FeatureCard Props
 */
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

/**
 * FeatureCard Component
 */
const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  delay,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`group relative flex items-center justify-between p-8 rounded-xl border border-white/5 bg-[#0f0f0f] transition-all duration-1000 ease-out transform ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
      } hover:border-white/10 hover:bg-[#141414]`}
    >
      <div className="flex-1 pr-8">
        <h3 className="text-2xl text-white mb-2 tracking-wide">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed font-light max-w-md">
          {description}
        </p>
      </div>

      {/* Icon Container - Darker square with thin gold/tan icon */}
      <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-lg bg-[#1a1a1a] border border-white/5 group-hover:scale-105 transition-transform duration-500">
        <Icon size={28} strokeWidth={1} className="text-[#c5a67c]" />
      </div>
    </div>
  );
};

/**
 * Main Section Component
 */
const WhyChooseSection: React.FC = () => {
  const [headerVisible, setHeaderVisible] = useState<boolean>(false);

  useEffect(() => {
    setHeaderVisible(true);
  }, []);

  const features: FeatureCardProps[] = [
    {
      icon: Home,
      title: "Advisory-First Approach",
      description:
        "We act as consultants, not salespeople. Your interest always comes first.",
      delay: 300,
    },
    {
      icon: Hammer,
      title: "Prime Locations Only",
      description:
        "Only projects backed by strong fundamentals, connectivity, and demand.",
      delay: 500,
    },
    {
      icon: Diamond,
      title: "Transparent Process",
      description: "Clear pricing, realistic timelines, and zero confusion.",
      delay: 700,
    },
    {
      icon: Home,
      title: "Advisory-First Approach",
      description:
        "We act as consultants, not salespeople. Your interest always comes first.",
      delay: 800,
    },
    {
      icon: Hammer,
      title: "Prime Locations Only",
      description:
        "Only projects backed by strong fundamentals, connectivity, and demand.",
      delay: 900,
    },
    {
      icon: Diamond,
      title: "Transparent Process",
      description: "Clear pricing, realistic timelines, and zero confusion.",
      delay: 1000,
    },
  ];

  return (
    <section className="bg-black text-white py-20 flex items-center overflow-hidden">
      <div className="templateContainer w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
        {/* Left Content Side */}
        <div
          className={`space-y-10 transition-all duration-1000 ease-out transform ${
            headerVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-100 uppercase">
                Why Choose Karimi Real Estate
              </span>
              <div className="h-[1px] w-24 bg-white/20"></div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-snug tracking-[1.1] text-white">
              Where Trust, Strategy, <br />
              and Luxury Align
            </h2>
          </div>

          <div className="space-y-6 max-w-xl">
            <p className="text-zinc-400 text-xl leading-relaxed">
              Buying property in another country is a major decision. <br />
              Our responsibility is to make that decision{" "}
              <strong className="text-white font-semibold">
                clear, transparent, and secure
              </strong>
              .
            </p>

            <div className="space-y-2 text-zinc-400 text-lg">
              <p>We don't rush you.</p>
              <p>We educate you.</p>
              <p>We stay honest — even if that means advising you to wait.</p>
            </div>

            <p className="text-zinc-300 text-lg pt-4">
              That's why our clients come back and refer others.
            </p>
          </div>
        </div>

        {/* Right Cards Side */}
        <div className="flex flex-col gap-6 w-full max-w-xl ml-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default function WhyChoose() {
  return (
    <div className="bg-black min-h-screen selection:bg-[#c5a67c] selection:text-black">
      <WhyChooseSection />
    </div>
  );
}
