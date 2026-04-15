import React from "react";

const WhyUs = () => {
  return (
    <section id="why-choose-us" className="py-24 bg-white">
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-red tracking-wider uppercase mb-3">
            The Wisa Guard Advantage
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Why Choose Us
          </h3>
          <p className="text-brand-gray text-lg">
            We differentiate ourselves through rigorous training, advanced
            technology, and a commitment to rapid response.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* <!-- Advantage 1 --> */}
          <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-brand-light border border-gray-100 hover:shadow-hover transition-all duration-300">
            <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-red mb-6">
              <i className="fa-solid fa-bolt text-3xl"></i>
            </div>
            <h4 className="text-xl font-bold text-brand-navy mb-4">
              Fast Response
            </h4>
            <p className="text-brand-gray">
              Our strategically located rapid response units ensure immediate
              action during emergencies, minimizing risks and damages.
            </p>
          </div>

          {/* <!-- Advantage 2 --> */}
          <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-brand-light border border-gray-100 hover:shadow-hover transition-all duration-300">
            <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-red mb-6">
              <i className="fa-solid fa-shield-heart text-3xl"></i>
            </div>
            <h4 className="text-xl font-bold text-brand-navy mb-4">
              Reliable Experts
            </h4>
            <p className="text-brand-gray">
              Every guard undergoes stringent background checks and
              comprehensive training to meet our exacting standards of
              reliability.
            </p>
          </div>

          {/* <!-- Advantage 3 --> */}
          <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-brand-light border border-gray-100 hover:shadow-hover transition-all duration-300">
            <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-red mb-6">
              <i className="fa-solid fa-clock text-3xl"></i>
            </div>
            <h4 className="text-xl font-bold text-brand-navy mb-4">
              24/7 Availability
            </h4>
            <p className="text-brand-gray">
              Security never sleeps, and neither do we. Our control center and
              field units operate round-the-clock, 365 days a year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
