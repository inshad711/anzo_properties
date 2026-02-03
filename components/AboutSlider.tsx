// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const developers = [
//   {
//     id: "emaar-properties",
//     name: "Emaar Properties",
//     count: "209 projects",
//     logo: "https://new-projects-media.propertyfinder.com/developer/79ca4333-9975-4672-b05f-bb7329de75e9/logo/image/SXDm9h3dbO4shNsEGYyX31DwTU98MpFSxR1sEuT7LsE=/original.png",
//   },
//   {
//     id: "azizi-developments",
//     name: "Azizi Developments",
//     count: "110 projects",
//     logo: "https://new-projects-media.propertyfinder.com/developer/90728d48-7a7d-4d3a-ba4a-145890eae6c1/logo/image/dRxSykZ1jpsPTL2pud5WlGzCiHxu1ruhz51uHFm4pDM=/original.png",
//   },
//   {
//     id: "aldar-properties-pjsc",
//     name: "Aldar Properties PJSC",
//     count: "93 projects",
//     logo: "https://new-projects-media.propertyfinder.com/developer/d0853b8e-c92f-4b7e-a4e2-a5b67955ba7d/logo/image/k1MoKKBF5CIZjwQ0XbOWkxs3heXc0pV6lcQMvgLaKws=/original.png",
//   },
//   {
//     id: "damac-properties",
//     name: "Damac Properties",
//     count: "77 projects",
//     logo: "https://new-projects-media.propertyfinder.com/developer/1063a07c-d94f-496b-9a24-5ea7409fe3d1/logo/image/O3p2VHWzQX9-Duzqi1vbOjp2tSlHIwJ1sjRjvTA7h68=/original.png",
//   },
//   {
//     id: "sobha-realty",
//     name: "Sobha Realty",
//     count: "71 projects",
//     logo: "https://new-projects-media.propertyfinder.com/developer/8a509d77-0b04-4669-9a78-d9fd5cdc78da/logo/image/L_UdmunePjPgB1sOpqj1TlbZ1NTOchKK8RtZ4QaqWa8=/original.png",
//   },
//   {
//     id: "ellington",
//     name: "Ellington",
//     count: "65 projects",
//     logo: "https://new-projects-media.propertyfinder.com/developer/a3178484-ee0c-466d-9fe3-92b231607234/logo/image/lOHO4BsD8PHWqSJqPEhmlwI9IVDDUB_SqSqssrZM_mE=/original.png",
//   },
//   {
//     id: "binghatti-developers",
//     name: "Binghatti Developers",
//     count: "62 projects",
//     logo: "https://new-projects-media.propertyfinder.com/developer/db16d589-88c5-4428-899b-db54b1d7ef7a/logo/image/R9cUN2yisO8tn7iOykZ1i_JjpbtuMvZjLYbLY7sV8fE=/original.png",
//   },
//   {
//     id: "meraas-holding",
//     name: "Meraas Holding",
//     count: "61 projects",
//     logo: "https://new-projects-media.propertyfinder.com/developer/831c8b0f-8adb-4fa5-94e9-0b123aa91a1a/logo/image/Khm513Li-0EP7_xCCxbyA3QlHudwwiTkvOG5Rz5KI1Y=/original.png",
//   },
// ];

// export default function AboutSlider() {
//   const scrollRef = useRef(null);
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);

//   const checkScroll = () => {
//     if (scrollRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//       setCanScrollLeft(scrollLeft > 0);
//       setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
//     }
//   };

//   useEffect(() => {
//     checkScroll();
//     window.addEventListener("resize", checkScroll);
//     return () => window.removeEventListener("resize", checkScroll);
//   }, []);

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = 300;
//       scrollRef.current.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
//       <div className="max-w-7xl mx-auto">
//         {/* Carousel Container */}
//         <div className="relative group">
//           {/* Header & Navigation */}
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-xl md:text-2xl font-semibold text-slate-800">
//               Projects by developers in the UAE
//             </h2>

//             <div className="flex items-center space-x-2">
//               <button
//                 onClick={() => scroll("left")}
//                 disabled={!canScrollLeft}
//                 className={`p-2 rounded-full border transition-all duration-200 ${
//                   canScrollLeft
//                     ? "border-gray-300 text-gray-700 hover:bg-gray-100 cursor-pointer"
//                     : "border-gray-100 text-gray-300 cursor-not-allowed"
//                 }`}
//                 aria-label="Previous item"
//               >
//                 <ChevronLeft size={24} />
//               </button>
//               <button
//                 onClick={() => scroll("right")}
//                 disabled={!canScrollRight}
//                 className={`p-2 rounded-full border transition-all duration-200 ${
//                   canScrollRight
//                     ? "border-gray-300 text-gray-700 hover:bg-gray-100 cursor-pointer"
//                     : "border-gray-100 text-gray-300 cursor-not-allowed"
//                 }`}
//                 aria-label="Next item"
//               >
//                 <ChevronRight size={24} />
//               </button>
//             </div>
//           </div>

