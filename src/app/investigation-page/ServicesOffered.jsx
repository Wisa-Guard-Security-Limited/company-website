import React from "react";
import According from "./According";

const ServicesOffered = ({ data }) => {
  return (
    <section id="services-offered" className="py-24 bg-brand-light relative">
      <div className="absolute inset-0 grid-bg pointer-events-none"></div>

      <div className="max-w-250 mx-auto px-6 lg:px-12 relative z-10">

        {/* HEADER FROM SANITY */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-red tracking-wider uppercase mb-3">
            {data?.eyebrow}
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            {data?.title}
          </h3>

          <p className="text-brand-gray text-lg max-w-2xl mx-auto">
            {data?.description}
          </p>
        </div>

        {/* ACCORDION */}
        <According services={data?.investigationServices || []} />

      </div>
    </section>
  );
};

export default ServicesOffered;
