// //////new

// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Search } from "lucide-react"; // Install lucide-react or use an SVG
// import Image from "next/image";

// const Header = () => {
//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About Us ", href: "/about" },
//     { name: "Properties", href: "/properties" },
//     { name: "Contact Us", href: "/contact" },
//   ];

//   return (
//     <motion.header
//       initial={{ y: -20, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-6 flex items-center justify-between "
//     >
//       <div className="flex-1">
//         <Link href="/" className="flex items-center">
//           <Image
//             src="/logo/c4bccd67-6ddc-4a58-bac9-625fa0a9847b.png" // put your logo inside /public
//             alt="Anzo Logo"
//             width={170}
//             height={90}
//             priority
//             className="object-contain"
//           />
//         </Link>
//       </div>

//       {/* Navigation Links */}
//       <nav className="hidden md:flex items-center gap-12">
//         {navLinks.map((link) => (
//           <Link
//             key={link.name}
//             href={link.href}
//             className="text-white text-md font-normal tracking-wide hover:text-[#d6b56a] transition-colors"
//           >
//             {link.name}
//           </Link>
//         ))}
//       </nav>

//       {/* Search Icon */}
//       {/* <div className="flex-1 flex justify-end">
//         <button className="text-white hover:scale-110 transition-transform">
//           <Search size={20} strokeWidth={2.5} />
//         </button>
//       </div> */}
//       {/* Get Quote Button */}
//       <div className="flex-1 flex justify-end">
//         {/* <Link
//           href="/contact"
//           className="px-6 py-2.5 border border-white text-white text-sm font-medium tracking-wide rounded-full
//                hover:bg-white hover:text-black transition-all duration-300"
//         >
//           Get Quote
//         </Link> */}
//         {/* <Link
//           href="/contact"
//           className="px-7 py-3 text-sm font-semibold text-black rounded-full
//              bg-gradient-to-r from-[#f1d276] to-[#785c37]
//              hover:from-[#785c37] hover:to-[#f1d276]
//              transition-all duration-300"
//         >
//           Get Quote
//         </Link> */}
//         {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//           <Link
//             href="/contact"
//             className="px-8 py-3 rounded-full text-sm font-semibold
//                text-black
//                bg-[#d6b56a]
//                shadow-lg shadow-black/30
//                hover:shadow-xl transition-all duration-300"
//           >
//             Get Quote
//           </Link>
//         </motion.div> */}
//         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//           <Link
//             href="/contact"
//             className="px-8 py-3 rounded-full text-sm font-semibold
//       text-[#d6b56a]
//       border border-[#d6b56a]
//       bg-transparent
//       hover:bg-[#d6b56a]
//       hover:text-black
//       shadow-none
//       transition-all duration-300"
//           >
//             Get Quote
//           </Link>
//         </motion.div>
//       </div>
//     </motion.header>
//   );
// };

// export default Header;

/// with bg

//////new

// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Search } from "lucide-react";
// import Image from "next/image";

// const Header = () => {
//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About Us ", href: "/about" },
//     { name: "Properties", href: "/properties" },
//     { name: "Contact Us", href: "/contact" },
//   ];

//   return (
//     <motion.header
//       initial={{ y: -20, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-6 flex items-center justify-between "
//     >
//       <div className="flex-1">
//         <Link href="/" className="flex items-center">
//           <Image
//             src="/logo/c4bccd67-6ddc-4a58-bac9-625fa0a9847b.png" // put your logo inside /public
//             alt="Anzo Logo"
//             width={170}
//             height={90}
//             priority
//             className="object-contain"
//           />
//         </Link>
//       </div>

//       {/* Navigation Links */}
//       <nav className="hidden md:flex items-center gap-12">
//         {navLinks.map((link) => (
//           <Link
//             key={link.name}
//             href={link.href}
//             className="text-white text-md font-normal tracking-wide hover:text-[#d6b56a] transition-colors"
//           >
//             {link.name}
//           </Link>
//         ))}
//       </nav>

