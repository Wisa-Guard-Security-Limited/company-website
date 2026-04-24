"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const CtaSection = ({ data }) => {
  const router = useRouter();

  return (
    <section
      id="cta-section"
      className="py-12 sm:py-16 lg:py-24 
                 bg-brand-light relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="absolute top-0 right-0 
                      w-40 sm:w-56 lg:w-64 
                      h-40 sm:h-56 lg:h-64 
                      bg-brand-red/5 rounded-full blur-3xl -z-10" />

      <div className="absolute bottom-0 left-0 
                      w-40 sm:w-56 lg:w-64 
                      h-40 sm:h-56 lg:h-64 
                      bg-brand-navy/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 
                      relative z-10 text-center">

        {/* Icon */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 
                        mx-auto bg-white 
                        rounded-2xl shadow-soft 
                        flex items-center justify-center 
                        text-brand-red mb-6 sm:mb-8 
                        border border-gray-100">
          <i className={`fa-solid ${data?.icon} text-2xl sm:text-3xl lg:text-4xl text-black`} />
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-5xl 
                       font-bold text-brand-navy 
                       mb-4 sm:mb-6 tracking-tight">
          {data?.title}
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base lg:text-xl 
                      text-brand-gray 
                      mb-8 sm:mb-10 
                      max-w-xl sm:max-w-2xl mx-auto">
          {data?.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row 
                        justify-center items-center 
                        gap-3 sm:gap-4">

          {/* Primary CTA */}
          <button
            onClick={() => router.push(`/contact-us`)}
            className="px-6 sm:px-8 lg:px-10 
                       py-3 sm:py-4 
                       bg-brand-red text-white 
                       text-sm sm:text-base lg:text-lg 
                       font-bold rounded-full 
                       hover:bg-red-700 transition-colors 
                       shadow-lg shadow-brand-red/20 
                       flex items-center gap-2 sm:gap-3 
                       w-full sm:w-auto"
          >
            Request a Quote
            <i className="fa-solid fa-arrow-right" />
          </button>

          {/* Secondary CTA */}
          <Link
            href="tel:+254795869312"
            className="px-6 sm:px-8 lg:px-10 
                       py-3 sm:py-4 
                       bg-white text-brand-navy 
                       text-sm sm:text-base lg:text-lg 
                       font-bold rounded-full 
                       hover:bg-gray-50 transition-colors 
                       shadow-soft border border-gray-200 
                       flex items-center gap-2 sm:gap-3 
                       w-full sm:w-auto"
          >
            Call Us Now
            <i className="fa-solid fa-phone" />
          </Link>

        </div>
      </div>
    </section>
  );
};

export default CtaSection;