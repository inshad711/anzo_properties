// //////// new working////

// "use client";
// import React, { useState, useMemo } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Home,
//   Search,
//   ChevronDown,
//   Building2,
// } from "lucide-react";

// // --- Types ---
// interface Developer {
//   id: string;
//   name: string;
//   founded: string;
//   description: string;
//   projectsCount: number;
//   logo: string;
// }

// // --- Mock Data ---
// const DEVELOPERS_DATA = [
//   {
//     id: "1",
//     name: "Emaar Properties",
//     founded: "1997",
//     description:
//       "Emaar, a real estate giant founded in 1997, is renowned for Burj Khalifa and Dubai Mall. Emaar offers different properties built to the highest standards. Their mission is to shape the future for everyone.",
//     projectsCount: 209,
//     logo: "https://new-projects-media.propertyfinder.com/developer/79ca4333-9975-4672-b05f-bb7329de75e9/logo/image/SXDm9h3dbO4shNsEGYyX31DwTU98MpFSxR1sEuT7LsE=/original.png",
//   },
//   {
//     id: "2",
//     name: "Azizi Developments",
//     founded: "2007",
//     description:
//       "Azizi Developments, a giant Dubai-based developer offering projects such as Azizi Riviera and more, provides modern houses and a wide range of budgets. Azizi stands as a choice for property seekers in the UAE.",
//     projectsCount: 110,
//     logo: "https://new-projects-media.propertyfinder.com/developer/90728d48-7a7d-4d3a-ba4a-145890eae6c1/logo/image/dRxSykZ1jpsPTL2pud5WlGzCiHxu1ruhz51uHFm4pDM=/original.png",
//   },
//   {
//     id: "3",
//     name: "Aldar Properties PJSC",
//     founded: "2004",
//     description:
//       "Aldar Properties is Abu Dhabi's premier developer founded in 2004, shaping world-class communities with a wide range of properties to choose from. Famous for creating luxurious living experiences.",
//     projectsCount: 93,
//     logo: "https://new-projects-media.propertyfinder.com/developer/d0853b8e-c92f-4b7e-a4e2-a5b67955ba7d/logo/image/k1MoKKBF5CIZjwQ0XbOWkxs3heXc0pV6lcQMvgLaKws=/original.png",
//   },
//   {
//     id: "4",
//     name: "Damac Properties",
//     founded: "2002",
//     description:
//       "Founded in 2002, DAMAC has shaped the Middle East by providing luxurious projects in desirable locations. Offering a varied portfolio that includes skyscrapers, communities, and branded apartments for everyone.",
//     projectsCount: 77,
//     logo: "https://new-projects-media.propertyfinder.com/developer/1063a07c-d94f-496b-9a24-5ea7409fe3d1/logo/image/O3p2VHWzQX9-Duzqi1vbOjp2tSlHIwJ1sjRjvTA7h68=/original.png",
//   },
//   {
//     id: "5",
//     name: "Sobha Realty",
//     founded: "1976",
//     description:
//       "Sobha Realty is a leading global developer since 1976 known for designing royal facilities, mosques, and signature projects. Created master communities such as Sobha Hartland, offering diverse building styles and properties.",
//     projectsCount: 71,
//     logo: "https://new-projects-media.propertyfinder.com/developer/8a509d77-0b04-4669-9a78-d9fd5cdc78da/logo/image/L_UdmunePjPgB1sOpqj1TlbZ1NTOchKK8RtZ4QaqWa8=/original.png",
//   },
//   {
//     id: "6",
//     name: "Ellington",
//     founded: "2014",
//     description:
//       "Founded in 2014, Ellington, with their joined experience, crafted lifestyles in luxury villas and apartments such as Belgravia and more. Accomplished by exceptional artistic talent and architectural design.",
//     projectsCount: 65,
//     logo: "https://new-projects-media.propertyfinder.com/developer/a3178484-ee0c-466d-9fe3-92b231607234/logo/image/lOHO4BsD8PHWqSJqPEhmlwI9IVDDUB_SqSqssrZM_mE=/original.png",
//   },
//   {
//     id: "7",
//     name: "Binghatti Developers",
//     founded: "2008",
//     description:
//       "One of Dubai's leading developers, Binghatti, created opulent projects by offering a variety of residences that redefine luxury living. Partnered with global brands, including Mercedes-Benz, Bugatti, and Jacob & Co.",
//     projectsCount: 62,
//     logo: "https://new-projects-media.propertyfinder.com/developer/db16d589-88c5-4428-899b-db54b1d7ef7a/logo/image/R9cUN2yisO8tn7iOykZ1i_JjpbtuMvZjLYbLY7sV8fE=/original.png",
//   },
//   {
//     id: "8",
//     name: "Meraas Holding",
//     founded: "2007",
//     description:
//       "Meraas was established in 2007. Famous for the Bluewaters Island and City Walk. Aims to establish Dubai as the preferred global location for real estate investment and offer a variety of home options to suit all lifestyles.",
//     projectsCount: 61,
//     logo: "https://new-projects-media.propertyfinder.com/developer/831c8b0f-8adb-4fa5-94e9-0b123aa91a1a/logo/image/Khm513Li-0EP7_xCCxbyA3QlHudwwiTkvOG5Rz5KI1Y=/original.png",
//   },
//   {
//     id: "9",
//     name: "ARADA - Sale",
//     founded: "2017",
//     description:
//       "Arada is a prominent UAE developer, best known for Aljada, which was founded in 2017 by well-known Gulf businesspeople. Arada offers contemporary properties in well-planned communities with flexible payment plans.",
//     projectsCount: 47,
//     logo: "https://new-projects-media.propertyfinder.com/developer/3699a21c-ddd9-4702-8adf-5348fdf5d2da/logo/image/OHWeY2FYNHVt6KK5gmREYBlufhBx7QnXqw84qwHcJ4U=/original.png",
//   },
//   {
//     id: "10",
//     name: "Imtiaz Developments",
//     founded: "1993",
//     description:
//       "One of the top real estate companies in Dubai, Imtiaz Developments has created numerous residential properties. They innovate by anticipating market trends and offering expertise across various real estate sectors.",
//     projectsCount: 38,
//     logo: "https://new-projects-media.propertyfinder.com/developer/3fadc15f-708b-4d93-90bc-4aa9086d16f2/logo/image/LYPK0EVx4_03jTZaAXVs0uzJmaEcb8ZHyQCtXsh-VwQ=/original.png",
//   },
// ];

