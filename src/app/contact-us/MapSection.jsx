import React from "react";

const MapSection = () => {
  return (
    <section id="office-map" className="py-16 sm:py-20 lg:py-24 bg-brand-light relative">
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-xs sm:text-sm font-bold text-brand-red tracking-wider uppercase mb-2 sm:mb-3">
            Find Us
          </h2>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy mb-3 sm:mb-4">
            Visit Our Headquarters
          </h3>

          <p className="text-sm sm:text-base lg:text-lg text-brand-gray max-w-xl sm:max-w-2xl mx-auto">
            Secure parking available for all clients visiting Suraj Plaza.
          </p>
        </div>

        {/* MAP CONTAINER */}
        <div
          className="relative w-full 
                     h-[320px] sm:h-[400px] lg:h-[600px]
                     rounded-2xl sm:rounded-3xl 
                     overflow-hidden shadow-hover 
                     border border-gray-200 bg-white"
        >
          {/* fallback overlay */}
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center flex-col gap-3 sm:gap-4 z-10">
            <i className="fa-solid fa-map-location-dot text-4xl sm:text-5xl lg:text-6xl text-brand-gray/30" />
            <p className="text-xs sm:text-sm lg:text-base text-brand-gray font-medium text-center px-4">
              Interactive Map: Suraj Plaza, Ngara
            </p>
          </div>

          {/* iframe */}
          <iframe
            src="https://www.google.com/maps?q=-1.27335,36.82271&z=17&output=embed"
            className="absolute inset-0 w-full h-full z-20"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
};

export default MapSection;