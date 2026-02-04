// "use client";
// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// interface AreaGuide {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   link: string;
// }

// interface SlideData {
//   title: string;
//   description: string;
//   areas: AreaGuide[];
// }

// const slides: SlideData[] = [
//   {
//     title: "Browse Our Dubai Area Guides",
//     description:
//       "Explore our comprehensive area guides and discover the city's diverse offerings from bustling waterfront and urban locations to serene gated communities.",
//     areas: [
//       {
//         id: 1,
//         title: "Dubai Water Canal",
//         description:
//           "Dubai Water Canal is a 3.2km long waterway which connects its way to the Arabian Gulf from the Creek in Old Dubai.",
//         image:
//           "https://images.unsplash.com/photo-1489516408517-0c0a15662682?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//       {
//         id: 2,
//         title: "City Walk, Dubai",
//         description:
//           "City Walk Dubai is a strategically developed urban project by MERAAS, an open-air lifestyle destination.",
//         image:
//           "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//       {
//         id: 3,
//         title: "Downtown Dubai",
//         description:
//           "Home to landmarks like the Burj Khalifa, the Dubai Mall, and the Dubai Fountain.",
//         image: "",
//         link: "#",
//       },
//       {
//         id: 4,
//         title: "Jumeirah Park",
//         description:
//           "A 370-hectare neighborhood with approximately 2,000 luxury villas.",
//         image:
//           "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//     ],
//   },
//   {
//     title: "Discover Iconic Waterfronts",
//     description:
//       "Experience the ultimate luxury lifestyle in Dubai's most prestigious man-made islands and coastal developments.",
//     areas: [
//       {
//         id: 5,
//         title: "Palm Jumeirah",
//         description:
//           "One of Dubai's most iconic architectural landmarks and the world's largest man-made island.",
//         image:
//           "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//       {
//         id: 6,
//         title: "Dubai Marina",
//         description:
//           "Home to high-rise residences, upscale entertainment options, and a picturesque canal-side lifestyle.",
//         image:
//           "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//       {
//         id: 7,
//         title: "Dubai Hills Estate",
//         description:
//           "A collaborative development by Emaar and Meraas featuring luxury off-plan residences.",
//         image:
//           "https://images.unsplash.com/photo-1614359833859-1e7d56a97927?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//       {
//         id: 8,
//         title: "Jumeirah Beach Residence",
//         description:
//           "A vibrant waterfront community offering prime residential and hotel towers.",
//         image:
//           "https://images.unsplash.com/photo-1489516408517-0c0a15662682?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//     ],
//   },
// ];

// const AreaItem = ({
//   area,
//   className,
// }: {
//   area: AreaGuide;
//   className?: string;
// }) => (
//   <a
//     href={area.link}
//     className={`group relative overflow-hidden rounded-lg block h-full w-full ${className}`}
//   >
//     <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 opacity-0 group-hover:opacity-100 p-6 flex flex-col justify-end">
//       <h4 className="text-white text-xl font-bold mb-2">{area.title}</h4>
//       <p className="text-gray-200 text-sm line-clamp-3">{area.description}</p>
//     </div>
//     <img
//       src={area.image}
//       alt={area.title}
//       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//     />
//   </a>
// );

// export default function AreaGuide() {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const nextSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setActiveSlide((prev) => (prev + 1) % slides.length);
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const prevSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const currentSlide = slides[activeSlide];

//   return (
//     <section className="bg-black py-16 px-4 md:px-8 lg:px-16 min-h-screen flex items-center">
//       <div className="max-w-[1400px] mx-auto w-full relative">
//         {/* Navigation Arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white transition-colors"
//           aria-label="Previous slide"
//         >
//           <ChevronLeft size={48} strokeWidth={1.5} />
//         </button>

//         <button
//           onClick={nextSlide}
//           className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white transition-colors"
//           aria-label="Next slide"
//         >
//           <ChevronRight size={48} strokeWidth={1.5} />
//         </button>

//         {/* Main Grid Content */}
//         <div
//           className={`grid grid-cols-1 md:grid-cols-12 gap-6 transition-all duration-500 ease-in-out ${isAnimating ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"}`}
//         >
//           {/* Top Left: Heading & Intro (Span 5) */}
//           <div className="md:col-span-5 flex flex-col justify-start pt-4">
//             <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 tracking-tight">
//               {currentSlide.title}
//             </h2>
//             <p className="text-gray-400 text-lg leading-relaxed max-w-md">
//               {currentSlide.description}
//             </p>
//           </div>