//           {/* Scrollable Area */}
//           <div
//             ref={scrollRef}
//             onScroll={checkScroll}
//             className="flex space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
//             style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//           >
//             {developers.map((dev) => (
//               <div
//                 key={dev.id}
//                 className="flex-none w-[200px] md:w-[240px] snap-start"
//               >
//                 <a
//                   href={`#${dev.id}`}
//                   className="group/card block h-full transition-transform duration-200 active:scale-95"
//                 >
//                   {/* Card Content */}
//                   <div className="flex flex-col">
//                     {/* Logo Box */}
//                     <div className="aspect-[4/3] w-full border border-gray-100 rounded-lg bg-white flex items-center justify-center p-6 shadow-sm group-hover/card:shadow-md transition-shadow duration-200 overflow-hidden relative">
//                       <img
//                         src={dev.logo}
//                         alt={`${dev.name} Logo`}
//                         className="max-w-full max-h-full object-contain filter grayscale group-hover/card:grayscale-0 transition-all duration-300"
//                         onError={(e) => {
//                           e.target.src =
//                             "https://via.placeholder.com/150?text=Logo";
//                         }}
//                       />
//                     </div>

//                     {/* Text Info */}
//                     <div className="mt-3">
//                       <h3 className="text-base font-semibold text-slate-900 line-clamp-1 group-hover/card:text-blue-700 transition-colors">
//                         {dev.name}
//                       </h3>
//                       <p className="text-sm text-slate-500 mt-0.5">
//                         {dev.count}
//                       </p>
//                     </div>
//                   </div>
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Footer Link */}
//         <div className="mt-8 flex justify-center">
//           <a
//             href="#"
//             className="inline-flex items-center px-6 py-2.5 rounded-lg bg-blue-50 text-blue-700 font-medium hover:bg-blue-100 transition-colors border border-blue-100"
//           >
//             All developers in UAE
//           </a>
//         </div>
//       </div>

//       {/* Hide Scrollbar CSS */}
//       <style>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// }

// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// interface Developer {
//   id: string;
//   name: string;
//   count: string;
//   logo: string;
// }

// const developers: Developer[] = [
//   {
//     id: "emaar-properties",
//     name: "Emaar Properties",
//     count: "209 projects",
//     logo: "https://new-projects-media.propertyfinder.com/developer/79ca4333-9975-4672-b05f-bb7329de75e9/logo/image/SXDm9h3dbO4shNsEGYyX31DwTU98MpFSxR1sEuT7LsE=/original.png",
//   },
//   {
//     id: "azizi-developments",
//     name: "Azizi Developments",
//     count: "110 projects",
//     logo: "https://new-projects-media.propertyfinder.com/developer/90728d48-7a7d-4d3a-ba4a-145890eae6c1/logo/image/dRxSykZ1jpsPTL2pud5WlGzCiHxu1ruhz51uHFm4pDM=/original.png",
//   },
//   {
//     id: "aldar-properties-pjsc",
//     name: "Aldar Properties PJSC",
//     count: "93 projects",
//     logo: "https://new-projects-media.propertyfinder.com/developer/d0853b8e-c92f-4b7e-a4e2-a5b67955ba7d/logo/image/k1MoKKBF5CIZjwQ0XbOWkxs3heXc0pV6lcQMvgLaKws=/original.png",
//   },
//   {
//     id: "damac-properties",
//     name: "Damac Properties",
//     count: "77 projects",
//     logo: "https://new-projects-media.propertyfinder.com/developer/1063a07c-d94f-496b-9a24-5ea7409fe3d1/logo/image/O3p2VHWzQX9-Duzqi1vbOjp2tSlHIwJ1sjRjvTA7h68=/original.png",
//   },
//   {
//     id: "sobha-realty",
//     name: "Sobha Realty",
//     count: "71 projects",
//     logo: "https://new-projects-media.propertyfinder.com/developer/8a509d77-0b04-4669-9a78-d9fd5cdc78da/logo/image/L_UdmunePjPgB1sOpqj1TlbZ1NTOchKK8RtZ4QaqWa8=/original.png",
//   },
//   {
//     id: "ellington",
//     name: "Ellington",
//     count: "65 projects",
//     logo: "https://new-projects-media.propertyfinder.com/developer/a3178484-ee0c-466d-9fe3-92b231607234/logo/image/lOHO4BsD8PHWqSJqPEhmlwI9IVDDUB_SqSqssrZM_mE=/original.png",
//   },
//   {
//     id: "binghatti-developers",
//     name: "Binghatti Developers",
//     count: "62 projects",
//     logo: "https://new-projects-media.propertyfinder.com/developer/db16d589-88c5-4428-899b-db54b1d7ef7a/logo/image/R9cUN2yisO8tn7iOykZ1i_JjpbtuMvZjLYbLY7sV8fE=/original.png",
//   },
//   {
//     id: "meraas-holding",
//     name: "Meraas Holding",
//     count: "61 projects",
//     logo: "https://new-projects-media.propertyfinder.com/developer/831c8b0f-8adb-4fa5-94e9-0b123aa91a1a/logo/image/Khm513Li-0EP7_xCCxbyA3QlHudwwiTkvOG5Rz5KI1Y=/original.png",
//   },
// ];

