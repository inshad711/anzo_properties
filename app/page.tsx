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
    <div className="bg-black">
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
      <Contact2 />
      {/* <div>
        <AboutSection />
      </div> */}
    </div>
  );
}
