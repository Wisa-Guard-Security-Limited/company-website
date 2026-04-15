import React from "react";

const CoverageSection = () => {
  return (
    <section
      id="compliance-coverage"
      className="py-24 bg-brand-navy text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="200"
            cy="300"
            r="400"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <circle
            cx="1200"
            cy="300"
            r="600"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      <div className="max-w-360 mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* <!-- Compliance --> */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-4xl p-10">
            <div className="w-16 h-16 rounded-2xl bg-brand-red/20 flex items-center justify-center text-brand-red mb-8">
              <i className="fa-solid fa-file-shield text-3xl"></i>
            </div>
            <h3 className="text-3xl font-bold mb-4">Regulatory Compliance</h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We operate strictly within the legal frameworks governing the
              security industry. Wisa Guard is fully licensed and recognized by
              regulatory bodies, ensuring our operations meet national
              standards.
            </p>
            <div className="flex items-center gap-4 p-6 rounded-xl bg-white/5 border border-white/10">
              <i className="fa-solid fa-certificate text-2xl text-brand-red"></i>
              <div>
                <h4 className="font-bold text-white">Fully Registered</h4>
                <p className="text-sm text-gray-400">
                  Kenya Private Security Regulatory Authority
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Coverage --> */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-4xl p-10">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold">Nationwide Coverage</h3>
              <div className="w-12 h-12 rounded-full bg-brand-red/20 flex items-center justify-center text-brand-red">
                <i className="fa-solid fa-map-location-dot text-xl"></i>
              </div>
            </div>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              From our headquarters in Nairobi, we have expanded our footprint
              to serve clients across the entire country, bringing professional
              security solutions to urban centers and remote locations alike.
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-4">
                  <i className="fa-solid fa-building text-brand-red"></i>
                  <span className="font-medium text-white">
                    Nairobi (Headquarters)
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-4">
                  <i className="fa-solid fa-map-pin text-gray-400"></i>
                  <span className="font-medium text-gray-300">
                    Karen, Katani, Lower Kabete
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-4">
                  <i className="fa-solid fa-map-pin text-gray-400"></i>
                  <span className="font-medium text-gray-300">
                    Bungoma & Regional Branches
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
