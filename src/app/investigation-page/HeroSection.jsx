import React from "react";
import Image from "next/image";

import RequestInvestigationBtn from "./RequestInvestigationBtn";

const HeroSection = ({hero}) => {

  return (
    <section
      id="investigations-hero"
      className="relative min-h-150 w-full flex items-center bg-brand-light overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none"></div>

      <div className="max-w-360 mx-auto px-6 lg:px-12 relative z-20 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 text-brand-red text-sm font-bold mb-6">
              <i className="fa-solid fa-magnifying-glass"></i> Private
              Investigation Services
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-brand-navy mb-6 tracking-tight leading-[1.1]">
               {hero?.headline || "Investigations"}
            </h1>

            <p className="text-lg text-brand-gray mb-10 leading-relaxed">
              {
                hero?.subtext || "Sub text"
              }
            </p>

            <RequestInvestigationBtn />
          </div>

          <div className="relative hidden lg:block h-125 rounded-3xl overflow-hidden shadow-hover border border-gray-100 bg-white p-8">
            <div className="absolute inset-0 bg-subtle-gradient"></div>
            <Image
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f1837773bd-da0b5594571cc6ea89f6.png"
              alt="professional private investigator analyzing documents with a magnifying glass, clean vector illustration style, blue and red accents, highly detailed, security focused"
              fill
              className="object-contain relative z-10"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
