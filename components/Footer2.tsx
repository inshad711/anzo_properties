"use client";

import {
  Mail,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const LandingPage = () => {
  return (
    // <div className=" bg-zinc-950 text-white border-t border-gray-800 shadow-2xl shadow-gray-800  overflow-x-hidden">
    <div className="bg-zinc-950 text-white border-t border-gray-800   shadow-[0_-2px_10px_rgba(197,163,107,0.25)]">
      <div className="templateContainer">
        <section className="relative flex flex-col mt-12 justify-between py-6 sm:py-10 md:pt-20 overflow-hidden">
          {/* brand text  */}
          <div className="absolute top-0   left-0 w-full z-0 pointer-events-none select-none flex justify-center overflow-hidden">
            <h1 className="text-[9vw] sm:text-[10vw] font-medium uppercase tracking-tighter leading-none text-white whitespace-nowrap">
              Anzo Properties
            </h1>
          </div>

          {/* Content Layer */}
          <div className="relative pt-10 z-10 mt-6 md:mt-18 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Left Column: Messaging */}

            <div
              className="lg:col-span-7 flex flex-col space-y-6 md:space-y-10
                items-center md:items-start
                text-center md:text-left"
            >
              <h2 className="text-xl md:text-3xl font-normal leading-[1.1] max-w-2xl">
                Looking for assistance? <br className="hidden sm:block" />
                Need guidance or have questions?
              </h2>

              <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed">
                Our real estate experts are just a click away, committed to
                providing the assistance you deserve.
              </p>
            </div>

            {/* Right Column: Contact Stacks */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-12 lg:space-y-0 lg:pl-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-3 md:space-y-4">
                  <p className="text-gray-500 font-bold uppercase text-[12px] md:text-xs tracking-[0.2em]">
                    Qucik Link
                  </p>

                  <div className="space-y-1">
                    <Link href="/">
                      <p className="text-base md:text-lg hover:text-gray-300 cursor-pointer break-words">
                        Home
                      </p>
                    </Link>

                    <Link href="/about">
                      <p className="text-base md:text-lg hover:text-gray-300 cursor-pointer break-words">
                        About
                      </p>
                    </Link>

                    <Link href="/developers-we-work">
                      <p className="text-base md:text-lg hover:text-gray-300 cursor-pointer break-words">
                        Developers
                      </p>
                    </Link>

                    <Link href="/contact">
                      <p className="text-base md:text-lg hover:text-gray-300 cursor-pointer break-words">
                        Contact
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <p className="text-gray-500 font-bold uppercase text-[12px] md:text-xs tracking-[0.2em]">
                    Contact
                  </p>

                  <div className="space-y-1">
                    <a
                      href="mailto:info@anzoproperties.com"
                      className="block text-base md:text-lg hover:text-gray-300 cursor-pointer break-words"
                    >
                      info@anzoproperties.com
                    </a>

                    <a
                      href="tel:+971551172789"
                      className="block text-base md:text-lg hover:text-gray-300 cursor-pointer"
                    >
                      +971-55-1172789
                    </a>
                  </div>
                </div>
              </div>

              {/* Socials & Copyright */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-start gap-8 pb-8 md:pt-8">
                <div className="flex flex-wrap gap-3">
                  {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                    >
                      <Icon size={16} className="md:w-[18px] md:h-[18px]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 pb-4 flex items-center">
            <div className="absolute left-1/2 -translate-x-1/2">
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default function Footer2() {
  return <LandingPage />;
}

//////new
// "use client";

// import { Facebook, Instagram, Linkedin } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";

// const LandingPage = () => {
//   return (
//     <div className="bg-zinc-950 text-white border-t border-gray-50/20 overflow-x-hidden">
//       <div className="templateContainer">
//         <section className="relative flex flex-col mt-12 justify-between py-6 sm:py-10 md:pt-20 overflow-hidden">
//           {/* brand text - Added opacity to prevent "ghosting" in some browsers */}
//           <div className="absolute top-0 left-0 w-full z-0 pointer-events-none select-none flex justify-center overflow-hidden">
//             <h1 className="text-[9vw] sm:text-[10vw] font-medium uppercase tracking-tighter leading-none text-white whitespace-nowrap">
//               Anzo Properties
//             </h1>
//           </div>

//           {/* Content Layer */}
//           <div className="relative pt-10 z-10 mt-6 md:mt-18 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
//             {/* Left Column: Messaging */}
//             <div
//               className="lg:col-span-7 flex flex-col space-y-6 md:space-y-10
//                 items-center md:items-start
//                 text-center md:text-left"
//             >
//               <h2 className="text-xl md:text-3xl font-normal leading-[1.1] max-w-2xl">
//                 Looking for assistance? <br className="hidden sm:block" />
//                 Need guidance or have questions?
//               </h2>

//               <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed">
//                 Our real estate experts are just a click away, committed to
//                 providing the assistance you deserve.
//               </p>
//             </div>

//             {/* Right Column: Contact Stacks */}
//             <div className="lg:col-span-5 flex flex-col justify-between space-y-12 lg:space-y-0 lg:pl-12">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
//                 <div className="space-y-3 md:space-y-4">
//                   <p className="text-gray-500 font-bold uppercase text-[12px] md:text-xs tracking-[0.2em]">
//                     Quick Link
//                   </p>

//                   <div className="space-y-1 flex flex-col">
//                     <Link
//                       href="/"
//                       className="text-base md:text-lg hover:text-gray-300 cursor-pointer break-words"
//                     >
//                       Home
//                     </Link>

//                     <Link
//                       href="/about"
//                       className="text-base md:text-lg hover:text-gray-300 cursor-pointer break-words"
//                     >
//                       About
//                     </Link>

//                     <Link
//                       href="/developers-we-work"
//                       className="text-base md:text-lg hover:text-gray-300 cursor-pointer break-words"
//                     >
//                       Developers
//                     </Link>

//                     <Link
//                       href="/contact"
//                       className="text-base md:text-lg hover:text-gray-300 cursor-pointer break-words"
//                     >
//                       Contact
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="space-y-3 md:space-y-4">
//                   <p className="text-gray-500 font-bold uppercase text-[12px] md:text-xs tracking-[0.2em]">
//                     Contact
//                   </p>

//                   <div className="space-y-1 flex flex-col">
//                     <a
//                       href="mailto:info@anzoproperties.com"
//                       className="text-base md:text-lg hover:text-gray-300 cursor-pointer break-all"
//                     >
//                       info@anzoproperties.com
//                     </a>

//                     <a
//                       href="tel:+971551172789"
//                       className="text-base md:text-lg hover:text-gray-300 cursor-pointer"
//                     >
//                       +971-55-1172789
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* Socials & Copyright */}
//               <div className="flex flex-col sm:flex-row sm:items-end justify-start gap-8 pb-8 md:pt-8">
//                 <div className="flex flex-wrap gap-3">
//                   {[Facebook, Instagram, Linkedin].map((Icon, i) => (
//                     <a
//                       key={i}
//                       href="#"
//                       className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
//                     >
//                       <Icon size={16} className="md:w-[18px] md:h-[18px]" />
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="relative z-10 pb-4 flex items-center justify-center">
//             <Link href="/" className="flex items-center">
//               <Image
//                 src="/logo/c4bccd67-6ddc-4a58-bac9-625fa0a9847b.png"
//                 alt="Anzo Logo"
//                 width={170}
//                 height={90}
//                 priority
//                 className="object-contain w-[130px] md:w-[170px]"
//               />
//             </Link>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default function Footer2() {
//   return <LandingPage />;
// }