// const DeveloperCard = ({ developer }: { developer: Developer }) => {
//   return (
//     <div className="py-6 border-b border-gray-50/20 last:border-0  bg-transparent">
//       <div className="flex flex-col md:flex-row gap-4 md:gap-6">
//         {/* Top Section: Logo and Title/Founded info */}
//         <div className="flex flex-row md:flex-col items-center md:items-start gap-4">
//           {/* Logo Container */}
//           <div className="w-20 h-20 md:w-40 md:h-40 flex-shrink-0 border border-gray-200 md:border-gray-800 rounded-lg md:rounded-xl flex items-center justify-center p-2 md:p-4 bg-white md:bg-zinc-900 shadow-sm">
//             <img
//               src={developer.logo}
//               alt={developer.name}
//               className="max-w-full max-h-full object-contain"
//             />
//           </div>

//           {/* Title & Founded (Visible next to logo on Mobile, part of content on Desktop) */}
//           <div className="md:hidden">
//             <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wide">
//               Founded in {developer.founded}
//             </p>
//             <h3 className="text-lg font-bold text-gray-900 leading-tight">
//               {developer.name}
//             </h3>
//           </div>
//         </div>

//         {/* Content Container */}
//         <div className="flex-grow">
//           {/* Desktop Only Title/Founded */}
//           <div className="hidden md:block">
//             <p className="text-sm text-gray-500 mb-1">
//               Founded in {developer.founded}
//             </p>
//             <h3 className="text-xl font-medium text-white mb-3">
//               {developer.name}
//             </h3>
//           </div>

//           <p className="text-gray-400 md:text-gray-300 text-[16px] md:text-lg leading-relaxed line-clamp-4 md:line-clamp-none">
//             {developer.description}
//           </p>
//         </div>

//         {/* Action Button - Full width on mobile */}
//         <div className="mt-2 md:mt-0 flex items-center">
//           <button className="w-full md:w-auto px-6 py-3 md:py-2.5 rounded-lg text-indigo-900 md:text-white bg-indigo-50/50 md:bg-zinc-800 hover:bg-indigo-100 md:hover:bg-zinc-700 font-medium text-sm transition-all whitespace-nowrap">
//             {developer.projectsCount} projects
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// interface PaginationProps {
//   currentPage: number;
//   totalPages: number;
//   onPageChange: (page: number) => void;
// }

