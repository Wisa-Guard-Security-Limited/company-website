import React from "react";
import Image from "next/image";
import Link from "next/link";

const OurServiceSection = ({ data }) => {
  const displyServices = () => {
    if (!data?.services || data.services.length === 0) {
      return (
        <p className="text-brand-gray col-span-1 md:col-span-2 lg:col-span-3 text-sm sm:text-base">
          No services available at the moment. Please check back later.
        </p>
      );
    }

    return data.services.map((service, index) => (
      <div
        key={index}
        className="group relative overflow-hidden 
                   rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] 
                   bg-brand-light border border-gray-100 
                   p-6 sm:p-8 
                   hover:shadow-hover transition-all duration-300"
      >
        <div className="absolute top-0 right-0 w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 
                        bg-brand-red/5 rounded-bl-[100px] 
                        -z-10 transition-transform group-hover:scale-110" />

        <div className="w-10 h-10 sm:w-12 sm:h-12 
                        rounded-full bg-white shadow-sm 
                        flex items-center justify-center 
                        text-brand-red mb-4 sm:mb-6">
          <i className={`fa-solid ${service.icon} text-lg sm:text-xl`} />
        </div>

        <h4 className="text-lg sm:text-xl lg:text-2xl 
                       font-bold text-brand-navy mb-3 sm:mb-4">
          {service.title}
        </h4>

        <p className="text-sm sm:text-base text-brand-gray mb-6 sm:mb-8">
          {service.description}
        </p>

        <Link
          href={`/service-page/${service.slug?.current}`}
          className="inline-flex items-center 
                     text-sm sm:text-base 
                     text-brand-red font-semibold 
                     hover:text-red-700 transition-colors"
        >
          Learn More <i className="fa-solid fa-chevron-right ml-2 text-xs sm:text-sm" />
        </Link>
      </div>
    ));
  };

  return (
    <section
      id="services"
      className="py-12 sm:py-16 lg:py-24 bg-white"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between 
                        mb-10 sm:mb-12 lg:mb-16 gap-6">

          <div className="max-w-2xl">
            <h2 className="text-xs sm:text-sm font-bold text-brand-red 
                           tracking-wider uppercase mb-2 sm:mb-3">
              {data?.tagline || "Our Services"}
            </h2>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl 
                           font-bold text-brand-navy">
              {data?.title || "Comprehensive Security Solutions for Every Need"}
            </h3>
          </div>

          <button className="px-6 sm:px-8 
                             py-3 sm:py-4 
                             bg-brand-light text-brand-navy 
                             text-sm sm:text-base 
                             font-semibold rounded-full 
                             hover:bg-gray-200 transition-colors 
                             flex items-center gap-2 shrink-0">
            {data?.buttonText} <i className="fa-solid fa-arrow-right" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                        gap-4 sm:gap-6 lg:gap-8">

          {displyServices()}

          {/* Featured Service */}
          {data?.featuredService && (
            <div className="group relative overflow-hidden 
                            rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] 
                            bg-brand-light border border-gray-100 
                            p-6 sm:p-8 
                            hover:shadow-hover transition-all duration-300 
                            md:col-span-2 lg:col-span-2">

              <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center">

                <div className="flex-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 
                                  rounded-full bg-white shadow-sm 
                                  flex items-center justify-center 
                                  text-brand-red mb-4 sm:mb-6">
                    <i className={`fa-solid ${data?.featuredService?.icon} text-lg sm:text-xl`} />
                  </div>

                  <h4 className="text-lg sm:text-xl lg:text-2xl 
                                 font-bold text-brand-navy mb-3 sm:mb-4">
                    {data?.featuredService?.title || "Private Investigations"}
                  </h4>

                  <p className="text-sm sm:text-base text-brand-gray mb-6 sm:mb-8 max-w-md">
                    {data?.featuredService?.description ||
                      "Our expert private investigators provide discreet and thorough investigations for personal, corporate, and legal matters."}
                  </p>

                  <Link
                    href={`/service-page/${data?.featuredService?.slug?.current}`}
                    className="inline-flex items-center 
                               px-6 sm:px-8 
                               py-3 sm:py-4 
                               bg-brand-navy text-white 
                               text-sm sm:text-base 
                               rounded-full font-semibold 
                               hover:bg-gray-800 transition-colors"
                  >
                    {data?.featuredService?.buttonText}
                    <i className="fa-solid fa-arrow-right ml-2" />
                  </Link>
                </div>

                <div className="w-full md:w-1/2 h-40 sm:h-48 rounded-2xl overflow-hidden bg-gray-200">
                  <div className="relative w-full h-full">
                    <Image
                      src={
                        data?.image?.asset?.url ||
                        "/images/privateInvestigations.jpeg"
                      }
                      alt="professional private investigator analyzing documents"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default OurServiceSection;