//           {/* Area 2: Tall Vertical (Middle) - grid-column: 6/9, spans both rows */}
//           <div className="md:col-span-3 row-span-1 md:row-span-2 hidden md:block">
//             <AreaItem
//               area={currentSlide.areas[1]}
//               className="aspect-[2/3] md:aspect-auto"
//             />
//           </div>

//           {/* Area 3: Smaller Tall (Top Right) - grid-column: 9/13, row 1 */}
//           <div className="md:col-span-4 hidden md:block">
//             <AreaItem
//               area={currentSlide.areas[2]}
//               className="aspect-[3/4] md:aspect-auto h-full"
//             />
//           </div>

//           {/* Area 1: Wide Bottom (Bottom Left) - grid-column: 1/6, row 2 */}
//           <div className="md:col-span-5 hidden md:block">
//             <AreaItem area={currentSlide.areas[0]} className="aspect-[16/9]" />
//           </div>

//           {/* Area 4: Horizontal (Bottom Right) - grid-column: 9/13, row 2 */}
//           <div className="md:col-span-4 hidden md:block">
//             <AreaItem
//               area={currentSlide.areas[3]}
//               className="aspect-[4/3] md:aspect-auto h-full"
//             />
//           </div>

//           {/* Mobile Layout (Stacked/Carousel fallback for simpler view) */}
//           <div className="md:hidden flex flex-col gap-4">
//             {currentSlide.areas.map((area) => (
//               <div key={area.id} className="w-full">
//                 <AreaItem area={area} className="aspect-[4/3]" />
//                 <div className="mt-2">
//                   <h3 className="text-white font-bold">{area.title}</h3>
//                   <p className="text-gray-500 text-sm line-clamp-2">
//                     {area.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

/// new

// // E:\Anzo_web\anzo_properties\components\AreaGuide.tsx
// "use client";
// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// interface AreaGuide {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   link: string;
// }

// interface SlideData {
//   title: string;
//   description: string;
//   areas: AreaGuide[];
// }

// const slides: SlideData[] = [
//   {
//     title: "Prime Investment Destinations Across Dubai",
//     description:
//       "Explore our comprehensive area guides and discover the city's diverse offerings from bustling waterfront and urban locations to serene gated communities.",
//     areas: [
//       {
//         id: 1,
//         title: "Dubai Water Canal",
//         description:
//           "Dubai Water Canal is a 3.2km long waterway which connects its way to the Arabian Gulf from the Creek in Old Dubai.",
//         image:
//           "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//       {
//         id: 2,
//         title: "City Walk, Dubai",
//         description:
//           "City Walk Dubai is a strategically developed urban project by MERAAS, an open-air lifestyle destination.",
//         image:
//           "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//       {
//         id: 3,
//         title: "Downtown Dubai",
//         description:
//           "Home to landmarks like the Burj Khalifa, the Dubai Mall, and the Dubai Fountain.",
//         image:
//           "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//       {
//         id: 4,
//         title: "Jumeirah Park",
//         description:
//           "A 370-hectare neighborhood with approximately 2,000 luxury villas.",
//         image:
//           "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//     ],
//   },
//   {
//     title: "Discover Iconic Waterfronts",
//     description:
//       "Experience the ultimate luxury lifestyle in Dubai's most prestigious man-made islands and coastal developments.",
//     areas: [
//       {
//         id: 5,
//         title: "Palm Jumeirah",
//         description:
//           "One of Dubai's most iconic architectural landmarks and the world's largest man-made island.",
//         image:
//           "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//       {
//         id: 6,
//         title: "Dubai Marina",
//         description:
//           "Home to high-rise residences, upscale entertainment options, and a picturesque canal-side lifestyle.",
//         image:
//           "https://images.unsplash.com/photo-1533395427226-788bee25cc99?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//       {
//         id: 7,
//         title: "Dubai Hills Estate",
//         description:
//           "A collaborative development by Emaar and Meraas featuring luxury off-plan residences.",
//         image:
//           "https://images.unsplash.com/photo-1614359833859-1e7d56a97927?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//       {
//         id: 8,
//         title: "Jumeirah Beach Residence",
//         description:
//           "A vibrant waterfront community offering prime residential and hotel towers.",
//         image:
//           "https://images.unsplash.com/photo-1489516408517-0c0a15662682?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//     ],
//   },
// ];

