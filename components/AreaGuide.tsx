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
"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface AreaGuide {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface SlideData {
  title: string;
  description: string;
  areas: AreaGuide[];
}

const slides: SlideData[] = [
  {
    title: "Prime Investment Destinations Across Dubai",
    description:
      "Explore our comprehensive area guides and discover the city's diverse offerings from bustling waterfront and urban locations to serene gated communities.",
    areas: [
      {
        id: 1,
        title: "Dubai Water Canal",
        description:
          "Dubai Water Canal is a 3.2km long waterway which connects its way to the Arabian Gulf from the Creek in Old Dubai.",
        image:
          "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
        link: "#",
      },
      {
        id: 2,
        title: "City Walk, Dubai",
        description:
          "City Walk Dubai is a strategically developed urban project by MERAAS, an open-air lifestyle destination.",
        image:
          "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&q=80&w=800",
        link: "#",
      },
      {
        id: 3,
        title: "Downtown Dubai",
        description:
          "Home to landmarks like the Burj Khalifa, the Dubai Mall, and the Dubai Fountain.",
        image:
          "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800",
        link: "#",
      },
      {
        id: 4,
        title: "Jumeirah Park",
        description:
          "A 370-hectare neighborhood with approximately 2,000 luxury villas.",
        image:
          "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&q=80&w=800",
        link: "#",
      },
    ],
  },
  {
    title: "Discover Iconic Waterfronts",
    description:
      "Experience the ultimate luxury lifestyle in Dubai's most prestigious man-made islands and coastal developments.",
    areas: [
      {
        id: 5,
        title: "Palm Jumeirah",
        description:
          "One of Dubai's most iconic architectural landmarks and the world's largest man-made island.",
        image:
          "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&q=80&w=800",
        link: "#",
      },
      {
        id: 6,
        title: "Dubai Marina",
        description:
          "Home to high-rise residences, upscale entertainment options, and a picturesque canal-side lifestyle.",
        image:
          "https://images.unsplash.com/photo-1533395427226-788bee25cc99?auto=format&fit=crop&q=80&w=800",
        link: "#",
      },
      {
        id: 7,
        title: "Dubai Hills Estate",
        description:
          "A collaborative development by Emaar and Meraas featuring luxury off-plan residences.",
        image:
          "https://images.unsplash.com/photo-1614359833859-1e7d56a97927?auto=format&fit=crop&q=80&w=800",
        link: "#",
      },
      {
        id: 8,
        title: "Jumeirah Beach Residence",
        description:
          "A vibrant waterfront community offering prime residential and hotel towers.",
        image:
          "https://images.unsplash.com/photo-1489516408517-0c0a15662682?auto=format&fit=crop&q=80&w=800",
        link: "#",
      },
    ],
  },
];

const AreaItem = ({
  area,
  className,
  height,
}: {
  area: AreaGuide;
  className?: string;
  height?: string;
}) => (
  <a
    href={area.link}
    className={`group relative overflow-hidden rounded-xl block w-full ${className}`}
    style={{ height: height || "auto" }}
  >
    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300 opacity-0 group-hover:opacity-100 p-6 flex flex-col justify-end">
      <h4 className="text-white text-xl font-normal mb-2">{area.title}</h4>
      <p className="text-gray-200 text-sm line-clamp-3">{area.description}</p>
    </div>
    <img
      src={area.image}
      alt={area.title}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
  </a>
);

export default function AreaGuide() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const currentSlide = slides[activeSlide];

  return (
    <section className="bg-black py-20 px-4 md:px-8 lg:px-16 min-h-screen flex flex-col justify-center">
      <div className="max-w-[1300px] mx-auto w-full relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute -left-4 cursor-pointer md:-left-16 top-1/2 -translate-y-1/2 z-30 p-2 text-white hover:text-gray-400 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={48} strokeWidth={1} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-4 cursor-pointer md:-right-16 top-1/2 -translate-y-1/2 z-30 p-2 text-white hover:text-gray-400 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={48} strokeWidth={1} />
        </button>

        {/* Content Header */}
        <div className=" max-w-2xl">
          <h2
            className={`text-white mb-6 text-[32px] leading-[1.2] md:text-[40px] max-w-xl font-elegant font-bold transition-all duration-500 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
          >
            {currentSlide.title}
          </h2>
          <p
            className={`text-gray-400 text-lg leading-relaxed transition-all duration-500 delay-100 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
          >
            {currentSlide.description}
          </p>
        </div>

        {/* Main Grid Content - Adjusted to match requested column structure */}
        <div
          className={`grid grid-cols-1 md:grid-cols-12 gap-6 transition-all duration-500 ease-in-out ${isAnimating ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"}`}
        >
          {/* Column 1: One Image (Wide) */}
          <div className="md:col-span-5 flex items-end">
            <AreaItem
              area={currentSlide.areas[0]}
              height="350px"
              className="w-full"
            />
          </div>

          {/* Column 2: One Image (Taller) */}
          <div className="md:col-span-3 flex items-end">
            <AreaItem
              area={currentSlide.areas[1]}
              height="550px"
              className="w-full"
            />
          </div>

          {/* Column 3: Two Images Stacked */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <AreaItem
              area={currentSlide.areas[2]}
              height="400px"
              className="w-full"
            />
            <AreaItem
              area={currentSlide.areas[3]}
              height="300px"
              className="w-full"
            />
          </div>
        </div>

        {/* Pagination Indicators */}
        {/* <div className="flex justify-center mt-16 gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-1 transition-all duration-500 rounded-full ${activeSlide === idx ? "w-12 bg-white" : "w-6 bg-white/20"}`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}
