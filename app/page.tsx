import AboutSection from "@/components/AboutSection";
import AboutSlider from "@/components/AboutSlider";
import AreaGuide from "@/components/AreaGuide";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";

import HeroSection from "@/components/HeroSection";
import Marquee3 from "@/components/Marquee3";
import MarqueeFooter from "@/components/MarqueeFooter";

export default function Home() {
  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <CTA />
      <AreaGuide />
      <AboutSlider />
      <MarqueeFooter />
      <Marquee3 />

      <Contact />
      {/* <div>
        <AboutSection />
      </div> */}
    </div>
  );
}
