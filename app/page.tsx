import AboutSection from "@/components/AboutSection";
import AreaGuide from "@/components/AreaGuide";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <CTA />
      <AreaGuide />
      <Contact />
      {/* <div>
        <AboutSection />
      </div> */}
    </div>
  );
}