// const AreaItem = ({
//   area,
//   className,
//   height,
// }: {
//   area: AreaGuide;
//   className?: string;
//   height?: string;
// }) => (
//   <a
//     href={area.link}
//     className={`group relative overflow-hidden rounded-xl block w-full ${className}`}
//     style={{ height: height || "auto" }}
//   >
//     <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300 opacity-0 group-hover:opacity-100 p-6 flex flex-col justify-end">
//       <h4 className="text-white text-xl font-normal mb-2">{area.title}</h4>
//       <p className="text-gray-200 text-sm line-clamp-3">{area.description}</p>
//     </div>
//     <img
//       src={area.image}
//       alt={area.title}
//       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//     />
//   </a>
// );

// export default function AreaGuide() {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const nextSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setActiveSlide((prev) => (prev + 1) % slides.length);
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const prevSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const currentSlide = slides[activeSlide];

//   return (
//     <section className="bg-black py-20 px-4 md:px-8 lg:px-12 flex flex-col justify-center">
//       <div className="templateContainer w-full relative">
//         {/* Navigation Arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute -left-4 cursor-pointer md:-left-16 top-1/2 -translate-y-1/2 z-30 p-2 text-white hover:text-gray-400 transition-colors"
//           aria-label="Previous slide"
//         >
//           <ChevronLeft size={48} strokeWidth={1} />
//         </button>

//         <button
//           onClick={nextSlide}
//           className="absolute -right-4 cursor-pointer md:-right-16 top-1/2 -translate-y-1/2 z-30 p-2 text-white hover:text-gray-400 transition-colors"
//           aria-label="Next slide"
//         >
//           <ChevronRight size={48} strokeWidth={1} />
//         </button>

//         {/* Content Header */}
//         <div className=" max-w-2xl">
//           <h2
//             className={`text-white mb-6 text-[32px] leading-[1.2] md:text-[40px] max-w-xl font-elegant font-bold transition-all duration-500 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
//           >
//             {currentSlide.title}
//           </h2>
//           <p
//             className={`text-gray-400 text-lg leading-relaxed transition-all duration-500 delay-100 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
//           >
//             {currentSlide.description}
//           </p>
//         </div>

//         {/* Main Grid Content - Adjusted to match requested column structure */}
//         <div
//           className={`grid grid-cols-1 md:grid-cols-12 gap-6 transition-all duration-500 ease-in-out ${isAnimating ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"}`}
//         >
//           {/* Column 1: One Image (Wide) */}
//           <div className="md:col-span-5 flex items-end">
//             <AreaItem
//               area={currentSlide.areas[0]}
//               height="350px"
//               className="w-full"
//             />
//           </div>

//           {/* Column 2: One Image (Taller) */}
//           <div className="md:col-span-3 flex items-end">
//             <AreaItem
//               area={currentSlide.areas[1]}
//               height="550px"
//               className="w-full"
//             />
//           </div>

//           {/* Column 3: Two Images Stacked */}
//           <div className="md:col-span-4 flex flex-col gap-6">
//             <AreaItem
//               area={currentSlide.areas[2]}
//               height="400px"
//               className="w-full"
//             />
//             <AreaItem
//               area={currentSlide.areas[3]}
//               height="300px"
//               className="w-full"
//             />
//           </div>
//         </div>

//         {/* Pagination Indicators */}
//         {/* <div className="flex justify-center mt-16 gap-3">
//           {slides.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setActiveSlide(idx)}
//               className={`h-1 transition-all duration-500 rounded-full ${activeSlide === idx ? "w-12 bg-white" : "w-6 bg-white/20"}`}
//             />
//           ))}
//         </div> */}
//       </div>
//     </section>
//   );
// }

///// new

// "use client";
// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// interface AreaGuide {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   link: string;
// }

// interface SlideData {
//   title: string;
//   description: string;
//   areas: AreaGuide[];
// }

