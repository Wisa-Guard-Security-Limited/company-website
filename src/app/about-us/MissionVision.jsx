import React from "react";

const MissionVision = () => {
  return (
    <section id="mission-vision" className="py-24 bg-brand-light">
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* <!-- Mission Card --> */}
          <div className="bg-white p-10 rounded-3xl shadow-soft border border-gray-100 relative overflow-hidden group hover:shadow-hover transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
            <div className="w-16 h-16 rounded-2xl bg-brand-light flex items-center justify-center mb-8 text-brand-red">
              <i className="fa-solid fa-bullseye text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-brand-navy mb-4">
              Our Mission
            </h3>
            <p className="text-brand-gray text-lg leading-relaxed">
              To provide superior, proactive, and technology-driven security
              services that safeguard our clients assets, personnel, and
              reputation, while maintaining the highest standards of integrity
              and professionalism.
            </p>
          </div>

          {/* <!-- Vision Card --> */}
          <div className="bg-white p-10 rounded-3xl shadow-soft border border-gray-100 relative overflow-hidden group hover:shadow-hover transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-navy/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
            <div className="w-16 h-16 rounded-2xl bg-brand-light flex items-center justify-center mb-8 text-brand-navy">
              <i className="fa-solid fa-eye text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-brand-navy mb-4">
              Our Vision
            </h3>
            <p className="text-brand-gray text-lg leading-relaxed">
              To be the most trusted and innovative security partner in Kenya,
              recognized for our operational excellence, rapid response
              capabilities, and unwavering dedication to creating safe
              environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
