import React from "react";

const CtaSection = () => {
  return (
    <section
      id="service-cta"
      className="py-16 sm:py-20 lg:py-24 bg-brand-light relative"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        <div className="bg-white p-8 sm:p-10 lg:p-12 
                        rounded-3xl sm:rounded-4xl 
                        shadow-hover border border-gray-100 
                        text-center relative overflow-hidden">

          {/* Decorative */}
          <div className="absolute top-0 right-0 w-28 sm:w-32 h-28 sm:h-32 
                          bg-brand-light rounded-bl-[100px] -z-10" />

          {/* Icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 
                          rounded-2xl bg-brand-red/10 
                          flex items-center justify-center 
                          text-brand-red mx-auto mb-5 sm:mb-6">
            <i className="fa-solid fa-file-signature text-xl sm:text-2xl" />
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl 
                         font-bold text-brand-navy 
                         mb-3 sm:mb-4">
            Secure Your Premises Today
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg 
                        text-brand-gray 
                        mb-6 sm:mb-8 
                        max-w-md sm:max-w-xl mx-auto 
                        leading-relaxed">
            Dont leave your security to chance. Get a customized guarding
            solution tailored to your specific operational needs.
          </p>

          {/* Button */}
          <button
            className="px-6 sm:px-10 py-3 sm:py-4 
                       bg-brand-red text-white 
                       font-bold text-sm sm:text-lg 
                       rounded-full 
                       hover:bg-red-700 
                       transition-colors 
                       shadow-lg shadow-brand-red/20 
                       inline-flex items-center gap-2 sm:gap-3"
          >
            Request This Service
            <i className="fa-solid fa-arrow-right" />
          </button>

          {/* Contact line */}
          <p className="mt-5 sm:mt-6 text-xs sm:text-sm text-brand-gray">
            Or call us directly at{" "}
            <a
              href="tel:+254700000000"
              className="font-bold text-brand-navy hover:text-brand-red transition-colors"
            >
              +254 700 000 000
            </a>
          </p>

        </div>
      </div>
    </section>
  );
};

export default CtaSection;