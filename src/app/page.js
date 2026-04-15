import Image from "next/image";
import HeroSection from "./home-page/HeroSection";
import WhyUsSection from "./home-page/WhyUsSection";

export default function Home() {
  return (
    <div id="main-content" className="pt-20">
      <HeroSection />
      <WhyUsSection />
    </div>
  );
}
