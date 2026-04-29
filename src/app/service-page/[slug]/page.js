import Navbar from "@/components/Navbar";
import React from "react";
import HeroSection from "./HeroSection";
import ServiceOverview from "./ServiceOverview";
import BenifitsSection from "./BenifitsSection";
import CtaSection from "./CtaSection";
// --- QUERIES ---
import { client } from "@/sanity/lib/client";
import { serviceBySlugQuery } from "@/sanity/lib/queries";


const ServiceDetail = async ({params}) => {
 const { slug } = await params; 

const service = await client.fetch(serviceBySlugQuery, {
  slug: slug,
});
  return (
    <>
      <Navbar />
      <div id="main-content" className="pt-16">
        <HeroSection data={service} />
        <ServiceOverview />
        <BenifitsSection />
        <CtaSection data={service} />
      </div>
    </>
  );
};

export default ServiceDetail;
