"use client";
import Link from "next/link";
import React from "react";

const MainServices = ({ data }) => {
  const displayServices = () => {
    if (!data?.services || data.services.length === 0) {
      return (
        <p className="text-center text-brand-gray text-sm sm:text-base">
          No services available at the moment. Please check back later.
        </p>
      );
    }

    return data.services.map((service, index) => (
      <div
        key={index}
        className="bg-white p-6 sm:p-7 lg:p-8 
                   rounded-2xl sm:rounded-3xl 
                   shadow-card border border-gray-100 
                   hover:shadow-hover transition-all duration-300 
                   group flex flex-col h-full relative overflow-hidden"
      >
        {/* Decorative blob */}
        <div className="absolute top-0 right-0 
                        w-20 h-20 sm:w-24 sm:h-24 
                        bg-brand-light 
                        rounded-bl-[80px] sm:rounded-bl-[100px] 
                        -z-10 transition-transform 
                        group-hover:scale-110" />

        {/* Icon */}
        <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 
                        rounded-xl sm:rounded-2xl 
                        bg-brand-red/10 
                        flex items-center justify-center 
                        text-brand-red mb-4 sm:mb-6 
                        group-hover:bg-brand-red group-hover:text-white 
                        transition-colors">

          <i className={`fa-solid ${service.icon} text-lg sm:text-xl lg:text-2xl`} />
        </div>

        {/* Title */}
        <h4 className="text-lg sm:text-xl 
                       font-bold text-brand-navy 
                       mb-2 sm:mb-3">
          {service.title || "Service Title"}
        </h4>

        {/* Description */}
        <p className="text-xs sm:text-sm lg:text-base 
                      text-brand-gray 
                      mb-5 sm:mb-6 
                      grow leading-relaxed">
          {service.description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        </p>

        {/* Link */}
        <Link
          href={`/service-page/${service?.slug?.current || "#"}`}
          className="inline-flex items-center gap-2 
                     text-xs sm:text-sm 
                     font-bold text-brand-navy 
                     group-hover:text-brand-red 
                     transition-colors mt-auto"
        >
          View Details
          <i className="fa-solid fa-arrow-right text-[10px] sm:text-xs" />
        </Link>
      </div>
    ));
  };

  return (
    <section
      id="services-grid"
      className="py-12 sm:py-16 lg:py-24 
                 bg-brand-light relative"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl sm:max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">

          <h2 className="text-xs sm:text-sm 
                         font-bold text-brand-red 
                         tracking-wider uppercase 
                         mb-2 sm:mb-3">
            {data?.tagline || "Our Services"}
          </h2>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl 
                         font-bold text-brand-navy 
                         mb-3 sm:mb-4">
            {data?.title || "Comprehensive Security Solutions for Every Need"}
          </h3>

          <p className="text-sm sm:text-base lg:text-lg 
                        text-brand-gray">
            {data?.description ||
              "From guarding and tracking to event security and investigations."}
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                        gap-3 sm:gap-5 lg:gap-6">
          {displayServices()}
        </div>

      </div>
    </section>
  );
};

export default MainServices;