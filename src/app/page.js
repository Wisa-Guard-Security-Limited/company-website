import Image from "next/image";
import HeroSection from "./home-page/HeroSection";
import WhyUsSection from "./home-page/WhyUsSection";
import OurServiceSection from "./home-page/OurServiceSection";
import AboutLocation from "./home-page/AboutLocation";
import CtaSection from "./home-page/CtaSection";

export default function Home() {
  return (
    <div id="main-content" className="pt-20">
      <HeroSection />
      <WhyUsSection />
      <OurServiceSection />
      <AboutLocation />
      <CtaSection />
    </div>
  );
}
