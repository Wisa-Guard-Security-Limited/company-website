import React from "react";

import Image from "next/image";

const OurServiceSection = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-brand-red tracking-wider uppercase mb-3">
              Our Services
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-navy">
              Comprehensive Security Solutions
            </h3>
          </div>
          <button className="px-6 py-3 bg-brand-light text-brand-navy font-semibold rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2 shrink-0">
            View All Services <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Service 1 --> */}
          <div className="group relative overflow-hidden rounded-3xl bg-brand-light border border-gray-100 p-8 hover:shadow-hover transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-red mb-6">
              <i className="fa-solid fa-user-shield text-xl"></i>
            </div>
            <h4 className="text-2xl font-bold text-brand-navy mb-4">
              Guarding Services
            </h4>
            <p className="text-brand-gray mb-8">
              Professional manned guarding for corporate, residential, and
              industrial premises.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-brand-red font-semibold hover:text-red-700 transition-colors"
            >
              Learn More{" "}
              <i className="fa-solid fa-chevron-right ml-2 text-sm"></i>
            </a>
          </div>

          {/* <!-- Service 2 --> */}
          <div className="group relative overflow-hidden rounded-3xl bg-brand-light border border-gray-100 p-8 hover:shadow-hover transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-red mb-6">
              <i className="fa-solid fa-satellite-dish text-xl"></i>
            </div>
            <h4 className="text-2xl font-bold text-brand-navy mb-4">
              Tracking Services
            </h4>
            <p className="text-brand-gray mb-8">
              Advanced GPS tracking and fleet management systems with real-time
              monitoring.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-brand-red font-semibold hover:text-red-700 transition-colors"
            >
              Learn More{" "}
              <i className="fa-solid fa-chevron-right ml-2 text-sm"></i>
            </a>
          </div>

          {/* <!-- Service 3 --> */}
          <div className="group relative overflow-hidden rounded-3xl bg-brand-light border border-gray-100 p-8 hover:shadow-hover transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-red mb-6">
              <i className="fa-solid fa-users-rays text-xl"></i>
            </div>
            <h4 className="text-2xl font-bold text-brand-navy mb-4">
              Event Security
            </h4>
            <p className="text-brand-gray mb-8">
              Crowd control, VIP protection, and comprehensive security planning
              for events.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-brand-red font-semibold hover:text-red-700 transition-colors"
            >
              Learn More{" "}
              <i className="fa-solid fa-chevron-right ml-2 text-sm"></i>
            </a>
          </div>

          {/* <!-- Service 4 --> */}
          <div className="group relative overflow-hidden rounded-3xl bg-brand-light border border-gray-100 p-8 hover:shadow-hover transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-red mb-6">
              <i className="fa-solid fa-dog text-xl"></i>
            </div>
            <h4 className="text-2xl font-bold text-brand-navy mb-4">
              Canine Services
            </h4>
            <p className="text-brand-gray mb-8">
              Highly trained K-9 units for patrol, detection, and enhanced
              perimeter security.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-brand-red font-semibold hover:text-red-700 transition-colors"
            >
              Learn More{" "}
              <i className="fa-solid fa-chevron-right ml-2 text-sm"></i>
            </a>
          </div>

          {/* <!-- Service 5 --> */}
          <div className="group relative overflow-hidden rounded-3xl bg-brand-light border border-gray-100 p-8 hover:shadow-hover transition-all duration-300 md:col-span-2 lg:col-span-2">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-red mb-6">
                  <i className="fa-solid fa-magnifying-glass text-xl"></i>
                </div>
                <h4 className="text-2xl font-bold text-brand-navy mb-4">
                  Private Investigations
                </h4>
                <p className="text-brand-gray mb-8 max-w-md">
                  Discreet corporate and private investigation services
                  conducted by seasoned professionals.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 bg-brand-navy text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
                >
                  Learn More <i className="fa-solid fa-arrow-right ml-2"></i>
                </a>
              </div>
              <div className="w-full md:w-1/2 h-48 rounded-2xl overflow-hidden bg-gray-200">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/privateInvestigations.jpeg"
                    alt="professional private investigator analyzing documents in a modern office, cinematic lighting"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServiceSection;
