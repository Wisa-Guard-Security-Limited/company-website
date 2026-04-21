import React from "react";

const ServiceOverview = () => {
  return (
    <section id="service-overview" className="py-24 bg-white">
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* <!-- Overview Pane --> */}
          <div className="lg:col-span-7">
            <h2 className="text-sm font-bold text-brand-red tracking-wider uppercase mb-3">
              Service Overview
            </h2>
            <h3 className="text-3xl font-bold text-brand-navy mb-6">
              Uncompromising Protection for Your Assets
            </h3>

            <div className="prose prose-lg text-brand-gray max-w-none">
              <p className="mb-6 leading-relaxed">
                Our guarding services are the cornerstone of Wisa Guards
                physical security solutions. We deploy meticulously selected,
                rigorously trained, and continuously assessed security officers
                who act as both a formidable deterrent and a welcoming presence
                for your legitimate visitors.
              </p>
              <p className="leading-relaxed">
                Whether you require static guards for a corporate headquarters,
                mobile patrols for an industrial estate, or specialized
                personnel for high-risk environments, our teams are equipped
                with the latest technology and supported by our 24/7 National
                Control Center to ensure rapid, coordinated responses to any
                incident.
              </p>
            </div>
          </div>

          {/* <!-- What's Included Pane --> */}
          <div className="lg:col-span-5">
            <div className="bg-brand-light p-8 rounded-3xl border border-gray-100 shadow-soft h-full">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">
                Whats Included
              </h3>

              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0 mt-1">
                    <i className="fa-solid fa-check text-xs"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm mb-1">
                      Vetted Personnel
                    </h4>
                    <p className="text-xs text-brand-gray">
                      Rigorous background checks and continuous assessment.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0 mt-1">
                    <i className="fa-solid fa-check text-xs"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm mb-1">
                      24/7 Control Center Support
                    </h4>
                    <p className="text-xs text-brand-gray">
                      Constant monitoring and rapid emergency dispatch.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0 mt-1">
                    <i className="fa-solid fa-check text-xs"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm mb-1">
                      Detailed Incident Reporting
                    </h4>
                    <p className="text-xs text-brand-gray">
                      Digital logs and comprehensive post-incident analysis.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0 mt-1">
                    <i className="fa-solid fa-check text-xs"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm mb-1">
                      Custom Security Protocols
                    </h4>
                    <p className="text-xs text-brand-gray">
                      Standard Operating Procedures tailored to your site.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