// const slides: SlideData[] = [
//   {
//     title: "Prime Investment Destinations Across Dubai",
//     description:
//       "Explore our comprehensive area guides and discover the city's diverse offerings from bustling waterfront and urban locations to serene gated communities.",
//     areas: [
//       {
//         id: 1,
//         title: "Dubai Water Canal",
//         description:
//           "Dubai Water Canal is a 3.2km long waterway which connects its way to the Arabian Gulf from the Creek in Old Dubai.",
//         image:
//           "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//       {
//         id: 2,
//         title: "City Walk, Dubai",
//         description:
//           "City Walk Dubai is a strategically developed urban project by MERAAS, an open-air lifestyle destination.",
//         image:
//           "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//       {
//         id: 3,
//         title: "Downtown Dubai",
//         description:
//           "Home to landmarks like the Burj Khalifa, the Dubai Mall, and the Dubai Fountain.",
//         image:
//           "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//       {
//         id: 4,
//         title: "Jumeirah Park",
//         description:
//           "A 370-hectare neighborhood with approximately 2,000 luxury villas.",
//         image:
//           "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//     ],
//   },
//   {
//     title: "Discover Iconic Waterfronts",
//     description:
//       "Experience the ultimate luxury lifestyle in Dubai's most prestigious man-made islands and coastal developments.",
//     areas: [
//       {
//         id: 5,
//         title: "Palm Jumeirah",
//         description: "One of Dubai's most iconic architectural landmarks.",
//         image:
//           "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//       {
//         id: 6,
//         title: "Dubai Marina",
//         description: "Home to high-rise residences and upscale entertainment.",
//         image:
//           "https://images.unsplash.com/photo-1533395427226-788bee25cc99?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//       {
//         id: 7,
//         title: "Dubai Hills Estate",
//         description: "A collaborative development by Emaar and Meraas.",
//         image:
//           "https://images.unsplash.com/photo-1614359833859-1e7d56a97927?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//       {
//         id: 8,
//         title: "Jumeirah Beach Residence",
//         description:
//           "A vibrant waterfront community offering prime residential towers.",
//         image:
//           "https://images.unsplash.com/photo-1489516408517-0c0a15662682?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//     ],
//   },
// ];

// const AreaItem = ({
//   area,
//   className,
//   desktopHeight,
// }: {
//   area: AreaGuide;
//   className?: string;
//   desktopHeight?: string;
// }) => (
//   <a
//     href={area.link}
//     className={`group relative overflow-hidden rounded-xl block w-full h-[250px] md:h-auto ${className}`}
//     style={{
//       height:
//         typeof window !== "undefined" && window.innerWidth >= 768
//           ? desktopHeight
//           : undefined,
//     }}
//   >
//     <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 p-6 flex flex-col justify-end">
//       <h4 className="text-white text-xl font-normal mb-2">{area.title}</h4>
//       <p className="text-gray-200 text-sm line-clamp-3">{area.description}</p>
//     </div>
//     <img
//       src={area.image}
//       alt={area.title}
//       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//     />
//   </a>
// );

// export default function AreaGuide() {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const nextSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setActiveSlide((prev) => (prev + 1) % slides.length);
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const prevSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const currentSlide = slides[activeSlide];

//   return (
//     <section className="bg-black py-12 md:py-24  overflow-hidden">
//       <div className="max-w-[1400px] mx-auto w-full relative px-0 md:px-12 lg:px-16">
//         {/* Navigation Arrows - Placed inside the padding area so they stay visible */}
//         <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-30 flex justify-between pointer-events-none px-2 md:px-0">
//           <button
//             onClick={prevSlide}
//             className="pointer-events-auto cursor-pointer p-2 text-white hover:text-gray-400 transition-colors"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft size={48} strokeWidth={1} />
//           </button>

//           <button
//             onClick={nextSlide}
//             className="pointer-events-auto cursor-pointer p-2 text-white hover:text-gray-400 transition-colors"
//             aria-label="Next slide"
//           >
//             <ChevronRight size={48} strokeWidth={1} />
//           </button>
//         </div>

//         {/* Content Header - Added padding-x to align with the grid inside arrows */}
// <div className="max-w-xl md:max-w-2xl mb-10 md:mb-0 px-4 md:px-0">
//   <h2
//     className={`text-white mb-6 font-elegant leading-snug text-[32px] md:text-[40px] font-bold transition-all duration-500 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
//   >
//     {currentSlide.title}
//   </h2>
//   <p
//     className={`text-gray-400 text-lg transition-all duration-500 delay-100 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
//   >
//     {currentSlide.description}
//   </p>
// </div>

