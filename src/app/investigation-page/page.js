import Navbar from "@/components/Navbar";
import React from "react";
import HeroSection from "./HeroSection";
import ProffesionalSection from "./ProffesionalSection";
import ServicesOffered from "./ServicesOffered";

const InvestigationPage = () => {
  return (
    <>
      <Navbar />
      <div id="main-content" className="pt-20">
        <HeroSection />
        <ProffesionalSection />
        <ServicesOffered />
      </div>
    </>
  );
};

export default InvestigationPage;
