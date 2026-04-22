import Navbar from "@/components/Navbar";
import React from "react";
import HeroSection from "./HeroSection";
import ProffesionalSection from "./ProffesionalSection";

const InvestigationPage = () => {
  return (
    <>
      <Navbar />
      <div id="main-content" className="pt-20">
        <HeroSection />
        <ProffesionalSection />
      </div>
    </>
  );
};

export default InvestigationPage;