//         {/* Main Grid Content */}
//         <div
//           className={`grid grid-cols-1 md:grid-cols-12 gap-6 px-4 md:px-0 transition-all duration-500 ease-in-out ${isAnimating ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"}`}
//         >
//           <div className="md:col-span-5 flex md:items-end">
//             <AreaItem
//               area={currentSlide.areas[0]}
//               desktopHeight="350px"
//               className="w-full"
//             />
//           </div>

//           <div className="md:col-span-3 flex md:items-end">
//             <AreaItem
//               area={currentSlide.areas[1]}
//               desktopHeight="550px"
//               className="w-full"
//             />
//           </div>

//           <div className="md:col-span-4 flex flex-col gap-6">
//             <AreaItem
//               area={currentSlide.areas[2]}
//               desktopHeight="400px"
//               className="w-full"
//             />
//             <AreaItem
//               area={currentSlide.areas[3]}
//               desktopHeight="300px"
//               className="w-full"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

////// bento grid

// "use client";
// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// interface AreaGuide {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   link: string;
// }

// interface SlideData {
//   title: string;
//   description: string;
//   areas: AreaGuide[];
// }

// const slides: SlideData[] = [
//   {
//     title: "Prime Investment Destinations Across Dubai",
//     description:
//       "Explore our comprehensive area guides and discover the city's diverse offerings from bustling waterfront and urban locations to serene gated communities.",
//     areas: [
//       {
//         id: 1,
//         title: "Dubai Water Canal",
//         description:
//           "Dubai Water Canal is a 3.2km long waterway which connects its way to the Arabian Gulf from the Creek in Old Dubai.",
//         image:
//           "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//       {
//         id: 2,
//         title: "City Walk, Dubai",
//         description:
//           "City Walk Dubai is a strategically developed urban project by MERAAS, an open-air lifestyle destination.",
//         image:
//           "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//       {
//         id: 3,
//         title: "Downtown Dubai",
//         description:
//           "Home to landmarks like the Burj Khalifa, the Dubai Mall, and the Dubai Fountain.",
//         image:
//           "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//       {
//         id: 4,
//         title: "Jumeirah Park",
//         description:
//           "A 370-hectare neighborhood with approximately 2,000 luxury villas.",
//         image:
//           "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//     ],
//   },
//   {
//     title: "Discover Iconic Waterfronts",
//     description:
//       "Experience the ultimate luxury lifestyle in Dubai's most prestigious man-made islands and coastal developments.",
//     areas: [
//       {
//         id: 5,
//         title: "Palm Jumeirah",
//         description: "One of Dubai's most iconic architectural landmarks.",
//         image:
//           "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//       {
//         id: 6,
//         title: "Dubai Marina",
//         description: "Home to high-rise residences and upscale entertainment.",
//         image:
//           "https://images.unsplash.com/photo-1533395427226-788bee25cc99?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//       {
//         id: 7,
//         title: "Dubai Hills Estate",
//         description: "A collaborative development by Emaar and Meraas.",
//         image:
//           "https://images.unsplash.com/photo-1614359833859-1e7d56a97927?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//       {
//         id: 8,
//         title: "Jumeirah Beach Residence",
//         description:
//           "A vibrant waterfront community offering prime residential towers.",
//         image:
//           "https://images.unsplash.com/photo-1489516408517-0c0a15662682?auto=format&fit=crop&q=80&w=800",
//         link: "#",
//       },
//     ],
//   },
// ];

// const AreaItem = ({
//   area,
//   className,
//   desktopHeight,
// }: {
//   area: AreaGuide;
//   className?: string;
//   desktopHeight?: string;
// }) => (
//   <a
//     href={area.link}
//     className={`group relative overflow-hidden rounded-xl block w-full h-[250px] md:h-auto ${className}`}
//     style={{
//       height:
//         typeof window !== "undefined" && window.innerWidth >= 768
//           ? desktopHeight
//           : undefined,
//     }}
//   >
//     <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 p-6 flex flex-col justify-end">
//       <h4 className="text-white text-xl font-normal mb-2">{area.title}</h4>
//       <p className="text-gray-200 text-sm line-clamp-3">{area.description}</p>
//     </div>
//     <img
//       src={area.image}
//       alt={area.title}
//       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//     />
//   </a>
// );

// export default function AreaGuide() {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const nextSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setActiveSlide((prev) => (prev + 1) % slides.length);
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const prevSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const currentSlide = slides[activeSlide];

