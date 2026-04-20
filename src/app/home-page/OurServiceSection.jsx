import React from "react";

import Image from "next/image";

const OurServiceSection = ({ data }) => {
  const displyServices = () => {
    if (!data?.services || data.services.length === 0) {
      return (
        <p className="text-brand-gray col-span-1 md:col-span-2 lg:col-span-3">
          No services available at the moment. Please check back later.
        </p>
      );
    }

    return data.services.map((service, index) => (
      <div
        key={index}
        className="group relative overflow-hidden rounded-3xl bg-brand-light border border-gray-100 p-8 hover:shadow-hover transition-all duration-300"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
        <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-red mb-6">
          <i className={`fa-solid ${service.icon} text-xl`}></i>
        </div>
        <h4 className="text-2xl font-bold text-brand-navy mb-4">
          {service.title}
        </h4>
        <p className="text-brand-gray mb-8">{service.description}</p>
        <a
          href="#"
          className="inline-flex items-center text-brand-red font-semibold hover:text-red-700 transition-colors"
        >
          Learn More <i className="fa-solid fa-chevron-right ml-2 text-sm"></i>
        </a>
      </div>
    ));
  };
  console.log(data);
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-brand-red tracking-wider uppercase mb-3">
              {data?.tagline || "Our Services"}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-navy">
              {data?.title || "Comprehensive Security Solutions for Every Need"}
            </h3>
          </div>
          <button className="px-6 py-3 bg-brand-light text-brand-navy font-semibold rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2 shrink-0">
            {data?.buttonText} <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displyServices()}

          {/* <!-- Service 5 --> */}
          <div className="group relative overflow-hidden rounded-3xl bg-brand-light border border-gray-100 p-8 hover:shadow-hover transition-all duration-300 md:col-span-2 lg:col-span-2">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-red mb-6">
                  <i className="fa-solid fa-magnifying-glass text-xl"></i>
                </div>
                <h4 className="text-2xl font-bold text-brand-navy mb-4">
                  {data?.featuredService?.title || "Private Investigations"}
                </h4>
                <p className="text-brand-gray mb-8 max-w-md">
                  {data?.featuredService?.description ||
                    "Our expert private investigators provide discreet and thorough investigations for personal, corporate, and legal matters. With a commitment to confidentiality and professionalism, we uncover the truth to help you make informed decisions."}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 bg-brand-navy text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
                >
                  {data?.featuredService?.buttonText}{" "}
                  <i className="fa-solid fa-arrow-right ml-2"></i>
                </a>
              </div>
              <div className="w-full md:w-1/2 h-48 rounded-2xl overflow-hidden bg-gray-200">
                <div className="relative w-full h-full">
                  <Image
                    src={
                      data?.featuredService?.image
                        ? data.featuredService.image.asset.url
                        : "/images/privateInvestigations.jpeg"
                    }
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
