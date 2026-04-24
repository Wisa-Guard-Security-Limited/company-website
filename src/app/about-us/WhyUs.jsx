import React from "react";

const WhyUs = ({ data }) => {
  const displayFeatures = () => {
    if (!data?.features || !Array.isArray(data.features)) return null;

    return data?.features?.map((feature, index) => (
      <div
        key={index}
        className="flex flex-col items-center text-center 
                   p-6 sm:p-8 
                   rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] 
                   bg-brand-light border border-gray-100 
                   hover:shadow-hover transition-all duration-300"
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 
                        rounded-full bg-white shadow-sm 
                        flex items-center justify-center 
                        text-brand-red mb-4 sm:mb-6">
          <i className={`fa-solid ${feature.icon} text-xl sm:text-2xl lg:text-3xl`} />
        </div>

        <h4 className="text-lg sm:text-xl font-bold text-brand-navy mb-3 sm:mb-4">
          {feature.title}
        </h4>

        <p className="text-sm sm:text-base text-brand-gray">
          {feature.description}
        </p>
      </div>
    ));
  };

  return (
    <section
      id="why-choose-us"
      className="py-12 sm:py-16 lg:py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">

          <h2 className="text-xs sm:text-sm font-bold text-brand-red 
                         tracking-wider uppercase mb-2 sm:mb-3">
            {data?.tagline || "Wisa Guard Advantage"}
          </h2>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl 
                         font-bold text-brand-navy mb-3 sm:mb-4">
            {data?.title || "Why Choose Wisa Guard?"}
          </h3>

          <p className="text-sm sm:text-base lg:text-lg text-brand-gray">
            {data?.description ||
              "At Wisa Guard, we understand that security is not just about protection; it's about trust, reliability, and peace of mind."}
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 
                        gap-4 sm:gap-6 lg:gap-8">
          {displayFeatures()}
        </div>

      </div>
    </section>
  );
};

export default WhyUs;