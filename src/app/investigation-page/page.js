import Navbar from "@/components/Navbar";
import React from "react";
import HeroSection from "./HeroSection";
import ProffesionalSection from "./ProffesionalSection";
import ServicesOffered from "./ServicesOffered";
import { client } from "@/sanity/lib/client";
import { investigationPageQuery } from "@/sanity/lib/queries";

const InvestigationPage =  async () => {
  const page = await client.fetch(investigationPageQuery);
  const sections = page?.sections || [];

  return (
    <>
      <Navbar />
      <div id="main-content" className="pt-18">
        {sections.map((section) => {
          switch (section._type) {
            case "hero":
              return <HeroSection key={section._key} hero={section} />;
            case "professionalSection":
              return <ProffesionalSection key={section._key} data={section} />;
            case "investigationSection":
              return <ServicesOffered key={section._key} data={section} />

            default:
              return null;
          }
        })}
      
      </div>
    </>
  );
};

export default InvestigationPage;