//       <div className="flex-1 flex justify-end">
//         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//           <Link
//             href="/contact"
//             className="px-8 py-3 rounded-full text-sm font-semibold
//       text-[#d6b56a]
//       border border-[#d6b56a]
//       bg-transparent
//       hover:bg-[#d6b56a]
//       hover:text-black
//       shadow-none
//       transition-all duration-300"
//           >
//             Get Quote
//           </Link>
//         </motion.div>
//       </div>
//     </motion.header>
//   );
// };

// export default Header;

////// new

// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/about" },
//     { name: "Properties", href: "/properties" },
//     { name: "Contact Us", href: "/contact" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.header
//       initial={{ y: -20, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       className={`
//         fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4
//         flex items-center justify-between
//         transition-all duration-300
//         ${scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"}
//       `}
//     >
//       {/* Logo */}
//       <div className="flex-1">
//         <Link href="/" className="flex items-center">
//           <Image
//             src="/logo/c4bccd67-6ddc-4a58-bac9-625fa0a9847b.png"
//             alt="Anzo Logo"
//             width={170}
//             height={90}
//             priority
//             className="object-contain"
//           />
//         </Link>
//       </div>

//       {/* Navigation */}
//       <nav className="hidden md:flex items-center gap-12">
//         {navLinks.map((link) => (
//           <Link
//             key={link.name}
//             href={link.href}
//             className="text-white text-md font-normal tracking-wide hover:text-[#d6b56a] transition-colors"
//           >
//             {link.name}
//           </Link>
//         ))}
//       </nav>

//       {/* Button */}
//       <div className="flex-1 flex justify-end">
//         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//           <Link
//             href="/contact"
//             className="
//               px-8 py-3 rounded-full text-sm font-semibold
//               text-[#d6b56a]
//               border border-[#d6b56a]
//               bg-transparent
//               hover:bg-[#d6b56a]
//               hover:text-black
//               transition-all duration-300
//             "
//           >
//             Get Quote
//           </Link>
//         </motion.div>
//       </div>
//     </motion.header>
//   );
// };

// export default Header;

//// mobile

// E:\Anzo_web\anzo_properties\components\Header.tsx
"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Developers We Works With", href: "/developers-we-work" },
    { name: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling
      document.body.style.overflow = "unset";
    }

    // Cleanup function to ensure scroll is restored if component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4
          flex items-center justify-between
          transition-all duration-300
          ${scrolled || isOpen ? "bg-black/90 backdrop-blur-md" : "bg-transparent"}
        `}
      >
        {/* Logo - Increased Z-index to stay above the menu */}
        <div className="flex-1 relative z-[100]">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/c4bccd67-6ddc-4a58-bac9-625fa0a9847b.png"
              alt="Anzo Logo"
              width={170}
              height={90}
              priority
              className="object-contain w-[130px] md:w-[170px]"
            />
          </Link>
        </div>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
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

        {/* Button & Mobile Toggle */}
        <div className="flex-1 flex justify-end items-center gap-4 relative z-[100]">
          <motion.div
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full text-sm font-semibold text-[#d6b56a] border border-[#d6b56a] hover:bg-[#d6b56a] hover:text-black transition-all duration-300"
            >
              Get Quote
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#d6b56a]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu logic */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* 1. The Dimmed Background (This stops it from showing "full black") */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-zinc-900/5 backdrop-blur-sm z-[40] md:hidden"
            />

            {/* 2. The Slide-in Menu (75% width for better design) */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 w-[75%] h-full bg-zinc-950 z-[45] md:hidden flex flex-col pt-32 px-6 shadow-2xl"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white text-lg font-medium tracking-wide border-b border-white/5 pb-4 active:text-[#d6b56a]"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 px-6 py-3 rounded-full text-center font-semibold text-[#d6b56a] border border-[#d6b56a]"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
