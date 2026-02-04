import Link from "next/link";
import React from "react";

/**
 * MarqueeItem Interface
 */
interface MarqueeItemData {
  title: string;
  url: string;
  stack1: string;
  stack2: string;
}

interface MarqueeItemProps {
  item: MarqueeItemData;
}

const MARQUEE_ITEMS: MarqueeItemData[] = [
  {
    title: "Emaar Properties",
    url: "/brand/1.webp",
    stack1: "#DDFDE8",
    stack2: "#EDF3D8",
  },
  {
    title: "Azizi Developments",
    url: "/brand/2.webp",
    stack1: "#F6D9FB",
    stack2: "#E3EBFD",
  },
  {
    title: "Aldar Properties PJSC",
    url: "/brand/3.webp",
    stack1: "#E3EBFD",
    stack2: "#EDF3D8",
  },
  {
    title: "Damac Properties",
    url: "/brand/4.webp",
    stack1: "#E6FBFE",
    stack2: "#EDF3D8",
  },
  {
    title: "Sobha Realty",
    url: "/brand/5.webp",
    stack1: "#E6FDC9",
    stack2: "#EDF3D8",
  },
  {
    title: "Ellington",
    url: "/brand/6.webp",
    stack1: "#EDDDFB",
    stack2: "#DDFDE8",
  },
  {
    title: "Binghatti Developers",
    url: "/brand/7.webp",
    stack1: "#E6FBFE",
    stack2: "#DDFDE8",
  },
  {
    title: "Meraas Holding",
    url: "/brand/8.webp",
    stack1: "#EDF3D8",
    stack2: "#EDDDFB",
  },
];
const MarqueeItem: React.FC<MarqueeItemProps> = ({ item }) => {
  return (
    // Changed <a> to <div> to remove link behavior
    <div
      className="group relative flex flex-col items-center justify-center min-w-[220px]"
      style={
        {
          "--stack-color-1": item.stack1,
          "--stack-color-2": item.stack2,
        } as React.CSSProperties
      }
    >
      <div className="relative w-[200px] h-[150px] transition-transform duration-500 ease-out ">
        {/* Layer 1 */}
        <div
          className="absolute inset-0 rounded-xl transition-all duration-500 ease-out z-0 
                     translate-x-2 -translate-y-2 scale-[0.96] opacity-100
                     group-hover:translate-x-4 group-hover:-translate-y-5 group-hover:scale-[0.92]"
          // style={{ backgroundColor: "var(--stack-color-1)" }}
        />

        {/* Layer 2 */}
        <div
          className="absolute inset-0 rounded-xl transition-all duration-500 ease-out z-10 
                     translate-x-1 -translate-y-1 scale-[0.98] opacity-100
                     group-hover:translate-x-2 group-hover:-translate-y-3 group-hover:scale-[0.96]"
          // style={{ backgroundColor: "var(--stack-color-2)" }}
        />

        {/* Main Image Layer */}
        <div className="relative z-20 w-full h-full overflow-hidden rounded-xl  shadow-sm ring-1 ring-black/[0.05] transition-shadow duration-500 group-hover:shadow-xl">
          <img
            src={item.url}
            alt={item.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* <div className="mt-6 text-[14px] font-semibold text-white ">
        {item.title}
      </div> */}
    </div>
  );
};

export default function Marquee4() {
  const displayItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="w-full bg-zinc-950 pb-8 md:pb-0 overflow-hidden">
      <div className="relative flex">
        {/* Added "marquee-container" class for hover control */}
        <div
          className="flex gap-0 whitespace-nowrap animate-marquee marquee-container"
          style={{ width: "max-content" }}
        >
          {displayItems.map((item, idx) => (
            <MarqueeItem key={`${item.title}-${idx}`} item={item} />
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        {/* <a
          href="developers-we-work"
          className="px-5 py-2 rounded-lg border border-gray-700 text-white text-sm hover:bg-gray-800 transition"
        >
          All developers in UAE
        </a> */}
        {/* <Link href={developers-we-work}>
          <button className="w-fit px-8 py-3 border border-[#c5a36b]/40 rounded-full text-[11px] uppercase tracking-widest font-semibold text-[#c5a36b] hover:bg-[#c5a36b] hover:text-black transition-all duration-500">
            All developers in UAE
          </button>
        </Link> */}
        <Link href="/developers-we-work">
          <button className="w-fit px-8 py-3 border border-[#c5a36b]/40 rounded-full text-[13px] uppercase tracking-widest font-semibold text-[#c5a36b] hover:bg-[#c5a36b] hover:text-black transition-all duration-500">
            All developers in UAE
          </button>
        </Link>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        /* Reliable hover pause */
        .marquee-container:hover {
          animation-play-state: paused !important;
        }
      `,
        }}
      />
    </div>
  );
}