// export default function AboutSlider() {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
//   const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

//   const checkScroll = () => {
//     if (scrollRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//       setCanScrollLeft(scrollLeft > 0);
//       setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
//     }
//   };

//   useEffect(() => {
//     checkScroll();
//     window.addEventListener("resize", checkScroll);
//     return () => window.removeEventListener("resize", checkScroll);
//   }, []);

//   const scroll = (direction: "left" | "right") => {
//     if (scrollRef.current) {
//       const scrollAmount = 300;
//       scrollRef.current.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 font-sans">
//       <div className="max-w-7xl mx-auto">
//         <div className="relative group">
//           {/* Header & Navigation */}
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-lg md:text-xl font-semibold text-slate-800">
//               Projects by developers in the UAE
//             </h2>

//             <div className="flex items-center space-x-2">
//               <button
//                 onClick={() => scroll("left")}
//                 disabled={!canScrollLeft}
//                 className={`p-1.5 rounded-full border transition-all duration-200 ${
//                   canScrollLeft
//                     ? "border-gray-300 text-gray-700 hover:bg-gray-100 cursor-pointer"
//                     : "border-gray-100 text-gray-300 cursor-not-allowed"
//                 }`}
//                 aria-label="Previous item"
//               >
//                 <ChevronLeft size={20} />
//               </button>
//               <button
//                 onClick={() => scroll("right")}
//                 disabled={!canScrollRight}
//                 className={`p-1.5 rounded-full border transition-all duration-200 ${
//                   canScrollRight
//                     ? "border-gray-300 text-gray-700 hover:bg-gray-100 cursor-pointer"
//                     : "border-gray-100 text-gray-300 cursor-not-allowed"
//                 }`}
//                 aria-label="Next item"
//               >
//                 <ChevronRight size={20} />
//               </button>
//             </div>
//           </div>

//           {/* Scrollable Area */}
//           <div
//             ref={scrollRef}
//             onScroll={checkScroll}
//             className="flex space-x-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
//             style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//           >
//             {developers.map((dev) => (
//               <div
//                 key={dev.id}
//                 className="flex-none w-[180px] md:w-[220px] snap-start"
//               >
//                 <a
//                   href={`#${dev.id}`}
//                   className="group/card block transition-transform duration-200 active:scale-95"
//                 >
//                   <div className="flex flex-col">
//                     {/* Logo Box - Lowered Height with 16:9 Aspect Ratio */}
//                     <div className="aspect-[16/9] w-full border border-gray-100 rounded-lg bg-white flex items-center justify-center p-3 shadow-sm group-hover/card:shadow-md transition-shadow duration-200 overflow-hidden">
//                       <img
//                         src={dev.logo}
//                         alt={`${dev.name} Logo`}
//                         className="max-w-full max-h-full object-contain filter grayscale group-hover/card:grayscale-0 transition-all duration-300"
//                         onError={(e) => {
//                           (e.target as HTMLImageElement).src =
//                             "https://via.placeholder.com/150?text=Logo";
//                         }}
//                       />
//                     </div>

//                     {/* Text Info - Compact Spacing */}
//                     <div className="mt-2 px-0.5">
//                       <h3 className="text-sm font-semibold text-slate-900 line-clamp-1 group-hover/card:text-blue-700 transition-colors">
//                         {dev.name}
//                       </h3>
//                       <p className="text-xs text-slate-500">{dev.count}</p>
//                     </div>
//                   </div>
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Footer Link */}
//         <div className="mt-6 flex justify-center">
//           <a
//             href="#"
//             className="inline-flex items-center px-5 py-2 rounded-lg bg-blue-50 text-blue-700 text-sm font-medium hover:bg-blue-100 transition-colors border border-blue-100"
//           >
//             All developers in UAE
//           </a>
//         </div>
//       </div>

//       <style>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// }

