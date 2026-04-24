import React from "react";
import HeroSection from "./HeroSection";
import MainServices from "./MainServices";
import ProcessSection from "./ProcessSection";
import CtaSection from "./CtaSection";
import Navbar from "@/components/Navbar";
// --- QUERIES ---
import { client } from "@/sanity/lib/client";
import { servicePageQuery } from "@/sanity/lib/queries";

const ServicePage = async () => {
  const page = await client.fetch(servicePageQuery);
  const sections = page?.sections || [];

  return (
    <>
      <Navbar />
      <div id="main-content" className="pt-16">
        {sections.map((section) => {
          switch (section._type) {
            case "hero":
              return <HeroSection key={section._key} hero={section} />;

            case "servicesSection":
              return <MainServices key={section._key} data={section} />;
            case "processSection":
              return <ProcessSection key={section._key} data={section} />;
            case "ctaSection":
              return <CtaSection key={section._key} data={section} />;
            default:
              return null;
          }
        })}
      </div>
    </>
  );
};

export default ServicePage;
