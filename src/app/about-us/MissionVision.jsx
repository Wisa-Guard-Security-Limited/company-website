import React from "react";

const MissionVision = ({ data }) => {
  return (
    <section
      id="mission-vision"
      className="py-12 sm:py-16 lg:py-24 bg-brand-light"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">

        <div className="grid grid-cols-1 md:grid-cols-2 
                        gap-4 sm:gap-6 lg:gap-8">

          {/* Mission Card */}
          <div className="bg-white 
                          p-6 sm:p-8 lg:p-10 
                          rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] 
                          shadow-soft border border-gray-100 
                          relative overflow-hidden group 
                          hover:shadow-hover transition-all duration-300">

            <div className="absolute top-0 right-0 
                            w-24 sm:w-28 lg:w-32 
                            h-24 sm:h-28 lg:h-32 
                            bg-brand-red/5 rounded-bl-[100px] 
                            -z-10 transition-transform group-hover:scale-110" />

            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 
                            rounded-2xl bg-brand-light 
                            flex items-center justify-center 
                            mb-4 sm:mb-6 lg:mb-8 
                            text-brand-red">

              <i className={`fa-solid ${data?.mission?.icon} text-xl sm:text-2xl lg:text-3xl`} />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3 sm:mb-4">
              {data?.mission?.title || "Our Mission"}
            </h3>

            <p className="text-sm sm:text-base lg:text-lg 
                          text-brand-gray leading-relaxed">
              {data?.mission?.text ||
                "To provide unparalleled security services that protect our clients' assets, people, and reputation."}
            </p>

          </div>

          {/* Vision Card */}
          <div className="bg-white 
                          p-6 sm:p-8 lg:p-10 
                          rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] 
                          shadow-soft border border-gray-100 
                          relative overflow-hidden group 
                          hover:shadow-hover transition-all duration-300">

            <div className="absolute top-0 right-0 
                            w-24 sm:w-28 lg:w-32 
                            h-24 sm:h-28 lg:h-32 
                            bg-brand-navy/5 rounded-bl-[100px] 
                            -z-10 transition-transform group-hover:scale-110" />

            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 
                            rounded-2xl bg-brand-light 
                            flex items-center justify-center 
                            mb-4 sm:mb-6 lg:mb-8 
                            text-brand-navy">

              <i className={`fa-solid ${data?.vision?.icon} text-xl sm:text-2xl lg:text-3xl`} />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3 sm:mb-4">
              {data?.vision?.title || "Our Vision"}
            </h3>

            <p className="text-sm sm:text-base lg:text-lg 
                          text-brand-gray leading-relaxed">
              {data?.vision?.text ||
                "To be the most trusted and innovative security partner in Kenya."}
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;