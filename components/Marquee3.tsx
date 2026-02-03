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
    url: "https://new-projects-media.propertyfinder.com/developer/79ca4333-9975-4672-b05f-bb7329de75e9/logo/image/SXDm9h3dbO4shNsEGYyX31DwTU98MpFSxR1sEuT7LsE=/original.png",
    stack1: "#DDFDE8",
    stack2: "#EDF3D8",
  },
  {
    title: "Azizi Developments",
    url: "https://new-projects-media.propertyfinder.com/developer/90728d48-7a7d-4d3a-ba4a-145890eae6c1/logo/image/dRxSykZ1jpsPTL2pud5WlGzCiHxu1ruhz51uHFm4pDM=/original.png",
    stack1: "#F6D9FB",
    stack2: "#E3EBFD",
  },
  {
    title: "Aldar Properties PJSC",
    url: "https://new-projects-media.propertyfinder.com/developer/d0853b8e-c92f-4b7e-a4e2-a5b67955ba7d/logo/image/k1MoKKBF5CIZjwQ0XbOWkxs3heXc0pV6lcQMvgLaKws=/original.png",
    stack1: "#E3EBFD",
    stack2: "#EDF3D8",
  },
  {
    title: "Damac Properties",
    url: "https://new-projects-media.propertyfinder.com/developer/1063a07c-d94f-496b-9a24-5ea7409fe3d1/logo/image/O3p2VHWzQX9-Duzqi1vbOjp2tSlHIwJ1sjRjvTA7h68=/original.png",
    stack1: "#E6FBFE",
    stack2: "#EDF3D8",
  },
  {
    title: "Sobha Realty",
    url: "https://new-projects-media.propertyfinder.com/developer/8a509d77-0b04-4669-9a78-d9fd5cdc78da/logo/image/L_UdmunePjPgB1sOpqj1TlbZ1NTOchKK8RtZ4QaqWa8=/original.png",
    stack1: "#E6FDC9",
    stack2: "#EDF3D8",
  },
  {
    title: "Ellington",
    url: "https://new-projects-media.propertyfinder.com/developer/a3178484-ee0c-466d-9fe3-92b231607234/logo/image/lOHO4BsD8PHWqSJqPEhmlwI9IVDDUB_SqSqssrZM_mE=/original.png",
    stack1: "#EDDDFB",
    stack2: "#DDFDE8",
  },
  {
    title: "Binghatti Developers",
    url: "https://new-projects-media.propertyfinder.com/developer/db16d589-88c5-4428-899b-db54b1d7ef7a/logo/image/R9cUN2yisO8tn7iOykZ1i_JjpbtuMvZjLYbLY7sV8fE=/original.png",
    stack1: "#E6FBFE",
    stack2: "#DDFDE8",
  },
  {
    title: "Meraas Holding",
    url: "https://new-projects-media.propertyfinder.com/developer/831c8b0f-8adb-4fa5-94e9-0b123aa91a1a/logo/image/Khm513Li-0EP7_xCCxbyA3QlHudwwiTkvOG5Rz5KI1Y=/original.png",
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
          style={{ backgroundColor: "var(--stack-color-1)" }}
        />

        {/* Layer 2 */}
        <div
          className="absolute inset-0 rounded-xl transition-all duration-500 ease-out z-10 
                     translate-x-1 -translate-y-1 scale-[0.98] opacity-100
                     group-hover:translate-x-2 group-hover:-translate-y-3 group-hover:scale-[0.96]"
          style={{ backgroundColor: "var(--stack-color-2)" }}
        />

        {/* Main Image Layer */}
        <div className="relative z-20 w-full h-full overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/[0.05] transition-shadow duration-500 group-hover:shadow-xl">
          <img
            src={item.url}
            alt={item.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div className="mt-6 text-[14px] font-semibold text-white ">
        {item.title}
      </div>
    </div>
  );
};

export default function Marquee3() {
  const displayItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="w-full bg-black py-14 overflow-hidden select-none">
      <div className="relative flex">
        {/* Added "marquee-container" class for hover control */}
        <div
          className="flex gap-5 whitespace-nowrap animate-marquee marquee-container"
          style={{ width: "max-content" }}
        >
          {displayItems.map((item, idx) => (
            <MarqueeItem key={`${item.title}-${idx}`} item={item} />
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <a
          href="developers-we-work"
          className="px-5 py-2 rounded-lg border border-gray-700 text-white text-sm hover:bg-gray-800 transition"
        >
          All developers in UAE
        </a>
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
