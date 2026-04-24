import React, { Fragment } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const CompanyOverview = ({ data }) => {
  const displayParagraphs = () => {
    if (!data?.paragraphs || !Array.isArray(data.paragraphs)) return null;

    return data.paragraphs.map((para, index) => (
      <p
        key={index}
        className="text-sm sm:text-base lg:text-lg 
                   text-brand-gray 
                   mb-4 sm:mb-6 
                   leading-relaxed"
      >
        {para}
      </p>
    ));
  };

  const displayHighlights = () => {
    if (!data?.highlights || !Array.isArray(data.highlights)) return null;

    return data.highlights.map((highlight, index) => (
      <Fragment key={index}>
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 
                          rounded-full bg-brand-light 
                          flex items-center justify-center 
                          text-brand-red">
            <i className="fa-solid fa-check text-base sm:text-xl" />
          </div>

          <div>
            <h4 className="font-bold text-brand-navy text-sm sm:text-base">
              {highlight.title}
            </h4>
            <p className="text-xs sm:text-sm text-brand-gray">
              {highlight.subtitle}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px h-8 sm:h-10 lg:h-12 bg-gray-200" />
      </Fragment>
    ));
  };

  return (
    <section
      id="company-overview"
      className="py-12 sm:py-16 lg:py-24 
                 bg-white relative 
                 -mt-6 sm:-mt-10 
                 rounded-t-[24px] sm:rounded-t-[40px] 
                 z-30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 
                        gap-10 sm:gap-12 lg:gap-16 
                        items-center">

          {/* LEFT CONTENT */}
          <div>

            <h2 className="text-xs sm:text-sm 
                           font-bold text-brand-red 
                           tracking-wider uppercase 
                           mb-2 sm:mb-3">
              {data?.tagline || "Company Insight"}
            </h2>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl 
                           font-bold text-brand-navy 
                           mb-4 sm:mb-6">
              {data?.title || "Who We Are"}
            </h3>

            {displayParagraphs()}

            {/* Highlights wrapper becomes responsive-safe */}
            <div className="flex flex-wrap items-start gap-6 sm:gap-8 mt-6">
              {displayHighlights()}
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <div className="absolute -inset-3 sm:-inset-4 
                            bg-brand-red/5 
                            rounded-3xl sm:rounded-4xl 
                            transform rotate-2 sm:rotate-3" />

            <div className="relative 
                            rounded-2xl sm:rounded-3xl 
                            overflow-hidden 
                            shadow-hover 
                            bg-gray-100 
                            h-[240px] sm:h-[320px] lg:h-[400px]">

              <Image
                src={
                  urlFor(data?.image?.asset?.url).url() ||
                  "/images/companyOverview.jpeg"
                }
                alt="professional security guard interacting with a client in a modern corporate lobby"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Badge */}
            <div className="absolute 
                            -bottom-4 sm:-bottom-6 lg:-bottom-8 
                            -left-2 sm:-left-6 lg:-left-8 
                            bg-white 
                            p-4 sm:p-5 lg:p-6 
                            rounded-[16px] sm:rounded-[20px] 
                            shadow-hover 
                            border border-gray-100 
                            flex items-center gap-3 sm:gap-4">

              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 
                              rounded-full bg-brand-navy 
                              flex items-center justify-center 
                              text-white">

                <i className={`fa-solid ${data?.badge?.icon} text-base sm:text-xl lg:text-2xl`} />
              </div>

              <div>
                <div className="text-lg sm:text-xl lg:text-2xl 
                                font-bold text-brand-navy">
                  {data?.badge?.value || 0}
                </div>
                <div className="text-xs sm:text-sm text-brand-gray">
                  {data?.badge?.label || "Years of Excellence"}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;