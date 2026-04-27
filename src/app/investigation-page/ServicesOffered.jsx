import React from "react";
import According from "./According";

const ServicesOffered = ({ data }) => {
  const services = data?.investigationServices ?? [];

  return (
    <section
      id="services-offered"
      className="py-16 sm:py-20 lg:py-24 bg-brand-light relative"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="max-w-250 mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 max-w-3xl mx-auto">
          
          {data?.eyebrow && (
            <h2 className="text-xs sm:text-sm font-bold text-brand-red tracking-wider uppercase mb-2 sm:mb-3">
              {data.eyebrow}
            </h2>
          )}

          <h3
            className="text-2xl sm:text-3xl lg:text-4xl 
                       font-bold text-brand-navy 
                       mb-3 sm:mb-4"
          >
            {data?.title || "Services Offered"}
          </h3>

          <p
            className="text-sm sm:text-base lg:text-lg 
                       text-brand-gray 
                       leading-relaxed"
          >
            {data?.description ||
              "Explore our professional investigation services designed to deliver clarity, accuracy, and actionable insights."}
          </p>
        </div>

        {/* CONTENT */}
        {services.length > 0 ? (
          <div className="max-w-4xl mx-auto">
            <According services={services} />
          </div>
        ) : (
          <div className="text-center py-8 sm:py-10 text-sm sm:text-base text-brand-gray">
            No investigation services available at the moment.
          </div>
        )}

      </div>
    </section>
  );
};

export default ServicesOffered;