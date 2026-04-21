import React from "react";
import HeroSection from "./HeroSection";
import CompanyOverview from "./CompanyOverview";
import MissionVision from "./MissionVision";
import WhyUs from "./WhyUs";
import CoverageSection from "./CoverageSection";
import Navbar from "@/components/Navbar";
import { client } from "@/sanity/lib/client";
import { aboutPageQuery } from "@/sanity/lib/queries";

const AboutUs = async () => {
  const page = await client.fetch(aboutPageQuery);
  const sections = page?.sections || [];
  return (
    <>
      <Navbar />
      <div id="main-content" className="pt-20">
        {sections.map((section) => {
          switch (section._type) {
            case "hero":
              return <HeroSection key={section._key} hero={section} />;

            case "companyOverviewSection":
              return <CompanyOverview key={section._key} data={section} />;

            case "missionVisionSection":
              return <MissionVision key={section._key} data={section} />;

            case "whyUs":
              return <WhyUs key={section._key} data={section} />;

            case "coverageSection":
              return <CoverageSection key={section._key} data={section} />;

            default:
              return null;
          }
        })}
      </div>
    </>
  );
};

export default AboutUs;
