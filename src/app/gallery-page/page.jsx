import React from "react";
import HeroSection from "./HeroSection";
import GallerySection from "./GallerySection";

import CtaSection from "./CtaSection";
import Navbar from "@/components/Navbar";

import { galleryPageQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

const Gallery = async () => {

    const page = await client.fetch(galleryPageQuery);
    const sections = page?.sections || [];
  return (
    <>
      <Navbar />
      <div id="main-content" className="pt-18">
        {sections.map((section) => {
          switch (section._type) {
            case "hero":
              return <HeroSection key={section._key} hero={section} />;

            case "gallerySection":
              return <GallerySection key={section._key} data={section} />;

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

export default Gallery;
