import React from "react";

const BenifitsSection = () => {
  return (
    <section
      id="features-benefits"
      className="py-16 sm:py-20 lg:py-24 
                 bg-brand-navy relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-brand-navy to-[#111726] z-10" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 relative z-20">

        {/* Header */}
        <div className="text-center max-w-2xl sm:max-w-3xl mx-auto mb-12 sm:mb-16">

          <h2 className="text-xs sm:text-sm font-bold text-brand-red tracking-wider uppercase mb-3">
            Core Advantages
          </h2>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl 
                         font-bold text-white 
                         mb-4">
            Why Choose Our Guarding Services
          </h3>

          <p className="text-sm sm:text-base lg:text-lg 
                        text-gray-400 
                        leading-relaxed">
            We deliver more than just a physical presence; we deliver peace of
            mind through structured, professional security management.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

          {/* Feature 1 */}
          <div className="bg-white/5 backdrop-blur-sm 
                          p-6 sm:p-8 
                          rounded-2xl sm:rounded-3xl 
                          border border-white/10 
                          hover:bg-white/10 transition-colors group">

            <div className="w-10 h-10 sm:w-12 sm:h-12 
                            rounded-xl bg-brand-red/20 
                            flex items-center justify-center 
                            text-brand-red 
                            mb-5 sm:mb-6 
                            border border-brand-red/30">
              <i className="fa-solid fa-shield-halved text-lg sm:text-xl" />
            </div>

            <h4 className="text-lg sm:text-xl font-bold text-white mb-3">
              Proactive Deterrence
            </h4>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              A highly visible, professional security presence actively
              discourages criminal activity and unauthorized access before it
              happens.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/5 backdrop-blur-sm 
                          p-6 sm:p-8 
                          rounded-2xl sm:rounded-3xl 
                          border border-white/10 
                          hover:bg-white/10 transition-colors group">

            <div className="w-10 h-10 sm:w-12 sm:h-12 
                            rounded-xl bg-brand-red/20 
                            flex items-center justify-center 
                            text-brand-red 
                            mb-5 sm:mb-6 
                            border border-brand-red/30">
              <i className="fa-solid fa-bolt text-lg sm:text-xl" />
            </div>

            <h4 className="text-lg sm:text-xl font-bold text-white mb-3">
              Rapid Response
            </h4>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Trained to act decisively during emergencies, coordinating with
              local authorities and our central command to mitigate risks
              swiftly.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/5 backdrop-blur-sm 
                          p-6 sm:p-8 
                          rounded-2xl sm:rounded-3xl 
                          border border-white/10 
                          hover:bg-white/10 transition-colors group">

            <div className="w-10 h-10 sm:w-12 sm:h-12 
                            rounded-xl bg-brand-red/20 
                            flex items-center justify-center 
                            text-brand-red 
                            mb-5 sm:mb-6 
                            border border-brand-red/30">
              <i className="fa-solid fa-clipboard-user text-lg sm:text-xl" />
            </div>

            <h4 className="text-lg sm:text-xl font-bold text-white mb-3">
              Access Control Management
            </h4>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Strict enforcement of entry protocols, visitor logging, and
              credential verification to ensure only authorized personnel enter
              your premises.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BenifitsSection;