//////new
"use client";
import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Developer {
  id: string;
  name: string;
  count: string;
  logo: string;
}

const developers: Developer[] = [
  {
    id: "emaar-properties",
    name: "Emaar Properties",
    count: "209 projects",
    logo: "https://new-projects-media.propertyfinder.com/developer/79ca4333-9975-4672-b05f-bb7329de75e9/logo/image/SXDm9h3dbO4shNsEGYyX31DwTU98MpFSxR1sEuT7LsE=/original.png",
  },
  {
    id: "azizi-developments",
    name: "Azizi Developments",
    count: "110 projects",
    logo: "https://new-projects-media.propertyfinder.com/developer/90728d48-7a7d-4d3a-ba4a-145890eae6c1/logo/image/dRxSykZ1jpsPTL2pud5WlGzCiHxu1ruhz51uHFm4pDM=/original.png",
  },
  {
    id: "aldar-properties-pjsc",
    name: "Aldar Properties PJSC",
    count: "93 projects",
    logo: "https://new-projects-media.propertyfinder.com/developer/d0853b8e-c92f-4b7e-a4e2-a5b67955ba7d/logo/image/k1MoKKBF5CIZjwQ0XbOWkxs3heXc0pV6lcQMvgLaKws=/original.png",
  },
  {
    id: "damac-properties",
    name: "Damac Properties",
    count: "77 projects",
    logo: "https://new-projects-media.propertyfinder.com/developer/1063a07c-d94f-496b-9a24-5ea7409fe3d1/logo/image/O3p2VHWzQX9-Duzqi1vbOjp2tSlHIwJ1sjRjvTA7h68=/original.png",
  },
  {
    id: "sobha-realty",
    name: "Sobha Realty",
    count: "71 projects",
    logo: "https://new-projects-media.propertyfinder.com/developer/8a509d77-0b04-4669-9a78-d9fd5cdc78da/logo/image/L_UdmunePjPgB1sOpqj1TlbZ1NTOchKK8RtZ4QaqWa8=/original.png",
  },
  {
    id: "ellington",
    name: "Ellington",
    count: "65 projects",
    logo: "https://new-projects-media.propertyfinder.com/developer/a3178484-ee0c-466d-9fe3-92b231607234/logo/image/lOHO4BsD8PHWqSJqPEhmlwI9IVDDUB_SqSqssrZM_mE=/original.png",
  },
  {
    id: "binghatti-developers",
    name: "Binghatti Developers",
    count: "62 projects",
    logo: "https://new-projects-media.propertyfinder.com/developer/db16d589-88c5-4428-899b-db54b1d7ef7a/logo/image/R9cUN2yisO8tn7iOykZ1i_JjpbtuMvZjLYbLY7sV8fE=/original.png",
  },
  {
    id: "meraas-holding",
    name: "Meraas Holding",
    count: "61 projects",
    logo: "https://new-projects-media.propertyfinder.com/developer/831c8b0f-8adb-4fa5-94e9-0b123aa91a1a/logo/image/Khm513Li-0EP7_xCCxbyA3QlHudwwiTkvOG5Rz5KI1Y=/original.png",
  },
];

export default function AboutSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg md:text-xl font-semibold text-white">
              Projects by developers in the UAE
            </h2>

            <div className="flex space-x-2">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={`p-1.5 rounded-full border transition ${
                  canScrollLeft
                    ? "border-gray-600 text-white hover:bg-gray-800"
                    : "border-gray-800 text-gray-600 cursor-not-allowed"
                }`}
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={`p-1.5 rounded-full border transition ${
                  canScrollRight
                    ? "border-gray-600 text-white hover:bg-gray-800"
                    : "border-gray-800 text-gray-600 cursor-not-allowed"
                }`}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Slider */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex space-x-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
          >
            {developers.map((dev) => (
              <div
                key={dev.id}
                className="flex-none w-[180px] md:w-[220px] snap-start"
              >
                <a className="block">
                  <div className="aspect-[16/9] bg-white rounded-lg border border-gray-200 flex items-center justify-center p-3 shadow hover:shadow-md transition">
                    <img
                      src={dev.logo}
                      alt={dev.name}
                      className="object-contain max-h-full grayscale hover:grayscale-0 transition"
                    />
                  </div>

                  <div className="mt-2">
                    <h3 className="text-sm font-semibold text-white">
                      {dev.name}
                    </h3>
                    <p className="text-xs text-gray-400">{dev.count}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Footer link */}
        <div className="mt-6 flex justify-center">
          <a
            href="developers-we-work"
            className="px-5 py-2 rounded-lg border border-gray-700 text-white text-sm hover:bg-gray-800 transition"
          >
            All developers in UAE
          </a>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