// const Pagination = ({
//   currentPage,
//   totalPages,
//   onPageChange,
// }: PaginationProps) => {
//   const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

//   return (
//     <div className="flex items-center justify-center space-x-2 mt-12 pb-12">
//       <button
//         onClick={() => onPageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//         className="p-2 rounded-md hover:bg-zinc-800 text-gray-400 disabled:opacity-20 disabled:cursor-not-allowed"
//       >
//         <ChevronLeft size={20} />
//       </button>

//       {pages.map((page) => (
//         <button
//           key={page}
//           onClick={() => onPageChange(page)}
//           className={`w-9 h-9 flex items-center justify-center rounded-md text-sm font-semibold transition-colors ${
//             currentPage === page
//               ? "bg-blue-600 text-white"
//               : "text-gray-400 hover:bg-zinc-800"
//           }`}
//         >
//           {page}
//         </button>
//       ))}

//       <button
//         onClick={() => onPageChange(currentPage + 1)}
//         disabled={currentPage === totalPages}
//         className="p-2 rounded-md hover:bg-zinc-800 text-gray-400 disabled:opacity-20 disabled:cursor-not-allowed"
//       >
//         <ChevronRight size={20} />
//       </button>
//     </div>
//   );
// };

// // --- Main App Component ---

// export default function RealEstate() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   const filteredDevelopers = useMemo(() => {
//     return DEVELOPERS_DATA.filter((dev) =>
//       dev.name.toLowerCase().includes(searchQuery.toLowerCase()),
//     );
//   }, [searchQuery]);

//   return (
//     <div className="bg-black text-white pt-32">
//       <div className="max-w-6xl mx-auto px-4 pt-6">
//         {/* <Breadcrumbs /> */}

//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
//           <h1 className="text-3xl md:text-4xl font-normal max-w-xl mx-auto tracking-tight text-white">
//             Top Real Estate Developers in UAE
//           </h1>
//         </div>

//         <div className="divide-y divide-gray-800">
//           {filteredDevelopers.length > 0 ? (
//             filteredDevelopers.map((dev) => (
//               <DeveloperCard key={dev.id} developer={dev} />
//             ))
//           ) : (
//             <div className="py-20 text-center">
//               <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-900 text-gray-700 mb-4">
//                 <Search size={32} />
//               </div>
//               <p className="text-gray-500 text-lg">
//                 No developers found matching "{searchQuery}"
//               </p>
//               <button
//                 onClick={() => setSearchQuery("")}
//                 className="mt-2 text-blue-400 hover:underline font-medium"
//               >
//                 Clear search
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

//// new
"use client";

import React, { useState, useMemo, useRef } from "react";
import { Search } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// --- Types ---
interface Developer {
  id: string;
  name: string;
  founded: string;
  description: string;
  projectsCount: number;
  logo: string;
}