//   return (
//     <section className="bg-black py-12 md:py-24  overflow-hidden">
//       <div className="max-w-[1400px] mx-auto w-full relative px-0 md:px-12 lg:px-16">
//         {/* Navigation Arrows - Placed inside the padding area so they stay visible */}
//         <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-30 flex justify-between pointer-events-none px-2 md:px-0">
//           <button
//             onClick={prevSlide}
//             className="pointer-events-auto cursor-pointer p-2 text-white hover:text-gray-400 transition-colors"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft size={48} strokeWidth={1} />
//           </button>

//           <button
//             onClick={nextSlide}
//             className="pointer-events-auto cursor-pointer p-2 text-white hover:text-gray-400 transition-colors"
//             aria-label="Next slide"
//           >
//             <ChevronRight size={48} strokeWidth={1} />
//           </button>
//         </div>

//         {/* Content Header - Added padding-x to align with the grid inside arrows */}
//         <div className="max-w-xl md:max-w-2xl mb-10 md:mb-0 px-4 md:px-0">
//           <h2
//             className={`text-white mb-6 font-elegant leading-snug text-[32px] md:text-[40px] font-bold transition-all duration-500 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
//           >
//             {currentSlide.title}
//           </h2>
//           <p
//             className={`text-gray-400 text-lg transition-all duration-500 delay-100 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
//           >
//             {currentSlide.description}
//           </p>
//         </div>

//         {/* Main Grid Content */}
//         <div
//           className={`grid grid-cols-1 md:grid-cols-12 gap-6 px-4 md:px-0 transition-all duration-500 ease-in-out ${isAnimating ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"}`}
//         >
//           <div className="md:col-span-5 flex md:items-end">
//             <AreaItem
//               area={currentSlide.areas[0]}
//               desktopHeight="350px"
//               className="w-full"
//             />
//           </div>

//           <div className="md:col-span-3 flex md:items-end">
//             <AreaItem
//               area={currentSlide.areas[1]}
//               desktopHeight="550px"
//               className="w-full"
//             />
//           </div>

//           <div className="md:col-span-4 flex flex-col gap-6">
//             <AreaItem
//               area={currentSlide.areas[2]}
//               desktopHeight="400px"
//               className="w-full"
//             />
//             <AreaItem
//               area={currentSlide.areas[3]}
//               desktopHeight="300px"
//               className="w-full"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import React, { useState } from "react";

// const allAreas = [
//   {
//     id: 1,
//     title: "Dubai Water Canal",
//     image:
//       "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200",
//   },
//   {
//     id: 2,
//     title: "City Walk",
//     image:
//       "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&q=80&w=800",
//   },
//   {
//     id: 3,
//     title: "Downtown Dubai",
//     image:
//       "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800",
//   },
//   {
//     id: 4,
//     title: "Palm Jumeirah",
//     image:
//       "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&q=80&w=800",
//   },
// ];

// export default function AreaGuide() {
//   const [isAnimating, setIsAnimating] = useState(false);
//   return (
//     <section className="bg-black py-12 md:py-24 px-4 md:px-10">
//       <div className="max-w-[1400px] mx-auto">
//         {/* Header */}

//         <div className="max-w-xl md:max-w-2xl mx-auto mb-10  px-4 ">
//           <h2
//             className={`text-white mb-6 font-elegant text-center leading-snug text-[32px] md:text-[40px] font-medium transition-all duration-500 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
//           >
//             Prime Investment Destinations
//           </h2>
//           <p
//             className={`text-gray-400 text-lg text-center transition-all duration-500 delay-100 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
//           >
//             Explore our comprehensive area guides and discover the city's
//             diverse offerings from bustling waterfront and urban locations to
//             serene gated communities.
//           </p>
//         </div>

//         {/* The Grid Container */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[auto] md:h-[600px]">
//           {/* Main Hero Tile - Left side (7 columns) */}
//           <div className="md:col-span-7 relative group overflow-hidden rounded-2xl cursor-pointer">
//             <img
//               src={allAreas[0].image}
//               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//               alt={allAreas[0].title}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-8 flex flex-col justify-end">
//               <span className="text-white/60 text-sm mb-2 uppercase tracking-widest">
//                 Featured
//               </span>
//               <h3 className="text-white text-3xl font-bold">
//                 {allAreas[0].title}
//               </h3>
//             </div>
//           </div>

