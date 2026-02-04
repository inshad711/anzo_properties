import AboutSection from "@/components/AboutSection";
import AboutSlider from "@/components/AboutSlider";
import AreaGuide from "@/components/AreaGuide";
import Contact from "@/components/Contact";
import Contact2 from "@/components/Contact2";
import CTA from "@/components/CTA";

import HeroSection from "@/components/HeroSection";
import Marquee3 from "@/components/Marquee3";
import Marquee4 from "@/components/Marquee4";
import MarqueeFooter from "@/components/MarqueeFooter";
import WeOffer from "@/components/WeOffer";

export default function Home() {
  return (
    <div className="bg-zinc-950">
      <div>
        <HeroSection />
      </div>
      <CTA />
      <AreaGuide />
      <div>
        <WeOffer />
      </div>
      {/* <AboutSlider /> */}

      {/* <MarqueeFooter /> */}
      <Marquee4 />
      {/* <Marquee3 /> */}

      {/* <Contact /> */}

      <div className="pt-16 pb-12 md:pt-28 md:pb-16">
        <Contact2 />
      </div>
      {/* <div>
        <AboutSection />
      </div> */}
    </div>
  );
}
