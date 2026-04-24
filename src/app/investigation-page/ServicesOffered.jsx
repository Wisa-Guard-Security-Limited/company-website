import React from "react";
import According from "./According";

const ServicesOffered = ({ data }) => {
  const services = data?.investigationServices ?? [];

  return (
    <section id="services-offered" className="py-24 bg-brand-light relative">
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="max-w-250 mx-auto px-6 lg:px-12 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {data?.eyebrow && (
            <h2 className="text-sm font-bold text-brand-red tracking-wider uppercase mb-3">
              {data.eyebrow}
            </h2>
          )}

          <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            {data?.title || "Services Offered"}
          </h3>

          <p className="text-brand-gray text-lg leading-relaxed">
            {data?.description ||
              "Explore our professional investigation services designed to deliver clarity, accuracy, and actionable insights."}
          </p>
        </div>

        {/* ACCORDION / EMPTY STATE */}
        {services.length > 0 ? (
          <According services={services} />
        ) : (
          <div className="text-center py-10 text-brand-gray">
            No investigation services available at the moment.
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesOffered;