import React from "react";

const CoverageSection = ({ data }) => {
  const displayLocations = () => {
    if (!data?.coverage?.locations || !Array.isArray(data.coverage.locations))
      return null;

    return data.coverage.locations.map((location, index) => (
      <div
        className="flex items-center justify-between 
                   p-4 sm:p-5 
                   rounded-xl 
                   bg-white/5 border border-white/5"
        key={index}
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <i className={`fa-solid ${location.icon} text-brand-red text-sm sm:text-base`} />
          <span className="font-medium text-white text-sm sm:text-base">
            {location.label}
          </span>
        </div>
      </div>
    ));
  };

  return (
    <section
      id="compliance-coverage"
      className="py-12 sm:py-16 lg:py-24 
                 bg-brand-navy text-white 
                 relative overflow-hidden"
    >
      {/* Background SVG */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="200" cy="300" r="400" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="1200" cy="300" r="600" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 
                        gap-6 sm:gap-8 lg:gap-12">

          {/* Compliance */}
          <div className="bg-white/5 backdrop-blur-lg 
                          border border-white/10 
                          rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] 
                          p-6 sm:p-8 lg:p-10">

            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 
                            rounded-2xl bg-brand-red/20 
                            flex items-center justify-center 
                            text-brand-red mb-6 sm:mb-8">

              <i className={`fa-solid ${data?.compliance?.icon} text-xl sm:text-2xl lg:text-3xl`} />
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl 
                           font-bold mb-3 sm:mb-4">
              {data?.compliance?.title ||
                "Strict Compliance with Regulatory Standards"}
            </h3>

            <p className="text-sm sm:text-base lg:text-lg 
                          text-gray-300 mb-6 sm:mb-8 
                          leading-relaxed">
              {data?.compliance?.description ||
                "We are fully registered and compliant with the Kenya Private Security Regulatory Authority (KPSRA)."}
            </p>

            <div className="flex items-center gap-3 sm:gap-4 
                            p-4 sm:p-5 lg:p-6 
                            rounded-xl 
                            bg-white/5 border border-white/10">

              <i className={`fa-solid ${data?.compliance?.badge?.icon} text-lg sm:text-xl lg:text-2xl text-brand-red`} />

              <div>
                <h4 className="font-bold text-white text-sm sm:text-base">
                  {data?.compliance?.badge?.title || "KPSRA License #12345"}
                </h4>
                <p className="text-xs sm:text-sm text-gray-400">
                  {data?.compliance?.badge?.subtitle || "Valid License"}
                </p>
              </div>

            </div>
          </div>

          {/* Coverage */}
          <div className="bg-white/5 backdrop-blur-lg 
                          border border-white/10 
                          rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] 
                          p-6 sm:p-8 lg:p-10">

            <div className="flex items-center justify-between mb-6 sm:mb-8">

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                {data?.coverage?.title || "Coverage Across Key Regions"}
              </h3>

              <div className="w-10 h-10 sm:w-12 sm:h-12 
                              rounded-full bg-brand-red/20 
                              flex items-center justify-center 
                              text-brand-red">
                <i className={`fa-solid ${data?.coverage?.icon || "fa-map-pin"} text-sm sm:text-base lg:text-xl`} />
              </div>

            </div>

            <p className="text-sm sm:text-base lg:text-lg 
                          text-gray-300 mb-6 sm:mb-8 
                          leading-relaxed">
              {data?.coverage?.description ||
                "Our coverage spans across Nairobi and surrounding regions."}
            </p>

            <div className="space-y-3 sm:space-y-4">
              {displayLocations()}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CoverageSection;