//           {/* Right Column (5 columns) */}
//           <div className="md:col-span-5 grid grid-rows-2 gap-4">
//             {/* Top Right Tile */}
//             <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
//               <img
//                 src={allAreas[1].image}
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 alt={allAreas[1].title}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 flex flex-col justify-end">
//                 <h3 className="text-white text-xl font-bold">
//                   {allAreas[1].title}
//                 </h3>
//               </div>
//             </div>

//             {/* Bottom Row - Split in Two Small Squares */}
//             <div className="grid grid-cols-2 gap-4">
//               <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
//                 <img
//                   src={allAreas[2].image}
//                   className="absolute inset-0 w-full h-full object-cover"
//                   alt={allAreas[2].title}
//                 />
//                 <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
//                 <div className="absolute bottom-4 left-4">
//                   <h3 className="text-white text-sm font-bold uppercase tracking-wider">
//                     {allAreas[2].title}
//                   </h3>
//                 </div>
//               </div>
//               <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
//                 <img
//                   src={allAreas[3].image}
//                   className="absolute inset-0 w-full h-full object-cover"
//                   alt={allAreas[3].title}
//                 />
//                 <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
//                 <div className="absolute bottom-4 left-4">
//                   <h3 className="text-white text-sm font-bold uppercase tracking-wider">
//                     {allAreas[3].title}
//                   </h3>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

///////// in mobile also
"use client";

import React, { useState } from "react";

const allAreas = [
  {
    id: 1,
    title: "Dubai Water Canal",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    title: "City Walk",
    image:
      "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Downtown Dubai",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Palm Jumeirah",
    image:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&q=80&w=800",
  },
];

export default function AreaGuide() {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <section className="bg-zinc-950 pb-8 md:pb-12">
      <div className="templateContainer">
        {/* Header */}
        <div className=" md:max-w-2xl mx-auto mb-10 px-4">
          {/* <h2
            className={`text-white mb-6 font-elegant text-center leading-snug text-[32px] md:text-[40px] font-medium transition-all duration-500 ${
              isAnimating
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          > */}
          <div className="flex flex-col items-center gap-4">
            <div className="h-[1px] w-12 bg-[#c5a36b]/80" />
            <span className="text-[11px] uppercase tracking-[0.5em] font-medium text-[#c5a36b]">
              Prime Destinations
            </span>
          </div>
          <h2
            className={`text-white mb-2 font-[var(--font-libertinus)] text-center leading-snug text-[32px] md:text-[40px] font-medium transition-all duration-500 ${
              isAnimating
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            Prime Investment Destinations
          </h2>
          <p
            className={`text-[16px] md:text-lg text-gray-300 leading-snug tracking-tight  text-center transition-all duration-500 delay-100 ${
              isAnimating
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            Explore our comprehensive area guides and discover the city's
            diverse offerings from bustling waterfront and urban locations to
            serene gated communities.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:h-[600px]">
          {/* Main Hero */}
          <div className="md:col-span-7 relative group overflow-hidden rounded-2xl cursor-pointer h-[260px] md:h-full">
            <img
              src={allAreas[0].image}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt={allAreas[0].title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-8 flex flex-col justify-end">
              <span className="text-white/60 text-sm mb-2 uppercase tracking-widest">
                Featured
              </span>
              <h3 className="text-white text-xl md:text-3xl font-medium">
                {allAreas[0].title}
              </h3>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-5 grid grid-rows-2 gap-4">
            {/* Top Right */}
            <div className="relative group overflow-hidden rounded-2xl cursor-pointer h-[200px] md:h-full">
              <img
                src={allAreas[1].image}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt={allAreas[1].title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-white text-xl font-medium">
                  {allAreas[1].title}
                </h3>
              </div>
            </div>

            {/* Bottom Two */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group overflow-hidden rounded-2xl cursor-pointer h-[160px] md:h-full">
                <img
                  src={allAreas[2].image}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt={allAreas[2].title}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-sm font-medium uppercase tracking-wider">
                    {allAreas[2].title}
                  </h3>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-2xl cursor-pointer h-[160px] md:h-full">
                <img
                  src={allAreas[3].image}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt={allAreas[3].title}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-sm font-medium uppercase tracking-wider">
                    {allAreas[3].title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