const DEVELOPERS_DATA = [
  {
    id: "1",
    name: "Emaar Properties",
    founded: "1997",
    description:
      "Emaar, a real estate giant founded in 1997, is renowned for Burj Khalifa and Dubai Mall. Emaar offers different properties built to the highest standards. Their mission is to shape the future for everyone.",
    projectsCount: 209,
    logo: "https://new-projects-media.propertyfinder.com/developer/79ca4333-9975-4672-b05f-bb7329de75e9/logo/image/SXDm9h3dbO4shNsEGYyX31DwTU98MpFSxR1sEuT7LsE=/original.png",
  },
  {
    id: "2",
    name: "Azizi Developments",
    founded: "2007",
    description:
      "Azizi Developments, a giant Dubai-based developer offering projects such as Azizi Riviera and more, provides modern houses and a wide range of budgets. Azizi stands as a choice for property seekers in the UAE.",
    projectsCount: 110,
    logo: "https://new-projects-media.propertyfinder.com/developer/90728d48-7a7d-4d3a-ba4a-145890eae6c1/logo/image/dRxSykZ1jpsPTL2pud5WlGzCiHxu1ruhz51uHFm4pDM=/original.png",
  },
  {
    id: "3",
    name: "Aldar Properties PJSC",
    founded: "2004",
    description:
      "Aldar Properties is Abu Dhabi's premier developer founded in 2004, shaping world-class communities with a wide range of properties to choose from. Famous for creating luxurious living experiences.",
    projectsCount: 93,
    logo: "https://new-projects-media.propertyfinder.com/developer/d0853b8e-c92f-4b7e-a4e2-a5b67955ba7d/logo/image/k1MoKKBF5CIZjwQ0XbOWkxs3heXc0pV6lcQMvgLaKws=/original.png",
  },
  {
    id: "4",
    name: "Damac Properties",
    founded: "2002",
    description:
      "Founded in 2002, DAMAC has shaped the Middle East by providing luxurious projects in desirable locations. Offering a varied portfolio that includes skyscrapers, communities, and branded apartments for everyone.",
    projectsCount: 77,
    logo: "https://new-projects-media.propertyfinder.com/developer/1063a07c-d94f-496b-9a24-5ea7409fe3d1/logo/image/O3p2VHWzQX9-Duzqi1vbOjp2tSlHIwJ1sjRjvTA7h68=/original.png",
  },
  {
    id: "5",
    name: "Sobha Realty",
    founded: "1976",
    description:
      "Sobha Realty is a leading global developer since 1976 known for designing royal facilities, mosques, and signature projects. Created master communities such as Sobha Hartland, offering diverse building styles and properties.",
    projectsCount: 71,
    logo: "https://new-projects-media.propertyfinder.com/developer/8a509d77-0b04-4669-9a78-d9fd5cdc78da/logo/image/L_UdmunePjPgB1sOpqj1TlbZ1NTOchKK8RtZ4QaqWa8=/original.png",
  },
  {
    id: "6",
    name: "Ellington",
    founded: "2014",
    description:
      "Founded in 2014, Ellington, with their joined experience, crafted lifestyles in luxury villas and apartments such as Belgravia and more. Accomplished by exceptional artistic talent and architectural design.",
    projectsCount: 65,
    logo: "https://new-projects-media.propertyfinder.com/developer/a3178484-ee0c-466d-9fe3-92b231607234/logo/image/lOHO4BsD8PHWqSJqPEhmlwI9IVDDUB_SqSqssrZM_mE=/original.png",
  },
  {
    id: "7",
    name: "Binghatti Developers",
    founded: "2008",
    description:
      "One of Dubai's leading developers, Binghatti, created opulent projects by offering a variety of residences that redefine luxury living. Partnered with global brands, including Mercedes-Benz, Bugatti, and Jacob & Co.",
    projectsCount: 62,
    logo: "https://new-projects-media.propertyfinder.com/developer/db16d589-88c5-4428-899b-db54b1d7ef7a/logo/image/R9cUN2yisO8tn7iOykZ1i_JjpbtuMvZjLYbLY7sV8fE=/original.png",
  },
  {
    id: "8",
    name: "Meraas Holding",
    founded: "2007",
    description:
      "Meraas was established in 2007. Famous for the Bluewaters Island and City Walk. Aims to establish Dubai as the preferred global location for real estate investment and offer a variety of home options to suit all lifestyles.",
    projectsCount: 61,
    logo: "https://new-projects-media.propertyfinder.com/developer/831c8b0f-8adb-4fa5-94e9-0b123aa91a1a/logo/image/Khm513Li-0EP7_xCCxbyA3QlHudwwiTkvOG5Rz5KI1Y=/original.png",
  },
  {
    id: "9",
    name: "ARADA - Sale",
    founded: "2017",
    description:
      "Arada is a prominent UAE developer, best known for Aljada, which was founded in 2017 by well-known Gulf businesspeople. Arada offers contemporary properties in well-planned communities with flexible payment plans.",
    projectsCount: 47,
    logo: "https://new-projects-media.propertyfinder.com/developer/3699a21c-ddd9-4702-8adf-5348fdf5d2da/logo/image/OHWeY2FYNHVt6KK5gmREYBlufhBx7QnXqw84qwHcJ4U=/original.png",
  },
  {
    id: "10",
    name: "Imtiaz Developments",
    founded: "1993",
    description:
      "One of the top real estate companies in Dubai, Imtiaz Developments has created numerous residential properties. They innovate by anticipating market trends and offering expertise across various real estate sectors.",
    projectsCount: 38,
    logo: "https://new-projects-media.propertyfinder.com/developer/3fadc15f-708b-4d93-90bc-4aa9086d16f2/logo/image/LYPK0EVx4_03jTZaAXVs0uzJmaEcb8ZHyQCtXsh-VwQ=/original.png",
  },
];

