import React from "react";
import Image from "next/image";
import RequestInvestigationBtn from "./RequestInvestigationBtn";
import { urlFor } from "@/sanity/lib/image";

const HeroSection = ({ hero }) => {
  const getHeroImage = (hero) => {
    if (hero?.backgroundImage?.asset) {
      return hero.backgroundImage;
    }

    return "/images/heroImage.jpeg";
  };

  const imageSrc = getHeroImage(hero);
  return (
    <section
      id="investigations-hero"
      className="relative 
                 min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh]
                 w-full flex items-center 
                 bg-brand-light overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div
        className="max-w-360 mx-auto 
                   px-4 sm:px-6 lg:px-12 
                   relative z-20 w-full 
                   py-12 sm:py-16 lg:py-20"
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2 
                     gap-10 sm:gap-12 lg:gap-16 
                     items-center"
        >
          {/* TEXT */}
          <div className="max-w-xl lg:max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 
                         px-3 sm:px-4 py-1.5 sm:py-2 
                         rounded-full bg-brand-red/10 
                         text-brand-red 
                         text-xs sm:text-sm font-bold 
                         mb-4 sm:mb-6"
            >
              <i className="fa-solid fa-magnifying-glass" />
              Private Investigation Services
            </div>

            {/* Heading */}
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl 
                         font-bold text-brand-navy 
                         mb-4 sm:mb-6 
                         tracking-tight leading-[1.1]"
            >
              {hero?.headline || "Private Investigation Services"}
            </h1>

            {/* Paragraph */}
            <p
              className="text-sm sm:text-base lg:text-lg 
                         text-brand-gray 
                         mb-6 sm:mb-8 lg:mb-10 
                         leading-relaxed"
            >
              {hero?.subtext ||
                "Discreet, professional investigative services tailored for corporate, personal, and legal matters."}
            </p>

            {/* CTA */}
            <div className="flex justify-center lg:justify-start">
              <RequestInvestigationBtn />
            </div>
          </div>

          {/* IMAGE */}
          <div
            className="relative 
                       h-64 sm:h-80 md:h-96 lg:h-125 
                       rounded-3xl overflow-hidden 
                       shadow-hover border border-gray-100 
                       bg-white p-4 sm:p-6 lg:p-8"
          >
            <div className="absolute inset-0 bg-subtle-gradient" />

             <Image
              src={
                typeof imageSrc === "string"
                  ? imageSrc
                  : urlFor(imageSrc).url()
              }
              alt="security hero"
              fill
              className="object-cover opacity-85"
              priority
              unoptimized
                  />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;