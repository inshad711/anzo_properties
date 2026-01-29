// "use client";

// import React from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Search } from "lucide-react"; // Using lucide-react for the search icon

// const Header = () => {
//   const navLinks = [
//     { name: "Projects", href: "#" },
//     { name: "Products", href: "#" },
//     { name: "Gallery", href: "#" },
//     { name: "Contact", href: "#" },
//   ];

//   return (
//     <motion.header
//       initial={{ y: -20, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md px-10 py-6 flex items-center justify-between text-white"
//     >
//       {/* Logo */}
//       <div className="flex-1">
//         <Link href="/" className="text-2xl font-bold tracking-widest">
//           DIOLLO
//         </Link>
//       </div>

//       {/* Navigation Links */}
//       <nav className="hidden md:flex items-center gap-10">
//         {navLinks.map((link) => (
//           <Link
//             key={link.name}
//             href={link.href}
//             className="text-sm font-semibold uppercase tracking-wider hover:text-gray-400 transition-colors"
//           >
//             {link.name}
//           </Link>
//         ))}
//       </nav>

//       {/* Search Icon */}
//       <div className="flex-1 flex justify-end">
//         <button className="hover:scale-110 transition-transform">
//           <Search size={22} strokeWidth={2.5} />
//         </button>
//       </div>
//     </motion.header>
//   );
// };

// export default Header;

//////new

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Search } from "lucide-react"; // Install lucide-react or use an SVG
import Image from "next/image";

const Header = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us ", href: "/about" },
    { name: "Properties", href: "/properties" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-6 flex items-center justify-between "
    >
      <div className="flex-1">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/c4bccd67-6ddc-4a58-bac9-625fa0a9847b.png" // put your logo inside /public
            alt="Anzo Logo"
            width={170}
            height={90}
            priority
            className="object-contain"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-16">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-white text-md font-normal tracking-wide hover:text-[#d6b56a] transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Search Icon */}
      {/* <div className="flex-1 flex justify-end">
        <button className="text-white hover:scale-110 transition-transform">
          <Search size={20} strokeWidth={2.5} />
        </button>
      </div> */}
      {/* Get Quote Button */}
      <div className="flex-1 flex justify-end">
        {/* <Link
          href="/contact"
          className="px-6 py-2.5 border border-white text-white text-sm font-medium tracking-wide rounded-full
               hover:bg-white hover:text-black transition-all duration-300"
        >
          Get Quote
        </Link> */}
        {/* <Link
          href="/contact"
          className="px-7 py-3 text-sm font-semibold text-black rounded-full
             bg-gradient-to-r from-[#f1d276] to-[#785c37]
             hover:from-[#785c37] hover:to-[#f1d276]
             transition-all duration-300"
        >
          Get Quote
        </Link> */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/contact"
            className="px-8 py-3 rounded-full text-sm font-semibold
               text-black
               bg-[#d6b56a]
               shadow-lg shadow-black/30
               hover:shadow-xl transition-all duration-300"
          >
            Get Quote
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
