import React from "react";
import According from "./According";

const ServicesOffered = () => {
  return (
    <section id="services-offered" className="py-24 bg-brand-light relative">
      <div className="absolute inset-0 grid-bg pointer-events-none"></div>

      <div className="max-w-250 mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-red tracking-wider uppercase mb-3">
            Our Expertise
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Comprehensive Investigation Services
          </h3>
          <p className="text-brand-gray text-lg max-w-2xl mx-auto">
            Tailored investigative solutions designed to address complex
            corporate and personal challenges with absolute discretion.
          </p>
        </div>

        <According />
      </div>
    </section>
  );
};

export default ServicesOffered;
