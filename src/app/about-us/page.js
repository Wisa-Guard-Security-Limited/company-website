import React from "react";
import HeroSection from "./HeroSection";
import CompanyOverview from "./CompanyOverview";
import MissionVision from "./MissionVision";
import WhyUs from "./WhyUs";
import CoverageSection from "./CoverageSection";

const AboutUs = () => {
  return (
    <div id="main-content" className="pt-20">
      <HeroSection />
      <CompanyOverview />
      <MissionVision />
      <WhyUs />
      <CoverageSection />
    </div>
  );
};

export default AboutUs;
