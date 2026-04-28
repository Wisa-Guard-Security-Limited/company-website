const WhyUsSection = ({ data }) => {
  const displayWhyUs = () => {
    if (!data?.features || data.features.length === 0) {
      return (
        <p className="text-brand-gray text-sm sm:text-base leading-relaxed">
          No features available at the moment.
        </p>
      );
    }

    return data.features.map((feature, index) => (
      <div
        key={index}
        className="bg-white 
                   p-6 sm:p-8 
                   rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] 
                   shadow-soft hover:shadow-hover 
                   transition-all duration-300 
                   border border-gray-100 group"
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 
                        rounded-2xl bg-brand-light 
                        flex items-center justify-center 
                        mb-4 sm:mb-6 
                        group-hover:bg-brand-red group-hover:text-white 
                        transition-colors text-brand-navy">
          <i className={`fa-solid ${feature.icon} text-lg sm:text-xl lg:text-2xl`} />
        </div>

        <h4 className="text-lg sm:text-xl font-bold text-brand-navy mb-2 sm:mb-3">
          {feature.title}
        </h4>

        <p className="text-sm sm:text-base text-brand-gray leading-relaxed">
          {feature.description}
        </p>
      </div>
    ));
  };

  return (
    <section
      id="features"
      className="py-12 sm:py-16 lg:py-24 
                 bg-brand-light 
                 relative -mt-6 sm:-mt-8 lg:-mt-10 
                 rounded-t-[24px] sm:rounded-t-[32px] lg:rounded-t-[40px] 
                 z-30"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">

          <h2 className="text-xs sm:text-sm font-bold text-brand-red 
                         tracking-wider uppercase mb-2 sm:mb-3">
            {data?.tagline || "Why Choose Wisa Guard?"}
          </h2>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl 
                         font-bold text-brand-navy mb-3 sm:mb-4">
            {data?.title || "Unmatched Security Solutions Tailored for You"}
          </h3>

          <p className="text-sm sm:text-base lg:text-lg text-brand-gray leading-relaxed">
            {data?.description ||
              "Discover why Wisa Guard stands out as Kenya's premier security provider. With our expert team, cutting-edge technology, and unwavering commitment to your safety, we deliver unparalleled protection for your home, business, and events."}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                        gap-4 sm:gap-6 lg:gap-8">
          {displayWhyUs()}
        </div>

      </div>
    </section>
  );
};

export default WhyUsSection;