const DeveloperCard = ({ developer }: { developer: Developer }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  const opacity = useTransform(
    smoothProgress,
    [0, 0.35, 0.35, 1],
    [0, 1, 1, 0],
  );

  const scale = useTransform(
    smoothProgress,
    [0, 0.35, 0.65, 1],
    [0.94, 1, 1, 0.94],
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale }}
      className="py-6 border-b border-gray-50/20 last:border-0 bg-transparent"
    >
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="flex flex-row md:flex-col items-center md:items-start gap-4">
          <div className="w-20 h-20 md:w-40 md:h-40 flex-shrink-0 border border-gray-200 md:border-gray-800 rounded-lg md:rounded-xl flex items-center justify-center p-2 md:p-4 bg-white md:bg-zinc-900 shadow-sm">
            <img
              src={developer.logo}
              alt={developer.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          <div className="md:hidden">
            <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wide">
              Founded in {developer.founded}
            </p>
            <h3 className="text-lg font-bold text-white leading-tight">
              {developer.name}
            </h3>
          </div>
        </div>

        <div className="flex-grow">
          <div className="hidden md:block">
            <p className="text-sm text-gray-500 mb-1">
              Founded in {developer.founded}
            </p>
            <h3 className="text-xl font-medium text-white mb-3">
              {developer.name}
            </h3>
          </div>

          <p className="text-gray-400 md:text-gray-300 text-[16px] md:text-lg leading-relaxed line-clamp-4 md:line-clamp-none">
            {developer.description}
          </p>
        </div>

        <div className="mt-2 md:mt-0 flex items-center">
          <button className="w-full md:w-auto px-6 py-3 md:py-2.5 rounded-lg text-indigo-900 md:text-white bg-indigo-50/50 md:bg-zinc-800 hover:bg-indigo-100 md:hover:bg-zinc-700 font-medium text-sm transition-all whitespace-nowrap">
            {developer.projectsCount} projects
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function RealEstate() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDevelopers = useMemo(() => {
    return DEVELOPERS_DATA.filter((dev) =>
      dev.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  return (
    <div className="bg-zinc-950 text-white pt-32 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 pt-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <h1 className="text-3xl md:text-4xl font-normal max-w-xl mx-auto tracking-tight text-white text-center">
            Top Real Estate Developers in UAE
          </h1>
        </div>

        {/* Padding Bottom is essential so the last items can scroll up and fade out */}
        <div className="divide-y divide-gray-800 ">
          {filteredDevelopers.length > 0 ? (
            filteredDevelopers.map((dev) => (
              <DeveloperCard key={dev.id} developer={dev} />
            ))
          ) : (
            <div className="py-20 text-center text-gray-500">
              <Search size={32} className="mx-auto mb-4 opacity-20" />
              <p>No developers found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

///new without scale
// ("use client");

// import React, { useState, useMemo, useRef } from "react";
// import { Search } from "lucide-react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// // --- Types ---
// interface Developer {
//   id: string;
//   name: string;
//   founded: string;
//   description: string;
//   projectsCount: number;
//   logo: string;
// }

// const DEVELOPERS_DATA = [
//   {
//     id: "1",
//     name: "Emaar Properties",
//     founded: "1997",
//     description:
//       "Emaar, a real estate giant founded in 1997, is renowned for Burj Khalifa and Dubai Mall. Emaar offers different properties built to the highest standards. Their mission is to shape the future for everyone.",
//     projectsCount: 209,
//     logo: "https://new-projects-media.propertyfinder.com/developer/79ca4333-9975-4672-b05f-bb7329de75e9/logo/image/SXDm9h3dbO4shNsEGYyX31DwTU98MpFSxR1sEuT7LsE=/original.png",
//   },
//   {
//     id: "2",
//     name: "Azizi Developments",
//     founded: "2007",
//     description:
//       "Azizi Developments, a giant Dubai-based developer offering projects such as Azizi Riviera and more, provides modern houses and a wide range of budgets. Azizi stands as a choice for property seekers in the UAE.",
//     projectsCount: 110,
//     logo: "https://new-projects-media.propertyfinder.com/developer/90728d48-7a7d-4d3a-ba4a-145890eae6c1/logo/image/dRxSykZ1jpsPTL2pud5WlGzCiHxu1ruhz51uHFm4pDM=/original.png",
//   },
//   {
//     id: "3",
//     name: "Aldar Properties PJSC",
//     founded: "2004",
//     description:
//       "Aldar Properties is Abu Dhabi's premier developer founded in 2004, shaping world-class communities with a wide range of properties to choose from. Famous for creating luxurious living experiences.",
//     projectsCount: 93,
//     logo: "https://new-projects-media.propertyfinder.com/developer/d0853b8e-c92f-4b7e-a4e2-a5b67955ba7d/logo/image/k1MoKKBF5CIZjwQ0XbOWkxs3heXc0pV6lcQMvgLaKws=/original.png",
//   },
//   {
//     id: "4",
//     name: "Damac Properties",
//     founded: "2002",
//     description:
//       "Founded in 2002, DAMAC has shaped the Middle East by providing luxurious projects in desirable locations. Offering a varied portfolio that includes skyscrapers, communities, and branded apartments for everyone.",
//     projectsCount: 77,
//     logo: "https://new-projects-media.propertyfinder.com/developer/1063a07c-d94f-496b-9a24-5ea7409fe3d1/logo/image/O3p2VHWzQX9-Duzqi1vbOjp2tSlHIwJ1sjRjvTA7h68=/original.png",
//   },
//   {
//     id: "5",
//     name: "Sobha Realty",
//     founded: "1976",
//     description:
//       "Sobha Realty is a leading global developer since 1976 known for designing royal facilities, mosques, and signature projects. Created master communities such as Sobha Hartland, offering diverse building styles and properties.",
//     projectsCount: 71,
//     logo: "https://new-projects-media.propertyfinder.com/developer/8a509d77-0b04-4669-9a78-d9fd5cdc78da/logo/image/L_UdmunePjPgB1sOpqj1TlbZ1NTOchKK8RtZ4QaqWa8=/original.png",
//   },
//   {
//     id: "6",
//     name: "Ellington",
//     founded: "2014",
//     description:
//       "Founded in 2014, Ellington, with their joined experience, crafted lifestyles in luxury villas and apartments such as Belgravia and more. Accomplished by exceptional artistic talent and architectural design.",
//     projectsCount: 65,
//     logo: "https://new-projects-media.propertyfinder.com/developer/a3178484-ee0c-466d-9fe3-92b231607234/logo/image/lOHO4BsD8PHWqSJqPEhmlwI9IVDDUB_SqSqssrZM_mE=/original.png",
//   },
//   {
//     id: "7",
//     name: "Binghatti Developers",
//     founded: "2008",
//     description:
//       "One of Dubai's leading developers, Binghatti, created opulent projects by offering a variety of residences that redefine luxury living. Partnered with global brands, including Mercedes-Benz, Bugatti, and Jacob & Co.",
//     projectsCount: 62,
//     logo: "https://new-projects-media.propertyfinder.com/developer/db16d589-88c5-4428-899b-db54b1d7ef7a/logo/image/R9cUN2yisO8tn7iOykZ1i_JjpbtuMvZjLYbLY7sV8fE=/original.png",
//   },
//   {
//     id: "8",
//     name: "Meraas Holding",
//     founded: "2007",
//     description:
//       "Meraas was established in 2007. Famous for the Bluewaters Island and City Walk. Aims to establish Dubai as the preferred global location for real estate investment and offer a variety of home options to suit all lifestyles.",
//     projectsCount: 61,
//     logo: "https://new-projects-media.propertyfinder.com/developer/831c8b0f-8adb-4fa5-94e9-0b123aa91a1a/logo/image/Khm513Li-0EP7_xCCxbyA3QlHudwwiTkvOG5Rz5KI1Y=/original.png",
//   },
//   {
//     id: "9",
//     name: "ARADA - Sale",
//     founded: "2017",
//     description:
//       "Arada is a prominent UAE developer, best known for Aljada, which was founded in 2017 by well-known Gulf businesspeople. Arada offers contemporary properties in well-planned communities with flexible payment plans.",
//     projectsCount: 47,
//     logo: "https://new-projects-media.propertyfinder.com/developer/3699a21c-ddd9-4702-8adf-5348fdf5d2da/logo/image/OHWeY2FYNHVt6KK5gmREYBlufhBx7QnXqw84qwHcJ4U=/original.png",
//   },
//   {
//     id: "10",
//     name: "Imtiaz Developments",
//     founded: "1993",
//     description:
//       "One of the top real estate companies in Dubai, Imtiaz Developments has created numerous residential properties. They innovate by anticipating market trends and offering expertise across various real estate sectors.",
//     projectsCount: 38,
//     logo: "https://new-projects-media.propertyfinder.com/developer/3fadc15f-708b-4d93-90bc-4aa9086d16f2/logo/image/LYPK0EVx4_03jTZaAXVs0uzJmaEcb8ZHyQCtXsh-VwQ=/original.png",
//   },
// ];

// const DeveloperCard = ({ developer }: { developer: Developer }) => {
//   const cardRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: cardRef,
//     offset: ["start end", "center center", "end start"],
//   });

//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 45,
//     damping: 25,
//     restDelta: 0.001,
//   });

//   // Smooth Opacity fade-in and fade-out
//   const opacity = useTransform(smoothProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);

//   return (
//     <motion.div
//       ref={cardRef}
//       style={{ opacity }}
//       className="py-10 border-b border-gray-50/10 last:border-0 bg-transparent"
//     >
//       <div className="flex flex-col md:flex-row gap-4 md:gap-6">
//         <div className="flex flex-row md:flex-col items-center md:items-start gap-4">
//           <div className="w-20 h-20 md:w-40 md:h-40 flex-shrink-0 border border-gray-200 md:border-gray-800 rounded-lg md:rounded-xl flex items-center justify-center p-2 md:p-4 bg-white md:bg-zinc-900 shadow-sm">
//             <img
//               src={developer.logo}
//               alt={developer.name}
//               className="max-w-full max-h-full object-contain"
//             />
//           </div>

//           <div className="md:hidden">
//             <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wide">
//               Founded in {developer.founded}
//             </p>
//             <h3 className="text-lg font-bold text-white leading-tight">
//               {developer.name}
//             </h3>
//           </div>
//         </div>

//         <div className="flex-grow">
//           <div className="hidden md:block">
//             <p className="text-sm text-gray-500 mb-1">
//               Founded in {developer.founded}
//             </p>
//             <h3 className="text-xl font-medium text-white mb-3">
//               {developer.name}
//             </h3>
//           </div>

//           <p className="text-gray-400 md:text-gray-300 text-[16px] md:text-lg leading-relaxed line-clamp-4 md:line-clamp-none">
//             {developer.description}
//           </p>
//         </div>

//         <div className="mt-2 md:mt-0 flex items-center">
//           <button className="w-full md:w-auto px-6 py-3 md:py-2.5 rounded-lg text-indigo-900 md:text-white bg-indigo-50/50 md:bg-zinc-800 hover:bg-indigo-100 md:hover:bg-zinc-700 font-medium text-sm transition-all whitespace-nowrap">
//             {developer.projectsCount} projects
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default function RealEstate() {
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredDevelopers = useMemo(() => {
//     return DEVELOPERS_DATA.filter((dev) =>
//       dev.name.toLowerCase().includes(searchQuery.toLowerCase()),
//     );
//   }, [searchQuery]);

//   return (
//     <div className="bg-black text-white pt-32 min-h-screen selection:bg-indigo-500/30">
//       <div className="max-w-6xl mx-auto px-4 pt-6">
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
//           <h1 className="text-3xl md:text-4xl font-normal max-w-xl mx-auto tracking-tight text-white text-center">
//             Top Real Estate Developers in UAE
//           </h1>
//         </div>

//         <div className="divide-y divide-gray-800 pb-24">
//           {filteredDevelopers.length > 0 ? (
//             filteredDevelopers.map((dev) => (
//               <DeveloperCard key={dev.id} developer={dev} />
//             ))
//           ) : (
//             <div className="py-20 text-center text-gray-500">
//               <Search size={32} className="mx-auto mb-4 opacity-20" />
//               <p>No developers found matching "{searchQuery}"</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
