import React from "react";

const ServiceOverview = () => {
  return (
    <section
      id="service-overview"
      className="py-16 sm:py-20 lg:py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Overview Pane */}
          <div className="lg:col-span-7">
            <h2 className="text-xs sm:text-sm font-bold text-brand-red tracking-wider uppercase mb-3">
              Service Overview
            </h2>

            <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-4 sm:mb-6 leading-tight">
              Uncompromising Protection for Your Assets
            </h3>

            <div className="text-brand-gray text-sm sm:text-base lg:text-lg leading-relaxed space-y-4 sm:space-y-6">
              <p>
                Our guarding services are the cornerstone of Wisa Guards
                physical security solutions. We deploy meticulously selected,
                rigorously trained, and continuously assessed security officers
                who act as both a formidable deterrent and a welcoming presence
                for your legitimate visitors.
              </p>

              <p>
                Whether you require static guards for a corporate headquarters,
                mobile patrols for an industrial estate, or specialized
                personnel for high-risk environments, our teams are equipped
                with the latest technology and supported by our 24/7 National
                Control Center to ensure rapid, coordinated responses to any
                incident.
              </p>
            </div>
          </div>

          {/* What's Included Pane */}
          <div className="lg:col-span-5">
            <div className="bg-brand-light p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-soft h-full">

              <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mb-6">
                Whats Included
              </h3>

              <ul className="space-y-4 sm:space-y-5">
                {[
                  {
                    title: "Vetted Personnel",
                    desc: "Rigorous background checks and continuous assessment.",
                  },
                  {
                    title: "24/7 Control Center Support",
                    desc: "Constant monitoring and rapid emergency dispatch.",
                  },
                  {
                    title: "Detailed Incident Reporting",
                    desc: "Digital logs and comprehensive post-incident analysis.",
                  },
                  {
                    title: "Custom Security Protocols",
                    desc: "Standard Operating Procedures tailored to your site.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0 mt-1">
                      <i className="fa-solid fa-check text-[10px] sm:text-xs" />
                    </div>

                    <div>
                      <h4 className="font-bold text-brand-navy text-xs sm:text-sm mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-brand-gray leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;